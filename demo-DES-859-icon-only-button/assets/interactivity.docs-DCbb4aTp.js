import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as r}from"./index-U8Z6LQ48.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CzmTODLX.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Developer Guide/Interactivity"}),`
`,e.jsx(t.h1,{id:"interactivity",children:"Interactivity"}),`
`,e.jsx(t.p,{children:`By this, we mean elements with which the user can interact, such as links, buttons and form fields.
They must be clearly recognisable and easily distinguishable from non-interactive elements.
Users must be able to operate them in various ways, such as with a mouse, keyboard and touchscreen.`}),`
`,e.jsx(t.h2,{id:"text",children:"Text"}),`
`,e.jsx(t.p,{children:"The result of activating an interactive element must be predictable, even without reading the surrounding text."}),`
`,e.jsx(t.p,{children:`Don’t use generic text fragments like “Click here” or “Read more” for the link’s label.
A more meaningful text helps sighted users scan the page, and screen reader users navigate between links.
It’s also beneficial to search engines.`}),`
`,e.jsx(t.h3,{id:"relevant-wcag-requirements",children:"Relevant WCAG requirements"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#link-purpose-in-context",rel:"nofollow",children:"WCAG 2.4.4"}),": it is clear to users what it means to click on a link"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#headings-and-labels",rel:"nofollow",children:"WCAG 2.4.6"}),": use a label to describe interactive elements"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#label-in-name",rel:"nofollow",children:"WCAG 2.5.3"}),": the accessible name of an element must contain at least the visible text of the element"]}),`
`]}),`
`,e.jsx(t.h2,{id:"colour",children:"Colour"}),`
`,e.jsx(t.p,{children:`To indicate that an element is interactive, we use the colour blue.
For example, inline links and the primary button are blue.
On hover, this becomes dark blue.`}),`
`,e.jsx(t.p,{children:"We use red for interactive elements that are part of an error message."}),`
`,e.jsx(t.p,{children:"Colour should not be the only indicator of interactivity so that people with difficulty perceiving colour differences can still see that an element is interactive."}),`
`,e.jsx(t.h3,{id:"relevant-wcag-requirements-1",children:"Relevant WCAG requirements"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#use-of-color",rel:"nofollow",children:"WCAG 1.4.1"}),": color should not be the only way to indicate that something is interactive"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",rel:"nofollow",children:"WCAG 1.4.3"}),": text has sufficient contrast with the background"]}),`
`]}),`
`,e.jsx(t.h2,{id:"format",children:"Format"}),`
`,e.jsx(t.p,{children:"Interactive elements are at least 24 by 24 pixels in size, so they are easy to use for a large group of users."}),`
`,e.jsx(t.h3,{id:"relevant-wcag-requirements-2",children:"Relevant WCAG requirements"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://w3c.github.io/wcag/guidelines/22/#target-size-minimum",rel:"nofollow",children:"WCAG 2.5.8"}),": interactive elements are at least 24 by 24 pixels in size"]}),`
`]}),`
`,e.jsx(t.h2,{id:"focus-indicator",children:"Focus indicator"}),`
`,e.jsx(t.p,{children:`We use the standard focus indicator of the web browsers.
We only adjust the focus outline with an offset of 2 pixels to increase contrast with dark elements.`}),`
`,e.jsx(t.p,{children:"When setting up a page, ensure that the interactive elements are in a logical order, usually from top to bottom and from left to right."}),`
`,e.jsx(t.h3,{id:"relevant-wcag-requirements-3",children:"Relevant WCAG requirements"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#focus-order",rel:"nofollow",children:"WCAG 2.4.3"}),": interactive elements have a logical focus / tabbing order"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#focus-visible",rel:"nofollow",children:"WCAG 2.4.7"}),": the focus indicator is visible"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum",rel:"nofollow",children:"WCAG 2.4.11"}),": the focus indicator is not completely hidden by content"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced",rel:"nofollow",children:"WCAG 2.4.12"}),": the focus indicator is not partially hidden by content"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/WCAG22/#focus-appearance",rel:"nofollow",children:"WCAG 2.4.13"}),": the focus indicator is at least 2 pixels wide and has sufficient contrast with the element that has focus"]}),`
`]}),`
`,e.jsx(t.h2,{id:"hover",children:"Hover"}),`
`,e.jsx(t.p,{children:`Hover and focus have different, non-overlapping styles.
As a keyboard user, you must know which element you are activating.
A focus style sufficiently different from the hover visualisation helps achieve that goal.`}),`
`,e.jsxs(t.p,{children:["We use the cursor hand ",e.jsx(t.code,{children:"pointer"}),` on hover on all interactive elements without cursor style (such as text boxes).
Originally, `,e.jsx(t.code,{children:"pointer"})," was only intended for links, but we consider the association of ",e.jsx(t.code,{children:"pointer"})," with interactivity to be so strong that we use this cursor more often."]}),`
`,e.jsxs(t.p,{children:["Do not use the ",e.jsx(t.code,{children:"title"}),` attribute.
This attribute has inconsistent browser support, which can cause `,e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns",rel:"nofollow",children:"accessibility issues"}),`.
Furthermore, interactive elements with the `,e.jsx(t.code,{children:"title"})," attribute may show a tooltip overlaying the text, making it less readable."]}),`
`,e.jsx(t.h3,{id:"references",children:"References"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://nl-design-system.github.io/utrecht/storybook//docs/css-link--docs",rel:"nofollow",children:"Utrecht documentation on focus and hover"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.w3.org/TR/css-ui-4/#valdef-cursor-pointer",rel:"nofollow",children:"Specification of cursor pointer."})," States that you should use a pointer for links and may use it for other interactive elements"]}),`
`]}),`
`,e.jsx(t.h2,{id:"double-click",children:"Double click"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://design-system.service.gov.uk/components/button/#stop-users-from-accidentally-sending-information-more-than-once",rel:"nofollow",children:"Some users tend to double-click interactive elements."})," Make sure that this does not lead to problems, for example, by using a loading state and letting the server verify it only uses one instance of the data."]}),`
`,e.jsxs(t.p,{children:["We use the CSS rule ",e.jsx(t.code,{children:"touch-action: manipulation"})," on all interactive elements to prevent devices from unintentionally zooming in and out when clicking or tapping twice."]})]})}function x(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default};
