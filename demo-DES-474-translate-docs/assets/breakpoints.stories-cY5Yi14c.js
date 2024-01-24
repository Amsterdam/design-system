import{M as a}from"./index-QzwB2eh4.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./iframe-MhqThAi-.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function r(t){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Design Guidelines/Breakpoints"}),`
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

Within this repository, you can import the breakpoint as a Sass variable.
You can find this variable in [packages/css/src/common/breakpoint.scss](https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss).
`})})]})}function i(t={}){const{wrapper:s}=Object.assign({},o(),t.components);return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const n={title:"Docs/Design Guidelines/Breakpoints",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:i};const f=["__page"];export{f as __namedExportsOrder,c as __page,n as default};
