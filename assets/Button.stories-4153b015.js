import{j as f}from"./jsx-runtime-94f6e698.js";import{B as S}from"./index.esm-aac80ce9.js";import{c as _}from"./clsx.m-1229b3e0.js";import{r as v}from"./index-8db94870.js";function B(a){switch(a){case"secondary":return"secondary-action-button";case"tertiary":return"subtle-button";default:return"primary-action-button"}}const o=v.forwardRef(({children:a,disabled:b,variant:n="primary",...g},h)=>f.jsx(S,{...g,appearance:B(n),ref:h,disabled:b,className:_("amsterdam-button",n==="secondary"&&"amsterdam-button--secondary"),children:a}));o.displayName="Button";try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */const P={title:"CSS Components/Button",component:o,args:{disabled:!1}},t={args:{children:"Primary"},parameters:{docs:{source:{language:"html",code:'<button class="utrecht-button utrecht-button--primary-action" type="button">Primary</button>'}}}},r={args:{children:"Secondary",variant:"secondary"},parameters:{docs:{source:{language:"html",code:'<button class="utrecht-button utrecht-button--secondary-action amsterdam-button--secondary" type="button">Secondary</button>'}}}},e={args:{children:"Tertiary",variant:"tertiary"},parameters:{docs:{source:{language:"html",code:'<button class="utrecht-button utrecht-button--subtle" type="button">Tertiary</button>'}}}};var s,c,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--primary-action" type="button">Primary</button>'
      }
    }
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--secondary-action amsterdam-button--secondary" type="button">Secondary</button>'
      }
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,l,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary',
    variant: 'tertiary'
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--subtle" type="button">Tertiary</button>'
      }
    }
  }
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const T=["Primary","Secondary","Tertiary"],O=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:r,Tertiary:e,__namedExportsOrder:T,default:P},Symbol.toStringTag,{value:"Module"}));export{O as B,t as P,r as S,e as T};
//# sourceMappingURL=Button.stories-4153b015.js.map
