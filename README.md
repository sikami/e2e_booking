# PlaywrightWithJs

Basic Playwright tests (JavaScript) for the Restful Booker API.

## Requirements
- Node.js (LTS recommended)

## Install
```sh
npm install
```

## Run tests
```sh
npx playwright test
```

## Project structure
- `pages/` - page/object-style helpers used by tests
- `tests/` - test specs and test data
- `playwright.config.js` - Playwright config

## Notes
- Tests hit the public demo API at `https://restful-booker.herokuapp.com/`.
