import{j as a}from"./jsx-runtime-BlAj40OV.js";import{P as c}from"./index.esm-D6Ai7ti8.js";import{t as r}from"./index-Dm8KKx-a.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const o=({children:t,aspectRatio:l})=>a.jsx("span",{className:`ams-aspect-ratio--${l}`,children:t});try{o.displayName="AspectRatio",o.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"AspectRatio",props:{aspectRatio:{defaultValue:null,description:"The ratio of the horizontal and vertical dimensions.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"x-tall"'},{value:'"tall"'},{value:'"wide"'},{value:'"x-wide"'},{value:'"2x-wide"'}]}}}}}catch{}const p=({aspectRatio:t})=>a.jsx("div",{className:`ams-aspect-ratio--${t}`,children:a.jsx(c,{style:{alignItems:"center",backgroundColor:r.ams.color["neutral-grey2"],blockSize:"100%",color:r.ams.color["primary-white"],display:"inline-flex",inlineSize:"100%",justifyContent:"center"},children:"This gray block has two dimensions with fixed proportions."})}),d={title:"Utilities/CSS/Aspect Ratio",component:o,args:{aspectRatio:"wide"}},e={render:p};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const m=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{_ as A};
