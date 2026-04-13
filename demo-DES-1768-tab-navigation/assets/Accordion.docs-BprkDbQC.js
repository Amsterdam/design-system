import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-DtL5yi8J.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{ExpandedByDefault as f,Level as p,ReduceLandmarks as m,n as h,t as g}from"./Accordion.stories-DUPa8Vfv.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

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
`})),y,b,x=e((()=>{y={accordion:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsxs)(t.p,{children:[`Each accordion section has its unique name.
Provide this name via the `,(0,w.jsx)(t.code,{children:`label`}),` property of the `,(0,w.jsx)(t.code,{children:`Accordion.Section`}),` component.`]}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`level`,children:`Level`}),`
`,(0,w.jsx)(t.p,{children:`There are 3 hierarchical levels of headings possible.
There is no default value; determine the correct level for each instance.
Every Accordion Section Heading in an Accordion has the same hierarchical level.
Changing the level also changes the visual size of the heading.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`expanded-by-default`,children:`Expanded by default`}),`
`,(0,w.jsxs)(t.p,{children:[`If you want the contents of an Accordion Section to appear initially, pass the `,(0,w.jsx)(t.code,{children:`expanded`}),` property to the `,(0,w.jsx)(t.code,{children:`Accordion.Section`}),` component.`]}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h3,{id:`limit-the-amount-of-accessibility-landmarks`,children:`Limit the amount of accessibility landmarks`}),`
`,(0,w.jsxs)(t.p,{children:[`An Accordion Section renders a `,(0,w.jsx)(t.code,{children:`section`}),` element in HTML by default.
Each of them introduces a landmark region, but having many of them on a page can confuse screen reader users.
Let Accordions with 6 Sections or more render generic `,(0,w.jsx)(t.code,{children:`div`}),` elements through `,(0,w.jsx)(t.code,{children:`sectionAs="div"`}),`.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`technical-considerations`,children:`Technical considerations`}),`
`,(0,w.jsxs)(t.h3,{id:`the-accordion-parent-component`,children:[`The `,(0,w.jsx)(t.code,{children:`Accordion`}),` parent component`]}),`
`,(0,w.jsx)(t.p,{children:`The parent component is used for several reasons:`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsx)(t.li,{children:`It sets the spacing between Accordion Sections.`}),`
`,(0,w.jsx)(t.li,{children:`It allows you to set the same heading level for all Accordion Sections.`}),`
`,(0,w.jsx)(t.li,{children:`It allows you to set the same HTML element for all Accordion Sections.`}),`
`,(0,w.jsx)(t.li,{children:`It adds the extra keyboard navigation described in the guidelines.`}),`
`]}),`
`,(0,w.jsxs)(t.h3,{id:`the-html-details-element`,children:[`The HTML `,(0,w.jsx)(t.code,{children:`details`}),` element`]}),`
`,(0,w.jsxs)(t.p,{children:[`Currently (28-6-2023), the `,(0,w.jsx)(t.code,{children:`details`}),` element has some accessibility problems.
`,(0,w.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#summaries_as_headings`,rel:`nofollow`,children:`For example, a heading in a summary is not adequately understood by screen readers`}),` and
NVDA does not read Chrome and Edge’s collapsed and expanded status correctly.
That’s why we chose not to use this native element.
If these problems are solved, we could do this.`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};