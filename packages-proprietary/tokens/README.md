<!-- @license CC0-1.0 -->

# Amsterdam Design System: Tokens

This package provides all design tokens from the [Amsterdam Design System](https://designsystem.amsterdam).
Use it to apply its visual design to your websites.
The tokens are exported in multiple formats, including CSS custom properties and JSON, making them compatible with most, if not all, technology stacks.

**Note** that the values of the tokens in this package implement the branding of the City of Amsterdam.
If your project is not affiliated with the City of Amsterdam, you should not use this package.
You are allowed to copy the token files if you change the values to your own branding.

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
Their names start with a prefix of `--ams-`.

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

### Compact overrides

Our visual style is quite spacious.
This works well for public websites.
The main stylesheet implements this ‘Spacious Mode’ as the default.
A compact stylesheet is available for internal websites that require a high-density layout with reduced white space and smaller text.

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
Their names begin with our prefix, followed by a design category such as ‘color’, ‘typography’, or ‘space’.

Examples:

```css
:root {
  --ams-color-feedback-error: #ec0000;
  --ams-space-m: 1rem;
  --ams-aspect-ratio-4-3: 4 / 3;
  --ams-border-width-l: 0.1875rem;
}
```

Find the [list of brand tokens](https://github.com/Amsterdam/design-system/tree/main/packages-proprietary/tokens/src/brand/ams) on GitHub.

##### Removing ‘default’ keys

Some brand tokens include a ‘default’ key in JSON to allow for additional variants, such as `ams.color.interactive.default` and `ams.color.interactive.disabled`
However, this key is not needed for collections of variables that are flat, like our CSS custom properties.
Therefore, we remove this key in non-nested variables.
For instance, `--ams-color-interactive` and `--ams-color-interactive-disabled`.

#### Common tokens

Related components share visual design characteristics.
For example, all links have the same colour, and the borders of various form inputs are equally thick.
Common tokens express these relations and streamline future changes.
Their names begin with our prefix, followed by the name of the group that uses them.
This group name is plural to indicate that several components apply these tokens.

Design system components use common tokens where possible.
The same goes for custom components that you may create in your application.

```html
<a class="my-link" href="#">…</a>
```

```css
.my-input {
  color: var(--ams-links-color);
  text-underline-offset: var(--ams-links-text-underline-offset);
}
```

Find the [list of common tokens](https://github.com/Amsterdam/design-system/tree/main/packages-proprietary/tokens/src/common/ams) on GitHub.

#### Component tokens

Every design system component defines a token for every property that expresses branding and uses it in its stylesheet.

Use these tokens when recreating an existing component to receive the correct values for them – now and in the future.
Do not apply these tokens to other components – components must be independent.

The name of a component token ends with the CSS property that uses it, e.g. `-font-size`.
We follow [the NL Design System token naming guidelines](https://nldesignsystem.nl/handboek/design-tokens/#naamgeving) here.

```html
<button class="my-button" type="button">Button label</button>
```

```css
.my-button {
  font-family: var(--ams-button-font-family);
  background-color: var(--ams-button-primary-background-color);
}
```

Find the [list of component tokens](https://github.com/Amsterdam/design-system/tree/main/packages-proprietary/tokens/src/component/ams) on GitHub.

#### Logical viewport inline size tokens

Some component tokens vary by viewport breakpoint and follow [CSS logical properties](https://developer.mozilla.org/en-US/docs/Glossary/Logical_properties) naming:

- `vi` means _viewport inline size_.
- Breakpoint-specific variants use `vi-medium` and `vi-wide`, for example:
  - `ams.menu.vi-wide.padding-inline`
  - `ams.dialog.vi-medium.inline-size`
  - `ams.grid.vi-medium.column-count`

Components can also use `narrow`, `medium` or `wide` keys without the `vi` prefix when the dimension is intrinsic to the component and not tied to the active viewport breakpoint.

### Overriding tokens

This package allows the creation of a theme to reuse our components for a different brand.
This is a key feature of [NL Design System](https://nldesignsystem.nl/) of which we are part.

However, websites for the City of Amsterdam must follow the design system as closely as possible.
We repeat: websites for the City of Amsterdam must follow the design system as closely as possible.

At the same time, we are aware that adopting a design system can pose challenges in practice.
If there is a good reason to (temporarily) adapt a component, do so by overriding the values of its appropriate tokens in a separate stylesheet.
Note that redefining the value of a token is a much better approach than redeclaring styles, adding class names or even inline styles.

## Deprecating tokens

We deprecate tokens using the DTCG `$deprecated` field. The [official definition](https://www.designtokens.org/tr/drafts/format/#deprecated) allows `$deprecated` to be `true`, `false` or a string explanation.

In ADS, `$deprecated` should be a string so consumers always get a reason + migration path.

A deprecated token keeps working until it is removed, so it must always hold a real value — never `initial` or another guaranteed-invalid value.
Consumers may read the custom property directly, and an invalid value resolves to the CSS property’s initial value (for example `0`), silently breaking their layout.

### Deprecation message format

- Always include a removal date: `Will be removed on or after YYYY-MM-DD.`
- If there is a direct replacement, start with: ``Use `<replacement-token>` instead.``

### Simple deprecation (no fallback)

If a deprecated token is still used directly, keep its existing `$value` until removal.
Also add a deprecation comment next to the token usage in the consuming CSS.

Token JSON:

```jsonc
"row-gap": {
  "$deprecated": "Whitespace is now applied through the `ams.description-list.*.margin-block-end` tokens. Will be removed on or after 2026-10-20.",
  "$value": "0"
}
```

Component CSS:

```css
row-gap: var(--ams-description-list-row-gap); /* This token is @deprecated. Will be removed on or after 2026-10-20. */
```

### Renames that use `var()` fallback

When a token is renamed but we still want (downstream) overrides of the old token to keep working, we implement the rename through CSS `var()` fallback.

Always add an inline deprecation comment next to the deprecated custom property inside the `var()` call.

1. Update the component CSS to reference the deprecated token first, and the replacement token as the fallback:

```css
padding-inline: var(
  --ams-grid-medium-padding-inline /* This token is @deprecated. Will be removed on or after 2026-10-20. */,
  var(--ams-grid-vi-medium-padding-inline)
);
```

2. In the token JSON, mark the old token as deprecated and set its `$value` to a reference to the replacement token:

```jsonc
"medium": {
  "padding-inline": {
    "$deprecated": "Use `ams.grid.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",
    "$value": "{ams.grid.vi-medium.padding-inline}"
  }
}
```

This builds to `--ams-grid-medium-padding-inline: var(--ams-grid-vi-medium-padding-inline)`, so the deprecated token resolves to exactly the same value as its replacement.

3. If the replacement token is overridden in a theme layer (for example Compact Mode), add the deprecated token to that layer’s tokens file as well, pointing at the same replacement:

```jsonc
// grid.compact.tokens.json
"medium": {
  "padding-inline": {
    "$deprecated": "Use `ams.grid.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",
    "$value": "{ams.grid.vi-medium.padding-inline}"
  }
}
```

CSS substitutes `var()` inside a custom property at the scope where that property is _declared_, not where it is read.
A deprecated alias declared only on `:root` / `.ams-theme` is frozen to the base value, so a Compact Mode override of the replacement (on `.ams-theme--compact`) would not reach it, and the component — which reads the deprecated token first — would render the default value in Compact Mode.
Re-declaring the alias inside the layer makes it re-resolve to that layer’s value.

Why a reference? The deprecated token must keep a real value, because consumers may read the custom property directly — `var(--ams-grid-medium-padding-inline)`, without our fallback — for example to line their own elements up with the Grid’s padding.
A reference gives them that value while everything else keeps working:

- The component’s `var(--deprecated, <fallback>)` resolves to the same value, so the rendered result is unchanged.
- Downstream overrides of the old name still take precedence, because the component CSS reads it first.
- An override of the replacement flows through only when it is set at the same scope as the alias (for example globally on `:root`); a scoped theme override such as Compact Mode needs the alias re-declared in that layer, as in step 3.

**Never set the deprecated token’s `$value` to `initial`.**
For a custom property, `initial` is the [guaranteed-invalid value](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/var#syntax): it makes the `var(--deprecated, <fallback>)` fallback fire, so our own component styles look fine, but any consumer reading the deprecated custom property directly gets the property’s initial value instead — for example `0` for `padding-inline` — which silently breaks their layout.

### Deprecations without a 1:1 replacement

If there is no 1:1 replacement (design/behavior changed), keep the existing `$value` until removal and update the consuming CSS/markup before deleting the token.

## Token types

Tokens may define their type using a DTCG `$type`, or, when no standard DTCG type applies, using our Amsterdam-specific `$extensions.nl.amsterdam.type`.
References inherit the type of the token they refer to.

We also use group-level inheritance where all tokens in a group share the same DTCG type.
A `$type` set on a group applies to all its descendants, so individual tokens do not need to repeat it.

### DTCG standard types

The following types come from the [Design Tokens Community Group (DTCG) specification](https://www.designtokens.org/tr/2025.10/format/):

| Type         | Description                            |
| ------------ | -------------------------------------- |
| `color`      | Any colour value                       |
| `dimension`  | Any dimension with a unit              |
| `duration`   | A length of time                       |
| `fontFamily` | Font family definitions (string array) |
| `fontWeight` | Font weight values                     |
| `number`     | Unitless numeric values                |
| `shadow`     | Box shadow definitions                 |

### Custom extensions

#### Type

We add a custom type under `$extensions.nl.amsterdam.type` for:

1. tokens that refer to another token
2. properties that the DTCG specification does not cover
3. values that do not conform to a standard type

We use these types to help decide which preview to render in the Design Tokens Table on each component’s documentation page.

| Type                       | Description                         |
| -------------------------- | ----------------------------------- |
| `aspectRatio`              | Aspect ratio values                 |
| `backgroundImage`          | Background image values (e.g. SVGs) |
| `backgroundPosition`       | Background position values          |
| `border`                   | Border shorthand values             |
| `borderRadius`             | Border radius values                |
| `borderStyle`              | Border style values                 |
| `borderWidth`              | Border thickness values             |
| `cursor`                   | Cursor values                       |
| `dimension`                | Responsive dimensions               |
| `fontSize`                 | Font size values                    |
| `gridTemplateColumns`      | Grid track definitions              |
| `hyphenateLimitChars`      | Hyphenation limit values            |
| `listStyleType`            | List marker styles                  |
| `opacity`                  | Opacity values                      |
| `textDecorationLine`       | Text decoration line values         |
| `textWrap`                 | Text wrapping values                |
| `transitionTimingFunction` | Transition timing function values   |

Note that `dimension` appears both as a standard `$type` and as a custom extension type.
The standard type is for values that conform to the DTCG dimension format (an object with a `value` and `unit`).
The extension type is for responsive dimensions that use `clamp()` expressions, which are not valid DTCG dimensions.

#### Subtype

We add a subtype for certain types to further specify their purpose and preview.

| Subtype      | For type    | Description                |
| ------------ | ----------- | -------------------------- |
| `lineHeight` | `number`    | Line height multipliers    |
| `space`      | `dimension` | Margins, paddings and gaps |

#### Hint

An `$extensions.nl.amsterdam.hint` indicates special handling for internal use.

### Descriptions

Brand and common tokens use the DTCG `$description` property to explain the purpose of a token or group when the name alone is not sufficient.
Add a `$description` when a token has a non-obvious value (e.g. `currentColor`), when similar tokens need to be distinguished (e.g. `background.body` vs `background.default`), or when the value encodes design rationale worth preserving (e.g. pixel equivalents for responsive `clamp()` values).

## Usage in Sass

The tokens can be imported as Sass variables as well.
As they are already prefixed, the namespace that Sass would assign isn’t necessary.

```sass
@use "@amsterdam/design-system-tokens/dist/index.scss" as *;
```

Import the compact tokens if needed.
Note that Sass doesn’t allow importing them alongside the default set due to naming conflicts.
Address these tokens through the `compact` namespace and do not use the spacious tokens they replace.

```sass
@use "@amsterdam/design-system-tokens/dist/compact.scss";

.class {
  padding-block: compact.$ams-space-m;
}
```

## Usage in JavaScript

Import the JSON file to use the tokens in TypeScript or JavaScript.
Here, tokens start their name with a prefix of `ams.`.
Use ‘dot notation’ or square brackets to access the tokens.

<!-- prettier-ignore -->
```tsx
import tokens from "@amsterdam/design-system-tokens/dist/index.json"

const buttonBackgroundColor = tokens.ams.color.interactive.default
const rowGap = tokens.ams.space.m
```

Import and merge the compact tokens if you need them.
Then you can use the tokens in scripting or css-in-js libraries.

<!-- prettier-ignore -->
```tsx
import compactTokens from "@amsterdam/design-system-tokens/dist/compact.json"
import spaciousTokens from "@amsterdam/design-system-tokens/dist/index.json"

const tokens = { ...spaciousTokens, ...compactTokens }
```

## Usage in Figma

The tokens are used in our [Figma Library](https://www.figma.com/community/file/1530535540611888495/amsterdam-design-system-community-edition) as well.

## Updating

We follow semantic versioning and publish a [change log](https://github.com/Amsterdam/design-system/blob/main/packages-proprietary/tokens/CHANGELOG.md) to guide you through updates.
The tokens are a public API of the design system.
Note that detecting changed or deleted tokens is still a manual process.

## Support

Contact us if you have a question, find an issue, or want to contribute.
Find ways to reach us on [designsystem.amsterdam](https://designsystem.amsterdam/?path=/docs/docs-introduction--docs#send-a-message).
