import{M as a}from"./index-dSRdAtsa.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./iframe-Q5YYTwDl.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function t(n){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",a:"a"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Design Guidelines/Breakpoints"}),`
`,e.jsx(s.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(s.p,{children:"We use 2 breakpoints where the design of a website adjusts for a good user experience: at screen widths of 576px and 1088px."}),`
`,e.jsx(s.p,{children:"We follow a mobile-first approach: first, we create the design below the breakpoint, and then we use a media query to create the design above the breakpoint."}),`
`,e.jsx(s.p,{children:"For example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.class {
  /* Your narrow styling */

  @media screen and (min-width: $amsterdam-breakpoint-wide) {
    /* Your wide styling */
  }
}
`})}),`
`,e.jsxs(s.p,{children:[`Within this repository, you can import the breakpoint as a Sass variable.
You can find this variable in `,e.jsx(s.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss",target:"_blank",rel:"nofollow noopener noreferrer",children:"packages/css/src/common/breakpoint.scss"}),"."]})]})}function i(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const r={title:"Docs/Design Guidelines/Breakpoints",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:i};const w=["__page"];export{w as __namedExportsOrder,c as __page,r as default};
