# Business Secrets Helper App

This is a helper app designed for the Business Secrets development team, created by khizrim. The app is constantly evolving with new features being added over time.

https://khizrim.github.io/business-secrets-helper/

## Installation

To install the app, clone the repository and navigate to the project directory. Run the following command to install the necessary dependencies:

```shell
pnpm install
```

## Usage

To start the app, run the following command:

```shell
pnpm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

To build the app for production, run the following command:

```shell
pnpm run build
```

This will create an optimized production build in the `build` folder.

## Features

The app currently includes the following features:

- Generating URLs for different environments

## Contributing

If you would like to contribute to the app, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear commit messages
4. Push your changes to your fork
5. Create a pull request

## Code Style

The app follows a consistent code style enforced by ESLint and Prettier. The configuration for ESLint and Prettier can be found in the `package.json` file, and the rules are based on the `@gravity-ui/eslint-config` and `@gravity-ui/prettier-config` packages.

To run the ESLint and Prettier checks, use the following command:

```shell
pnpm run lint
```

This will run ESLint and Stylelint checks, as well as Prettier checks on all `.md` files. If there are any errors, they will be displayed in the console.

## Tech Stack

The app is built with the following technologies:

- React: a JavaScript library for building user interfaces
- TypeScript: a typed superset of JavaScript that compiles to plain JavaScript
- CSS: a style sheet language used for describing the presentation of a document written in HTML
- Gravity UI: a React UI library built on top of Material UI
- ESLint: a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript code
- Stylelint: a linter for CSS and Sass code
- Prettier: an opinionated code formatter that enforces a consistent code style

## License

This app is licensed under the MIT license. See the LICENSE file for more details.
