import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as s}from"./index.esm-CTzaYrgX.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const t=r=>e.jsx("span",{...r});try{t.displayName="Gap",t.__docgenInfo={description:"Mock component to render examples in Storybook. Not for reuse.",displayName:"Gap",props:{size:{defaultValue:null,description:"The amount of space between the element’s children.",name:"size",required:!0,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}}}}}catch{}const n=({size:r})=>e.jsxs("div",{className:`ams-gap-${r}`,children:[e.jsx(s,{children:"These paragraphs are separated by a gap."}),e.jsx(s,{children:"These paragraphs are separated by a gap."}),e.jsx(s,{children:"These paragraphs are separated by a gap."})]}),c={title:"Utilities/CSS/Gap",component:t,args:{size:"xs"},argTypes:{size:{control:{labels:{xs:"x-small",s:"small",m:"medium",l:"large",xl:"x-large"},type:"radio"}}}},a={render:n};var o,p,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const i=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{u as G};
