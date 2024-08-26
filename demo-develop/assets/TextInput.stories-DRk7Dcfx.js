import{j as R}from"./jsx-runtime-BlAj40OV.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as w}from"./index-Cs7sjTYM.js";const d=w.forwardRef(({className:n,dir:j,invalid:A,type:W="text",...O},q)=>R.jsx("input",{...O,"aria-invalid":A||void 0,className:k("ams-text-input",n),dir:j??"auto",ref:q,type:W}));d.displayName="TextInput";try{d.displayName="TextInput",d.__docgenInfo={description:"",displayName:"TextInput",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"The kind of data that the user should provide.",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const z={title:"Components/Forms/Text Input",component:d,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."}}},e={},a={args:{defaultValue:"designsystem@amsterdam.nl",type:"email"}},r={args:{defaultValue:"https://designsystem.amsterdam/",type:"url"}},s={args:{defaultValue:"14020",type:"tel"}},t={args:{placeholder:"Placeholder text"}},l={args:{defaultValue:"Invalid value",invalid:!0}},o={args:{defaultValue:"Disabled input",disabled:!0}};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    type: 'email'
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    type: 'url'
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,b,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    type: 'tel'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var _,V,I;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(I=(V=t.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var S,T,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Invalid value',
    invalid: true
  }
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var D,E,N;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Disabled input',
    disabled: true
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const C=["Default","EmailAddress","WebAddress","PhoneNumber","Placeholder","Invalid","Disabled"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:o,EmailAddress:a,Invalid:l,PhoneNumber:s,Placeholder:t,WebAddress:r,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{o as D,a as E,l as I,s as P,G as T,r as W,t as a};
