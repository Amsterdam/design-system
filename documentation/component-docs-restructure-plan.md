<!-- @license CC0-1.0 -->

# Plan: restructure Accessibility and Content sections

## Goal

All normative guidance (what developers must do) moves into `### How to use` under `## Usage guidelines`.
Sections after `## Examples` are descriptive only.
`## Content` is renamed `### How to write` and moves under `## Usage guidelines`.

## Rules

- **How to use**: configuration, composition, required props, wrapping requirements, and any accessibility obligations developers must fulfil (label provision, heading level, ARIA attributes).
- **How to write**: writing guidance for user-visible text (labels, alt text, tone, sentence case).
- **Accessibility**: what the component already does — ARIA roles and attributes, keyboard pattern, how accessible names are generated. Delete the heading if nothing meaningful remains.

Accordion is already done (reference implementation).

## Component-by-component plan

### ActionGroup

**Accessibility → How to use**
Move: "Replace the default 'group' role with `role="toolbar"` for Button toolbars."
**Accessibility**: delete heading (nothing descriptive remains).

---

### Alert

**Content → How to write** (subsection under Usage guidelines)
**Accessibility**: already empty — delete heading.

---

### Avatar

**Accessibility**: already empty — delete heading (if present).

---

### Badge

**Content → How to write**
**Accessibility**: review and keep only descriptive sentences; delete heading if empty.

---

### Blockquote

**Accessibility → How to use**
Move: "If the citation is in a language other than that of the surrounding content, indicate so through the `lang` attribute."
**Accessibility**: delete heading (nothing descriptive remains).

---

### Breadcrumb

**Content → How to write**
**Accessibility**: review and keep only descriptive sentences; delete heading if empty.

---

### Button

**Accessibility → How to use**
Move all three items:

- "Always provide a short, descriptive label that names the action."
- "For icon-only Buttons, supply the label through the `children` prop – it is read by screen readers even though it is not shown."
- "Use `type="submit"` only when the Button submits a form; otherwise keep the default `type="button"`."
  **Content → How to write**
  **Accessibility**: delete heading (nothing descriptive remains).

---

### CallToActionLink

**Content → How to write**
**Accessibility**: review; delete heading if empty.

---

### Calendar

**Accessibility → How to use**
Move: "Give it an accessible name with `accessibleName`."
Move: "The Calendar renders this name as a visually hidden heading and generates a unique `id` for it; pass `accessibleNameId` to set that `id` yourself."
**Accessibility**: keep descriptive sentences:

- "The Calendar renders as a `nav` landmark."
- "Screen readers announce each link with its full date, including the weekday, so a day number is never read out of context."

---

### Card

**Accessibility → How to use**
Move: "Card Heading requires a `level`, because there is no sensible default."
Move: "The guidelines for regular links and headings apply."
**Accessibility**: keep descriptive sentences:

- "Visually, it has the size of a level 3 Heading by default."
- "Screen reader users may navigate a page using headings and links. A Card works well in both approaches as its title carries a link. A screen reader reads the title first, followed by the rest of the content."
  **Content → How to write**

---

### CharacterCount

**Accessibility**: review; move normative items to How to use, delete heading if empty.

---

### Checkbox

**Content → How to write**
**Accessibility → How to use**
Move: "Wrap a list of Checkboxes in a Field Set with a legend describing what the list is about. For example, if the Checkboxes are used to get answers to a question, the legend is the question."
**Accessibility**: delete heading (nothing descriptive remains).

---

### DateInput

**Accessibility → How to use**
Move: "Wrap a Date Input in a Field to associate it with a Label, description, and Error Message."
**Accessibility**: delete heading.

---

### ErrorMessage

**Accessibility → How to use**
Move: "Connect the Error Message to the input it describes through the input's `aria-describedby` attribute."
**Content → How to write**
**Accessibility**: delete heading.

---

### Field

**Accessibility → How to use**
Move: "Connect each related element to the input through `aria-describedby` so screen readers announce them."
**Accessibility**: delete heading.

---

### FieldSet

**Accessibility**: the only sentence ("A Field Set labels the purpose of a group of inputs.") is redundant with the TSDoc — delete the heading.

---

### FileInput

**Accessibility → How to use**
Move: "Wrap a File Input in a Field to associate it with a Label and description."
**Accessibility**: delete heading.

---

### Grid

**Accessibility → How to use** (append to existing How to use)
Move:

- "Use the `as` prop to give a Grid or a Grid Cell a meaningful HTML element when one applies. For example, set a top-level Cell that holds the main content of the page to `as="main"`, or a sidebar Cell to `as="aside"`."
- "Ensure the `span` and `start` values for a cell never exceed the number of columns available at that breakpoint. The browser would add columns to fit, which breaks the layout."
  **Accessibility**: delete heading.

---

### Heading

**Accessibility → How to use** (append to existing How to use)
Move normative items:

- "The `level` prop doesn't have a default value; determine the correct level for each instance."
- "Every page should contain one heading with level 1."
- "Do not skip levels. For example, a level 2 Heading must be followed by one with level 3."
  **Accessibility**: keep the motivational framing as descriptive context:
- "Screen reader users often navigate a page by heading. A correct heading hierarchy lets them build a mental model of the page structure."

---

### Icon

**Accessibility**: review; move normative items to How to use, delete heading if empty.

---

### IconButton

**Accessibility → How to use**
Move: "An Icon Button still needs a label for screen reader users. Provide it through the `children` prop; it is read aloud even though it is not shown."
**Accessibility**: delete heading.

---

### Image

