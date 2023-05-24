import{j as v,c as f}from"./clsx.m-51e04ab1.js";import{B as b}from"./index.esm-2817e837.js";import{r as _}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function h(a){switch(a){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const n=_.forwardRef(({children:a,disabled:g,variant:o="primary",...B},T)=>v.jsx(b,{...B,appearance:h(o),ref:T,disabled:g,className:f(o==="secondary"&&"amsterdam-button--secondary"),children:a}));n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const j={title:"Button",id:"react-button",component:n,args:{children:"Default",disabled:!1},tags:["autodocs"]},r={name:"Button Primary",args:{children:"Primary",variant:"primary"},argTypes:{variant:{table:{disable:!0}}}},e={name:"Button Secondary",args:{children:"Secondary",variant:"secondary"},argTypes:{...r.argTypes}},t={name:"Button Tertiary",args:{children:"Tertiary",variant:"tertiary"},argTypes:{...r.argTypes}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Button Primary',
  args: {
    children: 'Primary',
    variant: 'primary'
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,y,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary'
  },
  argTypes: {
    ...ButtonPrimary.argTypes
  }
}`,...(m=(y=e.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  },
  argTypes: {
    ...ButtonPrimary.argTypes
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const E=["ButtonPrimary","ButtonSecondary","ButtonTertiary"];export{r as ButtonPrimary,e as ButtonSecondary,t as ButtonTertiary,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-c7cbdac5.js.map
