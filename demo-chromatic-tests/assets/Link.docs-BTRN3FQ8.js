import{j as n}from"./iframe-CEbChPk6.js";import{useMDXComponents as s}from"./index-DRpMYz1A.js";import{M as r,c as a,P as l,e as c,f as t}from"./blocks-D0x-tiA1.js";import{L as d,C as h,I as u}from"./Link.stories-Bx64GDkk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-x-mv1Erx.js";const p=`<!-- @license CC0-1.0 -->

# Link

A link is a navigation element and can be used independently or inline with text.
It is the lightweight variant for navigation.

## Guidelines

- Use a link in the following cases:
  - To navigate to another page within the website or application
  - To navigate to another website (see [External links](#external-links))
  - To navigate to an element on the same page
  - To link to emails or phone numbers (start the link with \`mailto:\` or \`tel:\`)
- A link is a navigation component.
  Use a button instead of a link when an action is desired.
- An icon can be added to links, positioned after the link.
- Too many links on the same page may confuse the user.
- For a link on its own line of text, use the [Standalone Link](/docs/components-navigation-standalone-link--docs).

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
`;/*@license CC0-1.0*/function i(o){const e={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(r,{of:d}),`
`,n.jsx(a,{children:p}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,n.jsxs(e.p,{children:["A Link on a coloured background must set ",n.jsx(e.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,n.jsx(e.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,n.jsx(e.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,n.jsx(e.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,n.jsx(t,{of:u})]})}function v(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{v as default};
