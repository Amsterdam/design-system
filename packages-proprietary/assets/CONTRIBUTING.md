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
4. Copy these files over to the `icons` folder.
5. If any new or updated icons are directional, add `data-directional="true"` to the root `<svg>` element of each.
   See [Right-to-left (RTL) mirroring](#right-to-left-rtl-mirroring) for the classification criteria.
6. Run the following command to optimize them:

```sh
pnpm run optimize-icons
```

Then, go to the `react-icons` package and run:

```sh
pnpm run generate
```

This will generate React icon components from all the SVGs in `/icons`.

## Right-to-left (RTL) mirroring

Some icons imply a reading direction or depict movement that follows the reader's natural flow.
These icons must be horizontally flipped when rendered in a right-to-left (RTL) context.
Others — universal symbols, physical objects held in the right hand, and media transport controls — must remain unchanged.

The CSS package applies `transform: scaleX(-1)` to any icon SVG that carries the attribute `data-directional="true"` when it has a computed direction of RTL (`:dir(rtl)`).
The attribute is set directly on the root `<svg>` element of the source file in `packages-proprietary/assets/icons`; SVGR carries it through to the generated `react-icons` component unchanged, the same way it carries through `viewBox` or `xmlns`.

### When to mirror

**The icon explicitly points toward the start of the reading line.**
Arrows and chevrons that navigate backward or forward are the clearest example: ArrowBackward, ArrowForward, ChevronBackward, ChevronDoubleBackward, ChevronDoubleForward, ChevronForward.
In RTL, 'backward' is to the right, so these must flip.

**The icon depicts a person, vehicle, or object moving in the direction of reading flow.**
Icons showing something travelling horizontally imply it is headed toward the reading-start side.
Side-facing person icons follow the same rule: the figure should face toward the text (the reading-start side), not away from it.
Examples: Airplane, Bike, Bus, Car, PersonAtDesk, PersonInWheelchair, PersonInWheelchairMoving, PersonSwimming, Stroller.

**The icon has an anchor element that should face nearby text.**
A speech balloon's tail points toward the speaker.
In RTL the speaker sits on the right, so the tail must flip.
All SpeechBalloon variants and Megaphone follow this rule.
An external-link arrow points toward the linked destination; in RTL that indicator should open toward the right (LinkExternal, LinkExternalFill).

**The icon encodes the direction of a flow or sequence.**
Authentication arrows (LogIn, LogOut) point toward or away from a protected area, following the reading direction of the threshold they reference.
History arrows (Undo, Redo) curve back and forward along a timeline; both flip so the visual direction is consistent with the reading-start orientation.
Text-layout icons (List, FontSize) show the start and end of a line; both flip so bullets and growing characters correctly reflect RTL text direction.

**The icon depicts a directional transaction.**
HandWithEuroCoin and HandWithPlant show a hand extending an offer.
Although hands are associated with the right hand by the Material Design 'right-hand rule' (see below), these icons depict a directed transfer rather than a passive held object, so they are treated as directional.

**Volume icons.**
VolumeOn, VolumeOnFill, VolumeOff, and VolumeOffFill depict a speaker whose sound waves emerge toward the reading-start side.
Material Design M2 mirrors both the speaker and any associated slider so the level indicator progresses in the reading direction.
This is a contested case (Apple does not mirror volume icons); see 'Notable edge cases' below.

### When not to mirror

**Media transport controls.**
Play, Pause, Next, Previous, FastForward, and Rewind icons represent tape direction, not reading order.
Note that Next and Previous in this icon set are 'skip to next/previous track' shapes (a triangle alongside a vertical bar), not generic navigation arrows.
They are universal across LTR and RTL and must not be flipped.

**Rotation and circular motion.**
The linear representation of time mirrors in RTL; the circular direction of time does not.
Clocks turn clockwise in every locale; circular progress indicators, Refresh, Replay, and RotateClockwise all follow this physical universal.
The History icon — a counter-clockwise arc around a clock face — might seem linear, but it represents circular time (rewinding the clock), so it is also not mirrored.

**Objects typically held in the right hand.**
Pens, pencils, brushes, gavels, syringes, rulers, and similar instruments have a conventional right-hand orientation.
Mirroring them would suggest a left-hand world that is not the intent of these icons.

**Vertical-only indicators.**
ArrowUp, ArrowDown, ChevronUp, ChevronDown, Download, Upload, and Share all point along the vertical axis.
RTL layout does not affect vertical direction.

**Approval and disapproval gestures.**
ThumbsUp and ThumbsDown are fixed-orientation gestures recognised worldwide in the same direction.
Note also that a thumbs-up gesture is considered culturally offensive in the Persian/Iran locale regardless of direction; these icons should be used with care in any RTL context, not just not mirrored.

**Data visualisation.**
BarChart, LineChartUp, and LineChartDown depict abstract data.
Time progresses left-to-right on charts even in RTL cultures, so flipping these icons would be misleading.

**Symmetric icons.**
Bell, CheckMark, Heart, Info, Star, Warning, and other bilaterally symmetric icons need no mirroring.

**Slashes and strokes-through.**
A slash or stroke used to indicate an off or disabled state does not mirror.
The LTR slash is internationally recognised as a negation symbol.

**Brand marks.**
Facebook, Instagram, LinkedIn, Whatsapp, X, and other logotype icons have a fixed orientation set by brand guidelines.

### Notable edge cases

**Undo / Redo.**
Both icons have a dual nature: their arrow curves in a circular arc (circular time) but points in a horizontal direction (linear time).
Material Design M2 acknowledges this tension explicitly, calling it a choice between the two representations.
We mirror both icons, prioritising the linear-time (horizontal) reading, so the Undo arc curves toward the reading start and the Redo arc curves toward the reading end in both LTR and RTL.

**Arrows used for document pagination.**
The Persian Human Interface Guidelines note that horizontal arrows for 'previous page' and 'next page' are semantically ambiguous in bidi environments: the same UI may display both LTR and RTL documents, so flipping the arrows based on reading direction disconnects them from their established meaning.
Our ArrowBackward and ArrowForward icons are named for UI-level navigation direction (the same direction as reading), not for document pagination.
Used in that context — tabs, carousels, pagination controls whose directionality follows the UI locale — mirroring is correct.
If an application uses these icons for document-content navigation (e.g. previous chapter in a document whose direction may differ from the UI), the Persian HIG recommends using vertical arrows or plain text labels instead.

**QuotationMarkOpen / QuotationMarkClose.**
Mirroring swaps the open and close roles in RTL context, which is the intended behaviour for generic quote-decoration use.
Note that Arabic typography uses distinct glyphs for quotation marks, not laterally mirrored Latin ones.
An application targeting Arabic-script typography should supply locale-specific SVGs rather than relying on this CSS transform.

**LockOpen / LockOpenFill.**
The closed padlock (`LockClosed`, `LockClosedFill`) has a symmetric shackle — both arms re-enter the lock body — so it is correctly excluded.
The open padlock has an asymmetric shackle: the free arm exits on the right side of the lock body in LTR.
In RTL the free arm should exit on the left, so `LockOpen` and `LockOpenFill` are directional.

**PersonsWithEuroCoin / PersonsWithEuroCoinFill.**
Unlike HandWithEuroCoin, this icon is bilaterally symmetric: the coin sits at the horizontal centre, flanked by two mirrored figures.
There is no directed transfer to indicate, so it is correctly excluded.

**Volume icons.**
Material Design M2 mirrors the speaker icon so sound waves and any associated slider progress in the reading direction.
Apple's Human Interface Guidelines leave volume icons unmirrored, treating them as a universal symbol.
We follow Material Design here.
If a strong product reason arises to revisit this, document the reasoning before changing the classification.

### Adding or reclassifying an icon

When adding a new icon that may be directional:

1. Apply the criteria above.
2. If it is directional, add `data-directional="true"` to the root `<svg>` element of the source file in `icons`.
3. If the classification is genuinely ambiguous, document the reasoning in 'Notable edge cases' above.
4. Re-run `pnpm run generate` in the `react-icons` package to regenerate the component.

### Current directional icons

The source SVG is the canonical source: an icon is directional if and only if its file in `packages-proprietary/assets/icons` carries `data-directional="true"` on the root `<svg>` element.

### References

- [RTL Styling Guide — Bidirectional icons](https://rtlstyling.com/posts/rtl-styling/#bidirectional-icons) — Ahmad Shadeed
- [Material Design M2 — Bidirectionality: Mirroring elements](https://m2.material.io/design/usability/bidirectionality.html#mirroring-elements)
- [Persian Human Interface Guidelines — Icons and Images (§ 4.2)](https://github.com/shervinafshar/Persian-HIG/blob/main/en/PersianHIG_EN_Main4_Chapter4.md#42-icons-and-images)

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
