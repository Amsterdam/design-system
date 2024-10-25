import{j as r}from"./jsx-runtime-BlAj40OV.js";import{I as y,c as p}from"./index.esm-DQgjFsBh.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as G}from"./index-Cs7sjTYM.js";import{I as d}from"./Icon-msbkstIT.js";const u=G.forwardRef(({children:e,className:A,disabled:R,icon:l,iconBefore:E,iconOnly:m,type:k,variant:F="primary",...M},U)=>{const $=()=>l?m?[r.jsx(d,{svg:l,size:"level-5",square:!0},1),r.jsx("span",{className:"ams-visually-hidden",children:e},2)]:E?[r.jsx(d,{svg:l,size:"level-5"}),e]:[e,r.jsx(d,{svg:l,size:"level-5"})]:e;return r.jsx("button",{...M,className:D("ams-button",`ams-button--${F}`,m&&"ams-button--icon-only",A),disabled:R,ref:U,type:k||"button",children:$()})});u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"Adds an icon to the button, showing it after the label.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Shows the icon before the label. Requires a value for `icon`. Cannot be used together with `iconOnly`.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Shows the icon without the label. Requires a value for `icon`. Cannot be used together with `iconBefore`.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(y)],mapping:y},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},n={},a={args:{children:"Annuleren",variant:"secondary"}},o={args:{children:"Terug",variant:"tertiary"}},t={args:{children:"Sluiten",icon:p}},s={args:{children:"Sluiten",icon:p,iconBefore:!0}},i={args:{children:"Sluiten",icon:p,iconOnly:!0,variant:"tertiary"}},c={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,b,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,B,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var _,j,O;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var w,C,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var z,N,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const J=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],Z=Object.freeze(Object.defineProperty({__proto__:null,Primary:n,Secondary:a,Tertiary:o,TextWrapping:c,WithIcon:t,WithIconBefore:s,WithIconOnly:i,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as B,n as P,a as S,o as T,t as W,s as a,i as b,c};
