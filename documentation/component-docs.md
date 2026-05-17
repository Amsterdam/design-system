<!-- @license CC0-1.0 -->

# Documentation guidelines

Follow these guidelines for a consistent way of documenting components.
The documentation is aimed at designers deciding which components to use and at developers implementing them.
A content perspective – how to write for a component – is welcome where it adds value.

## Where to place the documentation files

Each component has its documentation in two places.

- The CSS package contains a short `README.md` at `packages/css/src/components/{kebab-case-name}/README.md`.
  This file contains only the component’s rationale.
- The Storybook documentation page is at `storybook/src/components/{PascalCaseName}/{PascalCaseName}.docs.mdx`.
  This file imports the CSS README for the rationale and adds the structured sections below.

The React package’s `README.md` is a single line that links to the CSS README.
Add React-specific documentation only when needed.

## Formatting

Write Markdown with one sentence per line.
This keeps diffs small and reviews focused on the sentences that actually changed.

Use sentence case for headings.
Write component names in title case to help readers recognise them, e.g. ‘Card’ or ‘Form Field’.

## The CSS README

The CSS README contains only the component’s rationale: an H1 with the component name, followed by one short paragraph that explains what the component is and why it exists.
Do not put guidelines, WCAG references, or examples here.
All other documentation lives in the Storybook MDX file, where it can be paired with stories.

```md
<!-- @license CC0-1.0 -->

# Component name

One short paragraph that explains what the component is and why it exists.
```

## The Storybook documentation page

The `.docs.mdx` file follows this fixed content model.
The seminal example – the Primary story – appears right after the rationale, so it is the first thing a visitor sees.
The structured sections below it follow a fixed order and use the exact headings listed here.
Sections are optional: omit any section that has no meaningful content for the component, but never reorder or rename them.

### Sections in order

1. **Rationale** – rendered from the CSS README via `<Markdown>{README}</Markdown>`.
2. **Primary story and Controls** – `<Primary />` and `<Controls />`.
3. **Usage guidelines** – an H2 wrapping ‘When to use’, ‘When not to use’, and an optional list of best-practice bullets.
4. **Examples** – an H2 with an H3 per variant. Each variant has a one-line caption above a `<Canvas of={…} />`.
5. **Features** – what the component does for you out of the box: states, keyboard behaviour, responsive behaviour, validation, etc. Pair with a Canvas where the feature is visual.
6. **Design choices** – notable visual or interaction decisions worth explaining. Pair with a Canvas where the decision is visual.
7. **Accessibility** – what developers must do when composing with this component, e.g. ‘always provide a label’ or ‘choose the right heading level’. Do not list WCAG criteria here.
8. **Content** – writing guidance, only for components with user-visible text such as Button, Heading, Link, and Alert. Omit otherwise.
9. **Related components** – a short bullet list of links to alternatives or companions. Each bullet ends with a one-line reason.
10. **Design tokens** – the auto-generated table via `<DesignTokensTable tokens={tokens} />`.

### Skeleton

The Plop generator produces a skeleton with the canonical headings already in place.
Fill in the sections that apply, and delete any heading you cannot fill in meaningfully.

```mdx
{/* @license CC0-1.0 */}

import { Canvas, Controls, Markdown, Meta, Primary } from "@storybook/addon-docs/blocks";
import * as ComponentStories from "./Component.stories.tsx";
import README from "../../../../packages/css/src/components/component/README.md?raw";
import tokens from "../../../../packages-proprietary/tokens/src/components/ams/component.tokens.json";

import { DesignTokensTable } from "../../_components/DesignTokensTable/DesignTokensTable";

<Meta of={ComponentStories} />

<Markdown>{README}</Markdown>

<Primary />

<Controls />

## Usage guidelines

### When to use

### When not to use

## Examples

## Features

## Design choices

## Accessibility

## Related components

## Design tokens

<DesignTokensTable tokens={tokens} />
```

### Writing each section

**Usage guidelines** answers ‘is this the right component for me?’
‘When to use’ states the scenarios where the component is the right choice.
‘When not to use’ names alternative components or patterns for adjacent scenarios.
Optional best-practice bullets cover do-and-don’t rules that are not about choosing the component, e.g. ‘use a single primary Button per screen’.

**Examples** is the visual catalogue.
Each H3 names a variant or state, followed by a one-line caption that says what the variant is for, followed by a `<Canvas of={…} />` block.

**Features** describes what the component already handles.
Examples: built-in keyboard interactions, focus management, hover and disabled states, responsive behaviour, native validation hooks, dark or compact mode support.
Embed a Canvas when the feature is observable in a story.

**Design choices** explains decisions a reader might otherwise question.
Examples: why three button levels, why a four-pixel border on the left of an Alert, why headings are decoupled from semantic levels.
Keep it short and pair with a Canvas when the choice is visible.

**Accessibility** is composition guidance for developers.
Examples: ‘always associate a Label with a TextInput’, ‘wrap an input and its message in a Field’, ‘choose the heading level that matches the page hierarchy’.
Do not list WCAG criteria; the component handles them internally, and a list of links does not help developers using it.

**Content** is for components with user-visible text.
Examples: button labels use the verb’s infinitive form, link text describes the destination, alert titles are short and specific.

**Related components** is the exit point at the bottom of the body.
List a handful of alternatives or companions, with a one-line reason for each.
