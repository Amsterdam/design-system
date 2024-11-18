import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as r,aq as s,ar as d,at as a}from"./index-SeZwIJ0S.js";import{C as c,W as h,a as l}from"./Card.stories-CV13_kUS.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BnEHBqQW.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-BaqVhzAt.js";import"./clsx-B-dksMZM.js";import"./index.esm-CEuZchO4.js";import"./exampleContent-hIIPvEhU.js";import"./Paragraph-DZy4cHOZ.js";const p=`<!-- @license CC0-1.0 -->

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
`,e.jsx(r,{of:c}),`
`,e.jsx(s,{children:p}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-tagline",children:"With tagline"}),`
`,e.jsxs(n.p,{children:[`A card can display a tagline above the heading, a short term like a category or type of information.
Wrap the tagline and the heading in a `,e.jsx(n.code,{children:"Card.HeadingGroup"}),`.
This ensures screen readers first read the heading and then the tagline.`]}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsxs(n.p,{children:[`A card often displays the image of the detail page.
Use `,e.jsx(n.a,{href:"/docs/layout-aspect-ratio--docs",children:"Aspect Ratio"})," for the correct aspect ratio."]}),`
`,e.jsx(a,{of:l})]})}function E(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
