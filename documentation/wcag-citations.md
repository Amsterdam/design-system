<!-- @license CC0-1.0 -->

# Citing WCAG

Component documentation cites the Web Content Accessibility Guidelines to explain a behaviour, not to record compliance.
This describes how to pick the right criterion, how to check its details, and where a citation belongs on the page.

## How to cite

Cite inline, mid-sentence, and only where the criterion explains the behaviour being described:

> …so the grouping still reaches assistive technology as [WCAG 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships) requires.

Link `https://www.w3.org/TR/WCAG22/#<fragment>` and write the number alone, without the criterion’s title.

Never add a `### Relevant WCAG requirements` bullet list.
That is a developer-guide device.
On a component page it becomes a checklist to maintain, and it reads as compliance paperwork rather than as guidance.

One criterion per page is typical, and some pages need none.
More than two is usually a sign the prose is leaning on citations instead of explaining itself.

A citation should travel with the obligation it describes.
If the reader’s own writing is what satisfies the criterion, the link belongs in Usage guidelines rather than in the Accessibility section.

## Verify before citing

Numbers, conformance levels and URL fragments are all easy to misremember, and a wrong one in published documentation is worse than no citation at all.
Confirm against the specification itself rather than from recall:

```text
https://www.w3.org/TR/WCAG22/#<fragment>
```

The fragment is the criterion’s title in lower case with hyphens, such as `info-and-relationships` or `language-of-parts`.
There are exceptions, so open the link and check the anchor resolves to the criterion you meant.

The design system targets WCAG 2.2 Level AA, so a Level AAA criterion is context rather than a requirement.
Say so if you cite one.

## Confirmed against the 2.2 specification

Verified while documenting the Text components.

| Criterion | Title                  | Level | Fragment                 |
| --------- | ---------------------- | :---: | ------------------------ |
| 1.3.1     | Info and Relationships |   A   | `info-and-relationships` |
| 1.4.1     | Use of Color           |   A   | `use-of-color`           |
| 1.4.12    | Text Spacing           |  AA   | `text-spacing`           |
| 2.4.6     | Headings and Labels    |  AA   | `headings-and-labels`    |
| 2.4.10    | Section Headings       |  AAA  | `section-headings`       |
| 3.1.2     | Language of Parts      |  AA   | `language-of-parts`      |

Two more are already in use elsewhere in the repository and are worth matching rather than restating differently: 4.1.3 Status Messages on the Skeleton page, and 1.3.5 Identify Input Purpose on the Text Input page.

## Likely relevant, confirm the details first

These come up for interactive and media components.
Treat the fragments as a starting point and check each one.

- 1.1.1 Non-text Content (A) — alternative text
- 1.4.3 Contrast (Minimum) (AA) — text against its background
- 1.4.4 Resize Text (AA) and 1.4.10 Reflow (AA) — fluid type and layout
- 1.4.11 Non-text Contrast (AA) — borders, icons, focus indicators
- 2.4.3 Focus Order (A), 2.4.7 Focus Visible (AA), 2.4.11 Focus Not Obscured (AA)
- 2.4.4 Link Purpose (In Context) (A) — link text
- 2.5.3 Label in Name (A) — the accessible name contains the visible text
- 2.5.8 Target Size (Minimum) (AA) — 24 by 24 pixels

## Which criterion actually fits

The temptation is to reach for 1.3.1 for everything, because almost any structural point can be framed as information conveyed through presentation.
Prefer the criterion that names the thing you are describing:

- Structure that exists visually and must also exist in the markup, such as lists, headings, and term-and-description pairs, is **1.3.1**.
- The quality of the words someone writes, in a heading or a label, is **2.4.6**.
- A passage in a different language from the rest of the page is **3.1.2**.
- Something distinguished only by colour, where a colour-blind reader would lose the distinction, is **1.4.1**.
  Note that a background change with a large lightness difference is not colour alone, so this often does not apply where it first seems to.

If no criterion fits cleanly, describe the behaviour and cite nothing.
An approximate citation invites a reader to check it and find it does not say what the sentence claims.
