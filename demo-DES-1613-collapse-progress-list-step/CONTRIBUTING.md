<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Naming icons

Icon names are part of the public API, so they must be stable, predictable, and easy to interpret.
Use the guidelines below to name icons consistently.

### General and functional icons

We reserve well-known icons for the functions users naturally associate with them.
This reduces ambiguity and makes the interface more intuitive.

- **Use the function** when the icon has a single, widely recognised UI purpose.
  These names are typically **verbs** (e.g., Save, Close, Print).
  Designate an icon as functional only when its meaning is clear and consistently used across interfaces.
- **Describe the pictogram** when the icon is generic or not tied to a specific interaction.
  These names are usually **nouns** and remain reusable across contexts.
  Broader concepts such as ‘justice’, ‘sustainability’, or ‘transport’ use generic pictograms for now, as no dedicated symbol has been defined for universal use.
- **Start with the simplest name.**
  Only specialise when multiple variants appear (e.g., Ball becomes BallFootball once more types exist).

### Grouping and ordering

- **Begin with the main concept, then add the variant** for compound icons.
  For example: DocumentEdit, not EditDocument.
  This improves grouping and sorting in lists.
- **Do not change natural two-word terms** such as BankCard or IdentityCard.
- For **variations with added shapes**, add the shape name after the concept: Plus and PlusCircle.

### Specific conventions

- **Use ‘backward’ and ‘forward’**, not ‘left’ and ‘right’.
  This supports right-to-left languages.
  ‘Up’ and ‘down’ remain unchanged.
- **Use ‘with’** when the icon depicts two objects interacting:
  DocumentWithPencil, HandWithPlant, PowerPlugWithSocket.
- **Do not use ‘…InCircle’** unless the circle represents a second distinct object.
  A decorative or stylistic container is not enough to justify ‘in’.

## Importing icons from Figma

We create and update icons in Figma, then import them into this package for distribution.

**Important**: Only export icons from Figma for use in this package.
Do not use these icons directly in an application.

To export all icons from our [Figma Library](https://www.figma.com/community/file/1530535540611888495/amsterdam-design-system-community-edition), use Figma's built-in SVG export feature.

1. Select the frame containing all the icon shapes, press `Enter` to select direct children and then press `Enter` again to select all icon components.
2. In the right-hand sidebar, click the plus sign next to Export.
3. Choose SVG and export.
4. Copy these files over to the `icons` folder and run the following command to optimize them:

```sh
pnpm run optimize-icons
```

Then, go to the `react-icons` package and run:

```sh
pnpm run generate
```

This will generate React icon components from all the SVGs in `/icons`.

## Adding a logo for a new brand

Logo SVG files live in the `logo/` folder.
Follow the guidelines below to keep them consistent with the existing logos.

### File naming

Use kebab-case and end the name with `-logo` (e.g., `my-organisation-logo.svg`).
This suffix is required for the generation script to produce the correct React component name.

### SVG markup

The root `<svg>` element must have:

- `xmlns="http://www.w3.org/2000/svg"`
- `fill="none"` — fills are set on individual path elements, not inherited
- `viewBox="0 0 <width> 40"` — the height is always 40; the width scales proportionally

Do not add `width` or `height` attributes to the root; size is controlled via CSS.

Each visual part of the logo is a single `<path>` element.
Set the `class` attribute directly on the `<path>`, not on a wrapping `<g>`:

| Class                      | Use                                        |
| -------------------------- | ------------------------------------------ |
| `ams-logo__emblem`         | The Amsterdam coat of arms (three crosses) |
| `ams-logo__text-primary`   | The main organisation name                 |
| `ams-logo__text-secondary` | A secondary text element, if present       |

Set `fill` on each `<path>` as well.
The Amsterdam red is `#EC0000`; black text uses `#000`.
