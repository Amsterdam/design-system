import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{H as l,P as m}from"./index.esm-DBblPCWP.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const s=({children:r,size:i})=>e.jsx("span",{className:`ams-mb--${i}`,children:r});try{s.displayName="Margin",s.__docgenInfo={description:"Renders examples in Storybook. Not for reuse.",displayName:"Margin",props:{size:{defaultValue:null,description:"The amount of space below the element.",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const c=({size:r})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{className:`ams-mb--${r}`,level:2,children:"This heading has a bottom margin"}),e.jsx(m,{children:"It introduces white space between the heading and this paragraph below."})]}),d={title:"Utilities/CSS/Margin",component:s,args:{size:"xs"}},a={render:c};var t,o,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{h as M};
