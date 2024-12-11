<!-- @license CC0-1.0 -->

# Amsterdam Design System: React components

This package provides all React components from the [Amsterdam Design System](https://designsystem.amsterdam).
Use it to compose pages in your website or application.

## Introduction

This package is the primary entry point for digital services that we build in-house.
We’ve adopted the architecture of [NL Design System](https://nldesignsystem.nl/).

## Installation

The components reference our
[stylesheets](https://www.npmjs.com/package/@amsterdam/design-system-css),
[design tokens](https://www.npmjs.com/package/@amsterdam/design-system-tokens)
[assets](https://www.npmjs.com/package/@amsterdam/design-system-assets),
and [React icons](https://www.npmjs.com/package/@amsterdam/design-system-react-icons).
Install all packages.

```sh
npm install @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
```

The React components themselves are unstyled.
[Override the design tokens](https://github.com/Amsterdam/design-system/blob/main/proprietary/tokens/README.md) to use them with a different branding.

## Usage

Import the stylesheets for the fonts, tokens, and components.
Then import and use the components in your JSX.

<!-- prettier-ignore -->
```jsx
import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"
import { Paragraph } from "@amsterdam/design-system-react"

const App = () => (
  <Paragraph>Hello, world!</Paragraph>
)

export default App
```

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/packages/react/CHANGELOG.md) to guide you through updates.
The React components are a public API of the design system.
TypeScript helps to detect changed or deleted components, props, or prop values.

### Stability

Despite being on ‘major version zero’, most components are stable enough to be used in production.
Various of our public-facing websites and applications already do.

Make sure you specify the exact version as dependency and test for regressions when upgrading to the latest version.

We’re finalizing the design and modelling of foundational concepts like typography, spacing, and colour.
After that, and a final review of the API of all current components, we’ll release version 1.0 of the entire design system.
Then, we’ll consider publishing all components separately to allow for more granular updates.

Components for which we anticipate API changes show a ‘beta’ badge at the top of their page in the [Design System handbook](https://designsystem.amsterdam/).

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
