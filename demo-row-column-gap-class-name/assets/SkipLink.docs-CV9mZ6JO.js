import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import{ae as s,ak as r,al as p,am as l,an as t}from"./index-DON3uf5h.js";import{S as h,O as c,M as m}from"./SkipLink.stories-DavCdC6N.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D-yfq2-4.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Screen-Bi3gjHLv.js";import"./Grid-CurDwTEg.js";import"./Paragraph-BWS5kDPY.js";const k=`<!-- @license CC0-1.0 -->

# Skip Link

Use a Skip Link to navigate to the main content quickly with the keyboard.
A Skip Link allows skipping recurring navigation blocks, such as the main menu or breadcrumb trail.

The Skip Link is placed above the header.
The link is hidden until activated with the tab key.
When the link is shown, it pushes the entire page down.

## Guidelines

### How to Use

- Place the Skip Link as the first element in \`<body>\` unless you have a cookie banner.
  In that case, place the Skip Link immediately after the cookie banner.
- Use the Skip Link to navigate to the main content.
  On an article page, for example, it could be the title of the article; on a search page, it could be the search field.
- Set \`id="example-id"\` on the container of that element and then use \`href="#example-id"\` on the Skip Link.
- You can use more than one Skip Link for complex pages with multiple sections.
  In most cases, this is not necessary.

### Avoid

- Skip Links are unnecessary on a simple page with only text and minimal navigation.
  The purpose of a Skip Link is to bypass recurring navigation blocks.
  If those blocks are not present, a Skip Link is not needed.
`;/*@license CC0-1.0*/function o(i){const e={h2:"h2",p:"p",...a(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{of:h}),`
`,n.jsx(r,{children:k}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"display-on-focus",children:"Display on Focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h2,{id:"multiple-links",children:"Multiple Links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:m})]})}function E(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{E as default};
