<!-- @license CC0-1.0 -->

# Amsterdam Design System

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Amsterdam Design System.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

# Contributing

## Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)
- `pnpm`, `npm install -g pnpm`

## Install code editor

You can use any editor you'd like, but in case you use [Visual Studio Code](https://code.visualstudio.com/) we recommend the following extensions that are useful for this project:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

To enable correct validation and to fix lint/style errors on save, add this to your VSCode `settings.json`:

```json
  "css.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.markdownlint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
```

## Getting started

- Install dependencies: `pnpm install`
- Run storybook: `npm run storybook`

# Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

# License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode). Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Amsterdam.

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
