import{j as t}from"./jsx-runtime-j_jdvEMj.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const s=({children:a,aspectRatio:c})=>t.jsx("span",{className:`ams-aspect-ratio--${c}`,children:a});try{s.displayName="AspectRatio",s.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"AspectRatio",props:{aspectRatio:{defaultValue:null,description:"The aspect ratio to display media content in.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"x-tall"'},{value:'"tall"'},{value:'"wide"'},{value:'"x-wide"'},{value:'"2x-wide"'}]}}}}}catch{}const l={title:"Utilities/CSS/Aspect Ratio",component:s,args:{aspectRatio:"x-wide"},argTypes:{aspectRatio:{control:"radio",options:["2x-wide","x-wide","wide","square","tall","x-tall"]}},render:({aspectRatio:a})=>t.jsx("div",{className:"ams-docs-column ams-docs-aspect-ratio",children:t.jsx("div",{className:`ams-docs-item ams-aspect-ratio--${a}`})})},e={};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const p=["Default"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{n as A};
