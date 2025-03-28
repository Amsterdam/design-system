import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as s,h as r,P as d,j as a}from"./index-CwUv1-eX.js";import{C as c,W as h,a as l}from"./Card.stories-C9YpkNZ8.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BfcZoz55.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-PqFy-o92.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./exampleContent-PGFPgakh.js";import"./Paragraph-BDLeQ91t.js";const p=`<!-- @license CC0-1.0 -->

# Card

Use a card on an overview page to link to an article page, such as a news article, a job vacancy, or a search result.
The card typically includes the title, introduction, and an image of the content.
The link is mandatory.

## Guidelines

- The title of a card is a link within a heading.
  The same guidelines as for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply here.
  The link is active across the entire area of the card.
- A card needs more content than just a title.
  Supplement this with textual and/or visual content.
- Place the text in a regular paragraph.
  Only use the smallest text size for a tagline or date.
- This component may not be the best option if the content does not represent a detailed page.
  For referencing a thematic page, use a [top task link](/docs/components-navigation-top-task-link--docs).
  You can also use a [regular link](/docs/components-navigation-link--docs).

### Screen readers

With a screen reader, you can navigate using headings and links in a document.
The title of a card is a link within a heading, allowing you to utilize both navigation methods.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
`;/*@license CC0-1.0*/function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-tagline",children:"With tagline"}),`
`,e.jsxs(n.p,{children:[`A card can display a tagline above the heading, a short term like a category or type of information.
Wrap the tagline and the heading in a `,e.jsx(n.code,{children:"Card.HeadingGroup"}),`.
This ensures screen readers first read the heading and then the tagline.`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsxs(n.p,{children:["A card often displays the ",e.jsx(n.a,{href:"/docs/components-media-image--docs",children:"image"}),` of the detail page.
It must use one of the available `,e.jsx(n.a,{href:"/docs/brand-design-tokens-aspect-ratio--docs",children:"aspect ratios"}),"."]}),`
`,e.jsx(a,{of:l})]})}function D(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{D as default};
