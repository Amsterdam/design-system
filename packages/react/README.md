<!-- @license CC0-1.0 -->

# Component library for React apps

The `@amsterdam/design-system-react` package contains React implementations of various components. You can use this package in React apps.

The CSS components that implement the Utrecht design system class names are published in a separate npm package, so don't forget to install and include `@amsterdam/design-system-css` too for the styling of the white-label components, as well as a package with design tokens for your theme. TODO: make this easier?

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will change between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

TODO: add alpha, beta and production statuses to components. Also show in Storybook

## Getting started

Install the packages you need, for instance:

`npm install @amsterdam/design-system-react @amsterdam/design-system-css @amsterdam/design-system-tokens @amsterdam/design-system-assets`

Import the packages you need.

```javascript
import { Paragraph } from "@amsterdam/design-system-react";

import "@amsterdam/design-system-css/dist/paragraph/paragraph.css";
import "@amsterdam/design-system-tokens/dist/root.css";
import "@amsterdam/design-system-assets/font/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
```
