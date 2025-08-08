import{j as e,P as t}from"./iframe-B7hbChfh.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const s=r=>e.jsx("span",{...r});try{s.displayName="VisuallyHidden",s.__docgenInfo={description:"Mock component to render examples in Storybook. Not for reuse.",displayName:"VisuallyHidden",props:{}}}catch{}const i=({children:r})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user agents only. It is not perceivable on a screen."}),e.jsx(t,{className:"ams-visually-hidden",children:r})]}),o={title:"Utilities/CSS/Visually Hidden",component:s,args:{children:"Here is the paragraph that is visually hidden. A screen reader will pick it up and read it to its user."},argTypes:{children:{description:"The content to hide visually.",table:{disable:!1}}}},a={render:i};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render
}`,...a.parameters?.docs?.source}}};const n=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:n,default:o},Symbol.toStringTag,{value:"Module"}));export{d as V};
