# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.6.0](https://github.com/Devwares-Team/cdbreact/compare/v1.5.19...v1.6.0) (2026-03-30)

### Added

- React 19 compatibility validation across library build and example app build.
- `package.json` attribution metadata with GitHub author URL for npm package identity.
- Modern package exports metadata (`types` + `exports`) for cleaner consumer resolution.

### Changed

- Migrated dropdown and popper behavior to `@popperjs/core` and removed legacy `react-popper` + `popper.js`.
- Replaced `react-bootstrap-range-slider` with a native range input implementation.
- Reworked animation visibility lifecycle with native hooks (removed deep-compare dependency).
- Updated example app rendering to `createRoot` for modern React APIs.
- Improved package scripts for non-flaky CI checks (`--passWithNoTests`) and smoother example builds.

### Security

- Upgraded vulnerable runtime dependency paths and added dependency overrides.
- `npm audit --omit=dev` now reports `0` vulnerabilities.

### Performance

- Removed legacy runtime dependencies (`react-spring`, `react-popper`, `popper.js`, `use-deep-compare-effect`, `react-bootstrap-range-slider`).
- Reduced built bundle output (gzip):
  - `dist/index.js`: from ~59.8 kB to ~51.8 kB
  - `dist/index.modern.js`: from ~59.6 kB to ~51.5 kB

### [1.5.19](https://github.com/Devwares-Team/cdbreact/compare/v1.5.18...v1.5.19) (2024-04-15)

### [1.5.18](https://github.com/Devwares-Team/cdbreact/compare/v1.5.17...v1.5.18) (2023-06-25)

### [1.5.17](https://github.com/Devwares-Team/cdbreact/compare/v1.5.16...v1.5.17) (2023-05-30)

### [1.5.16](https://github.com/Devwares-Team/cdbreact/compare/v1.5.15...v1.5.16) (2023-05-18)

### [1.5.15](https://github.com/Devwares-Team/cdbreact/compare/v1.5.14...v1.5.15) (2023-05-16)

### 1.5.14 (2023-04-20)

### 1.5.13 (2023-04-15)

### 1.5.12 (2023-04-13)

### 1.5.11 (2023-04-05)

### 1.5.10 (2023-03-21)

### 1.5.9 (2023-03-01)

### 1.5.8 (2023-02-22)

### 1.5.7 (2023-02-09)

### 1.5.6 (2023-02-06)

### 1.5.5 (2023-02-02)

### [1.5.4](https://github.com/Devwares-Team/cdbreact/compare/v1.5.3...v1.5.4) (2022-12-22)

### [1.5.3](https://github.com/Devwares-Team/cdbreact/compare/v1.5.2...v1.5.3) (2022-12-22)
