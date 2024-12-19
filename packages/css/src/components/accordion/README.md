<!-- @license CC0-1.0 -->

# Accordion

The accordion component is a clickable (vertically stacked) list of headings to hide or show associated content.
With an accordion, you offer content to users progressively.

## Guidelines

- Use an accordion on a full page with essential and non-essential content.
- Hiding non-essential content helps users get to important content more quickly.
- Avoid using an accordion to avoid too much essential content on 1 page.
- Rewrite the page more compactly or divide the content over multiple pages instead of using the accordion in the first place.
- Don’t hide essential information in an accordion.
- An accordion consists of several accordion sections.
- Use a minimum of 3 and a maximum of 10 sections underneath each other.
- Choose the correct Heading level (`h1` – `h4`) for the accordion sections.
- It is essential for accordion sections to have clear headings, as the user cannot "scan" the hidden content to find relevant information.
- Hiding the content has the disadvantage that "search in page" does not yield any hidden content results.
- If you know the search term the user used to get to the accordion page, you can automatically expand the sections that contain the search term.
- The accordion’s content may contain formatting (e.g. headings, lists, links and buttons).

You can navigate an accordion with your keyboard:

| key            | element                                                                                                               |
| :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Enter or Space | Open or close the accordion section that has the focus                                                                |
| Tab            | Go to the next element that can have focus                                                                            |
| Shift + Tab    | Go to the next element that can have focus                                                                            |
| Down arrow     | If an accordion section has focus, go to the next section; if the last section has focus, go to the first section     |
| Up arrow       | If an accordion section has focus, go to the previous section; if the first section has focus, go to the last section |
| Home           | If an accordion section has focus: go to the first section                                                            |
| End            | If an accordion section has focus, go to the last section                                                             |

## Relevant WCAG requirements

The WCAG requirements for the Button and Heading components also apply to the accordion header.

Pay extra attention to these parts:

- [WCAG requirement 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): the heading level of the accordion sections depends on where in the page the accordion is placed, this may differ per page.
- [WCAG requirement 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): use `aria-controls` for the button, and use a `region` landmark for the expandable region (use the HTML element `<section>` for this)
- [WCAG requirement 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast between text and background and between icon and background is sufficient in all variants, all interactive statuses and all possible combinations.
- [WCAG requirement 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): do not automatically make the accordion expanded when the button gets focus.
- [WCAG requirement 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): Support the optional keys: `Down Arrow`, `Up Arrow`, `Home` and `End`.
- `Space` should activate the button, not scroll the page (use `keypressEvt.preventDefault()`).
- [WCAG requirement 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): The text used both as a heading and as a label for the button must be clear because the content is not always visible.
- [WCAG requirement 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions that are part of the running text must use section headings.

## References

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
