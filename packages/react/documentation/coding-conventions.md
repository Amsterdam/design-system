<!-- @license CC0-1.0 -->

# Coding Conventions

## Importing components through barrel files

We use barrel files (`index.ts` in both the package root and each component directory) to make it easier for consuming applications to import components from our React library.
Barrel files allow a consumer to do this:

`import { Heading, Link, Paragraph } from '@amsterdam/design-system-react'`

Instead of a separate import for each component, while even reaching into the `dist` directory:

<!-- prettier-ignore -->
```ts
import Heading from "@amsterdam/design-system-react/dist/Heading/Heading"
import Link from "@amsterdam/design-system-react/dist/Link/Link"
import Paragraph from "@amsterdam/design-system-react/dist/Paragraph/Paragraph"
```

However, barrel files have 2 potential pitfalls:

1. Without proper treeshaking, importing from a barrel file can mean that a consumer imports the entire library, instead of just the components they need. To avoid this, the consumer needs to set up treeshaking in their project (TODO: add documentation on this? Or at least describe both methods of importing?)
2. If a component imports from a sibling component, using a barrel file for this import can lead to cyclical dependencies.

We can avoid this last pitfall by adhering to the following code convention: barrel file imports should only be used to import from a package, not within one.

To illustrate: If the `Accordion` React component needs the `HeadingProps` type from the `Heading` React component, it should import it like this:

`import type { HeadingProps } from '../Heading/Heading'`

Instead of this:

`import type { HeadingProps } from '../Heading'` or `import type { HeadingProps } from '../'`

## Subcomponents

Subcomponents (e.g. `Grid.Cell`) are kept in separate files (e.g. `GridCell.tsx`) and they have their own test files (e.g. `GridCell.test.tsx`). Subcomponents are imported in the main component file. We do not directly expose subcomponents to consumers, so a consumer can only import `Grid`, not `GridCell`.

Prop types are the exception: the barrel file does export the prop type of a subcomponent, so a consumer can type a wrapper around it.
This covers every subcomponent a consumer can reach through the main component, such as `Table.Cell`.
Internal subcomponents that a consumer cannot reach, such as `CalendarHeader`, keep their prop type out of the barrel file.

## Text for screen readers only

Use the `ams-visually-hidden` [utility class](https://designsystem.amsterdam/?path=/docs/utilities-css-visually-hidden--docs) to hide content from sighted users but keep it accessible to non-visual user agents, such as screen readers.

Do not use `aria-label`. Tools for automatic translation often [do not translate its value](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html), and it may get overlooked when doing manual translation.

## Polymorphic components

Some of our components can render different HTML tags; they are polymorphic.
Spotlight and Grid Cell are examples.
We’ve decided to use polymorphism solely for HTML tags that only support global attributes (e.g., `div`, `section`, `footer`, etc.).
This is because other HTML tags require more complicated typing, and it is often simpler to separate the components.
We type the refs as `HTMLElement`, the common type of the elements these components can render, so React refs work with all of them.

Grid and Grid Subgrid are exceptions: they render `ol` and `ul` as well, so a set of Grid Cells can be a list.
Neither types the attributes of an `ol`, and a Subgrid cannot type `start`: it already uses that name for the column it begins at.
Breakout is never a list, so it allows the tags of a Grid without those two.
Its props share a base type with `GridProps` rather than aliasing it.
