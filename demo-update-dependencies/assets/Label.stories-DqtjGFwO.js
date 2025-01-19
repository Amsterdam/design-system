import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as L}from"./index-D7uoVdV3.js";import{H as S}from"./Hint-pM00LTCu.js";const a=L.forwardRef(({children:o,className:f,hint:b,optional:g,..._},x)=>s.jsxs("label",{..._,ref:x,className:y("ams-label",f),children:[o," ",s.jsx(S,{hint:b,optional:g})]}));a.displayName="Label";try{a.displayName="Label",a.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const j={title:"Components/Forms/Label",component:a,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},e={},t={args:{optional:!0}},r={args:{hint:"not required"}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    hint: 'not required'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const O=["Default","Optional","WithHint"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Optional:t,WithHint:r,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{w as L,t as O,r as W};
