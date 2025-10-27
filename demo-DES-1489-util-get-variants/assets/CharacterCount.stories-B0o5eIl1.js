import{r as u,j as l,c as m}from"./iframe-CvPRpSR-.js";const a=u.forwardRef(({className:t,length:o,maxLength:s,...n},c)=>l.jsx("div",{...n,className:m("ams-character-count",o>s&&"ams-character-count--error",t),ref:c,role:"status",children:`${o} van ${s} tekens`}));a.displayName="CharacterCount";try{a.displayName="CharacterCount",a.__docgenInfo={description:"",displayName:"CharacterCount",props:{length:{defaultValue:null,description:"The current length of the field’s value.",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"The maximum length of the field’s value.",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d={title:"Components/Forms/Character Count",component:a,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Error"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{a as C,r as E,h as a,d as m};
