![Cardinal logo](./cardinal_logo.svg)

# PetraCare | EHR Lite — Doctor App

A doctor-facing single-page web app built on the [Cardinal SDK](https://docs.icure.com/). Practitioners sign up via email + one-time-code, manage their patient list, record consultations, and issue prescriptions. End-to-end encryption is mediated by the Cardinal SDK; this app never sees patient data in the clear unless the practitioner has the correct keys on the device.

For the architectural tour (auth state machine, encryption model, where to add new features), see [`ARCHITECTURE.md`](./ARCHITECTURE.md). For Claude Code-facing project memory, see [`CLAUDE.md`](./CLAUDE.md).

## 1. Configure your environment

Copy `.env.default` to `.env` and fill in the values:

```
cp .env.default .env
```

- **VITE_EXTERNAL_SERVICES_SPEC_ID** — identifier the message gateway uses to dispatch the one-time-code email.
- **VITE_EMAIL_AUTHENTICATION_PROCESS_ID** — identifies which authentication process template to run.
- **VITE_PARENT_ORGANISATION_ID** — the parent healthcare-party id new practitioners are attached to.

You obtain all of these from the [Cockpit Portal](https://cockpit.icure.cloud/). The [Cardinal Quick Start](https://docs.icure.com/how-to/index) walks you through it.

> **Without these values, authentication will not complete.** The app will load but you will not be able to log in or register.

The Cardinal Cloud and message-gateway URLs are hard-coded to the iCure nightly cluster in [`src/constants/index.ts`](./src/constants/index.ts) (`NIGHTLY_ICURE_CLOUD_URL`, `MSG_GW_URL`). Adjust there if you need a different environment.

### Parent healthcareparty support

`VITE_PARENT_ORGANISATION_ID` attaches every new practitioner to a parent healthcare party at signup, and the recovery key generated on first login already bundles the practitioner's keys *and* the parent's (`includeParentsKeys: true`). **The SDK's hierarchical-encryption mode itself is currently disabled** (`useHierarchicalDataOwners: false` in [`src/core/services/auth.api.ts`](./src/core/services/auth.api.ts)) — meaning the parent HCP is treated as an admin link, not part of the encryption tree. Flip the flag to `true` in both `CardinalSdk.initializeWithProcess(...)` (signup) and `CardinalSdk.initialize(...)` (returning login) to let the parent HCP read data its children create and to let shared encryption material flow up the hierarchy. Confirm in Cockpit that the referenced parent HCP exists and has its own keypair before flipping it. See [`ARCHITECTURE.md`](./ARCHITECTURE.md) §8 for the full picture (sharing implications, multi-key recovery, prerequisites).

## 2. Run the app

```
yarn install
yarn dev
```

The dev server starts at <http://localhost:5173>. Vite handles HMR and Less compilation natively — edit a `.less` file and it hot-reloads.

| Command        | What it does                                               |
|----------------|------------------------------------------------------------|
| `yarn dev`     | Run the Vite dev server with HMR.                          |
| `yarn build`   | Produce an optimized production bundle in `build/`.        |
| `yarn preview` | Serve the built bundle locally (smoke-test before deploy). |
| `yarn lint`    | Run ESLint over the project.                               |
| `yarn test`    | Run the Vitest suite.                                      |

Run a single test file: `yarn test path/to/file.test.tsx`. By name pattern: `yarn test -t "name"`.

## 3. Requirements

- [Node.js](https://nodejs.org/en) `>=24` (see `.nvmrc`).
- [Yarn](https://yarnpkg.com/getting-started/install) (the project pins `yarn@4.0.1` via `packageManager`).

## 4. What you get

- **Authentication** — email + one-time-code signup/login via `CardinalSdk.initializeWithProcess` and `CardinalSdk.initialize`. See [`src/core/services/auth.api.ts`](./src/core/services/auth.api.ts).
- **Persisted "remember me"** — long-lived token stored in IndexedDB via `redux-persist` + `localForage`, replayed automatically on reload through [`src/layout/Layout`](./src/layout/Layout/index.tsx).
- **Captcha integration** — Kerberus proof-of-work, encapsulated in [`src/components/authentication/KerberusWidget`](./src/components/authentication/KerberusWidget).
- **End-to-end encryption plumbing** — `PetraCareCryptoStrategies` generates an RSA keypair on first signup, surfaces the resulting recovery key via [`ModalRecoveryKey`](./src/components/authentication/ModalRecoveryKey/index.tsx), and prompts for it on returning login through [`ModalRecoveryKeyRequest`](./src/components/authentication/ModalRecoveryKeyRequest/index.tsx). Both modals are mounted at the layout level so they're available on every route.
- **Domain features** — patient management (create/edit/share/delete with encrypted forms+contacts), consultation forms, prescription forms (with FHC-be integration for Belgian e-prescribing), practitioner profile management. See [`src/core/api/`](./src/core/api/) for the RTK Query slices.
- **Routing & gating** — public/authenticated layouts in [`src/layout/`](./src/layout/) bracket route groups; the only authenticated page is `/home` ([`DashboardPage`](./src/pages/DashboardPage/index.tsx)).

## 5. Stack

- [Vite](https://vitejs.dev/) for dev server and bundling
- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for state and SDK-backed queries
- [redux-persist](https://github.com/rt2zz/redux-persist) + [localForage](https://github.com/localForage/localForage) for the credential persistence layer
- [Ant Design 6](https://ant.design/) for UI
- [React Router 7](https://reactrouter.com/) for routing
- [Less](https://lesscss.org/), compiled by Vite natively
- [Vitest](https://vitest.dev/) for tests
- [`@icure/cardinal-sdk`](https://www.npmjs.com/package/@icure/cardinal-sdk) for everything Cardinal-related, including its built-in Kerberus captcha
- [`@icure/be-fhc-lite-api`](https://www.npmjs.com/package/@icure/be-fhc-lite-api) and [`@icure/cardinal-prescription-be-react`](https://www.npmjs.com/package/@icure/cardinal-prescription-be-react) for Belgian e-prescription

## 6. Where to go from here

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — auth state machine, encryption model, recovery-key flow, and the canonical "how to add a new Cardinal-backed feature" recipe.
- [Cardinal SDK docs](https://docs.icure.com/) — full API reference and how-tos.
- [Cardinal How-Tos](https://docs.icure.com/how-to/index) — recipe-style guides for common tasks (creating patients, adding health elements, sharing data, etc.).
- The [`cardinal-sdk-react-js-template`](https://github.com/icure/cardinal-sdk-react-js-template) repo is the minimal reference template this app evolved from.

## 7. Help

- [Cardinal website](https://cardinalsdk.com/en)
- [Help Centre](https://icure.atlassian.net/servicedesk/customer/user/login?destination=portals)
- [Vite docs](https://vitejs.dev/guide/) for anything Vite-specific (env vars, deployment, plugins, …).
