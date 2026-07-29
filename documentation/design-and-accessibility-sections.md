<!-- @license CC0-1.0 -->

# Design and Accessibility sections

A component’s documentation page carries two sections that answer questions the rest of it leaves open: not what the component looks like or how to use it, but why it behaves as it does and what assistive technology makes of it.
Almost all of the material is already in the repository, in the SCSS, the tokens, and the rendered markup, and simply never reached the reader.
This describes how to write both, and how to keep them out of each other’s way.

[component-docs.md](component-docs.md) is the authority on the page as a whole.
It fixes the section order and states what each section is for.
Read it first, rather than drafting against a neighbouring component.

The order the sections sit in, with the ones described here in bold:

Subcomponents → **Usage guidelines** (When to use, When not to use, How to use, How to write) → Examples → Features → **Design** → **Accessibility** → See also → Design tokens.

## The split that decides where a sentence goes

Every claim answers one of two questions, and each question has its own home.

**What does the component do by itself?**
That is Design, when it is a decision someone made about how the component looks or behaves, or Accessibility, when it is what the markup gives assistive technology.

**What must the person building a feature do?**
That is Usage guidelines: How to use for configuration and composition, How to write for wording.

This matters because of who reads what.
Someone assembling a page reads Usage guidelines and skims the rest.
An obligation parked in Accessibility is missed by exactly the person responsible for it.

It is the easiest rule to break, because an obligation that exists _for_ accessibility reasons feels as though it belongs in the Accessibility section.
A quick test per sentence: if the verb commands the reader — set, write, keep, never — and the subject is the reader, it belongs in Usage guidelines.
If it describes what the component, the browser, or a screen reader does, it stays.

Cross-reference instead of duplicating.
Accessibility may state a limitation and point at where the remedy lives, which keeps the problem and its answer connected without saying either twice.

## Researching it

### Read the whole page and its stories first

Both sections have to fit around what the page already says.
Read the `.docs.mdx` end to end, and the `.stories.tsx` beside it.
Two things fall out of this that nothing else catches: prose that repeats what an example already covers, and guidance that contradicts the component’s own stories.

### Read the CSS for Design

Design comes from `packages/css/src/components/<kebab-name>/<kebab-name>.scss`.
Follow every `@use`.
The shared mixins carry real behaviour, and a component that includes `hyphenation` or `text-rendering` gets things worth knowing about that appear nowhere in its own file.

### Resolve the tokens rather than reading them

Nearly every token value in `packages-proprietary/tokens/src` is a reference to another token.
Reading `{ams.typography.heading.2.font-size}` tells you nothing about the size.
Resolve it:

```sh
python3 packages-proprietary/tokens/scripts/resolve_tokens.py ams.heading
```

Cross-check anything surprising against `packages-proprietary/tokens/dist/index.css`, which holds the final computed values.

### Read the React component for Accessibility

Accessibility comes from `packages/react/src/<PascalName>/<PascalName>.tsx`, and every subcomponent beside it.
The section is written from the markup that actually renders: which elements, which attributes, and what wraps what.
This is a different source from Design’s, and mixing them produces an Accessibility section that talks about colour.

Confirm the role mappings from the package’s own tests rather than from a role table, and check what screen readers do with them.
[element-semantics.md](element-semantics.md) covers both, along with the elements whose real-world support diverges from the specification.

### Check WCAG against the specification

Never cite a criterion from memory.
Numbers, levels and URL fragments are all easy to get subtly wrong.
[wcag-citations.md](wcag-citations.md) lists the criteria that recur for content components, how to verify one before citing it, and where the citation belongs.

## Writing Design

Design explains a decision a reader might otherwise question.
Keep it short, and pair it with a Canvas when the choice is visible in a story.

Watch the boundary with Features, which sits directly above it and covers what the component handles out of the box: states, keyboard behaviour, responsive behaviour, validation.
Features says what happens; Design says why it was chosen that way.
When a page has both, a sentence that could sit in either usually belongs in Features, with Design left to carry the reasoning.

Worth including: the type choices and why they differ from body text, deliberate absences such as no margins, no padding or no border, what the component does at a boundary such as a printed page, and the reasoning behind a value that looks arbitrary.

Leave out:

- **Browser workarounds.**
  A quirk the team routed around is not a design decision, even when it changes what renders.
  Its rationale belongs in the CSS comment where it already sits, or in Accessibility when the point is what assistive technology receives.
- **Behaviour inherited from a mixin shared across a whole family of components.**
  It reads as a system-wide choice rather than as this component’s, so link the typography or colour documentation instead.
- **Anything the page already says.**
  Usage guidelines and Examples usually cover the visible variants.
  Design adds the reasoning, not a second description.

## Writing Accessibility

Name the elements the component renders, and say what assistive technology does with them.
Where the component makes a deliberate choice, such as leaving native elements alone rather than adding ARIA, or keeping semantics while hiding a visual marker, say why.

Be straight about limits.
If support is uneven across screen readers, or an element goes unannounced by default, that is more useful to a reader than a tidy claim.
A component that cannot solve something on its own should say so, and point at the guidance that can.

Omit the section entirely when there is nothing to report beyond what a browser gives you for free.
An Accessibility section that only says the component renders a semantic element is noise.

## Before you commit

```sh
npx prettier --check "storybook/src/components/<Name>/*.docs.mdx"
npx eslint storybook/src/components/<Name>/*.docs.mdx
grep "^##\+ " storybook/src/components/<Name>/<Name>.docs.mdx
```

The headings must appear in the order given above, and any subsections must follow When to use → When not to use → How to use → How to write.
Check that every documentation link resolves, by grepping the stories for the sidebar title it points at.

House style: one sentence per line, curly quotes in prose and straight quotes in code, sentence case for headings, Title Case for component names, and British spelling to match the `colour` and `behaviour` already in the docs.

## Traps

**Prose already on the page can be wrong.**
Verify the claims you keep, not only the ones you add.
A Description List section named its `termsWidth` values ‘large’, ‘medium’ and ‘small’ when the property takes `narrow`, `medium` and `wide`.
The percentages beside them were right, which is what made it convincing.

**A page can contradict its own stories.**
Mark forbade highlighting inside titles while its Search results story highlighted matches inside every result heading.
Reading the stories is what surfaces this; reading the prose alone never will.

**Never infer appearance from a codepoint.**
The Unordered List marker is `'\2022'`, U+2022 BULLET, and Amsterdam Sans draws it as a square.
The documentation calling the markers square was correct, and the token value made it look wrong.

**Never infer screen reader behaviour from a role table.**
`mark` maps to a role and is still not announced by most screen readers in their default configuration.
Check what implementations do, not only what the specification assigns.
