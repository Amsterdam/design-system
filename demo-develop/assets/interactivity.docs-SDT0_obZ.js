import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-sVGWgCr0.js";import{r as n}from"./react-DY-v-PkG.js";import{c as r,f as i}from"./blocks-CwVrGAjF.js";import{t as a}from"./mdx-react-shim-CAKBIX2J.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Interactivity`}),`
`,(0,c.jsx)(t.h1,{id:`interactivity`,children:`Interactivity`}),`
`,(0,c.jsx)(t.p,{children:`By this, we mean elements with which the user can interact, such as links, buttons and form fields.
They must be clearly recognisable and easily distinguishable from non-interactive elements.
Users must be able to operate them in various ways, such as with a mouse, keyboard and touchscreen.`}),`
`,(0,c.jsx)(t.h2,{id:`text`,children:`Text`}),`
`,(0,c.jsx)(t.p,{children:`The result of activating an interactive element must be predictable, even without reading the surrounding text.`}),`
`,(0,c.jsx)(t.p,{children:`Don’t use generic text fragments like “Click here” or “Read more” for the link’s label.
A more meaningful text helps sighted users scan the page, and screen reader users navigate between links.
It’s also beneficial to search engines.`}),`
`,(0,c.jsx)(t.h3,{id:`relevant-wcag-requirements`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#link-purpose-in-context`,rel:`nofollow`,children:`WCAG 2.4.4`}),`: it is clear to users what it means to click on a link`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#headings-and-labels`,rel:`nofollow`,children:`WCAG 2.4.6`}),`: use a label to describe interactive elements`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#label-in-name`,rel:`nofollow`,children:`WCAG 2.5.3`}),`: the accessible name of an element must contain at least the visible text of the element`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`colour`,children:`Colour`}),`
`,(0,c.jsx)(t.p,{children:`To indicate that an element is interactive, we use the colour blue.
For example, inline links and the primary button are blue.
We use red for interactive elements that are part of an error message.
Both colours become darker on hover.`}),`
`,(0,c.jsx)(t.p,{children:`Colour should not be the only indicator of interactivity so that people with difficulty perceiving colour differences can still see that an element is interactive.`}),`
`,(0,c.jsx)(t.h3,{id:`relevant-wcag-requirements-1`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#use-of-color`,rel:`nofollow`,children:`WCAG 1.4.1`}),`: colour should not be the only way to indicate that something is interactive`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG21/#contrast-minimum`,rel:`nofollow`,children:`WCAG 1.4.3`}),`: text has sufficient contrast with the background`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`format`,children:`Format`}),`
`,(0,c.jsx)(t.p,{children:`Interactive elements are at least 24 by 24 pixels in size, so they are easy to use for a large group of users.`}),`
`,(0,c.jsx)(t.h3,{id:`relevant-wcag-requirements-2`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://w3c.github.io/wcag/guidelines/22/#target-size-minimum`,rel:`nofollow`,children:`WCAG 2.5.8`}),`: interactive elements are at least 24 by 24 pixels in size`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`focus-indicator`,children:`Focus indicator`}),`
`,(0,c.jsx)(t.p,{children:`We use the standard focus indicator of the web browsers.
We only adjust the focus outline with an offset of 2 pixels to increase contrast with dark elements.`}),`
`,(0,c.jsx)(t.p,{children:`When setting up a page, ensure that the interactive elements are in a logical order, usually from top to bottom and from left to right.`}),`
`,(0,c.jsx)(t.h3,{id:`relevant-wcag-requirements-3`,children:`Relevant WCAG requirements`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#focus-order`,rel:`nofollow`,children:`WCAG 2.4.3`}),`: interactive elements have a logical focus / tabbing order`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#focus-visible`,rel:`nofollow`,children:`WCAG 2.4.7`}),`: the focus indicator is visible`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum`,rel:`nofollow`,children:`WCAG 2.4.11`}),`: the focus indicator is not completely hidden by content`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced`,rel:`nofollow`,children:`WCAG 2.4.12`}),`: the focus indicator is not partially hidden by content`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#focus-appearance`,rel:`nofollow`,children:`WCAG 2.4.13`}),`: the focus indicator is at least 2 pixels wide and has sufficient contrast with the element that has focus`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hover`,children:`Hover`}),`
`,(0,c.jsx)(t.p,{children:`Hover and focus have different, non-overlapping styles.
As a keyboard user, you must know which element you are activating.
A focus style sufficiently different from the hover visualisation helps achieve that goal.`}),`
`,(0,c.jsxs)(t.p,{children:[`We use the cursor hand `,(0,c.jsx)(t.code,{children:`pointer`}),` on hover on all interactive elements without cursor style (such as text boxes).
Originally, `,(0,c.jsx)(t.code,{children:`pointer`}),` was only intended for links, but we consider the association of `,(0,c.jsx)(t.code,{children:`pointer`}),` with interactivity to be so strong that we use this cursor more often.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Do not use the `,(0,c.jsx)(t.code,{children:`title`}),` attribute.
This attribute has inconsistent browser support, which can cause `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#accessibility_concerns`,rel:`nofollow`,children:`accessibility issues`}),`.
Furthermore, interactive elements with the `,(0,c.jsx)(t.code,{children:`title`}),` attribute may show a tooltip overlaying the text, making it less readable.`]}),`
`,(0,c.jsx)(t.h3,{id:`references`,children:`References`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://nl-design-system.github.io/utrecht/storybook//docs/css-link--docs`,rel:`nofollow`,children:`Utrecht documentation on focus and hover`})}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/css-ui-4/#valdef-cursor-pointer`,rel:`nofollow`,children:`Specification of cursor pointer.`}),` States that you should use a pointer for links and may use it for other interactive elements`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`double-click`,children:`Double click`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/button/#stop-users-from-accidentally-sending-information-more-than-once`,rel:`nofollow`,children:`Some users tend to double-click interactive elements.`}),` Make sure that this does not lead to problems, for example, by using a loading state and letting the server verify it only uses one instance of the data.`]}),`
`,(0,c.jsxs)(t.p,{children:[`We use the CSS rule `,(0,c.jsx)(t.code,{children:`touch-action: manipulation`}),` on all interactive elements to prevent devices from unintentionally zooming in and out when clicking or tapping twice.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};