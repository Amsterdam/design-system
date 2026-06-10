<!-- @license CC0-1.0 -->

# Documentation guidelines

Follow these guidelines for a consistent way of documenting components.
The documentation is aimed at designers deciding which components to use and at developers implementing them.
A content perspective – how to write for a component – is welcome where it adds value.

## Where to place the documentation files

Each React component has its documentation in two places.

- The React component at `packages/react/src/{PascalCaseName}/{PascalCaseName}.tsx` carries the component’s rationale in its TSDoc comment.
  Storybook reads this via react-docgen and renders it on the documentation page.
  It also surfaces in IDE tooltips when the component is used.
- The Storybook documentation page is at `storybook/src/components/{PascalCaseName}/{PascalCaseName}.docs.mdx`.
  This file renders the name and description from the component TSDoc and adds the structured sections below.

CSS-only utilities (documented under `storybook/src/utils/`) have no React component, so there is no TSDoc to read from.
Their rationale stays in a `README.md` in the CSS package, imported and rendered with `<Markdown>{README}</Markdown>` in place of `<Title />` and `<Description />`.
If a utility ever gains a React component, migrate it to the TSDoc approach at that point.

## Formatting

Write Markdown with one sentence per line.
This keeps diffs small and reviews focused on the sentences that actually changed.

Use sentence case for headings.
Write component names in title case to help readers recognise them, e.g. ‘Card’ or ‘Form Field’.

## The component TSDoc

This section applies to React components only; CSS-only utilities keep their CSS README (see above).

The TSDoc comment on the exported component function contains the component’s rationale: one or two sentences that describe what the component is and why it exists in the design system.
Keep it focused on the component’s unique role; omit usage hints, visual and implementation details, and content guidance.
Do not open with the component’s own name — the title shown above it already provides that context.
Do not put guidelines, WCAG references, or examples here.
All other documentation lives in the Storybook MDX file, where it can be paired with stories.

Place the description in the JSDoc block directly above the component declaration:

```tsx
/**
 * One short paragraph that explains what the component is and why it exists.
 */
export const ComponentName = forwardRef(/* ... */);
```

## The Storybook documentation page

The `.docs.mdx` file follows this fixed content model.
The seminal example – the Primary story – appears right after the rationale, so it is the first thing a visitor sees.
The structured sections below it follow a fixed order and use the exact headings listed here.
Sections are optional: omit any section that has no meaningful content for the component, but never reorder or rename them.

### Sections in order

1. **Title and description** – `<Title />` and `<Description of={…} />`, rendered from the component’s TSDoc via react-docgen.
2. **Primary story and Controls** – `<Primary />` and `<Controls />`.
3. **Subcomponents** – if the component has named subcomponents, an H2 with an H3 per subcomponent. Each H3 includes a brief description and a `<Canvas>` and `<Controls>` pair. Omit if there are none.
4. **Usage guidelines** – an H2 with up to four H3 subsections: ‘When to use’, ‘When not to use’, ‘How to use’, and ‘How to write’.
5. **Examples** – an H2 with an H3 per variant. Each variant has a one-line caption above a `<Canvas of={…} />`.
6. **Features** – what the component does for you out of the box: states, keyboard behaviour, responsive behaviour, validation, etc. Pair with a Canvas where the feature is visual.
7. **Design** – notable visual or interaction decisions worth explaining. Pair with a Canvas where the decision is visual.
8. **Accessibility** – what the component does to meet accessibility requirements: the ARIA roles and patterns it implements, how it handles keyboard interaction, and which WCAG criteria it addresses. Omit the section if there is nothing meaningful to say.
9. **Related components** – a short bullet list of links to alternatives or companions. Each bullet ends with a one-line reason.
10. **Design tokens** – the auto-generated table via `<DesignTokensTable tokens={tokens} />`.

### Skeleton

The Plop generator produces a skeleton with the canonical headings already in place.
Fill in the sections that apply, and delete any heading you cannot fill in meaningfully.

```mdx
{/* @license CC0-1.0 */}

import { Canvas, Controls, Description, Meta, Primary, Title } from "@storybook/addon-docs/blocks";
import * as ComponentStories from "./Component.stories.tsx";
import tokens from "../../../../packages-proprietary/tokens/src/components/ams/component.tokens.json";

import { DesignTokensTable } from "../../_components/DesignTokensTable/DesignTokensTable";

<Meta of={ComponentStories} />

<Title />

<Description of={ComponentStories} />

<Primary />

<Controls />

## Subcomponents

### SubcomponentName

## Usage guidelines

### When to use

### When not to use

### How to use

### How to write

## Examples

## Features

## Design

## Accessibility

## Related components

## Design tokens

<DesignTokensTable tokens={tokens} />
```

### Writing each section

**Subcomponents** introduces named subcomponents that consumers use alongside the primary component.
List each one under its own H3 with a brief description and a `<Canvas>` and `<Controls>` pair so developers can explore its API immediately.

**Usage guidelines** answers ‘is this the right component for me, and how do I use it correctly?’
‘When to use’ states the scenarios where the component is the right choice.
‘When not to use’ names alternative components or patterns for adjacent scenarios.
‘How to use’ covers practical guidance for correct configuration and composition: count and placement rules, prop combinations, required props or wrapping elements, do-and-don’t rules that are not about choosing the component.
This subsection is also the right place for accessibility requirements that developers must satisfy when composing the component, such as providing a label or choosing a heading level.
Add it only when there is substantive guidance that clearly does not belong in the other subsections; omit it for components where ‘When to use’ already captures everything the reader needs.
‘How to write’ covers writing guidance for components with user-visible text: label conventions, tone, sentence case, when to use abbreviations.
Include it only for components where content choices noticeably affect usability or accessibility, such as Button, Heading, Link, and Alert.

**Examples** is the visual catalogue.
Each H3 names a variant or state, followed by a one-line caption that says what the variant is for, followed by a `<Canvas of={…} />` block.

**Features** describes what the component already handles.
Examples: built-in keyboard interactions, focus management, hover and disabled states, responsive behaviour, native validation hooks, dark or compact mode support.
Embed a Canvas when the feature is observable in a story.

**Design** explains decisions a reader might otherwise question.
Examples: why three button levels, why a four-pixel border on the left of an Alert, why headings are decoupled from semantic levels.
Keep it short and pair with a Canvas when the choice is visible.

**Accessibility** describes what the component does for accessibility.
Examples: which ARIA role the component uses, how keyboard interaction is implemented, how the component creates accessible names or announces state changes.
Do not put composition instructions here; those belong in ‘How to use’.
Omit the section if the component has no meaningful accessibility behaviour to describe beyond what the browser and standard HTML already provide.

**Related components** is the exit point at the bottom of the body.
List a handful of alternatives or companions, with a one-line reason for each.

## Reference components

These three components are worked examples of the content model.
When in doubt, mirror the structure of the closest one.

- [Accordion](../storybook/src/components/Accordion/Accordion.docs.mdx) – an interactive component with rich Features and Design.
- [Button](../storybook/src/components/Button/Button.docs.mdx) – an interactive component with a Content section.
- [Grid](../storybook/src/components/Grid/Grid.docs.mdx) – a structural component with Design that drive layout decisions.
