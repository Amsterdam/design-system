import{M as i}from"./index-P_OluOv5.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./iframe-6c4cezod.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function s(r){const n=Object.assign({h1:"h1",p:"p",em:"em",pre:"pre",code:"code",a:"a"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Designrichtlijnen/Breekpunt"}),`
`,e.jsx(n.h1,{id:"breekpunt",children:"Breekpunt"}),`
`,e.jsx(n.p,{children:"We hanteren 2 breekpunten waar het ontwerp van een website zich aanpast voor een goede gebruikerservaring: bij schermbreedtes van 576px en 1088px."}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.em,{children:"css"})," werken we ",e.jsx(n.em,{children:"mobile first"}),": eerst maken we het ontwerp onder het breekpunt en vervolgens gebruiken we een ",e.jsx(n.em,{children:"media query"})," om het ontwerp boven het breekpunt te maken."]}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* Your narrow styling */

  @media screen and (min-width: $amsterdam-breakpoint-wide) {
    /* Your wide styling */
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Binnen deze repository kun je het breakpoint als Sass-variabele importeren. Je vindt deze variabele in ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss",target:"_blank",rel:"nofollow noopener noreferrer",children:"packages/css/src/common/breakpoint.scss"}),"."]})]})}function a(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Docs/Designrichtlijnen/Breekpunt",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:a};const w=["__page"];export{w as __namedExportsOrder,c as __page,t as default};
