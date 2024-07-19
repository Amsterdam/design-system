import{j as a}from"./jsx-runtime-BlAj40OV.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const l=({children:s})=>a.jsx("span",{className:"ams-visually-hidden",children:s}),n=({children:s})=>a.jsxs("div",{children:[a.jsx("p",{className:"ams-paragraph",children:"This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user agents only. It is not perceivable on a screen."}),a.jsx("p",{className:"ams-paragraph ams-visually-hidden",children:s})]}),o={title:"Utilities/CSS/Visually Hidden",component:l,args:{children:"Here is the paragraph that will be read out by a screen reader."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},e={render:n};var r,t,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const d=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:d,default:o},Symbol.toStringTag,{value:"Module"}));export{p as V};
