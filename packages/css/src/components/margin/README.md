<!-- @license CC0-1.0 -->

# Margin

Adds white space below a single element.

## Class names

The five sizes of [Component Space](/docs/brand-design-tokens-space--docs) are available for the height of the bottom margin.

| Class name   | Example                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------- |
| `ams-mb--xs` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-margin-xs);" /> |
| `ams-mb--sm` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-margin-sm);" /> |
| `ams-mb--md` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-margin-md);" /> |
| `ams-mb--lg` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-margin-lg);" /> |
| `ams-mb--xl` | <div className="ams-docs-token-example--space" style="inline-size: var(--ams-margin-xl);" /> |

## Guidelines

- Use this utility class to vertically separate one element from the next.
- It can be used on any element and sets the `margin-block-end` CSS property. This declaration is marked with the `!important` flag to ensure it overrides any other margins.
- Elements’ top and bottom margins are sometimes collapsed into a single margin. Consult [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) for details.
- To add equal margins between elements, either use the [Gap](/docs/utilities-css-gap--docs) utility class on their common parent or wrap them in a [Column](/docs/components-layout-column--docs) component.
  This helps in loops: it prevents having to treat the last element differently.
