import{n as e}from"./chunk-zsgVPwQN.js";import{At as t}from"./iframe-gwKfNarL.js";import{r as n}from"./react-CqM26IeZ.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-B6Kxv20I.js";import{n as l,t as u}from"./DesignTokensTable-C8SyJjGe.js";import{t as d}from"./mdx-react-shim-B_FokAPM.js";import{MultipleLinks as f,OnFocus as p,n as m,t as h}from"./SkipLink.stories-CHBpTnN-.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

# Skip Link

Allows skipping past recurring navigation blocks at the top of a page.

## Design

The Skip Link sits above the Page Header and is as wide as the Page container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the rest of the page down.

## Guidelines

- Place the Skip Link as the first element in the [Page](/docs/components-containers-page--docs) container.
- Direct the Skip Link to the main content area on the Page.
  Typically, this is the \`main\` HTML element.
  Repeated navigation blocks such as Breadcrumbs and back Links do not belong to the main content area.
- Set \`id="inhoud"\` on the \`main\` HTML element and then use \`href="#inhoud"\` on the Skip Link.
- Complex pages with multiple sections may benefit from more than one Skip Link.
  If you need multiple words to describe a Skip Link target, use kebab case (\`id="op-deze-manier"\`).
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
`})),v,y,b=e((()=>{v={"skip-link":{"background-color":{$value:`{ams.color.interactive.default}`,$type:`color`},color:{$value:`{ams.color.text.inverse}`,$type:`color`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$type:`color`}}}},y={ams:v}}));function x(e){let t={h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`display-on-focus`,children:`Display on focus`}),`
`,(0,C.jsx)(t.p,{children:`A Skip Link is only displayed when it receives focus.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`multiple-links`,children:`Multiple links`}),`
`,(0,C.jsx)(t.p,{children:`You can use more than one Skip Link if you have a complex page with multiple sections.`}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};