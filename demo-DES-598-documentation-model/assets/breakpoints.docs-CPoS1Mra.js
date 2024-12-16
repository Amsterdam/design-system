import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as o}from"./index-DSz_1G2r.js";import{M as r}from"./index-Ev6c7anl.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-5g9__G-A.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";function t(s){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Design Guidelines/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"We use 2 breakpoints where the design of a website changes to ensure a good user experience: at screen widths of 576px and 1088px."}),`
`,e.jsx(n.p,{children:"We follow a mobile-first approach: first, we create the design below the breakpoint, and then we use a media query to create the design above the breakpoint."}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* Your narrow styling */

  @media screen and (min-width: $ams-breakpoint-wide) {
    /* Your wide styling */
  }
}
`})}),`
`,e.jsxs(n.p,{children:[`Within this repository, you can import the breakpoint as a Sass variable.
You can find this variable in `,e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss",rel:"nofollow",children:"packages/css/src/common/breakpoint.scss"}),"."]})]})}function g(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{g as default};