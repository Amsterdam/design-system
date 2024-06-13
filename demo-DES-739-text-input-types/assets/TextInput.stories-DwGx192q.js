import{T as j}from"./TextInput-2kjh8O1z.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const N={title:"Components/Forms/Text Input",component:j,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},value:{description:"The value of the field."}}},e={},a={args:{type:"password",value:"password"}},s={args:{type:"email",value:"designsystem@amsterdam.nl"}},r={args:{type:"url",value:"https://designsystem.amsterdam/"}},t={args:{type:"tel",value:"14020"}},o={args:{placeholder:"Placeholder text"}},n={args:{invalid:!0,value:"Invalid value"}},d={args:{disabled:!0,value:"Disabled input"}};var l,c,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'password',
    value: 'password'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,S,I;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    value: '14020'
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,x,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,_,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: 'Invalid value'
  }
}`,...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var E,W,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const z=["Default","Password","EmailAddress","WebAddress","PhoneNumber","Placeholder","Invalid","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:d,EmailAddress:s,Invalid:n,Password:a,PhoneNumber:t,Placeholder:o,WebAddress:r,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{d as D,s as E,n as I,a as P,F as T,r as W,t as a,o as b};
