import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-BMurOIz2.js";import{n as c,t as l}from"./DesignTokensTable-Bqg-UGPa.js";import{t as u}from"./mdx-react-shim-ynubY8I9.js";import{n as d,t as f}from"./Page.stories-UQ7qX3r-.js";var p,m=e((()=>{p=`<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
As a root layout component, it must be used for all websites for the City of Amsterdam.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).
`})),h,g,_=e((()=>{h={page:{"background-color":{$value:`{ams.color.background.body}`,$extensions:{"nl.amsterdam.type":`color`}},"max-inline-size":{$value:{value:90,unit:`rem`},$type:`dimension`},"with-menu":{"max-inline-size":{$value:{value:120,unit:`rem`},$type:`dimension`},"area-skip-link":{"margin-inline-end":{$value:`{ams.grid.padding-inline}`,$extensions:{"nl.amsterdam.hint":`Must be the Grid inline padding, to make sure Skip Link and Grid line up.`,"nl.amsterdam.type":`dimension`,"nl.amsterdam.subtype":`space`}}}}}},g={ams:h}}));function v(e){let t={a:`a`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[`
`,`
`,`
`,`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(s,{children:p}),`
`,(0,b.jsxs)(t.p,{children:[`See the `,(0,b.jsx)(t.a,{href:`/story/pages-public-home-page--default`,children:`Home Page`}),` template for public websites for a full-page example.`]}),`
`,(0,b.jsx)(o,{}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,b.jsx)(t.h3,{id:`with-menu`,children:`With menu`}),`
`,(0,b.jsxs)(t.p,{children:[`Internal websites can add a `,(0,b.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` for navigating between its modules and pages.
This is an alternative to the approach using Link Lists, which is appropriate for public, content-oriented websites.`]}),`
`,(0,b.jsxs)(t.p,{children:[`We can’t display the example here, as it requires Compact Mode to be enabled, which affects the example for the public Home Page template.
Open the `,(0,b.jsx)(t.a,{href:`/story/components-containers-page--with-menu`,children:`full example page`}),` or see the `,(0,b.jsx)(t.a,{href:`/story/pages-internal-home-page--default`,children:`Home Page`}),` template for internal websites.`]}),`
`,(0,b.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,b.jsx)(l,{tokens:g})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),u(),i(),d(),m(),_(),c()}))();export{y as default};