import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as t}from"./index.esm-CxQQ2LDT.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const s=a=>e.jsx("span",{...a});try{s.displayName="VisuallyHidden",s.__docgenInfo={description:"Mock component to render examples in Storybook. Not for reuse.",displayName:"VisuallyHidden",props:{}}}catch{}const l=({children:a})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user agents only. It is not perceivable on a screen."}),e.jsx(t,{className:"ams-visually-hidden",children:a})]}),d={title:"Utilities/CSS/Visually Hidden",component:s,args:{children:"Here is the paragraph that is visually hidden. A screen reader will pick it up and read it to its user."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},r={render:l};var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{m as V};
