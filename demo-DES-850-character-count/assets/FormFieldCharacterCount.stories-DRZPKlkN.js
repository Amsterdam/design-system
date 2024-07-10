import{j as h}from"./jsx-runtime-BlAj40OV.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as g}from"./index-Cs7sjTYM.js";const t=g.forwardRef(({className:a,length:o,maxLength:n,...i},p)=>h.jsx("div",{...i,ref:p,className:f("ams-form-field-character-count",o>n&&"ams-form-field-character-count--error",a),role:"status",children:`${o} van ${n} tekens`}));t.displayName="FormFieldCharacterCount";try{t.displayName="FormFieldCharacterCount",t.__docgenInfo={description:"",displayName:"FormFieldCharacterCount",props:{length:{defaultValue:null,description:"The current length of the field’s value.",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"The maximum length of the field’s value.",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={title:"Components/Forms/Form Field Character Count",component:t,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};var s,c,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["Default","Error"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{r as E,E as F};
