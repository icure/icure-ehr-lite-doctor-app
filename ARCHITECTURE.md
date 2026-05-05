# ARCHITECTURE.md

A guide for developers picking up this repo. Explains *why* things are shaped the way they are, *what already works*, and *what's still rough* on top of the original template.

For Claude Code-facing project memory, see [`CLAUDE.md`](./CLAUDE.md). For end-user / new-developer onboarding, see [`README.md`](./README.md). This file complements both — it doesn't repeat them.

## 1. What this repo is

A **Vite + React + TypeScript** doctor-facing SPA backed by the [Cardinal SDK](https://docs.icure.com/). Practitioners sign up via email + one-time-code, manage patients, record consultations, and issue prescriptions (Belgian e-prescription via the FHC SDK).

The repo started life as the [`cardinal-sdk-react-js-template`](https://github.com/icure/cardinal-sdk-react-js-template) and was migrated to Vite + React 19 + RTK 2 + Antd 6 + Cardinal SDK 2.4.4 (commit `7e1c300`). When in doubt, prefer this file and `package.json` over older notes.

## 2. Project layout

```
.
├── index.html              # Vite entry point
├── vite.config.ts          # Vite + Vitest config; LESS preprocessor; output → build/
├── eslint.config.js        # ESLint 10 flat config
├── tsconfig.json
├── .env.default            # VITE_* env var template
├── public/                 # static assets copied verbatim into the build
└── src/
    ├── App.tsx
    ├── index.tsx                       # Redux Provider + Router mount
    ├── core/
    │   ├── services/auth.api.ts        # apiCache, auth thunks, PetraCareCryptoStrategies
    │   ├── api/                        # one RTK Query slice per Cardinal resource
    │   │   ├── patientApi.ts           # patient CRUD, fuzzy search, share
    │   │   ├── practitionerApi.ts      # healthcare-party (current user)
    │   │   ├── userApi.ts
    │   │   ├── deviceApi.ts
    │   │   ├── contactApi.ts           # consultation contacts + services
    │   │   ├── healthElementApi.ts     # diagnoses + chronic conditions
    │   │   ├── entityTemplateApi.ts
    │   │   └── utils.ts                # loadFromIterator, tag helpers, FHC↔Cardinal mappers
    │   ├── app/index.ts                # persisted "savedCredentials" slice
    │   ├── store.ts
    │   ├── reducer.ts
    │   └── hooks.ts                    # typed useAppDispatch/useAppSelector
    ├── layout/                         # Public + Authenticated layouts; route gating;
    │                                   #  recovery-key modals mounted here
    ├── navigation/Router.tsx
    ├── pages/                          # LoginPage, RegisterPage, DashboardPage
    ├── components/
    │   ├── authentication/             # KerberusWidget, LoginForm, SignupForm,
    │   │                               #  ModalRecoveryKey, ModalRecoveryKeyRequest
    │   ├── common/                     # CustomModal, Header, SpinLoader, ...
    │   ├── patient-elements/           # patient list, modals (create/edit/share/import,
    │   │                               #  consultation, prescription, profile)
    │   └── practitioner-elements/      # ModalManageAccountForm
    ├── constants/index.ts              # SPEC_ID, PROCESS_ID, MSG_GW_URL, CUSTOM_TAG_TYPE
    ├── helpers/                        # date formatters, file→base64, types, breakpoints
    └── style/                          # Antd theme + LESS utilities
```

## 3. Big-picture architecture

```
React UI (Antd 6 + Less)
    │  dispatch / useSelector
    ▼
Redux store (Redux Toolkit)
    │
    ├── slice "app"            ── persisted via redux-persist + localForage
    │     └── savedCredentials = { login, token, tokenTimestamp }
    │
    ├── slice "cardinalApi"    ── NOT persisted; non-serializable; auth state machine
    │     └── thunks: startAuthentication → completeAuthentication
    │              login / logout
    │              recoveryKeyRequest, newlyCreatedRecoveryKey
    │
    └── RTK Query slices       ── one per Cardinal resource
          patientApi, practitionerApi, userApi, deviceApi,
          contactApi, healthElementApi, entityTemplateApi
            └── queryFn → cardinalApi(getState) → SDK call
                              │
                              ▼
                    module-level apiCache
                    Map<groupId/userId, CardinalSdk>
                              │
                              ▼
                    @icure/cardinal-sdk
                              │
                              └── Cardinal Cloud
                                  nightly.icure.cloud + msg-gw.icure.cloud
```

The single most important thing to internalise: **the SDK is non-serializable, so it lives in a module-level `apiCache` keyed by `${groupId}/${userId}` and is never put in Redux.** Redux only holds serializable identifiers (and the `User` class instance); any code that needs the live SDK calls `cardinalApi(getState)` to look it up. This is also why the store is configured with `serializableCheck: false, immutableCheck: false` in [`src/core/store.ts`](./src/core/store.ts) — the `authProcess` field on the auth slice holds an SDK handle for the brief window between starting and completing email-code authentication, and Cardinal model objects (`DecryptedPatient`, `User`, …) are class instances.

## 4. Authentication state machine

Two flows. Both end with a fully-initialised `CardinalSdk` cached in `apiCache` and `cardinalApi.online === true`.

### 4.1 Signup / first login (process-based)

1. The user enters their email (and first/last name on signup). On form mount, `KerberusWidget` fetches a `Challenge` from `${MSG_GW_URL}/${SPEC_ID}/challenge` and resolves it client-side, producing a `Solution` (a small proof-of-work).
2. `startAuthentication` thunk fires:
   ```
   CardinalSdk.initializeWithProcess(
     undefined, NIGHTLY_ICURE_CLOUD_URL, MSG_GW_URL, SPEC_ID, PROCESS_ID,
     AuthenticationProcessTelecomType.Email, email,
     new CaptchaOptions.Kerberus.Computed({ solution }),
     StorageFacade.usingBrowserLocalStorage(),
     { firstName, lastName },
     { useHierarchicalDataOwners: false, cryptoStrategies: new PetraCareCryptoStrategies() },
   )
   ```
   It returns an `AuthenticationWithProcessStep` that the slice stores as `cardinalApi.authProcess`. The user receives a six-digit code by email.
3. The user types the code. `completeAuthentication` thunk:
   - calls `authProcess.completeAuthentication(shortToken)` → fully-initialised `CardinalSdk`.
   - On a brand-new account, `PetraCareCryptoStrategies.generateNewKeyForDataOwner` returns `true`, the SDK creates an RSA keypair, then `notifyNewKeyCreated` is invoked: it generates a recovery key via `apis.recovery.createRecoveryInfoForAvailableKeyPairs({ includeParentsKeys: true, ... })`, base32-encodes it as `xxxx-xxxx-…`, and dispatches `setNewlyCreatedRecoveryKey({ recoveryKey })` so `ModalRecoveryKey` shows it.
   - obtains a long-lived token via `api.user.getToken(user.id, 'rememberMe')` and persists `{ login, token, tokenTimestamp }` to `app.savedCredentials`.
   - caches the SDK in `apiCache` and flips `online: true`.

### 4.2 Returning login (credentials-based)

1. On mount, the public `Layout` reads `app.savedCredentials` from the persisted store and dispatches `setEmail` → `setToken` → `login()`.
2. `login` thunk:
   ```
   CardinalSdk.initialize(
     undefined, NIGHTLY_ICURE_CLOUD_URL,
     new AuthenticationMethod.UsingCredentials.UsernamePassword(email, longLivedToken),
     StorageFacade.usingBrowserLocalStorage(),
     { useHierarchicalDataOwners: false, cryptoStrategies: new PetraCareCryptoStrategies() },
   )
   ```
   `cryptoStrategies` **must** be passed here (not just on signup) — without it the SDK falls back to the default strategy and `recoverAndVerifySelfHierarchyKeys` is never invoked, so the recovery prompt never opens on a device that's missing keys.
3. If the device is missing some encryption keys, `PetraCareCryptoStrategies.recoverAndVerifySelfHierarchyKeys` calls `requestKeyRecovery({ reasons })` (see [`src/core/services/keyRecoveryBridge.ts`](./src/core/services/keyRecoveryBridge.ts)) and awaits the user's response. The submitted base32 strings are normalized (dashes stripped, `0/1/8 → O/I/B`), each tried via `keyPairRecoverer.recoverWithRecoveryKey`, and successes aggregated across all data owners (self + parents).

## 5. Recovery-key management

Recovery keys are the only mechanism a user has to migrate their encrypted data to a new device. There are three flows:

| Phase          | Trigger                                                          | Component                                                                                           | What it does                                                                                                                                                                                                                                                                          |
|----------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reveal new key | First-time signup; SDK created an RSA keypair                    | [`ModalRecoveryKey`](./src/components/authentication/ModalRecoveryKey/index.tsx)                    | Shows the freshly-generated recovery key once. Lets the user copy or download as JSON. Dismissal calls `setNewlyCreatedRecoveryKey({ recoveryKey: undefined })`. State lives in Redux (`cardinalApi.newlyCreatedRecoveryKey`).                                                        |
| Prompt for key | Returning login from a device that doesn't have the keys cached  | [`ModalRecoveryKeyRequest`](./src/components/authentication/ModalRecoveryKeyRequest/index.tsx)      | TextArea that accepts one or more recovery keys (one per line — supports parent-org keys). Subscribes to the bridge via `useKeyRecoveryRequest()`; submit calls `resolveCurrentRequest({ kind: 'recovered', recoveryKeys })`, skip calls `resolveCurrentRequest({ kind: 'cancel' })`. |
| Self-service   | Practitioner clicks "Access recovery key" in the Header dropdown | [`ModalAccessRecoveryKey`](./src/components/practitioner-elements/ModalAccessRecoveryKey/index.tsx) | Generates a fresh recovery key on demand. Scope picker (self+parents vs parents-only) is shown only when the current healthcare party has a parent — otherwise the key is generated immediately.                                                                                      |

Both auth-flow modals are mounted in **both** layouts (`Layout` and `AuthenticatedLayout`), not on individual pages, because:
- `ModalRecoveryKeyRequest` may need to open during `login()`, which runs from the public `Layout`.
- `ModalRecoveryKey` opens after `completeAuthentication.fulfilled`, which causes a navigation into `AuthenticatedLayout`.

### Bridge between the SDK callback and the prompt UI

The "prompt for key" flow uses an external module-level store rather than Redux — see [`src/core/services/keyRecoveryBridge.ts`](./src/core/services/keyRecoveryBridge.ts). It exposes:

```ts
requestKeyRecovery({ reasons }): Promise<KeyRecoveryOutcome>      // SDK side
resolveCurrentRequest({ kind: 'recovered', recoveryKeys } | { kind: 'cancel' })  // UI side
useKeyRecoveryRequest(): KeyRecoveryRequest | undefined           // host hook (useSyncExternalStore)
```

`PetraCareCryptoStrategies.recoverAndVerifySelfHierarchyKeys` calls `requestKeyRecovery` and awaits the resulting promise; `ModalRecoveryKeyRequest` reads the current request via `useKeyRecoveryRequest` and calls `resolveCurrentRequest` to settle it. This keeps non-serializable SDK handles out of Redux and avoids the dispatch-then-`store.subscribe` race the older Redux-based version suffered from.

**Without a saved recovery key, a user logging in from a new device cannot decrypt their old data.** `ModalRecoveryKey` makes saving the key a deliberate, visible step (close requires a `<Popconfirm>`). There is intentionally no automatic email-the-recovery-key escape hatch — that would defeat end-to-end encryption.

## 6. Why `redux-persist` whitelists only `app`

The `cardinalApi` slice contains:
- `authProcess`: a non-serializable `AuthenticationWithProcessStep` (live SDK handle).
- `user`: a `User` class instance (non-serializable).
- ephemeral UI state like `waitingForToken`, `newlyCreatedRecoveryKey`.

Persisting any of that would corrupt rehydration and could leak privileged objects to disk. Only `app.savedCredentials` (login id + long-lived token + timestamp) is persisted. On reload everything else starts empty and is rebuilt by the `login` thunk.

Configured in [`src/core/app/index.ts`](./src/core/app/index.ts) and [`src/core/reducer.ts`](./src/core/reducer.ts).

## 7. Routing and gating

Two layouts in [`src/layout/`](./src/layout/) bracket each route group:

- `Layout` (public) — auto-attempts silent login from `app.savedCredentials`; bounces to `/home` once `online`.
- `AuthenticatedLayout` — bounces to `/` when `online` is false.

Both layouts also mount `<ModalRecoveryKey />` and `<ModalRecoveryKeyRequest />`, so those overlays are reachable across every route without each page having to import them.

New routes go in [`src/navigation/Router.tsx`](./src/navigation/Router.tsx) and get wrapped in the appropriate layout. **Don't gate per-page.**

## 8. Encryption model (CryptoStrategies, why it matters)

Cardinal stores patient data end-to-end encrypted with each data owner's RSA keypair. Keys live in browser local storage via `StorageFacade.usingBrowserLocalStorage()`. The SDK delegates three callbacks to user code; `PetraCareCryptoStrategies` (in [`src/core/services/auth.api.ts`](./src/core/services/auth.api.ts)) implements them:

| Callback                                                             | What this app does                                                                                                                                                                                                                                                        |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `generateNewKeyForDataOwner(self, primitives)`                       | Returns `true` only when the data owner has no public keys (first-time signup), otherwise `false`. The SDK then mints a new keypair.                                                                                                                                      |
| `notifyNewKeyCreated(apis, key, primitives)`                         | Generates a `RecoveryDataKey` with `includeParentsKeys: true` (so the practitioner's own and parent organisation's keys are recoverable from the same string), base32-formats it as `xxxx-xxxx-…`, and dispatches `setNewlyCreatedRecoveryKey`.                           |
| `recoverAndVerifySelfHierarchyKeys(keysData, primitives, recoverer)` | Computes how many keys are unavailable, calls `requestKeyRecovery({ reasons })` on the bridge, awaits the user's outcome, then tries each entered key against `recoverer.recoverWithRecoveryKey`. Aggregates successes across all `dataOwnerId`s into `RecoveredKeyData`. |

### Parent healthcareparty support (`useHierarchicalDataOwners`)

The Cardinal SDK distinguishes flat from hierarchical data ownership, and the choice is wired through a single boolean passed at SDK init in [`src/core/services/auth.api.ts`](./src/core/services/auth.api.ts):

- `useHierarchicalDataOwners: false` — **the current setting.** Every practitioner is a standalone data owner. Encryption uses only their own keys; the parent HCP is an organisational/admin link, not part of the encryption tree. The SDK passes a single-entry `keysData` to `recoverAndVerifySelfHierarchyKeys` (just the user themselves).
- `useHierarchicalDataOwners: true` — the practitioner *inherits* encryption material from their parent HCP. Patients shared with the practitioner are also accessible to the parent (and the parent's ancestors), and `recoverAndVerifySelfHierarchyKeys` may receive multiple `keysData` entries (self + parent + grandparent…) that all need their RSA keys recovered together.

The plumbing for the hierarchical mode is already in place — only the flag itself is off:

- `VITE_PARENT_ORGANISATION_ID` attaches every new practitioner to a parent HCP at signup.
- `notifyNewKeyCreated` calls `createRecoveryInfoForAvailableKeyPairs({ includeParentsKeys: true, ... })`, so the recovery key already bundles the practitioner's keys *and* the parent's (and ancestors').
- `ModalRecoveryKeyRequest` accepts multiple keys (one per line), so a user logging in on a fresh device can paste self- and parent-recovery keys in one go.
- `recoverAndVerifySelfHierarchyKeys` aggregates recovered keys across all `dataOwnerId`s and `buildRecoveryResult` walks the full `keysData` array.
- `ModalAccessRecoveryKey` exposes a parent-only scope option (via `createRecoveryInfoForAvailableParentKeyPairs`), used to mint a recovery key for the parent independently.

To **activate** hierarchical mode, flip `useHierarchicalDataOwners: true` in **both** SDK init calls in `auth.api.ts`:

1. `CardinalSdk.initializeWithProcess(...)` inside `startAuthentication` (signup).
2. `CardinalSdk.initialize(...)` inside `login` (returning login).

Before flipping it, verify:

- The parent HCP referenced by `VITE_PARENT_ORGANISATION_ID` exists in Cockpit and has its own keypair generated. Without that the SDK has nothing to inherit from and login will surface failures during `generateNewKeyForDataOwner` / `recoverAndVerifySelfHierarchyKeys`.
- Your sharing model — with hierarchical mode on, the parent HCP can read every patient created by its children. That's usually the intent for a clinic-with-staff setup, but not for fully isolated practitioners.
- Existing on-device key caches (in `localStorage`) — switching the flag changes the data-owner shape the SDK looks for. A clean re-login on each device may be required; users will hit `ModalRecoveryKeyRequest` if any parent keys are missing locally.

## 9. Captcha (Kerberus, not FriendlyCaptcha)

The Cardinal 2.x SDK accepts `CaptchaOptions.Kerberus.Computed({ solution })`. The browser:
1. fetches a `Challenge` from `${MSG_GW_URL}/${SPEC_ID}/challenge`,
2. proof-of-works it client-side,
3. passes the resulting `Solution` to `CardinalSdk.initializeWithProcess(...)`.

The `KerberusWidget` component encapsulates fetch + resolve + progress reporting and is mounted inside both `LoginForm` and `SignupForm`. It auto-resolves on mount and renders an Antd `<Progress>` while computing.

The previous `friendly-challenge` widget and the `FRIENDLY_CAPTCHA_SITE_KEY` env var are gone — Kerberus is server-issued and needs no extra site key.

## 10. SDK lifecycle — the key non-obvious bit

**The `CardinalSdk` instance is not stored in Redux.** It lives in an in-memory `apiCache` map keyed by `` `${user.groupId}/${user.id}` `` inside [`src/core/services/auth.api.ts`](./src/core/services/auth.api.ts). Redux only persists the `User` (via the `cardinalApi` slice). Consequence:

- After a hard reload, the cache is empty even though `redux-persist` rehydrates `savedCredentials` (the `app` slice). The `login` thunk re-initializes the SDK and repopulates the cache.
- All RTK Query endpoints fetch the SDK with `await cardinalApi(getState)` and bail gracefully when it's missing — that's why every endpoint funnels through the `guard([...inputs], async ([...]) => …)` helper (also in `auth.api.ts`), which returns a `FetchBaseQueryError` on throw and a fallback when any guarded input is falsy. **Use `guard` for new endpoints**; don't roll your own try/catch.

## 11. Where to add a new Cardinal-backed feature

The pattern to copy is in [`src/core/api/practitionerApi.ts`](./src/core/api/practitionerApi.ts):

```ts
export const practitionerApiRtk = createApi({
  reducerPath: 'practitionerApi',
  tagTypes: ['Practitioner'],
  baseQuery: fetchBaseQuery({ baseUrl: '' }), // unused; we use queryFn
  endpoints: (builder) => ({
    getPractitioner: builder.query<HealthcareParty | undefined, string>({
      async queryFn(id, { getState }) {
        const practitionerApi = (await cardinalApi(getState))?.healthcareParty
        return guard([practitionerApi], async ([practitionerApi]) => {
          const practitioner = await practitionerApi.getHealthcareParty(id)
          if (!practitioner) throw new Error('Practitioner does not exist')
          return practitioner
        })
      },
      providesTags: (res) => (res ? [{ type: 'Practitioner', id: res.id }] : []),
    }),
  }),
})
```

To add a new domain API:
1. Create a new file under [`src/core/api/`](./src/core/api/).
2. Pick the right SDK namespace (`patient`, `healthElement`, `contact`, `document`, `message`, `agenda`, …) on `CardinalSdk` (= `CardinalApis`).
3. Use `queryFn` (not `query`) — wrap each call in `guard(...)` to short-circuit on missing inputs and convert thrown errors to `FetchBaseQueryError`.
4. **For data filtering, prefer the `*Filters` factories** (`PatientFilters.byPatientsForDataOwner`, `ContactFilters.byPatientsForDataOwner`, `FormFilters.byPatientsOpeningDateForDataOwner`, …) feeding `filter*By(filter)` / `match*By(filter)` — the legacy `findByHcParty…` helpers were removed in 2.4.4.
5. Register the new `reducerPath` in [`src/core/reducer.ts`](./src/core/reducer.ts) (`combineReducers`) **and** the slice's `.middleware` in [`src/core/store.ts`](./src/core/store.ts). Forgetting the middleware is the most common copy-paste mistake.
6. UI consumes via the auto-generated `useGet…Query` / `useUpdate…Mutation` hooks.

Never re-instantiate `CardinalSdk` outside `auth.api.ts`. Always go through `cardinalApi(getState)` → the cached instance.

## 12. Patient tagging convention

Custom patient tags use `CUSTOM_TAG_TYPE = 'PETRA_CARE'` (see [`src/constants/index.ts`](./src/constants/index.ts)). Built-in workflow tags live in `PatientsTagsEnum` ([`src/helpers/types.ts`](./src/helpers/types.ts)); the fuzzy-name search in `patientApi.filterPatientsByFuzzyNameForDataOwner` unions name matches with tag matches drawn from `[...allPatientsTagsEnum, ...customTags]`. Preserve that pattern when extending search.

## 13. Implemented vs. to-build

### Already implemented

- SDK init for both signup and credentials flows.
- Persisted long-lived token (`rememberMe`) replayed on reload.
- Full Kerberus captcha integration with progress UI.
- Key generation when a data owner has none, with `ModalRecoveryKey` reveal.
- Multi-key recovery prompt (`ModalRecoveryKeyRequest`) on returning login when keys are missing — supports the practitioner's own key + parent-organisation keys via `includeParentsKeys: true`.
- Public/authenticated routing via two `<Outlet>`-based layouts.
- Patient CRUD + share + import (XLSX) + fuzzy search.
- Consultation contacts (services + diagnosis sub-contacts).
- Antd 6 theming ([`src/style/antd/antdTheme.ts`](./src/style/antd/antdTheme.ts)); LESS compiled natively by Vite at dev/build time.

### Still to build for a real product

- **SMS authentication.** Only the email path is wired.
- **Logout UX.** The `logout` thunk exists; the Header has a button.
- **Error / notification surface.** Errors are mostly `console.error`'d. Wire Antd's `notification` API for user-visible feedback.
- **Token refresh / expiry UX.** The long-lived token expires; nothing reminds the user.
- **Account self-service.** No flows for changing email, rotating recovery key, or revoking sessions.
- **Test setup.** Vitest is wired but no real tests exist (`passWithNoTests: true`).

## 14. Conventions

- **Code style:** ESLint + Prettier from `eslint.config.js` and `.prettierrc`. No semicolons, single quotes, trailing commas, `printWidth: 180`, 2-space indent.
- **Component layout:** `Component/index.tsx` with a sibling `index.less`. Vite compiles LESS natively — no separate watcher and no committed `.css` files.
- **Modals:** every dialog routes through [`CustomModal`](./src/components/common/CustomModal/index.tsx). It owns the Antd 6-compatible `styles.container` slot, the responsive width helper, and the body-scroll wiring. **Do not call `<Modal>` directly.**
- **Typed Redux:** import `useAppDispatch` / `useAppSelector` from [`core/hooks.ts`](./src/core/hooks.ts), never the raw `react-redux` versions.
- **SDK access:** always go through `cardinalApi(getState)` → `apiCache`. Never re-instantiate `CardinalSdk` outside `auth.api.ts`.
- **Adding new state:** if it's serializable and survives reload (e.g. user preferences), put it in the `app` slice and add to the `whitelist` in [`core/app/index.ts`](./src/core/app/index.ts). Otherwise add it to the `cardinalApi` slice.

## 15. External docs and reference repos

- Cardinal SDK docs: https://docs.icure.com/
- Cockpit (admin portal where you obtain `specId`, `processId`, etc.): https://cockpit.icure.cloud/
- Minimal reference template this app evolved from: https://github.com/icure/cardinal-sdk-react-js-template (or `../cardinal-sdk-react-js-template` locally).
- Cardinal SDK on npm: https://www.npmjs.com/package/@icure/cardinal-sdk
