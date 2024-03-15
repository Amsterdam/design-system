<!-- @license CC0-1.0 -->

# Contributing

Before starting work on a new component, check the [NL Design System community](https://github.com/nl-design-system/) for components that might already do exactly what you want.
If these don’t exist, or aren’t up to our requirements, we can add a new component.

Please also follow these contribution guidelines from the NL Design System community:

- [Accessibility](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-accessibility--docs)
- [CSS](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-css--docs)
- [Design Tokens](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-design-tokens--docs)
- [HTML](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-html--docs)
- [npm package](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-npm-package--docs)
- [Storybook](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-storybook--docs)

## Aligning with design/UX

Currently, you can find the most up-to-date documentation on design and UX on [amsterdam.nl/designsystem](https://amsterdam.nl/designsystem).
In time, the Storybook(s) in this repository should be the definitive source for documentation on code, design and UX.

If you want to add a component, first check if it’s already included in our [Figma Library](<https://www.figma.com/file/ORa7CBIooPgZj6HsEPBxNR/Design-bibliotheek-(gepubliceerd)?node-id=149%3A1324&t=Ud6eZytawJYnLlyi-0>).

If there is no design, or if you have questions about an existing design, please contact <designsystem@amsterdam.nl>.

## Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)
- `pnpm`, `npm install -g pnpm`

## Install code editor

You can use any editor you like, but if you use [Visual Studio Code](https://code.visualstudio.com/) we recommend the following extensions for this project:

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

## Run storybook

- Install dependencies: `pnpm install`
- Build the packages: `npm run build`
- Run storybook: `npm start`

## Locally link this library to a local project

If you need to link your local version of this library (to test your unpublished changes, for example) to a local project, follow these steps:

- Go to the root directory of the packages you want to link to (i.e. where its package.json is)
- Run `npm link`.
  Do this for all packages you want to link.
- Go to the root of the project in which you want to consume the packages
- Run `npm link <package-name>`.
  If you want to link multiple packages, separate the package names with a space.
  For example: `npm link @amsterdam/design-system-tokens @amsterdam/design-system-assets @amsterdam/design-system-react @amsterdam/design-system-react-icons`.
  Be careful: you have to link all packages in the same namespace together.
  Doing it one at a time will only link the last one.
  <!-- TODO: is there a workaround for this? -->
- Sometimes the local link is severed.
  Run `npm link @amsterdam/...` again if this happens.

## Licensing

All Javascript, Typescript and style files should start with a license header.
We use the EUPL-1.2+ license for these files.
The copyright holder for all files created by people working for the City of Amsterdam is the City of Amsterdam, so add this in a copyright notice below the license declaration.
If you use code from other EUPL-1.2 or higher licensed files that have a copyright notice, don’t forget to add this copyright notice as well.
So, for a file with code written by someone working for the City of Amsterdam in 2023, but also containing code from another EUPL-1.2 or higher licensed file written by John Doe in 2021, the header would look like this:

```javascript
/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 John Doe
 * Copyright Gemeente Amsterdam
 */
```

All documentation files should also start with a license header.
We use the Creative Commons Zero (CC0) license for this.
The license header looks like this:

```md
<!-- @license CC0-1.0 -->
```

If the content of a documentation file is copied from another source, use the license of the original file.

## Git branching strategy and publishing

We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for this project.
All members of the [Amsterdam GitHub organisation](https://github.com/Amsterdam) are allowed to create features branches and open pull requests.
Only [the maintainers of this repository](./documentation/maintainers.md) are allowed to merge pull requests into the `main` and `develop` branches.
We currently do not have a workflow for contributors that do not work for the City of Amsterdam.
If you do not work for the City of Amsterdam and want to contribute to this repository, please contact the maintainers.

Package versioning and publishing is done through Lerna, by the maintainers of the repository.
Contributors do not need to increment versions.
Contact the maintainers if you want to release a new version of a package.

## Adding a new component

Scaffold all necessary files for a new component at once through `npx plop`.
Enter the name of your component when prompted.
This will create files for the design tokens, CSS and React components, and React Stories.

## Publishing

Only the [maintainers](./documentation/maintainers.md) can release new versions of our packages.
See the [publishing docs](./documentation/publishing.md) for more information.

## Cooperation with NL Design System

This repository is part of the [NL Design System](https://nldesignsystem.nl/).
When you contribute to this project you allow your contributions to be made a part of the NL Design System component library.
For more information, please read about [their contribution model](https://nldesignsystem.nl/meedoen/estafettemodel/).
