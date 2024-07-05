import{j as h}from"./jsx-runtime-X2b_N9AH.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as S}from"./index-uCp2LrAq.js";const s=S.forwardRef(({className:o,invalid:_,type:D="date",...b},I)=>h.jsx("input",{...b,"aria-invalid":_||void 0,className:x("ams-date-input",o),ref:I,type:D}));s.displayName="DateInput";try{s.displayName="DateInput",s.__docgenInfo={description:"",displayName:"DateInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"date"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const j={title:"Components/Forms/Date Input",component:s,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."}}},e={},a={args:{type:"datetime-local"}},r={args:{invalid:!0}},t={args:{disabled:!0}};var i,n,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,g,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const T=["Default","DateTime","Invalid","Disabled"],q=Object.freeze(Object.defineProperty({__proto__:null,DateTime:a,Default:e,Disabled:t,Invalid:r,__namedExportsOrder:T,default:j},Symbol.toStringTag,{value:"Module"}));export{q as D,r as I,a,t as b};
