import{k as y,l as b}from"./index.esm-C_dxfMQN.js";import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as M}from"./index-G8LIXM5I.js";import{I as S}from"./Icon-BBW_x4VP.js";const s=M.forwardRef(({children:t,className:h,icon:n,prefix:x="Invoerfout",...E},_)=>o.jsxs("p",{...E,className:v("ams-error-message",h),ref:_,children:[o.jsx(S,{size:"small",svg:n||y}),o.jsxs("span",{className:"ams-visually-hidden",children:[x,": "]}),t]}));s.displayName="ErrorMessage";try{s.displayName="ErrorMessage",s.__docgenInfo={description:"",displayName:"ErrorMessage",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"Function"}},prefix:{defaultValue:{value:"Invoerfout"},description:"An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’.",name:"prefix",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const j={title:"Components/Forms/Error Message",component:s,args:{children:"Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl."},argTypes:{children:{table:{disable:!1}}}},e={},r={args:{children:"Enter an email address in the correct format, like name@example.com",prefix:"Error"}},a={args:{icon:b}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Enter an email address in the correct format, like name@example.com',
    prefix: 'Error'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,f,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: MegaphoneIcon
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const I=["Default","CustomPrefix","WithCustomIcon"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomPrefix:r,Default:e,WithCustomIcon:a,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{r as C,P as E,a as W};
