<!-- @license CC0-1.0 -->

# Amsterdam Design System: CSS components

This package provides stylesheets for all components in the [Amsterdam Design System](https://designsystem.amsterdam) and some general utilities.
Use it to apply the visual design of the City of Amsterdam to your HTML elements or non-React components.

## Introduction

We publish our components’ stylesheets as a separate package to help replicating them in other libraries, platforms, or Saas-applications.
The classes are a contract between the component’s definition and its implementations and they facilitate ongoing upgrades.

Our [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) use these classes in the HTML they render.
You should use that package if your application uses React.

## Installation

The stylesheets reference our [design tokens](https://www.npmjs.com/package/@amsterdam/design-system-tokens).
Both packages need to be installed.

```sh
npm install @amsterdam/design-system-css @amsterdam/design-system-tokens
```

## Usage

The set of classes for a component can be seen as a blueprint for its markup and features.
An `.ams-component` root selector applies the essential styles of the component to its element, and additional classes like `.ams-component--variant` modify its appearance or behaviour.

The classes employ the [naming convention of NL Design System](https://nldesignsystem.nl/handboek/developer/architectuur#bem-class-names-voor-css).
Other communities only need to overwrite design tokens to use our components with their branding.

### In JavaScript

Import the main stylesheet and use the class names in your markup.

<!-- prettier-ignore -->
```jsx
import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"

export const App = () => (
  <p className="ams-paragraph">Hello, world!</p>
)
```

### In HTML

Although it is not a typical use case, the stylesheet can be included in an HTML page directly.

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="node_modules/@amsterdam/design-system-assets/font/index.css" />
    <link rel="stylesheet" href="node_modules/@amsterdam/design-system-css/dist/index.css" />
    <link rel="stylesheet" href="node_modules/@amsterdam/design-system-tokens/dist/index.css" />
  </head>
  <body class="ams-body">
    <p class="ams-paragraph">Hello, world!</p>
  </body>
</html>
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
