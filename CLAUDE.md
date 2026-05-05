# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Doctor-facing single-page web app ("PetraCare | EHR Lite") built on the iCure Cardinal SDK. The repo was recently migrated from CRA to Vite + React 19 + Redux Toolkit 2 + Antd 6 + Cardinal SDK 2.4.4 (commit `7e1c300`).

For the full architectural tour (auth state machine, recovery-key flow, encryption model, the canonical "how to add a new Cardinal-backed feature"), read [`ARCHITECTURE.md`](./ARCHITECTURE.md). This file is the short, Claude-Code-facing summary of the same material — when in doubt or when a section here feels thin, jump to `ARCHITECTURE.md`.

## Toolchain & commands

- Node `>=24` (see `.nvmrc`), Yarn 4 (Berry, declared via `packageManager` in `package.json`).
- Scripts: `yarn dev`, `yarn build` (Vite, outputs to `build/`), `yarn preview`, `yarn lint` (flat-config ESLint at `eslint.config.js`), `yarn test` (Vitest + jsdom; setup file `src/test/setup.ts`; `passWithNoTests: true`, no tests exist yet).
- Run a single test file: `yarn test path/to/file.test.tsx`. Run by name pattern: `yarn test -t "name"`.

## Env vars (Vite, not CRA)

Copy `.env.default` → `.env` and fill in. **Variables are `VITE_*`-prefixed** (the README's `REACT_APP_*` names are obsolete):

- `VITE_EXTERNAL_SERVICES_SPEC_ID` → `SPEC_ID`
- `VITE_EMAIL_AUTHENTICATION_PROCESS_ID` → `PROCESS_ID`
- `VITE_PARENT_ORGANISATION_ID`

Read once in `src/constants/index.ts`. Backend URLs (`NIGHTLY_ICURE_CLOUD_URL`, `MSG_GW_URL`) are hardcoded there too.

## Code style

Prettier-enforced: no semicolons, single quotes, trailing commas, `printWidth: 180`, 2-space indent. ESLint mirrors these (`semi: never`, `max-len: 180`). Several pre-existing rules (`no-empty`, `no-redeclare`, `@eslint-react/rules-of-hooks`, …) are intentionally downgraded to `warn` in `eslint.config.js` so the migration PR didn't break CI — don't promote them to `error` without cleaning the warnings first.

## Architecture

### SDK lifecycle — the key non-obvious bit

The `CardinalSdk` instance is **not** stored in Redux. It lives in an in-memory `apiCache` map keyed by `` `${user.groupId}/${user.id}` `` inside `src/core/services/auth.api.ts`. Redux only persists the `User` (via the `cardinalApi` slice). Consequence:

- After a hard reload, the cache is empty even though `redux-persist` may rehydrate `savedCredentials` (the `app` slice). The login thunk re-initializes the SDK and repopulates the cache.
- All RTK Query endpoints fetch the SDK with `await cardinalApi(getState)` and bail gracefully when it's missing — that's why every endpoint funnels through the `guard([...inputs], async ([...]) => …)` helper (also in `auth.api.ts`), which returns `FetchBaseQueryError` on throw and a fallback when any guarded input is falsy. **Use `guard` for new endpoints**; don't roll your own try/catch.

### Auth flow (`src/core/services/auth.api.ts`)

Thunks: `startAuthentication` (kicks off email-based process via `CardinalSdk.initializeWithProcess`, requires a Kerberus captcha solution) → user enters token → `completeAuthentication` → SDK cached + `User` stored. `login` re-initializes from saved username/token credentials. `logout` dispatches `revertAll` which resets the `app` slice via the reducer in `src/core/app/index.ts`.

`PetraCareCryptoStrategies` (same file) drives the key-recovery UX through a small **external-store bridge** in `src/core/services/keyRecoveryBridge.ts` (no Redux): `recoverAndVerifySelfHierarchyKeys` calls `requestKeyRecovery({ reasons }): Promise<KeyRecoveryOutcome>` and awaits the result; `ModalRecoveryKeyRequest` reads the current request via `useKeyRecoveryRequest()` (a `useSyncExternalStore` hook) and calls `resolveCurrentRequest({ kind: 'recovered', recoveryKeys } | { kind: 'cancel' })`. New keys minted on signup come back through Redux (`setNewlyCreatedRecoveryKey`), surfaced by `ModalRecoveryKey`. Both modals are mounted in **both** layouts (`Layout` + `AuthenticatedLayout`) so they're available regardless of which side of the auth boundary the SDK calls back from. **`cryptoStrategies: new PetraCareCryptoStrategies()` must be passed to `CardinalSdk.initialize` in the `login` thunk** — without it the SDK uses its default strategy and the recovery prompt never opens on a key-missing device.

### Store shape (`src/core/store.ts`, `src/core/reducer.ts`)

`combineReducers` of: `app` (custom slice, persisted with localForage; only `app` is whitelisted), `cardinalApi` (auth/session state), and seven RTK Query API slices in `src/core/api/`: `contactApi`, `deviceApi`, `entityTemplateApi`, `healthElementApi`, `patientApi`, `practitionerApi`, `userApi`. Each slice = one Cardinal SDK resource. Middleware in `store.ts` must include every API slice's `.middleware`.

`serializableCheck` and `immutableCheck` are disabled because Cardinal SDK objects (e.g. `DecryptedPatient`, `User`) are class instances.

### Routing & layouts

`src/navigation/Router.tsx` declares three routes (`/`, `/register`, `/home`). `AuthenticatedLayout` redirects to `/` whenever `cardinalApi.online` flips false — that flag is the single source of truth for "logged in".

### Patient tagging convention

Custom patient tags use `CUSTOM_TAG_TYPE = 'PETRA_CARE'` (see `src/constants/index.ts`). Built-in workflow tags live in `PatientsTagsEnum` (`src/helpers/types.ts`); the fuzzy-name search in `patientApi.filterPatientsByFuzzyNameForDataOwner` unions name matches with tag matches drawn from `[...allPatientsTagsEnum, ...customTags]` — preserve that pattern when extending search.

### Styling

Antd 6 + Less. Vite is configured with `less.javascriptEnabled: true` (`vite.config.ts`) so Antd's Less variables work. Theme overrides live in `src/style/antd/antdTheme.ts` and are applied via a top-level `<ConfigProvider>` in `src/App.tsx`. Generated `.css`/`.css.map` files under `src/` are git-ignored.

## CI / deploy

`ci/cloudbuild.yaml` builds the Docker image (`Dockerfile`, Node 24 alpine + cairo/jpeg/pango build deps for canvas-style native modules), runs `yarn build`, and rsyncs `build/` to the `_DEPLOY` GCS bucket. `VITE_*` vars are passed in as `--build-arg`s.