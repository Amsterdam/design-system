<!-- @license CC0-1.0 -->

# Component library for React apps

The `@amsterdam/design-system-react` package contains React implementations of various components. You can use this package in React apps.

The design tokens used in these components are published in a separate npm package, so don't forget to install and include `@amsterdam/design-system-tokens` too.

<!-- TODO: make this easier? -->

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will change between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

<!-- TODO: add alpha, beta and production statuses to components. Also show in Storybook -->

## Getting started

Install the packages you need, for instance:

`npm install @amsterdam/design-system-react @amsterdam/design-system-tokens @amsterdam/design-system-assets`

Import the packages you need.

```javascript
import { Paragraph } from "@amsterdam/design-system-react";

import "@amsterdam/design-system-tokens/dist/root.css";
import "@amsterdam/design-system-assets/font/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
```

## Unstyled components

If you need unstyled React components (if you completely want to restyle them yourself, or you can't use style injection in your project because of a strict CSP for example), you can import these as well.

For example, to import an unstyled Paragraph component:

```javascript
import { Paragraph } from "@amsterdam/design-system-react/unstyled";
```

If you do want to style unstyled React components using our css, you can add the component css from our `@amsterdam/design-system-css` package, like so:

```javascript
import "@amsterdam/design-system-css/dist/paragraph/paragraph.css";
```
