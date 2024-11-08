import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as a}from"./index-BSj771as.js";import{ae as s,aq as r,ar as p,as as l,at as t}from"./index-CEVuhxgr.js";import{S as h,O as c,M as m}from"./SkipLink.stories-D6g7O1QZ.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cx_sc6HZ.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-Bdr_Cxzh.js";import"./clsx-B-dksMZM.js";import"./index.esm-CEuZchO4.js";const k=`<!-- @license CC0-1.0 -->

# Skip Link

Use a Skip Link to navigate to the main content quickly with the keyboard.
A Skip Link allows skipping recurring navigation blocks, such as the main menu or breadcrumb trail.

The Skip Link is placed above the header.
The link is hidden until activated with the tab key.
When the link is shown, it pushes the entire page down.

## Guidelines

- Place the Skip Link as the first element in \`<body>\` unless you have a cookie banner.
  In that case, place the Skip Link immediately after the cookie banner.
- Use the Skip Link to navigate to the main content.
  On an article page, for example, it could be the title of the article; on a search page, it could be the search field.
- Set \`id="example-id"\` on the container of that element and then use \`href="#example-id"\` on the Skip Link.
- You can use more than one Skip Link for complex pages with multiple sections.
  In most cases, this is not necessary.
- Skip Links are unnecessary on a simple page with only text and minimal navigation.
  The purpose of a Skip Link is to bypass recurring navigation blocks.
  If those blocks are not present, a Skip Link is not needed.
`;/*@license CC0-1.0*/function o(i){const e={h2:"h2",h3:"h3",p:"p",...a(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{of:h}),`
`,n.jsx(r,{children:k}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"display-on-focus",children:"Display on focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h3,{id:"multiple-links",children:"Multiple links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:m})]})}function E(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{E as default};
