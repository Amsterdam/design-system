import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-CxbY7dAs.js";import{M as i,e as r,P as c,f as d,h as o}from"./index-BHgg25fL.js";import{A as h,E as l,R as m}from"./Accordion.stories-BvXPmoV7.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DDzNsyt1.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";import"./exampleContent-B9pMnolB.js";import"./getHeadingTag-C4Rztoc8.js";import"./Icon-Pril9caF.js";import"./useKeyboardFocus-BsBpr6qG.js";const p=`<!-- @license CC0-1.0 -->

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
- [WCAG requirement 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): use \`aria-controls\` for the button, and use a \`region\` landmark for the expandable region (use the HTML element \`<section>\` for this)
- [WCAG requirement 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast between text and background and between icon and background is sufficient in all variants, all interactive statuses and all possible combinations.
- [WCAG requirement 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): do not automatically make the accordion expanded when the button gets focus.
- [WCAG requirement 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): Support the optional keys: \`Down Arrow\`, \`Up Arrow\`, \`Home\` and \`End\`.
- \`Space\` should activate the button, not scroll the page (use \`keypressEvt.preventDefault()\`).
- [WCAG requirement 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): The text used both as a heading and as a label for the button must be clear because the content is not always visible.
- [WCAG requirement 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions that are part of the running text must use section headings.

## References

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`;/*@license CC0-1.0*/function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(r,{children:p}),`
`,e.jsxs(n.p,{children:[`Each accordion section has its unique name.
Provide this name via the `,e.jsx(n.code,{children:"label"})," property of the ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(c,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"expanded-by-default",children:"Expanded by default"}),`
`,e.jsxs(n.p,{children:["If you want the contents of an accordion section to appear initially, pass the ",e.jsx(n.code,{children:"expanded"})," property to the ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h3,{id:"limit-the-amount-of-accessibility-landmarks",children:"Limit the amount of accessibility landmarks"}),`
`,e.jsxs(n.p,{children:["An Accordion Section renders a ",e.jsx(n.code,{children:"section"}),` element in HTML by default.
Each of them introduces a landmark region, but having many of them on a page can confuse screen reader users.
Let Accordions with 6 Sections or more render generic `,e.jsx(n.code,{children:"div"})," elements through ",e.jsx(n.code,{children:'sectionAs="div"'}),"."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"technical-considerations",children:"Technical considerations"}),`
`,e.jsxs(n.h3,{id:"the-accordion-parent-component",children:["The ",e.jsx(n.code,{children:"Accordion"})," parent component"]}),`
`,e.jsx(n.p,{children:"The parent component is used for several reasons:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It sets the spacing between Accordion Sections."}),`
`,e.jsx(n.li,{children:"It allows you to set the same heading level for all Accordion Sections."}),`
`,e.jsx(n.li,{children:"It allows you to set the same HTML element for all Accordion Sections."}),`
`,e.jsx(n.li,{children:"It adds the extra keyboard navigation described in the guidelines."}),`
`]}),`
`,e.jsxs(n.h3,{id:"the-html-details-element",children:["The HTML ",e.jsx(n.code,{children:"details"})," element"]}),`
`,e.jsxs(n.p,{children:["Currently (28-6-2023), the ",e.jsx(n.code,{children:"details"}),` element has some accessibility problems.
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#summaries_as_headings",rel:"nofollow",children:"For example, a heading in a summary is not adequately understood by screen readers"}),` and
NVDA does not read Chrome and Edge’s collapsed and expanded status correctly.
That’s why we chose not to use this native element.
If these problems are solved, we could do this.`]})]})}function M(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{M as default};
