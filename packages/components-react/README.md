<!-- @license CC0-1.0 -->

# Component library for React apps

The `@amsterdam/components-react` package contains React implementations of various components. You can use this package in React apps.

The CSS components that implement the Utrecht design system class names are published in a separate npm package, so don't forget to install and include `@amsterdam/components-css` too for the styling of the white-label components, as well as a package with design tokens for your theme. TODO: make this easier?

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

TODO: add alpha, beta and production statuses to components. Also show in Storybook

## Getting started

TODO: These packages haven't been published yet, so the following doesn't work at the moment. You can currently only use these instructions when locally linking the packages to a consumer project.

Install the packages you need, for instance:

`npm install @amsterdam/components-react @amsterdam/components-css @amsterdam/design-tokens @amsterdam/font`

Import the packages you need.

```javascript
import { Paragraph } from "@amsterdam/components-react";

import "@amsterdam/components-css/dist/document/document.css";
import "@amsterdam/components-css/dist/paragraph/paragraph.css";
import "@amsterdam/design-tokens/dist/root.css";
import "@amsterdam/font/static/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
```
