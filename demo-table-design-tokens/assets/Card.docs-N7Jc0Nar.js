import{j as e}from"./iframe-Dha-7zTR.js";import{useMDXComponents as o}from"./index-CUuWwI6L.js";import{M as i,f as r,P as d,i as t}from"./blocks-C1WmRPMp.js";import{a as l,W as c,b as h,T as p}from"./Card.stories-yvck826U.js";import{D as m}from"./DesignTokensTable-DH0a8p0G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fiaxSpfT.js";import"./common-HRWYXPjp.js";import"./exampleContent-Du2yH2Fl.js";import"./Heading-CL8U14h_.js";import"./Paragraph-Bh0aq-My.js";import"./Image-BhsgFmEh.js";import"./generateAspectRatioClass-jt2KOtJX.js";const g=`<!-- @license CC0-1.0 -->

# Card

A brief section of a heading, some text, and optionally an image, that leads to a related page.

## Guidelines

- The mandatory title of a card is a link within a Heading.
  The guidelines for regular [links](/docs/components-navigation-link--docs) and [headings](/docs/components-text-heading--docs) apply.
  The link is made active across the entire area of the card.
- A card needs more content than just a title.
  Add a short text and optionally an image and metadata.
- Use the Card Heading, Card Heading Group and Card Image subcomponents.
  They apply the correct spacing.
- Card Heading requires a \`level\`, because there is no sensible default.
  Visually, it has the size of a level 3 Heading by default.
- Place the text in a regular [Paragraph](/docs/components-text-paragraph--docs).
  Use a small Paragraph for a publication date.
- This component is not the best option if the target content does not represent an article-like page.
  In that case, use a Heading, a Paragraph and a [Standalone Link](/docs/components-navigation-standalone-link--docs) instead.

### Screen readers

Screen reader users may navigate a page using headings and links.
A Card works well in both approaches as its title carries a link.
A screen reader reads the title first, followed by the rest of the content.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
`,u={card:{heading:{"margin-block-end":{value:"{ams.space.xs}"}},"heading-group":{gap:{value:"{ams.space.xs}"},"margin-block-end":{value:"{ams.space.xs}"}},image:{"margin-block-end":{value:"{ams.space.s}"}},link:{color:{value:"{ams.links.color}"},"text-decoration-line":{value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{value:"{ams.links.text-decoration-thickness}"},"text-underline-offset":{value:"{ams.links.text-underline-offset}"},hover:{color:{value:"{ams.links.hover.color}"},"text-decoration-line":{value:"{ams.links.subtle.hover.text-decoration-line}"}}},"outline-offset":{value:"{ams.focus.outline-offset}"}}},x={ams:u};function s(a){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-tagline",children:"With tagline"}),`
`,e.jsxs(n.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,e.jsx(n.code,{children:"tagline"}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"with-image",children:"With image"}),`
`,e.jsxs(n.p,{children:[`A Card often displays the image of the article it links to.
The Card Image subcomponent renders an `,e.jsx(n.a,{href:"/docs/components-media-image--docs",children:"Image"}),` component and accepts its properties, e.g. to set an aspect ratio or provide a set of image sources.
Only use decorative images with `,e.jsx(n.code,{children:'alt=""'})," here. Screen readers will not read the ",e.jsx(n.code,{children:"alt"})," text of non-decorative images when navigating to a Card."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"top-tasks",children:"Top tasks"}),`
`,e.jsxs(n.p,{children:[`A set of cards can be used to present links to frequently accessed interactions.
A short title and description are enough to guide the user to the page they need.
Position 4 to 8 tasks on a `,e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`; left-align them and do not skip cells.
For a group of links without a description, use a `,e.jsx(n.a,{href:"/docs/components-navigation-link--docs",children:"Link List"})," instead."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(m,{tokens:x})]})}function D(a={}){const{wrapper:n}={...o(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(s,{...a})}):s(a)}export{D as default};
