import{S as y,k as v}from"./index.esm-CPc1noYl.js";import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as S}from"./index-RigO-4kf.js";import{I as j}from"./Icon-B4wlDyQ3.js";const a=S.forwardRef(({children:n,className:h,icon:t,prefix:x="Invoerfout",...E},_)=>o.jsxs("p",{...E,ref:_,className:b("ams-error-message",h),children:[o.jsx(j,{svg:t||y,size:"level-6"}),o.jsxs("span",{className:"ams-visually-hidden",children:[x,": "]}),n]}));a.displayName="ErrorMessage";try{a.displayName="ErrorMessage",a.__docgenInfo={description:"",displayName:"ErrorMessage",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"Function"}},prefix:{defaultValue:{value:"Invoerfout"},description:"An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’.",name:"prefix",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const I={title:"Components/Forms/Error Message",component:a,args:{children:"Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl."},argTypes:{children:{table:{disable:!1}}}},e={},r={args:{children:"Enter an email address in the correct format, like name@example.com",prefix:"Error"}},s={args:{icon:v}};var c,i,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Enter an email address in the correct format, like name@example.com',
    prefix: 'Error'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: AnnouncementIcon
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const M=["Default","CustomPrefix","WithCustomIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomPrefix:r,Default:e,WithCustomIcon:s,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{r as C,P as E,s as W};
