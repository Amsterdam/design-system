import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,l as a,m as o,n as s,u as c}from"./blocks-C4Y4tS9V.js";import{n as l,t as u}from"./DesignTokensTable-BcMp697s.js";import{t as d}from"./mdx-react-shim-BQ-ELuiy.js";import{TopTasks as f,WithImage as p,WithTagline as m,n as h,t as g}from"./Card.stories-Bh7Vv-X6.js";var _,v,y=e((()=>{_={card:{heading:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"heading-group":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},image:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r,{of:g}),`
`,(0,S.jsx)(c,{}),`
`,(0,S.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,S.jsx)(t.p,{children:`Use the Card Heading, Card Heading Group and Card Image subcomponents.
They apply the correct spacing.`}),`
`,(0,S.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(t.p,{children:`A Card needs more content than just a title.
Add a short text and optionally an image and metadata.`}),`
`,(0,S.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(t.p,{children:[`This component is not the best option if the target content does not represent an article-like page.
In that case, use a Heading, a Paragraph and a `,(0,S.jsx)(t.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` instead.`]}),`
`,(0,S.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(t.p,{children:[`Card Heading requires a `,(0,S.jsx)(t.code,{children:`level`}),`, because there is no sensible default.
The guidelines for regular `,(0,S.jsx)(t.a,{href:`/docs/components-navigation-link--docs`,children:`links`}),` and `,(0,S.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`headings`}),` apply.`]}),`
`,(0,S.jsx)(t.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsxs)(t.p,{children:[`Place the text in a regular `,(0,S.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.
Use a small Paragraph for a publication date.`]}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`with-tagline`,children:`With tagline`}),`
`,(0,S.jsxs)(t.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,(0,S.jsx)(t.code,{children:`tagline`}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(t.h3,{id:`with-image`,children:`With image`}),`
`,(0,S.jsxs)(t.p,{children:[`A Card often displays the image of the article it links to.
The Card Image subcomponent renders an `,(0,S.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` component and accepts its properties, e.g. to set an aspect ratio or provide a set of image sources.
Only use decorative images with `,(0,S.jsx)(t.code,{children:`alt=""`}),` here. Screen readers will not read the `,(0,S.jsx)(t.code,{children:`alt`}),` text of non-decorative images when navigating to a Card.`]}),`
`,(0,S.jsx)(s,{of:p}),`
`,(0,S.jsx)(t.h3,{id:`top-tasks`,children:`Top tasks`}),`
`,(0,S.jsxs)(t.p,{children:[`A set of cards can be used to present links to frequently accessed interactions.
A short title and description are enough to guide the user to the page they need.
Position 4 to 8 tasks on a `,(0,S.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`; left-align them and do not skip cells.
For a group of links without a description, use a `,(0,S.jsx)(t.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` instead.`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,S.jsx)(t.p,{children:`The mandatory title of a Card is a link within a Heading.
The link is made active across the entire area of the Card.`}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsx)(t.p,{children:`Visually, Card Heading has the size of a level 3 Heading by default.
Screen reader users can navigate by heading or by link; a Card supports both because its title is a heading that contains a link.
A screen reader reads the title first, then the rest of the content.`}),`
`,(0,S.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` – for a single link to a follow-up page when a Card is too much.`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`Routing libraries`}),` – how to integrate links with external routing libraries.`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(u,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),d(),o(),y(),l(),h()}))();export{x as default};