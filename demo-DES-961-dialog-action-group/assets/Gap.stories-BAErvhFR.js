import{j as e}from"./jsx-runtime-BlAj40OV.js";import{P as s}from"./index.esm-8wEFUDjb.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const t=({children:r,size:l})=>e.jsx("span",{className:`ams-gap--${l}`,children:r});try{t.displayName="Gap",t.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"Gap",props:{size:{defaultValue:null,description:"The amount of space between the element’s children.",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const c=({size:r})=>e.jsxs("div",{className:`ams-gap--${r}`,children:[e.jsx(s,{children:"These paragraphs are separated by a gap."}),e.jsx(s,{children:"These paragraphs are separated by a gap."}),e.jsx(s,{children:"These paragraphs are separated by a gap."})]}),d={title:"Utilities/CSS/Gap",component:t,args:{size:"xs"}},a={render:c};var o,p,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(n=(p=a.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const i=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:i,default:d},Symbol.toStringTag,{value:"Module"}));export{g as G};