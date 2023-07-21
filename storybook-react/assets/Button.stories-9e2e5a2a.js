import{j as b}from"./jsx-runtime-ffb262ed.js";import{B as S}from"./index.esm-129bbbc7.js";import{c as v}from"./clsx-1229b3e0.js";import{r as h}from"./index-76fb7be0.js";function B(t){switch(t){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const o=h.forwardRef(({children:t,disabled:f,variant:n="primary",...g},_)=>b.jsx(S,{...g,appearance:B(n),ref:_,disabled:f,className:v("amsterdam-button",n==="secondary"&&"amsterdam-button--secondary",n==="tertiary"&&"amsterdam-button--tertiary"),children:t}));o.displayName="Button";try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const x={title:"Button",component:o,args:{children:"Default",disabled:!1}},r={args:{children:"Primary"}},e={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Tertiary",variant:"tertiary"}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,y,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(l=(y=a.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};const P=["Primary","Secondary","Tertiary"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:r,Secondary:e,Tertiary:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{O as B,r as P,e as S,a as T};
//# sourceMappingURL=Button.stories-9e2e5a2a.js.map
