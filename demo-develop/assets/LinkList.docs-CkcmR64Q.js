import{n as e}from"./chunk-zsgVPwQN.js";import{jt as t}from"./iframe-DJKQYy0F.js";import{r as n}from"./react-C79ElhVb.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-GsFMl23K.js";import{n as l,t as u}from"./DesignTokensTable-C62fnJc9.js";import{t as d}from"./mdx-react-shim-BCo0IijN.js";import{ContrastColour as f,CustomIcons as p,InverseColour as m,Link as h,SmallText as g,WithHeading as _,n as v,t as y}from"./LinkList.stories-RWCfY-IE.js";var b,x=e((()=>{b=`<!-- @license CC0-1.0 -->

# Link List

A collection of related links.

## Design

Every list item starts with a chevron.
It emphasizes the list structure and thematic coherence.
The chevron is part of the link.
Therefore, it is blue and clickable.

## Guidelines

- Use a Link List to present multiple links within a theme.
- For additional guidelines, refer to the [Link](/docs/components-navigation-link--docs) component.
`})),S,C,w=e((()=>{S={"link-list":{gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},link:{color:{$value:`{ams.links.color}`,$type:`color`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}}},large:{"font-size":{$value:`{ams.typography.body-text.large.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.large.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`}},contrast:{color:{$value:`{ams.links.contrast.color}`,$type:`color`},hover:{color:{$value:`{ams.links.contrast.hover.color}`,$type:`color`}}},inverse:{color:{$value:`{ams.links.inverse.color}`,$type:`color`},hover:{color:{$value:`{ams.links.inverse.hover.color}`,$type:`color`}}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(r,{of:y}),`
`,(0,D.jsx)(c,{children:b}),`
`,(0,D.jsx)(o,{}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`with-heading`,children:`With heading`}),`
`,(0,D.jsxs)(t.p,{children:[`A list of links often appears in a block with a `,(0,D.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`.
Use a size of ‘level-3’ for the Heading and add a small bottom margin.`]}),`
`,(0,D.jsx)(s,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`custom-icons`,children:`Custom icons`}),`
`,(0,D.jsx)(t.p,{children:`Replace the list icon with a more meaningful one to help understand a link more quickly or easily.
Avoid using both semantic and list icons in the same list.`}),`
`,(0,D.jsx)(s,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`small-text`,children:`Small text`}),`
`,(0,D.jsx)(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.
When using a list in small text, set the prop for each item in the list.`}),`
`,(0,D.jsx)(s,{of:g}),`
`,(0,D.jsx)(t.h3,{id:`link`,children:`Link`}),`
`,(0,D.jsxs)(t.p,{children:[`This example of a single link allows using the controls below.
The Link List Link renders both the `,(0,D.jsx)(t.code,{children:`<li>`}),` and `,(0,D.jsx)(t.code,{children:`<a>`}),` elements.
Any attributes and the `,(0,D.jsx)(t.code,{children:`ref`}),` are passed on to the `,(0,D.jsx)(t.code,{children:`<a>`}),` element.`]}),`
`,(0,D.jsx)(s,{of:h}),`
`,(0,D.jsx)(a,{of:h}),`
`,(0,D.jsx)(t.h3,{id:`on-a-coloured-background`,children:`On a coloured background`}),`
`,(0,D.jsxs)(t.p,{children:[`A Link on a coloured background must set `,(0,D.jsx)(t.a,{href:`?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours`,children:`the correct text colour`}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,(0,D.jsx)(t.h4,{id:`contrast-colour`,children:`Contrast colour`}),`
`,(0,D.jsx)(t.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,(0,D.jsx)(s,{of:f}),`
`,(0,D.jsx)(t.h4,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,D.jsx)(t.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,(0,D.jsx)(s,{of:m}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(u,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),d(),i(),v(),x(),w(),l()}))();export{E as default};