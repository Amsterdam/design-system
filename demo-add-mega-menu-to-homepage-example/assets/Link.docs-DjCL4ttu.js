import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as r,e as a,P as l,f as c,h as t}from"./index-BKCNg8eD.js";import{L as h,S as d,I as p,C as u,a as m}from"./Link.stories-2vveBuId.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-IGW8GlIp.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-D-0Laepb.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";const g=`<!-- @license CC0-1.0 -->

# Link

A link is a navigation element and can be used independently or inline with text.
It is the lightweight variant for navigation.

## Guidelines

Use a link in the following cases:

- To navigate to another page within the website or application
- To navigate to another website (see [External links](#external-links))
- To navigate to an element on the same page
- To link to emails or phone numbers (start the link with \`mailto:\` or \`tel:\`)
- Wrap 2 or more consecutive buttons and/or links in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-buttons-action-group--docs).

A link is a navigation component.
Use a button instead of a link when an action is desired.

### External links

Always include \`rel="external"\` for an external link.
Avoid \`target="_blank"\`, but use \`rel="external noopener"\` if necessary.
For more information: [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/)

### Visited style

Visited links indicate that a user has already opened the link.
We discourage using styles for visited links because they often make the page less clear and navigation more challenging.
It is not part of navigation elements that are frequently scanned.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)

## References

- [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/): Avoid \`target="_blank"\` or use \`rel="external noopener"\` if necessary.
- [_A comprehensive guide to designing perfect links in UX_, on Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): Best practices for links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ by Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): How to write good links? An extensive article on links.
- [_Hover, focus, active_, by Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): A good explanation of the states that elements like links and buttons have in browsers.
- [MDN: \`<a>\`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): Comprehensive overview of all possibilities of links in HTML.
`;/*@license CC0-1.0*/function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(r,{of:h}),`
`,n.jsx(a,{children:g}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"standalone-links",children:"Standalone links"}),`
`,n.jsx(e.p,{children:`Place standalone links directly after a piece of content.
Don’t use them in sentences or paragraphs.
They should never have an associated icon.`}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h3,{id:"inline-links",children:"Inline links"}),`
`,n.jsx(e.p,{children:`Use inline links within sentences or paragraphs of text.
An icon can be added to inline links, positioned after the link.
Don’t use too many inline links on the same page, as it may confuse the user.`}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:[`A link on a coloured background must adjust its text colour to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.
Stijlweb shows `,n.jsx(e.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to links.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"contrast"}),` on a yellow, orange or green background.
It will make the link black.`]}),`
`,n.jsxs(e.li,{children:["Set the ",n.jsx(e.code,{children:"color"})," prop to ",n.jsx(e.code,{children:"inverse"}),` on a purple or dark blue background.
It will make the link white.`]}),`
`,n.jsx(e.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(t,{of:m})]})}function _(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{_ as default};
