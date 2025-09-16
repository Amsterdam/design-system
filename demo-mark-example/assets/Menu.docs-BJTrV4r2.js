import{j as e}from"./iframe-DuvPaAFK.js";import{useMDXComponents as i}from"./index-DWl91mcB.js";import{M as c,c as l,P as d,f as r,e as u}from"./blocks-B2nm34nP.js";import{M as p,L as t,C as h,I as m}from"./Menu.stories-CBy5Q4m5.js";import{B as g}from"./Badge-vHpN_34M.js";import"./index-Cai_sD3P.js";import"./Icon-CEinJkVx.js";const x=`<!-- @license CC0-1.0 -->

# Menu

A primary navigation leading to key areas of an application or website.

The Menu component works well in the sidebar of applications, usually on a blue background.
This first iteration is a simple vertical menu with 1 level of navigation.
`,a=({description:o,status:n="beta"})=>e.jsxs("span",{className:"ams-storybook-status-badge",children:[e.jsx(g,{color:n==="deprecated"?"red":"orange",label:n}),e.jsx("span",{children:o})]});try{a.displayName="StatusBadge",a.__docgenInfo={description:"Indicates the status of a component. Use this to prepare implementers for API changes.",displayName:"StatusBadge",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},status:{defaultValue:{value:"beta"},description:"",name:"status",required:!1,type:{name:"string"}}}}}catch{}/*@license CC0-1.0*/function s(o){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(a,{description:"We’re experimenting with this component; feedback is welcome. Expect changes in future iterations.",status:"beta"}),`
`,e.jsx(c,{of:p}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"link",children:"Link"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(u,{of:t}),`
`,e.jsx(n.h3,{id:"on-a-coloured-background",children:"On a coloured background"}),`
`,e.jsxs(n.p,{children:["A Link on a coloured background must set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the correct text colour"}),` to provide enough contrast.
We have lighter and darker background colours, and links behave differently on each.`]}),`
`,e.jsx(n.h4,{id:"contrast-colour",children:"Contrast colour"}),`
`,e.jsx(n.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the Link black.`}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h4,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the Link white.`}),`
`,e.jsx(r,{of:m})]})}function C(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{C as default};
