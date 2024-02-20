import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as s,d as r,P as c,e as d,f as n}from"./index-DKCTq_00.js";import{C as h,W as l,a as p}from"./Card.stories-DZEo5nts.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BKwSTxj-.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-Dfhw1xp7.js";const g=`# Card

Use a card on an overview page to link to an article page, such as a news article, a job vacancy, or a search result.
The card typically includes the title, introduction, and an image of the content.
The link is mandatory.

## Guidelines

- The title of a card is a link within a heading.
  The same guidelines as for regular [links](?path=/docs/react_navigation-link--docs) and [headings](?path=/docs/react_text-heading--docs) apply here.
  The link is active across the entire area of the card.
- A card needs more content than just a title.
  Supplement this with textual and/or visual content.
- Place the text in a regular paragraph.
  Only use the smallest text size for a tagline or date.
- This component may not be the best option if the content does not represent a detailed page.
  For referencing a thematic page, use a [top task link](?path=/docs/react_navigation-top-task-link--docs).
  You can also use a [regular link](?path=/docs/react_navigation-link--docs).

## Screen Readers

With a screen reader, you can navigate using headings and links in a document.
The title of a card is a link within a heading, allowing you to utilize both navigation methods.
A screen reader reads the title first, followed by the rest of the content.
`;function i(a){const t=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},o(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(c,{}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h2,{id:"with-tagline",children:"With Tagline"}),`
`,e.jsxs(t.p,{children:[`A card can display a tagline above the title, a short term like a category or type of information.
Wrap the tagline and the title in a `,e.jsx(t.code,{children:"Card.HeadingGroup"}),`.
This ensures screen readers first read the title and then the tagline.`]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"with-image",children:"With Image"}),`
`,e.jsxs(t.p,{children:[`A card often displays the image of the detail page.
Use `,e.jsx(t.a,{href:"?path=/docs/layout-aspect-ratio--docs",children:"Aspect Ratio"})," for the correct aspect ratio."]}),`
`,e.jsx(n,{of:p})]})}function W(a={}){const{wrapper:t}=Object.assign({},o(),a.components);return t?e.jsx(t,Object.assign({},a,{children:e.jsx(i,a)})):i(a)}export{W as default};
