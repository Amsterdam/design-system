import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as r,d as s,P as c,f as a}from"./index-1LUZp9xi.js";import{C as d,W as h,a as l}from"./Card.stories-DcdMPCfa.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-6eF3EUrQ.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./exampleContent-CfSKccVj.js";import"./Card-CI5pmY0Y.js";import"./clsx-B-dksMZM.js";import"./Paragraph-DpVlyIEJ.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";import"./AspectRatio-DxP_kpbd.js";import"./Image-Bf5zYcta.js";const p=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(t){const n={a:"a",code:"code",h2:"h2",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(s,{children:p}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"with-tagline",children:"With Tagline"}),`
`,e.jsxs(n.p,{children:[`A card can display a tagline above the heading, a short term like a category or type of information.
Wrap the tagline and the heading in a `,e.jsx(n.code,{children:"Card.HeadingGroup"}),`.
This ensures screen readers first read the heading and then the tagline.`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h2,{id:"with-image",children:"With Image"}),`
`,e.jsxs(n.p,{children:[`A card often displays the image of the detail page.
Use `,e.jsx(n.a,{href:"/docs/layout-aspect-ratio--docs",children:"Aspect Ratio"})," for the correct aspect ratio."]}),`
`,e.jsx(a,{of:l})]})}function S(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{S as default};
