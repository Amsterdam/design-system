import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as o,h as s,P as d,j as t}from"./index-DvTjtPwu.js";import{C as c,W as h,a as p}from"./Card.stories-CqbzM3wl.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-qDFCQ3rY.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm--UOzpp87.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bv5DmutW.js";import"./exampleContent-PGFPgakh.js";import"./Heading-BfwCY41a.js";import"./getHeadingTag-Dv1eMqvl.js";import"./Paragraph-BDLeQ91t.js";import"./Image-DmErqfsw.js";import"./generateAspectRatioClass-jt2KOtJX.js";const m=`<!-- @license CC0-1.0 -->

# Card

A brief section of a heading, some text, and usually an image, that leads to a related page.

## Guidelines

- Each Card must have a Card Link.
  It only wraps the text of the Heading in markup, but it’s made to stretch the entire Card.
  The guidelines as for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply.
- A Card needs more content than just a heading.
  Add a short paragraph and/or visual content.
- Use the Card Heading, Card Heading Group and Card Image subcomponents.
  They introduce the correct spacing.
- Place the text in a regular [Paragraph](/docs/components-text-paragraph--docs).
  Use a small Paragraph for a date.

### Screen readers

Screen reader users may navigate a page using headings and links.
A Card works well in both approaches as its titel carries a link.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
`;/*@license CC0-1.0*/function r(a){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:c}),`
`,e.jsx(s,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-tagline",children:"With tagline"}),`
`,e.jsxs(n.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,e.jsx(n.code,{children:"tagline"}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsxs(n.p,{children:[`A Card often displays the image of the article it links to.
The Card Image subcomponent renders an `,e.jsx(n.a,{href:"/docs/components-media-image--docs",children:"Image"}),` component and accepts its properties, e.g. to set an aspect ratio or provide a set of image sources.
An `,e.jsx(n.code,{children:"alt"})," text is almost never necessary for the image of a card."]}),`
`,e.jsx(t,{of:p})]})}function D(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{D as default};
