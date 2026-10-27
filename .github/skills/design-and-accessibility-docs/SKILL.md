---
name: design-and-accessibility-docs
description: Write or review the Design and Accessibility sections of a component's Storybook documentation page, and route the duties that fall to the reader into Usage guidelines instead. Use whenever asked to document why a component looks or behaves as it does, to add or extend a Design or an Accessibility section, to write up a component's CSS decisions or its accessibility, or to give another component the treatment the Text components got. Use it before reviewing someone else's Design or Accessibility prose too, since none of these conventions are enforced by a test.
license: CC0-1.0
---

<!-- @license CC0-1.0 -->

# Design and Accessibility sections

Read `documentation/design-and-accessibility-sections.md` and follow it.
It is the reference, kept with the repository and shared by everyone working on it: which of the two sections a sentence belongs in, which belong in Usage guidelines instead, and what to leave out of each.
It points at `documentation/wcag-citations.md` and `documentation/element-semantics.md` for the two things easiest to get wrong.
This file adds only what is specific to working here.

## Working method

Every sentence in these sections is a claim about the repository, so take each one from the file that proves it rather than from recall.
Three checks replace three temptations:

```bash
python3 packages-proprietary/tokens/scripts/resolve_tokens.py ams.heading
grep -rn "getByRole" packages/react/src/<PascalName>/*.test.tsx
```

Resolve a token rather than reading it, because nearly every value is a reference to another token.
Confirm a role from the component's own tests rather than from a role table, because a role table says what a specification assigns and not what a screen reader announces.
And open the WCAG criterion's URL rather than citing it from memory — the number, the level and the fragment are each easy to get subtly wrong, and a wrong citation is worse than none.

Read the whole `.docs.mdx` and the `.stories.tsx` beside it before drafting.
Verify the prose already on the page as well as the prose you add: a page that contradicts its own stories is common, and only reading both surfaces it.

## How to verify

```bash
npx eslint storybook/src/components/<Name>/*.docs.mdx
npx prettier --check "storybook/src/components/<Name>/*.docs.mdx"
grep "^##\+ " storybook/src/components/<Name>/<Name>.docs.mdx
```

The last one is the real check: the headings must come out in the order the reference gives, and nothing enforces that.
Confirm every documentation link resolves by grepping the stories for the sidebar title it points at, rather than pattern-matching a URL from memory.

The shell's working directory can reset between commands, so use absolute paths or `cd` at the start of each one.

## What not to do

- Do not put an obligation in the Accessibility section. If the verb commands the reader and the subject is the reader, it belongs in Usage guidelines, where the person responsible will actually see it. This is the easiest rule to break, because an obligation that exists for accessibility reasons feels as though it belongs there.
- Do not infer appearance from a codepoint, or screen reader behaviour from a role. Amsterdam Sans draws U+2022 BULLET as a square, and `mark` has a role but goes unannounced by default.
- Do not add a bullet list of WCAG criteria. One inline citation per page is typical, and more than two means the prose is leaning on citations instead of explaining itself.
- Do not write an Accessibility section that only says the component renders a semantic element. Omit it instead.
