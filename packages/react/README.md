<!-- @license CC0-1.0 -->

# Component library for React apps

DEPLOY TEST 1

The `@amsterdam/design-system-react` package contains React implementations of various components.
You can use this package in React apps.

The design tokens and css used in these components are published in separate npm packages, so don’t forget to install and include `@amsterdam/design-system-tokens` and `@amsterdam/design-system-css` too.

<!-- TODO: make this easier? -->

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will change between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

<!-- TODO: add alpha, beta and production statuses to components. Also show in Storybook -->

## Getting started

Install the packages you need, for instance:

`npm install @amsterdam/design-system-react @amsterdam/design-system-tokens @amsterdam/design-system-assets @amsterdam/design-system-css`

Import the packages you need.

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
To use the compact mode, import the compact css **after** theme css, like so:

```javascript
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
```
