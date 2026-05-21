import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DHvoaJMD.js";import{r as n}from"./react-BxEM7q-b.js";import{c as r,f as i,l as a,n as o,s}from"./blocks-DcsQlnEi.js";import{n as c,t as l}from"./DesignTokensTable-CBGd-2fo.js";import{t as u}from"./mdx-react-shim-W34Gl12-.js";import{TopTasks as d,WithImage as f,WithTagline as p,n as m,t as h}from"./Card.stories-B-lj3B0P.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

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
`})),v,y,b=e((()=>{v={card:{heading:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"heading-group":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},image:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(s,{children:g}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`with-tagline`,children:`With tagline`}),`
`,(0,C.jsxs)(t.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,(0,C.jsx)(t.code,{children:`tagline`}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,(0,C.jsx)(o,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`with-image`,children:`With image`}),`
`,(0,C.jsxs)(t.p,{children:[`A Card often displays the image of the article it links to.
The Card Image subcomponent renders an `,(0,C.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` component and accepts its properties, e.g. to set an aspect ratio or provide a set of image sources.
Only use decorative images with `,(0,C.jsx)(t.code,{children:`alt=""`}),` here. Screen readers will not read the `,(0,C.jsx)(t.code,{children:`alt`}),` text of non-decorative images when navigating to a Card.`]}),`
`,(0,C.jsx)(o,{of:f}),`
`,(0,C.jsx)(t.h3,{id:`top-tasks`,children:`Top tasks`}),`
`,(0,C.jsxs)(t.p,{children:[`A set of cards can be used to present links to frequently accessed interactions.
A short title and description are enough to guide the user to the page they need.
Position 4 to 8 tasks on a `,(0,C.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`; left-align them and do not skip cells.
For a group of links without a description, use a `,(0,C.jsx)(t.a,{href:`/docs/components-navigation-link--docs`,children:`Link List`}),` instead.`]}),`
`,(0,C.jsx)(o,{of:d}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(l,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),u(),i(),m(),_(),b(),c()}))();export{S as default};