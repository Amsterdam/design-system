import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DSz_1G2r.js";import{M as s,d as r,P as c,f as a}from"./index-Dq3Z0_M9.js";import{C as d,W as l,a as h}from"./Card.stories-Dzo6yLm_.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-pLPDy5sj.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-CkaSE4JO.js";const p=`<!-- @license CC0-1.0 -->

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

## Screen Readers

With a screen reader, you can navigate using headings and links in a document.
The title of a card is a link within a heading, allowing you to utilize both navigation methods.
A screen reader reads the title first, followed by the rest of the content.
`;function i(t){const n={a:"a",code:"code",h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"with-tagline",children:"With Tagline"}),`
`,e.jsxs(n.p,{children:[`A card can display a tagline above the title, a short term like a category or type of information.
Wrap the tagline and the title in a `,e.jsx(n.code,{children:"Card.HeadingGroup"}),`.
This ensures screen readers first read the title and then the tagline.`]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(n.h2,{id:"with-image",children:"With Image"}),`
`,e.jsxs(n.p,{children:[`A card often displays the image of the detail page.
Use `,e.jsx(n.a,{href:"/docs/layout-aspect-ratio--docs",children:"Aspect Ratio"})," for the correct aspect ratio."]}),`
`,e.jsx(a,{of:h})]})}function W(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{W as default};
