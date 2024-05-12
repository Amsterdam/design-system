import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as g}from"./index-BwDkhjyp.js";const t=g.forwardRef(({className:a,length:o,maxLength:s,...u},p)=>h.jsx("div",{...u,ref:p,className:f("ams-form-field-character-counter",o>s&&"ams-form-field-character-counter--error",a),role:"status",children:`${o} van ${s} tekens`}));t.displayName="FormFieldCharacterCounter";try{t.displayName="FormFieldCharacterCounter",t.__docgenInfo={description:"",displayName:"FormFieldCharacterCounter",props:{length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={title:"Components/Forms/Form Field Character Counter",component:t,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};var n,c,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const _=["Default","Error"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{r as E,E as F};
