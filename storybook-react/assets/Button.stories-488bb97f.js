import{j as b,c as v}from"./clsx.m-51e04ab1.js";import{B as S}from"./index.esm-4fd6ed83.js";import{r as h}from"./index-8db94870.js";function B(t){switch(t){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const n=h.forwardRef(({children:t,disabled:f,variant:o="primary",...g},_)=>b.jsx(S,{...g,appearance:B(o),ref:_,disabled:f,className:v("amsterdam-button",o==="secondary"&&"amsterdam-button--secondary"),children:t}));n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const x={title:"Button",component:n,args:{children:"Default",disabled:!1}},r={args:{children:"Primary"}},a={args:{children:"Secondary",variant:"secondary"}},e={args:{children:"Tertiary",variant:"tertiary"}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,l,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const P=["Primary","Secondary","Tertiary"],E=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,Secondary:a,Tertiary:e,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{E as B,r as P,a as S,e as T};
//# sourceMappingURL=Button.stories-488bb97f.js.map
