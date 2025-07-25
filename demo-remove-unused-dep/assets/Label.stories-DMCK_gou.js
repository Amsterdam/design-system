import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as m}from"./index-G8LIXM5I.js";import{H as u}from"./Hint-Br3MmqCp.js";const a=m.forwardRef(({children:o,className:n,hint:i,optional:l,...p},c)=>s.jsxs("label",{...p,className:d("ams-label",n),ref:c,children:[o," ",s.jsx(u,{hint:i,optional:l})]}));a.displayName="Label";try{a.displayName="Label",a.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const h={title:"Components/Forms/Label",component:a,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},e={},t={args:{optional:!0}},r={args:{hint:"not required"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'not required'
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","Optional","WithHint"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Optional:t,WithHint:r,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{y as L,t as O,r as W};
