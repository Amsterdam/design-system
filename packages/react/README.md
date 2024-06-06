<!-- @license CC0-1.0 -->

# Component library for React apps

The `@amsterdam/design-system-react` package contains React implementations of various components.
You can use this package in React apps.

The design tokens and CSS used in these components are published in separate npm packages,
which are automatically installed when you install the React package.

## Stability of the components

The React Library has not yet reached a 1.0.0 version.
However, most of them are stable enough to be used in production.
Components that have known issues, or for which we anticipate API changes, show a ‘beta’ badge on their page.

Make sure you specify the exact version as dependency.
You can then schedule an upgrade to the latest version when you have time to test for regressions.

## Getting started

Install the React package:

`npm install @amsterdam/design-system-react`

This will automatically add separate packages containing our design tokens, assets, icons, and stylesheets.

Import the components and stylesheets you need, for example:

```javascript
import { Paragraph } from "@amsterdam/design-system-react";

import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-assets/font/index.css";
import "@amsterdam/design-system-css/dist/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
```

## Compact mode

For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact CSS **after** the theme CSS, like so:

```javascript
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
```
