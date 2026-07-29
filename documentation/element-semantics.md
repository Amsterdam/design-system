<!-- @license CC0-1.0 -->

# Element semantics and what screen readers do with them

An Accessibility section on a component page stands on two facts: which element the component renders, and what assistive technology makes of it.
The first is in the React source.
The second is not, and the gap between the specification and real implementations is where these sections go wrong.

## Confirm a role from the package’s own tests

Testing Library queries resolve against the same accessibility tree a browser builds, so an assertion that passes in CI is evidence rather than recollection:

```sh
grep -rn "getByRole" packages/react/src/<PascalName>/*.test.tsx
```

Confirmed this way while documenting the Text components:

| Element      | Role         | Confirmed by                                     |
| ------------ | ------------ | ------------------------------------------------ |
| `blockquote` | `blockquote` | `Blockquote.test.tsx`                            |
| `dt`         | `term`       | `DescriptionListTerm.test.tsx`                   |
| `dd`         | `definition` | `DescriptionListDescription.test.tsx`            |
| `ol`, `ul`   | `list`       | `OrderedList.test.tsx`, `UnorderedList.test.tsx` |

From the ARIA in HTML specification, for elements with no such test: `li` is `listitem` inside a list, `p` is `paragraph`, and `h1` to `h6` are `heading` with a matching `aria-level`.
Both `b` and `small` are `generic`, which is to say they carry no meaning at all.
That is worth stating outright on a page for a component that adds one.

## Where support diverges from the specification

A role in the table above does not mean a screen reader announces it.
These two came up in the Text components, and both changed what the documentation had to say.

**`mark` is not announced.**
Most screen readers ignore highlighted text in their default configuration, so a reader who does not see the page gets the sentence without learning which words were singled out.
MDN suggests visually hidden text through `::before` and `::after` to announce the boundaries, and warns against it in the same breath: people who use screen readers often switch off exactly this kind of verbosity.
The design system does not do it.
The honest documentation says the component cannot carry the information alone, and points at the guidance that can.

**`dl` is exposed inconsistently.**
Screen readers differ on the item count they report, the context they give a term or a description, and the navigation commands they offer.
MDN notes that VoiceOver announces `dl` content as a list when navigating with the virtual cursor but supports no list navigation commands for it.
It warns specifically against adding the ARIA `term` and `definition` roles, because doing so changes how VoiceOver announces the list.
Leaving the native elements alone is a decision worth documenting, not an omission.

The pattern generalises.
When a component’s semantics are correct but support is patchy, say so.
Someone deciding whether to rely on a structure is better served by an accurate picture than by a clean claim they will discover is optimistic.

## Where to check

- ARIA in HTML, for the role a specification assigns: `https://www.w3.org/TR/html-aria/`
- MDN’s element pages, for the accessibility notes and real-world caveats.
  They carry the screen reader behaviour that the specifications do not.
- The component’s own test file, which beats both for what this codebase actually produces.
