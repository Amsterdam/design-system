import{j as e}from"./iframe-B0PxSTwL.js";import{useMDXComponents as a}from"./index-DUzAboTB.js";import{M as i,e as o,f as r,h as m}from"./blocks-DtgasOJL.js";import{a as p}from"./Page.stories-CdO6JLlo.js";import{D as l}from"./DesignTokensTable-CAdjkPVr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwzA2w-6.js";import"./BorderSample-Bky31OYP.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-DT6lEdcv.js";import"./ColorSample-B54Xb9Ef.js";import"./SpaceSample-CE_sn0Qy.js";import"./TypographySample-CKHSSJwI.js";const d=`<!-- @license CC0-1.0 -->

# Page

Contains the entire website.

The Page component wraps the [Page Header](https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs),
[Page Footer](https://designsystem.amsterdam/?path=/docs/components-containers-page-footer--docs), and the main content in between.
As a root layout component, it must be used for all websites for the City of Amsterdam.
It is centered horizontally and sets a maximum width of 90 rems (usually 1.440 pixels).
With a Menu, that becomes 120 rems (1.920 pixels).
`,c={page:{"background-color":{$value:"{ams.color.background.canvas}",$type:"color"},"max-inline-size":{$value:{value:90,unit:"rem"},$type:"dimension"},"with-menu":{"max-inline-size":{$value:{value:120,unit:"rem"},$type:"dimension"},"area-skip-link":{"margin-inline-end":{$value:"{ams.grid.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.hint":"Must be the Grid inline padding, to make sure Skip Link and Grid line up.","nl.amsterdam.subtype":"space"}}}}}},h={ams:c};function s(t){const n={a:"a",h2:"h2",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:p}),`
`,e.jsx(o,{children:d}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/story/pages-public-home-page--default",children:"Home Page"})," template for public websites for a full-page example."]}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-menu",children:"With menu"}),`
`,e.jsxs(n.p,{children:["Internal websites can add a ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),` for navigating between its modules and pages.
This is an alternative to the approach using Link Lists, which is appropriate for public, content-oriented websites.`]}),`
`,e.jsxs(n.p,{children:[`We can’t display the example here, as it requires Compact Mode to be enabled, which affects the example for the public Home Page template.
Open the `,e.jsx(n.a,{href:"/story/components-containers-page--with-menu",children:"full example page"})," or see the ",e.jsx(n.a,{href:"/story/pages-internal-home-page--default",children:"Home Page"})," template for internal websites."]}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(l,{tokens:h})]})}function $(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{$ as default};
