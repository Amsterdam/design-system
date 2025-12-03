<!-- @license CC0-1.0 -->

# Contributing Guidelines

## Naming icons

Icon names are part of the public API, so they must be stable, predictable, and easy to interpret.
Use the guidelines below to name icons consistently.

Here is the revised version with the two additional clarifying sentences integrated:

### General and functional icons

We reserve well-known icons for the functions users naturally associate with them.
This reduces ambiguity and makes the interface more intuitive.

- **Use the function** when the icon has a single, widely recognised UI purpose.
  These names are typically **verbs** (e.g., Save, Close, Print).
  Designate an icon as functional only when its meaning is universally clear and consistently used across interfaces.
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
- **Distinguish variants** using forms or overlays added after the concept:
  Plus, PlusCircle, Person, PersonAdd, PersonEdit.

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
npm run optimize-icons
```

Then, go to the `react-icons` package and run:

```sh
npm run generate
```

This will generate React icon components from all the SVGs in `/icons`.
