import{j as V}from"./jsx-runtime-BlAj40OV.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as w}from"./index-Cs7sjTYM.js";const n=w.forwardRef(({className:d,dir:A,invalid:W,type:O="text",...q},R)=>V.jsx("input",{...q,"aria-invalid":W||void 0,className:k("ams-text-input",d),dir:A??"auto",ref:R,type:O}));n.displayName="TextInput";try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={title:"Components/Forms/Text Input",component:n,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},value:{description:"The value of the field."}}},e={},a={args:{type:"email",value:"designsystem@amsterdam.nl"}},r={args:{type:"url",value:"https://designsystem.amsterdam/"}},s={args:{type:"tel",value:"14020"}},t={args:{placeholder:"Placeholder text"}},o={args:{invalid:!0,value:"Invalid value"}},l={args:{disabled:!0,value:"Disabled input"}};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    value: '14020'
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var _,I,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(T=(I=t.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,P,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: 'Invalid value'
  }
}`,...(D=(P=o.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var E,N,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const C=["Default","EmailAddress","WebAddress","PhoneNumber","Placeholder","Invalid","Disabled"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:l,EmailAddress:a,Invalid:o,PhoneNumber:s,Placeholder:t,WebAddress:r,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{l as D,a as E,o as I,s as P,G as T,r as W,t as a};
