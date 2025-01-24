import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{P as i}from"./index.esm-DVTFB_65.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const r=({children:s})=>e.jsx("span",{className:"ams-visually-hidden",children:s});try{r.displayName="VisuallyHidden",r.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"VisuallyHidden",props:{}}}catch{}const l=({children:s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user agents only. It is not perceivable on a screen."}),e.jsx(i,{className:"ams-visually-hidden",children:s})]}),d={title:"Utilities/CSS/Visually Hidden",component:r,args:{children:"Here is the paragraph that is visually hidden. A screen reader will pick it up and read it to its user."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},a={render:l};var t,o,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{m as V};