**Accessibility → How to use**
Move all items (alt attribute requirements, decorative images, empty alt).
Keep as descriptive note: "Non-visual browsers hide images with `alt=""` from the user. The alternate text also displays if the image fails to load."
**Content → How to write**

---

### ImageSlider

**Accessibility**: review; move normative items to How to use.

---

### InvalidFormAlert

**Accessibility → How to use** (append to existing How to use)
Move: "The heading level of the Invalid Form Alert depends on where in the page it is placed, this may differ per page."
**Accessibility**: delete heading.

---

### Label

**Accessibility → How to use**
Move: "Always associate a Label with its form control so screen readers announce them together."
**Accessibility**: delete heading.

---

### Link

**Accessibility → How to use** (into existing How to use or new subsection)
Move:

- "Always include `rel="external"` for an external link."
- "Avoid `target="_blank"`, but use `rel="external noopener"` if necessary."
  **Content → How to write**
  **Accessibility**: delete heading.

---

### LinkList

**Accessibility**: review; move normative items to How to use.

---

### Menu

**Content → How to write**
**Accessibility**: review; move normative items to How to use.

---

### OrderedList / UnorderedList

**Accessibility**: review; delete heading if empty.

---

### Page

**Accessibility**: review; move normative items to How to use.

---

### PageFooter

**Accessibility → How to use** (the section is rich; split carefully)
Move normative items:

- "Set the inverse colour on all text and links in this area."
- "If the Page Footer contains Headings, give them level 2 and a size of 'level-3'."
- "Customize it when the menu serves a different purpose, or the interface language is not Dutch."
  Keep descriptive items:
- "The menu includes a visually hidden heading to provide structural context for screen reader users."
- "The default heading text is 'Over deze website'."
  **Accessibility**: keep the two descriptive sentences above; delete heading if they also move.

---

### PageHeader

**Accessibility → How to use**
Move: "If the collapsible menu contains Headings, give them level 2 and a size of 'level-3'."
**Accessibility**: delete heading.

---

### Pagination

**Accessibility → How to use**
Move: "Make sure that the visible and accessible labels for the 'previous' and 'next' buttons convey the same meaning at all times – e.g. don't update one and forget the other."
**Accessibility**: delete heading.

---

### Paragraph

**Content → How to write**
**Accessibility**: review; delete heading if empty.

---

### PasswordInput

**Accessibility → How to use**
Move: "Wrap a Password Input in a Field to associate it with a Label, description, and Error Message."
**Accessibility**: delete heading.

---

### ProgressList

**Accessibility → How to use**
Move: "Choose the correct level for the headings of the steps."
**Accessibility**: delete heading.

---

### Radio

**Accessibility → How to use**
Move: "Wrap a list of Radios in a Field Set so they share a legend and any description or Error Message."
**Content → How to write**
**Accessibility**: delete heading.

---

### SearchField

**Accessibility → How to use**
Move: "Provide a label that describes the purpose of the search."
**Accessibility**: keep descriptive sentence:
"The component uses `role="search"` for the search landmark role."

---

### Select

**Accessibility → How to use**
Move: "Wrap a Select in a Field to associate it with a Label, description, and Error Message."
**Accessibility**: delete heading.

---

### SkipLink

**Accessibility → How to use** (append to existing How to use or create it)
Move:

- "Set `id="inhoud"` on the `main` HTML element and then use `href="#inhoud"` on the Skip Link."
- "If you need multiple words to describe a Skip Link target, use kebab case (`id="op-deze-manier"`)."
  **Accessibility**: delete heading.

---

### Spotlight

**Accessibility → How to use**
Move: "Use the `as` prop to make your markup more semantic."
The sentence "By default, a Spotlight renders a `<div>` element in HTML." is descriptive but minimal; either move it to How to use as context for the instruction or omit it.
**Accessibility**: delete heading.

---

### Switch

**Accessibility → How to use**
Move: "A Switch must have a label, and in most cases, this label should be visible."
**Accessibility**: delete heading.

---

### TabNavigation

**Accessibility → How to use**
Move: "Add `aria-current="page"` to the link pointing to the current page."
**Accessibility**: delete heading.

---

### Table

**Accessibility → How to use** (the section is large)
Move all normative items:

- "Add a caption so users can find and understand the Table without reading its data."
- "Use a Heading in it, at the level that fits the document outline."
- "To place content between the Heading and the Table, keep the Caption but hide it visually, then position the heading and content above the Table."
- "Do not use ARIA relations; they hurt the Table's semantics."
  Keep descriptive sentence:
  "A caption creates the accessible name for the Table, announced by screen readers on every encounter."
  **Accessibility**: keep that one descriptive sentence.

---

### Tabs

**Accessibility → How to use**
Move:

- "Create a panel for each button."
- "Add an `aria-controls` attribute to each button and match its value to the `id` of the associated panel."
  **Accessibility**: delete heading.

---

### TextArea

**Accessibility → How to use**
Move: "A Text Area must have a label, and in most cases, this label should be visible."
**Accessibility**: delete heading.

---

### TextInput

**Accessibility → How to use**
Move: "A Text Input must have a Label, and in most cases, this label should be visible."
**Accessibility**: delete heading.

---

### TimeInput

**Accessibility → How to use**
Move: "Wrap a Time Input in a Field to associate it with a Label, description, and Error Message."
**Accessibility**: delete heading.

---

## Components with no current Accessibility content

These only need a check that the empty heading is removed:
Avatar, Alert (verify), and any others where the section was already a bare heading.

---

## After execution

Update the reference components list in `documentation/component-docs.md` if Accordion's structure no longer matches the description there (it currently reads "an interactive component with rich Features and Design" — still true).
