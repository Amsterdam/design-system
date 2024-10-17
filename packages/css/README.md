<!-- @license CC0-1.0 -->

# Amsterdam Design System: CSS components

This package provides stylesheets for all components in the [Amsterdam Design System](https://designsystem.amsterdam) and some general utilities.
Use it to apply the visual design of the City of Amsterdam to your HTML elements or non-React components.

## About

The set of classes for a component can be seen as a blueprint for its markup and features.
An `.ams-component` root selector applies the essential styles of the component to its element, and additional classes like `.ams-component--variant` modify its appearance or behaviour.

Our [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) use these classes in the HTML they render.
You should use that package if your application uses React.

The classes employ the [naming convention of NL Design System](https://nldesignsystem.nl/handboek/developer/architectuur#bem-class-names-voor-css).
Other communities only need to overwrite design tokens to use our components with their branding.

## Motivation

Publishing the stylesheets as a separate package saves a lot of work when replicating components in other libraries, platforms, or Saas-applications.
This is a powerful approach to implement the design system across different technologies.

The classes act like a contract between the component’s definition and its implementations.
As a bonus, updates to tokens or styles can be propagated to all of them.

## Installation

The stylesheets reference our [design tokens](https://www.npmjs.com/package/@amsterdam/design-system-tokens).
Both packages need to be installed.

```sh
npm install
  @amsterdam/design-system-css
  @amsterdam/design-system-tokens
```

```sh
pnpm add
  @amsterdam/design-system-css
  @amsterdam/design-system-tokens
```

```sh
yarn add
  @amsterdam/design-system-css
  @amsterdam/design-system-tokens
```

## Usage

### In JavaScript

Import the main stylesheet and use the class names in your markup.

```ts
import "@amsterdam/design-system-tokens/dist/index.css";

export const App = () => (
  <div class="ams-screen">
    <p className="ams-paragraph">Hello, world!</p>
  </div>
)
```

### In HTML

Although it is not a typical use case, the stylesheet can be included in an HTML page directly.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Amsterdam Design System</title>
    <link rel="stylesheet" href="node_modules/@amsterdam/design-system-css/dist/index.css" />
  </head>
  <body class="ams-body">
    <p class="ams-paragraph">Hello, world!</p>
  </body>
</html>
```

### With CSS Modules

The BEM class names can be particularly useful to include only the CSS you need using [CSS modules](https://css-tricks.com/css-modules-part-1-need/) ([in React](https://css-tricks.com/css-modules-part-3-react/)).

```js
import React from "react";
import style from "@amsterdam/design-system-css";

export default class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <p className={btn["ams-paragraph"]}>Hello, world!</p>
      </>
    );
  }
}
```

### Compact mode

[Load the compact tokens](https://github.com/Amsterdam/design-system/blob/main/proprietary/tokens/README.md) to use the compact appearance of the design system, e.g. for applications.
They override the spacious ones; the stylesheets can remain unchanged.

### Global styles

Some elements of your document are out of reach for the Design System components.
However, their styles can influence the appearance of the components.

#### Keep the base font size

Do not change the base font-size – e.g. through `html { font-size: 62.5% }`.
Out typography system expects `1rem` to be the browser default of 16 pixels.

If you can’t easily remove such an approach from your application, adopt the Design System components gradually by setting `font-size: 100%` on elements that use them.

#### Remove the body margin

If you haven’t removed the margin on the `<body>` element that browsers set by default, you can add our `ams-body` class to it to do so.

#### Use extra bold text

We only use the regular and extra bold weights of our font, Amsterdam Sans.
Apply `font-weight: var(--ams-text-font-weight-bold)` to elements that display bold text like `b`, `strong`, and `dt`.

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/packages/css/CHANGELOG.md) to guide you through updates.
The classes are a public API of the design system.
Note that detecting changed or deleted classes is still a manual process.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
