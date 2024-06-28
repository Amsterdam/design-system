import{T as E}from"./TextInput-DvUsoF4e.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const W={title:"Components/Forms/Text Input",component:E,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},value:{description:"The value of the field."}}},e={},a={args:{type:"email",value:"designsystem@amsterdam.nl"}},s={args:{type:"url",value:"https://designsystem.amsterdam/"}},r={args:{type:"tel",value:"14020"}},t={args:{placeholder:"Placeholder text"}},o={args:{invalid:!0,value:"Invalid value"}},n={args:{disabled:!0,value:"Disabled input"}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'email',
    value: 'designsystem@amsterdam.nl'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'url',
    value: 'https://designsystem.amsterdam/'
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    value: '14020'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,S,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder text'
  }
}`,...(P=(S=t.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var I,T,x;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    invalid: true,
    value: 'Invalid value'
  }
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var D,_,A;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const O=["Default","EmailAddress","WebAddress","PhoneNumber","Placeholder","Invalid","Disabled"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:n,EmailAddress:a,Invalid:o,PhoneNumber:r,Placeholder:t,WebAddress:s,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{n as D,a as E,o as I,r as P,N as T,s as W,t as a};
