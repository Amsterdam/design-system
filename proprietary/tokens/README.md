<!-- @license CC0-1.0 -->

# Amsterdam Design System: Tokens

This package provides the design tokens of the Amsterdam Design System.
Every token is a variable that stores a single visual design choice.
Tokens exist for colours, typographic attributes, spacing lengths, border widths, animation properties, etc.
Every token has a value that is valid in CSS.

Some examples:

```css
:root {
  --ams-color-blue: #004699;
  --ams-text-font-weight-bold: 800;
  --ams-border-width-medium: 0.125rem;
  --ams-button-padding-inline: 1.5rem;
  --ams-space-xl: clamp(2.25rem, 2.0625rem + 0.9375vw, 3rem);
  --ams-text-input-invalid-border-color: var(--ams-color-red);
}
```

All tokens together form a theme that encodes the entire branding of the City of Amsterdam.

We use these tokens in our [CSS components](https://www.npmjs.com/package/@amsterdam/design-system-css) and [React components](https://www.npmjs.com/package/@amsterdam/design-system-react).
Any web-based application for Amsterdam can implement the design system through this package.

## Install the package

Use this package alone if you want or need to use the design tokens directly in your project.
Note that our [CSS components](https://www.npmjs.com/package/@amsterdam/design-system-css) and [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) provide more functionality and apply the tokens automatically.

```sh
pnpm add @amsterdam/design-system-tokens
```

## Import the tokens

Find the tokens in the `dist` directory and import them into your project.

Tokens are typically applied as custom properties in CSS.

```ts
import "@amsterdam/design-system-tokens/dist/index.css";
```

### Root or class selector

The stylesheets wrap the tokens into a `:root` selector.
If that doesn’t work for your project, use `index.theme.css` instead, which uses an `.ams-theme` selector.
Add that class to a root element of your application.

### Compact mode

Applications need less whitespace and smaller text sizes than websites.
Add the compact stylesheet to override the values of these tokens.

```ts
import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
```

Dark mode will work the same way when it’s ready.

### Other formats

The tokens can be imported as Sass variables as well.

```sass
@import "@amsterdam/design-system-tokens/dist/index.scss"
```

To use the tokens in JavaScript, import the JSON file.

```ts
import tokens from "@amsterdam/design-system-tokens/dist/index.json";
```

## Use the tokens

All tokens' names start with a prefix of `ams-`.
The name of component tokens ends with the CSS property that uses them, e.g. `-font-size`.

### Component tokens

Every component uses tokens for every property that expresses branding.
Apply these values in your stylesheets to the corresponding components.

```html
<button class="my-button" type="button">Button label</button>
```

```css
.my-button {
  font-family: var(--ams-button-font-family);
  background-color: var(--ams-button-primary-background-color);
}
```

### Common tokens

Various groups of components share visual design characteristics.
E.g. all kinds of links have the same colour, and the borders of various inputs are equally thick.
We use common tokens to express these relations.
This also makes it easier to change this shared appearance in the future.

Prefer using common tokens over component tokens.
If

```html
<input class="my-input" type="text" />
```

```css
.my-input {
  font-size: var(--ams-common-input-font-size);
  border-width: var(--ams-common-input-border-width);
}
```

### Brand tokens

The brand tokens express the branding of the City of Amsterdam.
They are our selection from all possible colours, text characteristics, spacing lengths, border widths, etc.
They are the basis of everything else – no token can have a value for which no brand token exists.

Brand tokens must only be used in common tokens, not in component tokens.

### Overriding tokens

The value of tokens must not be overridden in an application for the City of Amsterdam.
If you need a different value, create a new token with a different name – and let us know.
This way, the design system remains consistent and predictable.

A custom theme could restyle our components for a different brand.
This is an essential feature of [NL Design System](https://nldesignsystem.nl/) of which we are part.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam).
