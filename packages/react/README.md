<!-- @license CC0-1.0 -->

# Amsterdam Design System: React components

TEST BREAKING CHANGE VAN REACT PACKAGE

This package provides all React components from the [Amsterdam Design System](https://designsystem.amsterdam).
Use it to compose pages in your website or application.

## Introduction

This package is the primary entry point for digital services that we build in-house.
We’ve adopted the architecture of [NL Design System](https://nldesignsystem.nl/).

## Installation

The components reference our
[stylesheets](https://www.npmjs.com/package/@aram-limpens/design-system-css),
[design tokens](https://www.npmjs.com/package/@aram-limpens/design-system-tokens)
[assets](https://www.npmjs.com/package/@aram-limpens/design-system-assets),
and [React icons](https://www.npmjs.com/package/@aram-limpens/design-system-react-icons).
Install all packages.

```sh
npm install @aram-limpens/design-system-assets @aram-limpens/design-system-css @aram-limpens/design-system-react @aram-limpens/design-system-react-icons @aram-limpens/design-system-tokens
```

The React components themselves are unstyled.
[Override the design tokens](https://github.com/Amsterdam/design-system/blob/main/packages-proprietary/tokens/README.md) to use them with a different branding.

## Usage

Import the stylesheets for the fonts, tokens, and components.
Then import and use the components in your JSX.

<!-- prettier-ignore -->
```tsx
import "@aram-limpens/design-system-assets/font/index.css"
import "@aram-limpens/design-system-css/dist/index.css"
import "@aram-limpens/design-system-tokens/dist/index.css"
import { Paragraph } from "@aram-limpens/design-system-react"

const App = () => (
  <Paragraph>Hello, world!</Paragraph>
)

export default App
```

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/packages/react/CHANGELOG.md) to guide you through updates.
The React components are a public API of the design system.
TypeScript helps to detect changed or deleted components, props, or prop values.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
