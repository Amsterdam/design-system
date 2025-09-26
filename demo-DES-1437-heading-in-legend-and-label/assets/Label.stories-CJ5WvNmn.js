import{r as h,j as e,c as g}from"./iframe-BMmcCAtw.js";import{H as c}from"./Hint-C1jSVPNP.js";const n=h.forwardRef(({children:o,className:d,hint:i,optional:l,withHeading:p,...m},u)=>e.jsx("label",{...m,className:g("ams-label",d),ref:u,children:p?e.jsxs("h1",{className:"ams-label__heading",children:[o," ",e.jsx(c,{hint:i,optional:l})]}):e.jsxs(e.Fragment,{children:[o," ",e.jsx(c,{hint:i,optional:l})]})}));n.displayName="Label";try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},withHeading:{defaultValue:null,description:"Use a heading (h1) in the label",name:"withHeading",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const b={title:"Components/Forms/Label",component:n,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},a={},r={args:{optional:!0}},t={args:{hint:"not required"}},s={args:{withHeading:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'not required'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    withHeading: true
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Optional","WithHint","WithHeading"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Optional:r,WithHeading:s,WithHint:t,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{y as L,r as O,t as W,s as a};
