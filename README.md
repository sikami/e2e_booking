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

## Potential bugs (observed in tests)
- API accepts invalid data types for fields that should be strict.
- API allows checkout date earlier than checkin date.
- API accepts invalid date formats.
- API allows negative and 0 values for total price.
