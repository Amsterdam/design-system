import{j as e}from"./iframe-B-hL_0Ik.js";import{useMDXComponents as a}from"./index-wwsLrtBb.js";import{M as i,f as o,P as r,h as m,i as p}from"./blocks-D50KQJvQ.js";import{a as l,W as d}from"./Page.stories-CPgRT3QP.js";import{D as c}from"./DesignTokensTable-D8sl-jCk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dz7aTctx.js";import"./BorderSample-MMWi1tqo.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-_eJkxoIo.js";import"./TypographySample-B8VxI2pN.js";const h=`<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
As a root layout component, it must be used for all websites for the City of Amsterdam.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).
`,u={page:{"background-color":{$value:"{ams.color.background}",$type:"color"},"max-inline-size":{$value:{value:90,unit:"rem"},$type:"dimension"},"with-menu":{"max-inline-size":{$value:{value:120,unit:"rem"},$type:"dimension"},"area-skip-link":{"margin-inline-end":{$value:"{ams.grid.padding-inline}",$type:"dimension",$extension:{"amsterdam.designsystem.hint":"Must be the Grid inline padding, to make sure Skip Link and Grid line up."}}}}}},g={ams:u};function s(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(o,{children:h}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-public-home-page--default",children:"Home Page"})," template for public websites for a full-page example."]}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-menu",children:"With menu"}),`
`,e.jsxs(n.p,{children:["Internal websites can add a ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),` for navigating between its modules and pages.
This is an alternative to the approach using Link Lists, which is appropriate for public, content-oriented websites.`]}),`
`,e.jsx(p,{of:d}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Home Page"})," template for internal websites for a full-page example."]}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:g})]})}function $(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{$ as default};
