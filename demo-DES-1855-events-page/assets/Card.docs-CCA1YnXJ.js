import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,l as i,m as a,n as o,u as s,v as c}from"./iframe-ClqxS2aw.js";import{n as l,t as u}from"./DesignTokensTable-BQ0lD69z.js";import{t as d}from"./mdx-react-shim-B5CAElxu.js";import{Horizontal as f,HorizontalResizable as p,TopTasks as m,WithImage as h,WithTagline as g,n as _,t as v}from"./Card.stories-CLWml-3u.js";var y,b,x=e((()=>{y={card:{heading:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"heading-group":{gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},horizontal:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"grid-template-columns":{$value:`1fr 2fr`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},image:{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(i,{of:v}),`
`,(0,w.jsx)(r,{}),`
`,(0,w.jsx)(n,{of:v}),`
`,(0,w.jsx)(s,{}),`
`,(0,w.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,w.jsx)(t.p,{children:`Use the Card Heading, Card Heading Group and Card Image subcomponents.
They apply the correct spacing.`}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(t.p,{children:`A Card needs more content than just a title.
Add a short text and optionally an image and metadata.`}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(t.p,{children:[`This component is not the best option if the target content does not represent an article-like page.
In that case, use a Heading, a Paragraph and a `,(0,w.jsx)(t.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` instead.`]}),`
`,(0,w.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Card Heading requires a `,(0,w.jsx)(t.code,{children:`level`}),`, because there is no sensible default.
The guidelines for regular `,(0,w.jsx)(t.a,{href:`/docs/components-navigation-link--docs`,children:`links`}),` and `,(0,w.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`headings`}),` apply.`]}),`
`,(0,w.jsx)(t.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,w.jsxs)(t.p,{children:[`Place the text in a regular `,(0,w.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.
Use a small Paragraph for a publication date.`]}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`with-tagline`,children:`With tagline`}),`
`,(0,w.jsxs)(t.p,{children:[`A Card can display metadata in a tagline above the heading, like a category or content type.
Wrap the Heading in a Heading Group and set its `,(0,w.jsx)(t.code,{children:`tagline`}),` property.
This ensures screen readers read out the heading before the metadata.`]}),`
`,(0,w.jsx)(o,{of:g}),`
`,(0,w.jsx)(t.h3,{id:`with-image`,children:`With image`}),`
`,(0,w.jsxs)(t.p,{children:[`A Card often displays the image of the article it links to.
The Card Image subcomponent renders an `,(0,w.jsx)(t.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` component and accepts its properties, e.g. to set an aspect ratio or provide a set of image sources.
Only use decorative images with `,(0,w.jsx)(t.code,{children:`alt=""`}),` here. Screen readers will not read the `,(0,w.jsx)(t.code,{children:`alt`}),` text of non-decorative images when navigating to a Card.`]}),`
`,(0,w.jsx)(o,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`horizontal-layout`,children:`Horizontal layout`}),`
`,(0,w.jsxs)(t.p,{children:[`A Card with an image switches to a horizontal layout, with the image beside the content, when its container is wide enough.
This is driven by container queries, so the Card adapts to the space available rather than the viewport.
Place the Card in a `,(0,w.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` cell or another inline-size query container to enable this.`]}),`
`,(0,w.jsx)(o,{of:f}),`
`,(0,w.jsx)(t.p,{children:`Resize the container below to see the Card switch between the vertical and horizontal layouts at the breakpoint.`}),`
`,(0,w.jsx)(o,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`top-tasks`,children:`Top tasks`}),`
`,(0,w.jsxs)(t.p,{children:[`A set of cards can be used to present links to frequently accessed interactions.
A short title and description are enough to guide the user to the page they need.
Position 4 to 8 tasks on a `,(0,w.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`; left-align them and do not skip cells.
For a group of links without a description, use a `,(0,w.jsx)(t.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` instead.`]}),`
`,(0,w.jsx)(o,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(t.p,{children:`The mandatory title of a Card is a link within a Heading.
The link is made active across the entire area of the Card.`}),`
`,(0,w.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsx)(t.p,{children:`Visually, Card Heading has the size of a level 3 Heading by default.
Screen reader users can navigate by heading or by link; a Card supports both because its title is a heading that contains a link.
A screen reader reads the title first, then the rest of the content.`}),`
`,(0,w.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(t.ul,{children:[`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` – for a single link to a follow-up page when a Card is too much.`]}),`
`,(0,w.jsxs)(t.li,{children:[(0,w.jsx)(t.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`Routing libraries`}),` – how to integrate links with external routing libraries.`]}),`
`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),a(),l(),x(),_()}))();export{C as default};