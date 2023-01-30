<!-- @license CC0-1.0 -->

# Amsterdam Design System

[Demo site with the storybook of the components](https://amsterdam.github.io/design-system/)

## Getting started

To use the React components in this library, please see the [getting started documentation for the components-react package](./packages/components-react/README.md).

## Contributing

### Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)
- `pnpm`, `npm install -g pnpm`

### Install code editor

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

### Run storybook

- Install dependencies: `pnpm install`
- Build the packages: `npm run build`
- Run storybook: `npm run storybook`

### Locally link this library to a local project

If you need to link your local version of this library (to test your unpublished changes, for example) to a local project, follow these steps:

- Go to the root folder of the packages you want to link to (i.e. where its package.json is)
- Run `npm link`. Do this for all packages you want to link.
- Go to the root of the project in which you want to consume the packages
- Run `npm link <package-name>`. If you want to link multiple packages, seperate the package names with a space. For example: `npm link @amsterdam/design-tokens @amsterdam/components-css @amsterdam/font @amsterdam/components-react @amsterdam/icons-react`. Be careful: you have to link all packages in the same namespace together. Doing it one at a time will only link the last one. TODO: is there a workaround for this?
- Sometimes the local link is severed. Run `npm link @amsterdam/...` again if this happens.

## Further Amsterdam Design System documentation

TODO: write section.

[https://amsterdam.nl/designsystem](https://amsterdam.nl/designsystem)

## Guidelines

TODO: write guidelines

Guidelines on maintenance, PR process, etc.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## NL Design System

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Amsterdam Design System.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode). Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Amsterdam.

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
