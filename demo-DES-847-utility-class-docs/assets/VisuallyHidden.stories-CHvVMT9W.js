import{j as s}from"./jsx-runtime-BlAj40OV.js";import{P as i}from"./index.esm-BlOReKcg.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const r=({children:a})=>s.jsx("span",{className:"ams-visually-hidden",children:a});try{r.displayName="VisuallyHidden",r.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"VisuallyHidden",props:{}}}catch{}const l=({children:a})=>[s.jsx(i,{children:"This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user agents only. It is not perceivable on a screen."},0),s.jsx(i,{className:"ams-visually-hidden",children:a},1)],d={title:"Utilities/CSS/Visually Hidden",component:r,args:{children:"Here is the paragraph that is visually hidden. A screen reader will pick it up and read it to its user."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},e={render:l};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{m as V};
