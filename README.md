# Sample-app

## Getting Started

After you have cloned this repo, run this setup script to set up your machine
with the necessary dependencies to run and test this app:

    % ./bin/setup

It assumes you have a machine equipped with Ruby, Postgres, etc.

## Running tests

The tests are separated between unit tests (`.spec.js`) and Karma tests (`.spec.karma.js`).

You have the following npm scripts available for testing:

- `test`: Run both unit and Karma tests once
- `test:unit`: Run unit tests once
- `test:unit:watch`: Run unit tests and watch files to run related tests again when a file is changed
- `test:unit:browser`: Create a Webpack dev server and watch for file change to run tests on browser
- `test:karma`: Run Karma tests once
- `test:karma:watch`: Run Karma tests and watch files to run related tests again when a file is changed

Karma tests will run both on Chrome and PhantomJS 2.

You can append Karma tests commands with `-- --browsers <browser name>` to run it in a single browser. Example:

```sh
  $ npm run test:karma -- --browsers Chrome
```