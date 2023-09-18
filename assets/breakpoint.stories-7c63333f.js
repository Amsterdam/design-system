import{M as a}from"./index-cba52457.js";import{j as e}from"./jsx-runtime-e083b8cc.js";import{u as o}from"./index-ee2dc9e6.js";import"./iframe-d3b8e511.js";import"../sb-preview/runtime.js";import"./index-db778d32.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(r){const n=Object.assign({h1:"h1",p:"p",em:"em",pre:"pre",code:"code",a:"a"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Designrichtlijnen/Breekpunt"}),`
`,e.jsx(n.h1,{id:"breekpunt",children:"Breekpunt"}),`
`,e.jsx(n.p,{children:"We hanteren 1 breekpunt waar het ontwerp van een website zich aanpast voor een goede gebruikerservaring op verschillend formaat apparaten: 854px breed."}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.em,{children:"css"})," werken we ",e.jsx(n.em,{children:"mobile first"}),": eerst maken we het ontwerp onder het breekpunt en vervolgens gebruiken we een ",e.jsx(n.em,{children:"media query"})," om het ontwerp boven het breekpunt te maken."]}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* Your narrow styling */

  @media screen and (width > $amsterdam-breakpoint) {
    /* Your wide styling */
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Binnen deze repository kun je het breakpoint als Sass variabele importeren. Je vindt deze variabele in ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/utils/breakpoint.scss",target:"_blank",rel:"nofollow noopener noreferrer",children:"packages/css/utils/breakpoint.scss"}),"."]})]})}function i(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"Docs/Designrichtlijnen/Breekpunt",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:i};const x=["__page"];export{x as __namedExportsOrder,p as __page,t as default};
//# sourceMappingURL=breakpoint.stories-7c63333f.js.map
