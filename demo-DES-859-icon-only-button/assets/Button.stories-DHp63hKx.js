import{j as r}from"./jsx-runtime-BlAj40OV.js";import{k as l}from"./index.esm-BBV4ZYo5.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{I as y}from"./Icon-msbkstIT.js";const d=$.forwardRef(({children:e,className:A,type:F,disabled:R,variant:w="primary",icon:m,iconStart:p,iconOnly:u,...C},M)=>r.jsxs("button",{...C,ref:M,disabled:R,className:U("ams-button",`ams-button--${w}`,{"ams-button--icon-only":u},A),type:F||"button",children:[p&&r.jsx(y,{svg:p,size:"level-5",square:!0}),u?r.jsx("span",{className:"ams-visually-hidden",children:e}):e,m&&r.jsx(y,{svg:m,size:"level-5",square:!0})]}));d.displayName="Button";try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconStart:{defaultValue:null,description:"",name:"iconStart",required:!1,type:{name:"Function"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Buttons/Button",component:d,args:{children:"Actietekst",variant:"primary",disabled:!1},argTypes:{icon:{table:{disable:!0}},iconStart:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."}}},a={},n={args:{variant:"secondary"}},t={args:{variant:"tertiary"}},s={args:{iconStart:l}},o={args:{icon:l}},c={args:{variant:"tertiary",icon:l,iconOnly:!0}},i={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var g,v,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,b,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var _,h,I;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var j,O,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    iconStart: ShareIcon
  }
}`,...(B=(O=s.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var T,q,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon
  }
}`,...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,z,N;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconOnly: true
  }
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,W,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(k=(W=i.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const G=["Primary","Secondary","Tertiary","StartIcon","EndIcon","OnlyIcon","TextWrapping"],X=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:o,OnlyIcon:c,Primary:a,Secondary:n,StartIcon:s,Tertiary:t,TextWrapping:i,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{X as B,o as E,c as O,a as P,n as S,t as T,s as a,i as b};
