import{j as r}from"./jsx-runtime-BlAj40OV.js";import{I as y,c as p}from"./index.esm-DQgjFsBh.js";import{c as $}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";import{I as d}from"./Icon-msbkstIT.js";const u=D.forwardRef(({children:e,className:R,disabled:E,icon:l,iconBefore:k,iconOnly:m,type:w,variant:F="primary",...L},M)=>{const U=()=>l?m?[r.jsx(d,{svg:l,size:"level-5",square:!0},1),r.jsx("span",{className:"ams-visually-hidden",children:e},2)]:k?[r.jsx(d,{svg:l,size:"level-5"}),e]:[e,r.jsx(d,{svg:l,size:"level-5"})]:e;return r.jsx("button",{...L,className:$("ams-button",`ams-button--${F}`,m&&"ams-button--icon-only",R),disabled:E,ref:M,type:w||"button",children:U()})});u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Position the icon before the label. After is the default. Requires the `icon` prop to be set.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Leaves only the icon visible in the button. Requires the `icon` prop to be set.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(y)],mapping:y},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},n={},o={args:{children:"Annuleren",variant:"secondary"}},a={args:{children:"Terug",variant:"tertiary"}},t={args:{children:"Sluiten",icon:p}},s={args:{children:"Sluiten",icon:p,iconBefore:!0}},i={args:{children:"Sluiten",icon:p,iconOnly:!0,variant:"tertiary"}},c={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,b,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,I,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(B=(I=a.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var _,j,O;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...(O=(j=t.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var W,T,q;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,z,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var A,C,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const H=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],Z=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,Secondary:o,Tertiary:a,TextWrapping:c,WithIcon:t,WithIconBefore:s,WithIconOnly:i,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as B,n as P,o as S,a as T,t as W,s as a,i as b,c};
