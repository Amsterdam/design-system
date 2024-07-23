<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Contents

- [Code of Conduct](#book-code-of-conduct)
- [Opening an Issue](#inbox_tray-opening-an-issue)
- [Submitting Pull Requests](#repeat-submitting-a-pull-request)
- [Local development](#computer-local-development)
- [Credits](#pray-credits)

## :book: Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
Read [our Code of Conduct](https://github.com/Amsterdam/.github/blob/main/CODE_OF_CONDUCT.md) if you haven’t already.

## :inbox_tray: Opening an issue

Before creating an issue, check if you are using the latest version of the project.
If you are not up-to-date, see if updating fixes your issue first.

### Reporting a security issue

**Do not** file a public issue for security vulnerabilities.
This may result in the vulnerability details being made public, creating an unsafe situation.
You can submit your report via [the Zerocopter Coordinated Vulnerability Disclosure (CVD) form](https://app.zerocopter.com/en/cvd/fc5dad1c-27ee-4571-880b-438dc672d178).
For more information, review our [Security Policy](https://github.com/Amsterdam/.github/blob/main/SECURITY.md).

### Bug reports and other issues

For all other issues, you can [create an issue on GitHub](https://github.com/Amsterdam/design-system/issues).

Follow these guidelines when doing so:

- **Do not open a duplicate issue.**
  Search through existing issues to see if your issue has previously been reported.
  If your issue exists, comment with any additional information you have.
  You may simply note "I have this problem too", which helps prioritize the most common problems and requests.

- **Prefer using [reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)**,
  not comments, if you simply want to "+1" an existing issue.

- **Fully complete the provided issue template.**
  The bug report template requests all the information we need to quickly and efficiently address your issue.
  Be clear, concise, and descriptive.

## :repeat: Submitting a pull request

Before opening a pull request for non-trivial changes,
it is usually best to first open an issue to discuss the changes,
or discuss your intended approach for solving the problem in the comments for an existing issue.

### Git workflows

We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for this project.
Members of the [Amsterdam GitHub organisation](https://github.com/Amsterdam) can request push access to the repository,
to be able to push branches.
If you do not want access, you can [fork the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [submit a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests).
We currently do not have a workflow for contributors that do not work for the City of Amsterdam.
If you do not work for the City of Amsterdam and want to contribute to this repository, please contact the [maintainers](./documentation/maintainers.md).

### Contribution guidelines

Please follow these contribution guidelines from the NL Design System community:

- [Accessibility](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-accessibility--docs)
- [CSS](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-css--docs)
- [Design Tokens](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-design-tokens--docs)
- [HTML](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/nl-design-system-contributing-html--docs)

Also follow our [CSS](./packages/css/documentation/coding-conventions.md) and [React](./packages/react/documentation/coding-conventions.md) coding conventions.

### Aligning with UX design

You can find the most up-to-date documentation on design and UX in the Storybook in this repository.

If you want to add a component, first check if it’s already included in our [Figma Library](https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd).

If there is no design, or if you have questions about an existing design, please contact <designsystem@amsterdam.nl>.

### Pull request guidelines

- **Smaller is better.**
  Submit **one** pull request per bug fix or feature.
  A pull request should contain isolated changes pertaining to a single bug fix or feature implementation.
  **Do not** refactor or reformat code that is unrelated to your change.
  It is better to **submit many small pull requests** rather than a single large one.
  Enormous pull requests will take enormous amounts of time to review, or may be rejected altogether.

- **Coordinate bigger changes.**
  For large and non-trivial changes, open an issue to discuss a strategy with the maintainers.
  Otherwise, you risk doing a lot of work for nothing!

- **Prioritize understanding over cleverness.**
  Write code clearly and concisely.
  Remember that source code usually gets written once and read often.
  Ensure the code is clear to the reader.
  The purpose and logic should be obvious to a reasonably skilled developer, otherwise you should add a comment that explains it.

- **Follow existing coding style and conventions.**
  Keep your code consistent with the style, formatting, and conventions in the rest of the code base.
  When possible, these will be enforced with a linter.
  Consistency makes it easier to review and modify in the future.

- **[Follow our Definition of Done](https://github.com/Amsterdam/design-system/blob/main/documentation/definition-of-done.md)**.

- **[Resolve any merge conflicts](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)** that occur.

- **Promptly address any CI failures**.
  If your pull request fails to build or pass tests, please push another commit to fix it.

### Cooperation with NL Design System

This repository is part of the [NL Design System](https://nldesignsystem.nl/).
When you contribute to this project you allow your contributions to be made a part of the NL Design System component library.
For more information, please read about [their contribution model](https://nldesignsystem.nl/meedoen/estafettemodel/).

## :computer: Local development

### Install prerequisites

You need to have the following tools installed to run Storybook locally:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/), `npm install -g pnpm`

<details>
  <summary>Pro tip: VSCode extensions and linting on save</summary>

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

</details>

### Run storybook

- Install dependencies: `pnpm install`
- Build the packages: `npm run build`
- Run storybook: `npm start`

### Adding a new component

Scaffold all necessary files for a new component at once through `npm run plop`.
Enter the name of your component when prompted.
Answer the other prompts if applicable, otherwise use the defaults.
This will create files for the design tokens, CSS and React components, and React Stories.

<details>
  <summary>Pro tip: Locally linking this library to a local project</summary>

If you need to link your local version of this library (to test your unpublished changes, for example) to a local project, follow these steps:

- Go to the root directory of the packages you want to link to (i.e. where its package.json is)
- Run `npm link`.
  Do this for all packages you want to link.
- Go to the root of the project in which you want to consume the packages
- Run `npm link <package-name>`.
  If you want to link multiple packages, separate the package names with a space.
  For example: `npm link @amsterdam/design-system-tokens @amsterdam/design-system-assets @amsterdam/design-system-react @amsterdam/design-system-react-icons`.
  **Be careful**: you have to link all packages in the same namespace together.
  Doing it one at a time will only link the last one.
  <!-- TODO: is there a workaround for this? -->
- Sometimes the local link is severed.
  Run `npm link @amsterdam/...` again if this happens.

</details>

### Licensing

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

### Publishing

Package versioning and publishing is done by the [maintainers](./documentation/maintainers.md) of the repository.
Contributors do not need to increment versions.
Contact the maintainers if you want to release a new version of a package.

## :pray: Credits

This document is adapted from a template made by [@jessesquires](https://github.com/jessesquires).
