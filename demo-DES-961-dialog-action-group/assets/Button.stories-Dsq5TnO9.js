import{j as n}from"./jsx-runtime-BlAj40OV.js";import{c as P}from"./index.esm-8wEFUDjb.js";import{k as N}from"./index.esm-Bsc2owIZ.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as O}from"./index-Cs7sjTYM.js";const i=O.forwardRef(({children:o,className:B,type:T,disabled:j,variant:W="primary",...I},z)=>n.jsx("button",{...I,ref:z,disabled:j,className:E("ams-button",`ams-button--${W}`,B),type:T||"button",children:o}));i.displayName="Button";try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const V={title:"Components/Buttons/Button",component:i,args:{children:"Button label",variant:"primary",disabled:!1},argTypes:{children:{description:"The text for the label and/or an icon.",table:{disable:!1}},disabled:{description:"Prevents interaction. Avoid if possible."}}},e={},r={args:{variant:"secondary"}},a={args:{variant:"tertiary"}},t={args:{children:["Button label",n.jsx(P,{svg:N,size:"level-5"},"icon")]},argTypes:{children:{table:{disable:!0}}}},s={args:{children:"Vergunningsaanvraag verzenden"},decorators:[o=>n.jsx("div",{style:{maxWidth:"16rem"},children:n.jsx(o,{})})]};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,g,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: ['Button label', <Icon key="icon" svg={ShareIcon} size="level-5" />]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,x,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const k=["Primary","Secondary","Tertiary","WithIcon","TextWrapping"],M=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,Secondary:r,Tertiary:a,TextWrapping:s,WithIcon:t,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{M as B,e as P,r as S,a as T,t as W,s as a};
