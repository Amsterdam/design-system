import{r as h,j as e,c as g}from"./iframe-BsrJde5e.js";import{H as c}from"./Hint-CKPrJ_Qi.js";const o=h.forwardRef(({children:n,className:d,hint:i,optional:l,withHeading:p,...m},u)=>e.jsx("label",{...m,className:g("ams-label",d),ref:u,children:p?e.jsxs("h1",{children:[n," ",e.jsx(c,{hint:i,optional:l})]}):e.jsxs(e.Fragment,{children:[n," ",e.jsx(c,{hint:i,optional:l})]})}));o.displayName="Label";try{o.displayName="Label",o.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},withHeading:{defaultValue:null,description:"Use a heading (h1) in the label",name:"withHeading",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const f={title:"Components/Forms/Label",component:o,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},a={},r={args:{optional:!0}},t={args:{hint:"not required"}},s={args:{withHeading:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const b=["Default","Optional","WithHint","WithHeading"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Optional:r,WithHeading:s,WithHint:t,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{y as L,r as O,t as W,s as a};
