<!-- @license CC0-1.0 -->

# Amsterdam Design System: Tokens

This package provides all design tokens from the [Amsterdam Design System](https://designsystem.amsterdam).
Use it to apply its visual design to your website or application.
The tokens are exported in multiple formats, including CSS custom properties and JSON, making them compatible with most, if not all, technology stacks.

## Introduction

Every design token is a variable representing a single visual design choice.
Tokens exist for colours, various aspects of text, spacing lengths, border widths, the configuration of animations, and more.
The value of every token is valid in CSS.
All tokens together form a theme that encodes the entire branding of the City of Amsterdam.

## Installation

Install this package by itself if you want or need to reference tokens directly in your stylesheets.

Note that our [CSS components](https://www.npmjs.com/package/@amsterdam/design-system-css) and [React components](https://www.npmjs.com/package/@amsterdam/design-system-react) provide more functionality and apply the tokens automatically.
You should use those packages if your application uses React or if it allows you to apply our HTML classes.

```sh
npm install @amsterdam/design-system-tokens
```

## Usage in CSS

Tokens are typically used as custom properties in CSS.
Their name starts with a prefix of `--ams-`; that of a component token (see below) with the property that uses it, e.g. `-font-size`.

### Main stylesheet

This package offers a main stylesheet containing all tokens.
They are declared as global CSS variables through the `:root` selector.

<!-- prettier-ignore -->
```ts
import "@amsterdam/design-system-tokens/dist/index.css"
```

If that doesn’t work for your project, use `index.theme.css` instead, which uses an `.ams-theme` selector.
Add that class to a root element of your application.

<!-- prettier-ignore -->
```ts
import "@amsterdam/design-system-tokens/dist/index.theme.css"
```

```html
<body class="ams-theme">
  …
</body>
```

### Compact mode

Our branding is rather spacious for websites.
The main stylesheet implements this ‘spacious mode’ as the default.
A compact stylesheet is available for applications that require less white space and smaller text.

Note that the compact stylesheet is not independent – it only contains overrides.
Import it after the main stylesheet for the correct result.

<!-- prettier-ignore -->
```ts
import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/compact.css"
```

### Three layers

The tokens are organised in three layers: brand, common and component.

#### Brand tokens

These express the corporate identity of the City of Amsterdam.
They are our fundamental selection from all possible colours, text characteristics, spacing lengths, border widths, etc.
Examples:

```css
:root {
  --ams-brand-color-red-60: #ec0000;
  --ams-space-md: 1rem;
  --ams-aspect-ratio-wide: 4/3;
  --ams-border-width-lg: 0.1875rem;
}
```

Find the [list of brand tokens](https://github.com/Amsterdam/design-system/tree/main/proprietary/tokens/src/brand/ams) on GitHub.

#### Common tokens

Related components share visual design characteristics.
For example, all links have the same colour, and the borders of various form inputs are equally thick.
Common tokens express these relations and streamline future changes.

Design system components use common tokens where possible.
The same goes for custom components that you may create in your application.

```html
<a class="my-link" href="#">…</a>
```

```css
.my-input {
  color: var(--ams-link-appearance-color);
  text-underline-offset: var(--ams-link-appearance-text-underline-offset);
}
```

Find the [list of common tokens](https://github.com/Amsterdam/design-system/tree/main/proprietary/tokens/src/common/ams) on GitHub.

#### Component tokens

Every design system component defines a token for every property that expresses branding and uses it in its stylesheet.

Use these tokens when recreating an existing component to receive the correct values for them – now and in the future.
Do not apply these tokens to other components – components must be independent.

```html
<button class="my-button" type="button">Button label</button>
```

```css
.my-button {
  font-family: var(--ams-button-font-family);
  background-color: var(--ams-button-primary-background-color);
}
```

Find the [list of component tokens](https://github.com/Amsterdam/design-system/tree/main/proprietary/tokens/src/component/ams) on GitHub.

### Overriding tokens

This package allows the creation of a theme to reuse our components for a different brand.
This is a key feature of [NL Design System](https://nldesignsystem.nl/) of which we are part.

However, websites and applications for the City of Amsterdam must follow the design system as closely as possible.
We repeat: websites and applications for the City of Amsterdam must follow the design system as closely as possible.

At the same time, we are aware that adopting a design system can pose challenges in practice.
If there is a good reason to (temporarily) adapt a component, do so by overriding the values of its appropriate tokens in a separate stylesheet.
Note that redefining the value of a token is a much better approach than redeclaring styles, adding class names or even inline styles.

## Usage in Sass

The tokens can be imported as Sass variables as well.

```sass
@import "@amsterdam/design-system-tokens/dist/index.scss"
```

Import the compact tokens if you need them.
Sass will override spacious values automatically.

```sass
@import "@amsterdam/design-system-tokens/dist/compact.scss"
```

## Usage in JavaScript

Import the JSON file to use the tokens in TypeScript or JavaScript.
Here, tokens start their name with a prefix of `ams.`.
Use ‘dot notation’ or square brackets to access the tokens.

<!-- prettier-ignore -->
```tsx
import tokens from "@amsterdam/design-system-tokens/dist/index.json"

const { ams } = tokens
const buttonBackgroundColor = ams.brand.color.blue['60']
const rowGap = ams.space.md
```

Import and merge the compact tokens if you need them.
Then you can use the tokens in scripting or css-in-js libraries.

<!-- prettier-ignore -->
```tsx
import compactTokens from "@amsterdam/design-system-tokens/dist/compact.json"
import spaciousTokens from "@amsterdam/design-system-tokens/dist/index.json"

const { ams } = { ...spaciousTokens, ...compactTokens }
```

## Usage in Figma

The tokens are used in our [Figma Library](https://www.figma.com/file/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?type=design&node-id=741-19633&mode=design&t=N8P3h3W67O0KNdga-0) as well.

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/proprietary/tokens/CHANGELOG.md) to guide you through updates.
The tokens are a public API of the design system.
Note that detecting changed or deleted tokens is still a manual process.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
