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
