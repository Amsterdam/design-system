import{k as p,l as d}from"./index.esm-C3CW_awW.js";import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as f}from"./index-G8LIXM5I.js";import{I as g}from"./Icon-Pril9caF.js";const s=f.forwardRef(({children:t,className:i,icon:n,prefix:c="Invoerfout",...l},m)=>o.jsxs("p",{...l,className:u("ams-error-message",i),ref:m,children:[o.jsx(g,{size:"small",svg:n||p}),o.jsxs("span",{className:"ams-visually-hidden",children:[c,": "]}),t]}));s.displayName="ErrorMessage";try{s.displayName="ErrorMessage",s.__docgenInfo={description:"",displayName:"ErrorMessage",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"Function"}},prefix:{defaultValue:{value:"Invoerfout"},description:"An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’.",name:"prefix",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const h={title:"Components/Forms/Error Message",component:s,args:{children:"Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl."},argTypes:{children:{table:{disable:!1}}}},e={},r={args:{children:"Enter an email address in the correct format, like name@example.com",prefix:"Error"}},a={args:{icon:d}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Enter an email address in the correct format, like name@example.com',
    prefix: 'Error'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: MegaphoneIcon
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","CustomPrefix","WithCustomIcon"],M=Object.freeze(Object.defineProperty({__proto__:null,CustomPrefix:r,Default:e,WithCustomIcon:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{r as C,M as E,a as W};
