import{M as a}from"./index-D-BXzRxk.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DI5IigMn.js";import"./iframe-Cb77znMy.js";import"../sb-preview/runtime.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function t(s){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},o(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Design Guidelines/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"We use 2 breakpoints where the design of a website changes to ensure a good user experience: at screen widths of 576px and 1088px."}),`
`,e.jsx(n.p,{children:"We follow a mobile-first approach: first, we create the design below the breakpoint, and then we use a media query to create the design above the breakpoint."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* Your narrow styling */

  @media screen and (min-width: $amsterdam-breakpoint-wide) {
    /* Your wide styling */
  }
}
`})}),`
`,e.jsxs(n.p,{children:[`Within this repository, you can import the breakpoint as a Sass variable.
You can find this variable in `,e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss",target:"_blank",rel:"nofollow noopener noreferrer",children:"packages/css/src/common/breakpoint.scss"}),"."]})]})}function i(s={}){const{wrapper:n}=Object.assign({},o(),s.components);return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"Docs/Design Guidelines/Breakpoints",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:i};const w=["__page"];export{w as __namedExportsOrder,c as __page,r as default};
