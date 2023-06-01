import{j as v,c as S}from"./clsx.m-51e04ab1.js";import{B as b}from"./index.esm-2817e837.js";import{r as h}from"./index-8db94870.js";function B(t){switch(t){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const n=h.forwardRef(({children:t,disabled:f,variant:o="primary",...g},_)=>v.jsx(b,{...g,appearance:B(o),ref:_,disabled:f,className:S(o==="secondary"&&"amsterdam-button--secondary"),children:t}));n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const x={title:"Button",component:n,args:{children:"Default",disabled:!1}},r={args:{children:"Primary"}},e={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Tertiary",variant:"tertiary"}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,l,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const P=["Primary","Secondary","Tertiary"],E=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,Secondary:e,Tertiary:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{E as B,r as P,e as S,a as T};
//# sourceMappingURL=Button.stories-3eb6c376.js.map
