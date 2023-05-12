import{j as v}from"./clsx.m-fdfad4c1.js";import{B as f}from"./index.esm-6dcd05e7.js";import{r as b}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";function _(a){switch(a){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const n=b.forwardRef(({children:a,disabled:l,variant:g="primary",...B},T)=>v(f,{...B,appearance:_(g),ref:T,disabled:l,children:a}));n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const N={title:"Button",id:"css-button",component:n,args:{children:"Default",disabled:!1},tags:["autodocs"]},r={name:"Button Primary",args:{children:"Primary",variant:"primary"},argTypes:{variant:{table:{disable:!0}}}},e={name:"Button Secondary",args:{children:"Secondary",variant:"secondary"},argTypes:{...r.argTypes}},t={name:"Button Tertiary",args:{children:"Tertiary",variant:"tertiary"},argTypes:{...r.argTypes}};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,u,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary'
  },
  argTypes: {
    ...ButtonPrimary.argTypes
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  },
  argTypes: {
    ...ButtonPrimary.argTypes
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["ButtonPrimary","ButtonSecondary","ButtonTertiary"];export{r as ButtonPrimary,e as ButtonSecondary,t as ButtonTertiary,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Button.stories-3aca890a.js.map
