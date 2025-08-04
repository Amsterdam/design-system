import{r as d,j as o,c as p,x as u,y as g}from"./iframe-T_MuecH3.js";import{I as f}from"./Icon-DZRasKym.js";const s=d.forwardRef(({children:n,className:c,icon:t,prefix:i="Invoerfout",...l},m)=>o.jsxs("p",{...l,className:p("ams-error-message",c),ref:m,children:[o.jsx(f,{size:"small",svg:t||u}),o.jsxs("span",{className:"ams-visually-hidden",children:[i,": "]}),n]}));s.displayName="ErrorMessage";try{s.displayName="ErrorMessage",s.__docgenInfo={description:"",displayName:"ErrorMessage",props:{icon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"icon",required:!1,type:{name:"Function"}},prefix:{defaultValue:{value:"Invoerfout"},description:"An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’.",name:"prefix",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const h={title:"Components/Forms/Error Message",component:s,args:{children:"Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl."},argTypes:{children:{table:{disable:!1}}}},e={},r={args:{children:"Enter an email address in the correct format, like name@example.com",prefix:"Error"}},a={args:{icon:g}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Enter an email address in the correct format, like name@example.com',
    prefix: 'Error'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: MegaphoneIcon
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","CustomPrefix","WithCustomIcon"],y=Object.freeze(Object.defineProperty({__proto__:null,CustomPrefix:r,Default:e,WithCustomIcon:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{r as C,y as E,a as W};
