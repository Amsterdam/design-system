import{j as n}from"./index.esm-yhfThtqi.js";import{M as a,d as r,P as l,e as c,f as t}from"./index-2qHUMmcB.js";import{L as h,S as d,I as p,a as g,b as m,o as k,c as u}from"./Link.stories-7N5saBVw.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-9G6G5meE.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const f=`# Link

A link is a navigation element and can be used independently or inline with text.
It is the lightweight variant for navigation.

## Guidelines

Use a link in the following cases:

- To navigate to another page within the website or application
- To navigate to another website (see [External links](#external-links))
- To navigate to an element on the same page
- To link to emails or phone numbers (start the link with \`mailto:\` or \`tel:\`)

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

## Relevant WCAG Requirements

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
`;function s(i){const e=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:h}),`
`,n.jsx(r,{children:f}),`
`,n.jsx(l,{}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"standalone-links",children:"Standalone Links"}),`
`,n.jsx(e.p,{children:`Place standalone links directly after a piece of content.
Don’t use them in sentences or paragraphs.
They should never have an associated icon.`}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h3,{id:"inline-links",children:"Inline Links"}),`
`,n.jsx(e.p,{children:`Use inline links within sentences or paragraphs of text.
An icon can be added to inline links, positioned after the link.
Don’t use too many inline links on the same page, as it may confuse the user.`}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"links-in-lists",children:"Links in Lists"}),`
`,n.jsx(e.p,{children:`Use chevrons for lists of links.
Chevrons can be replaced by other icons within a category.
However, a combination of chevrons and icons within a category is not allowed.`}),`
`,n.jsx(t,{of:g}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"on-dark-background",children:"On Dark Background"}),`
`,n.jsx(t,{of:k}),`
`,n.jsx(e.h3,{id:"on-light-background",children:"On Light Background"}),`
`,n.jsx(t,{of:u})]})}function D(i={}){const{wrapper:e}=Object.assign({},o(),i.components);return e?n.jsx(e,Object.assign({},i,{children:n.jsx(s,i)})):s(i)}export{D as default};
