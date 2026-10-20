<!-- @license CC0-1.0 -->

# How we write

These rules cover the prose in this repository and the prose we write about it.
Where documentation lives and how a documentation page is built is in [component docs](./component-docs.md).

## British English

Write prose in British English, as in ‘colour’, ‘behaviour’, ‘grey’, ‘centre’, ‘organise’, and ‘recognise’.
Prefer the ‘-ise’ ending over ‘-ize’.

A keyword keeps the spelling of the standard that defines it, which is American English throughout our stack.
That covers a CSS property or value, an HTML attribute, a JavaScript or TypeScript API, and every name we coin to sit beside them: a design token, a CSS class, a React prop.

| In prose                            | In code                       |
| ----------------------------------- | ----------------------------- |
| the background colour of a Card     | `--ams-card-background-color` |
| centre the content of a cell        | `align="center"`              |
| the licence header of a source file | `@license`, `LICENSE.md`      |

The last row is the one that often trips readers up: in British English ‘licence’ is the noun and ‘license’ the verb, while the annotation and the file name follow their own conventions.

## The Oxford comma

Write a comma before the final ‘and’ or ‘or’ of a list of 3 or more items, as in ‘Tokens, CSS, and React’.
It keeps a list whose items are themselves compound from reading as one item fewer.

Practice was evenly split when we wrote this down, so this rule is a decision.

## One sentence per line

Write the `.md` and `.mdx` files in this repository, and the TSDoc on anything we export, one sentence per line.
This keeps diffs small and reviews focused on the sentences that actually changed.
A pull request description, a review comment, an issue, or a ticket is not documentation, even when it is Markdown: write it the way that reads well in the tool.
A comment that explains code to whoever edits it wraps to a width instead, as a commit body does.

| Prose                                                        | Line treatment              |
| ------------------------------------------------------------ | --------------------------- |
| `.md` and `.mdx` files                                       | One sentence per line       |
| TSDoc on anything we export                                  | One sentence per line       |
| A comment inside an implementation                           | Wrap to a width             |
| A commit body                                                | Wrap to about 72 characters |
| A token `$description`                                       | No line rule                |
| A pull request description, review comment, issue, or ticket | No line rule                |

TSDoc sits on the first side because react-docgen renders it onto the Storybook page and into IDE tooltips, as [component docs](./component-docs.md#the-component-tsdoc) sets out.
A comment above an effect or a selector is read in the editor only, so a width wrap serves it better.

## Writing style

These patterns apply to every row of the table, whatever its line treatment.

- **Lead with the point.** Put the subject and what it does first, as in ‘Both NL Design System and gov.uk recommend this pattern for these dates’.
- **Drop a contrast that adds nothing.** ‘The parts wrap onto a second line rather than staying on one line’ says one thing twice. Write what happens.
- **State a fact once.** ‘a date the user has to look up, a date that they don’t already know’ repeats itself within the sentence.
- **Drop the hedge in front of a rule without exceptions.** ‘You should try to make sure the `lang` attribute is in effect’ is ‘Make sure the `lang` attribute is in effect’.
- **Delete a sentence that adds nothing.** Don’t shorten it, remove it.
- **Reuse the word we already have.** A label and its input is a ‘field’, because that is what Field wraps. A second word for the same thing costs the reader.
- **Give a second idea a sentence of its own.** ‘…, which is what makes an example date above the fields possible there’ hangs a new idea on the end of a sentence.
- **Use no em dashes.** A comma, a colon, a full stop, or an _en_ dash does the same work.

Where these rules say nothing, follow the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide), which is also in British English.
Where the two differ, these rules win.
