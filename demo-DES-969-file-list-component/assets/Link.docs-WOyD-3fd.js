import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as s}from"./index-BSj771as.js";import{ae as r,aq as a,ar as l,as as c,at as t}from"./index-DTU2WLY-.js";import{L as h,S as d,I as p,C as u,a as m}from"./Link.stories-DIUkspMC.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BDXsQLfT.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-aB47Ck9V.js";import"./index.esm-5uBNoYvV.js";import"./clsx-B-dksMZM.js";import"./decorators-DYZ3zH5Z.js";const g=`<!-- @license CC0-1.0 -->

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
The inline link does have a visited style.
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
`;/*@license CC0-1.0*/function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:g}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"standalone-links",children:"Standalone links"}),`
`,e.jsx(n.p,{children:`Place standalone links directly after a piece of content.
Don’t use them in sentences or paragraphs.
They should never have an associated icon.`}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"inline-links",children:"Inline links"}),`
`,e.jsx(n.p,{children:`Use inline links within sentences or paragraphs of text.
An icon can be added to inline links, positioned after the link.
Don’t use too many inline links on the same page, as it may confuse the user.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:[`A link on a coloured background must adjust its text colour to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.
Stijlweb shows `,e.jsx(n.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/kleuren/",rel:"nofollow",children:"which colours suit which backgrounds"}),`.
Although they only address headings and paragraphs, the same principle applies to links.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set the ",e.jsx(n.code,{children:"contrastColor"}),` prop on a yellow, orange or green background.
It will make the link black.`]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"inverseColor"}),` prop on a purple or dark blue background.
It will make the link white.`]}),`
`,e.jsx(n.li,{children:"On the other background colours, choose either one, but do so consistently."}),`
`,e.jsx(n.li,{children:`There is no current scenario to set both properties at the same time.
For now, the 'inverse' appearance will prevail.`}),`
`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t,{of:m})]})}function S(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{S as default};
