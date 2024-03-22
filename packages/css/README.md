<!-- @license CC0-1.0 -->

# CSS Components

CSS components are developed using BEM class names and the stylesheets can be included in your page without side-effects.
Apply the class names to your elements to make them stylable using design tokens.

`npm install @amsterdam/design-system-css`

Theoretically you can include the components in your HTML page like so, but this is not the typical use case of this library:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@amsterdam/design-system-css" />
  </head>
  <body>
    <p class="ams-paragraph">Hello, world!</p>
  </body>
</html>
```

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

## Compact mode

For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact css **after** theme css, like so:

```javascript
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
```

## Document styles

Some elements of your document are out of reach for the Design System components.
However, their styles can influence the appearance of the components.
Apply the following to the document elements:

The font-size must not be changed – e.g. through `html { font-size: 62.5% }` – because the typography system expects a rem to be 16 pixels.

The `ams-body` class must be added to the `<body>` element – it prepares the base layout and sets a background colour.

After the `theme-ams` class has been set, e.g. on the `<body>` as well, bold text will use our extra bold font weight.

## Common patterns

We use Sass mixins to extract common patterns, especially if they need more than 1 declaration.
We collect reset styles in mixins as well.
Both the name of the mixins and their documentation help explain the approach.
Mixins sit at the end of the declation block to ensure their effect.
The general ‘reset’ mixin is the very last.
