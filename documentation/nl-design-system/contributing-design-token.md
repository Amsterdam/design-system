<!-- @license CC0-1.0 -->

# Contribution Guidelines for Design Tokens

## Naming order

1. Prefix
2. Component name / Pattern name
3. Element name (optional)
4. Modifiers (optional)
5. Property

As CSS custom property:

For example, in a custom property in CSS:

```css
:root {
  /* --prefix-component-element-modifier-property: value; */
  --nl-button-icon-disabled-opacity: 0.5;
}
```

## Be unoriginal when naming things

Look at web standards first, consider names from popular UI frameworks only second.

For components, you can look at:

- you can look the [Widgets of WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/).
- you can consider the [various roles of WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization).
- you can consider HTML elements an the full name the HTML specification uses instead of the abbreviations used in the tag name.

For elements that make up components:

- you can look at CSS pseudo-selectors. For example:
  - `::marker`
  - `::placeholder`
- you can look the [Widgets of WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/). For example:
  - the Accordion Widget specifies "accordion **header**" and "accordion **panel**".

For the modifiers:

- you can look at [CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes). For example:
  - `:disabled`
  - `:read-only`
- you can look at HTML (boolean) attributes. For example:
  - `disabled`
  - `readonly`
- you can look at WAI-ARIA attributes. For example:
  - `aria-expanded`
  - `aria-current`

For properties:

- you can look at CSS properties. For example:
  - `background-color`
  - `font-family`
- you can look at SVG attributes. For example:
  - `fill`
