import{j as e}from"./jsx-runtime-CKrituN3.js";import{W as a,H as n,P as l}from"./index.esm-DbL8I8UM.js";import{e as o}from"./exampleContent-BoywlOQx.js";const j=({children:s})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let b=performance.now();for(;performance.now()-b<1e3;);return s},u={title:"Components/Containers/Tabs",component:a};a.Button;const g={args:{children:[e.jsxs(a.List,{children:[e.jsx(a.Button,{tab:0,label:"Gegevens"}),e.jsx(a.Button,{tab:1,label:"Aanslagen"}),e.jsx(a.Button,{tab:2,label:"Documenten"}),e.jsx(a.Button,{tab:3,label:"Acties"})]},0),e.jsx(a.Panel,{tab:0,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(n,{level:3,children:"Gegevens"}),e.jsx(l,{children:o()})]})},1),e.jsx(a.Panel,{tab:1,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(n,{level:3,children:"Aanslagen"}),e.jsx(l,{children:o()})]})},2),e.jsx(a.Panel,{tab:2,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(n,{level:3,children:"Documenten"}),e.jsx(l,{children:"(This tab panel simulates a load time of 500 milliseconds.)"}),e.jsx(j,{})]})},3),e.jsx(a.Panel,{tab:3,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(n,{level:3,children:"Acties"}),e.jsx(l,{children:o()})]})},4)]}},h={args:{label:"Gegevens",tab:0,disabled:!1},render:({...s})=>e.jsx(a.Button,{...s})},t={...g},r={...h};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...TabStoryTemplate
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const T=["Default","Tab"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Tab:r,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{S as T,r as a};
