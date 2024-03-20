import{j as n}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as s}from"./index-DSz_1G2r.js";import{M as a,d as r,P as p,e as l,f as t}from"./index-DnhtkZOR.js";import{S as h,O as c,M as m}from"./SkipLink.stories-PwQ9vF0r.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-b3WRqpg3.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-15DIpcQ_.js";const k=`<!-- @license CC0-1.0 -->

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
`;function o(i){const e={h2:"h2",p:"p",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:h}),`
`,n.jsx(r,{children:k}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"display-on-focus",children:"Display on Focus"}),`
`,n.jsx(e.p,{children:"A Skip Link is only displayed when it receives focus."}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(e.h2,{id:"multiple-links",children:"Multiple Links"}),`
`,n.jsx(e.p,{children:"You can use more than one Skip Link if you have a complex page with multiple sections."}),`
`,n.jsx(t,{of:m})]})}function C(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{C as default};
