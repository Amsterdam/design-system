import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as l,P as i}from"./index.esm-D0lpvXKL.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const s=r=>e.jsx("span",{...r});try{s.displayName="Margin",s.__docgenInfo={description:"Mock component to render examples in Storybook. Not for reuse.",displayName:"Margin",props:{size:{defaultValue:null,description:"The amount of space below the element.",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}}}}}catch{}const m=({size:r})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{className:`ams-mb-${r}`,level:2,children:"This heading has a bottom margin"}),e.jsx(i,{children:"It introduces white space between itself and this paragraph."})]}),c={title:"Utilities/CSS/Margin",component:s,args:{size:"xs"},argTypes:{size:{control:{labels:{xs:"x-small",s:"small",m:"medium",l:"large",xl:"x-large"},type:"radio"}}}},a={render:m};var t,o,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const p=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{g as M};
