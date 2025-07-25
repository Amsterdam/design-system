import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as l}from"./index-G8LIXM5I.js";const t=l.forwardRef(({className:a,length:o,maxLength:n,...s},c)=>m.jsx("div",{...s,className:u("ams-character-count",o>n&&"ams-character-count--error",a),ref:c,role:"status",children:`${o} van ${n} tekens`}));t.displayName="CharacterCount";try{t.displayName="CharacterCount",t.__docgenInfo={description:"",displayName:"CharacterCount",props:{length:{defaultValue:null,description:"The current length of the field’s value.",name:"length",required:!0,type:{name:"number"}},maxLength:{defaultValue:null,description:"The maximum length of the field’s value.",name:"maxLength",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const p={title:"Components/Forms/Character Count",component:t,args:{length:7,maxLength:10}},e={},r={args:{length:1001,maxLength:1e3}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    length: 1001,
    maxLength: 1000
  }
}`,...r.parameters?.docs?.source}}};const d=["Default","Error"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{f as C,r as E};
