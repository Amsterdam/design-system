import{j as h}from"./jsx-runtime-BlAj40OV.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as f}from"./index-Cs7sjTYM.js";const t=f.forwardRef(({className:a,length:o,maxLength:n,...d},i)=>h.jsx("div",{...d,ref:i,className:g("ams-character-count",o>n&&"ams-character-count--error",a),role:"status",children:`${o} van ${n} tekens`}));t.displayName="CharacterCount";try{t.displayName="CharacterCount",t.__docgenInfo={description:"",displayName:"CharacterCount",props:{length:{defaultValue:null,description:"The current length of the field’s value.",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"The maximum length of the field’s value.",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const C={title:"Components/Forms/Character Count",component:t,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};var s,c,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,l,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Default","Error"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{b as C,r as E};
