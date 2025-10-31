import{j as e}from"./iframe-D_5a-D79.js";import{useMDXComponents as s}from"./index-_6aTF-qB.js";import{M as i,f as a,P as r,h as d,i as c}from"./blocks-B4_Xoq1y.js";import{a as h,W as l}from"./Page.stories-BQOMIrGW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oI8l2B0E.js";const m=`<!-- @license CC0-1.0 -->

# Page

Contains the entire website or application.

Page is the outermost container for the Page Header, Page Body and the content in between.
It sets a maximum width and centres itself horizontally.
It must be used for all websites and applications for the City of Amsterdam.
`;/*@license CC0-1.0*/function o(t){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-side-menu",children:"With side menu"}),`
`,e.jsxs(n.p,{children:["Add ",e.jsx(n.code,{children:'layout="application"'})," if your page uses a ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),`.
Add the Menu as a direct child, immediately after the `,e.jsx(n.a,{href:"/docs/components-containers-page-header--docs",children:"Page Header"}),", and give it the ",e.jsx(n.code,{children:"inWideWindow"}),` prop.
Include a copy of the Menu, without that prop, in the Page Header.
Add `,e.jsx(n.code,{children:"ams-page__area--*"})," classes to the direct children of the Page to place them in the correct grid areas."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.em,{children:"TODO"})})," We should consolidate the ",e.jsx(n.code,{children:'layout="application"'})," and ",e.jsx(n.code,{children:"inWideWindow"})," props into one concept."]}),`
`]}),`
`,e.jsx(c,{of:l})]})}function M(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
