import{j as _,c as h}from"./clsx.m-51e04ab1.js";import{B as b}from"./index.esm-2817e837.js";import{r as x}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function B(r){switch(r){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const n=x.forwardRef(({children:r,disabled:g,variant:o="primary",...f},v)=>_.jsx(b,{...f,appearance:B(o),ref:v,disabled:g,className:h(o==="secondary"&&"amsterdam-button--secondary"),children:r}));n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const j={title:"Button",id:"button",component:n,args:{children:"Default",disabled:!1},tags:["autodocs"]},a={args:{children:"Primary",variant:"primary"}},e={args:{children:"Secondary",variant:"secondary"}},t={args:{children:"Tertiary",variant:"tertiary"}};var s,c,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,y,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(l=(y=t.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const E=["Primary","Secondary","Tertiary"];export{a as Primary,e as Secondary,t as Tertiary,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-b560e090.js.map
