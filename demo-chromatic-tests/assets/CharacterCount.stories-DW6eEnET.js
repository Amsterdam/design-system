import{r as u,j as l,c as m}from"./iframe-BY5DnIrk.js";const t=u.forwardRef(({className:a,length:o,maxLength:n,...s},c)=>l.jsx("div",{...s,className:m("ams-character-count",o>n&&"ams-character-count--error",a),ref:c,role:"status",children:`${o} van ${n} tekens`}));t.displayName="CharacterCount";try{t.displayName="CharacterCount",t.__docgenInfo={description:"",displayName:"CharacterCount",props:{length:{defaultValue:null,description:"The current length of the field’s value.",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"The maximum length of the field’s value.",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d={title:"Components/Forms/Character Count",component:t,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Error"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{h as C,r as E};
