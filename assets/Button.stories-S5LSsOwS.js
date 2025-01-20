import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{I as d,c}from"./index.esm-X3U7dYaT.js";import{B as A}from"./Button-B0rxuroA.js";const V={title:"Components/Buttons/Button",component:A,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(d)],mapping:d},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},e={},r={args:{children:"Annuleren",variant:"secondary"}},n={args:{children:"Terug",variant:"tertiary"}},o={args:{children:"Sluiten",icon:c}},a={args:{children:"Sluiten",icon:c,iconBefore:!0}},s={args:{children:"Sluiten",icon:c,iconOnly:!0,variant:"tertiary"}},t={args:{children:"Vergunningsaanvraag verzenden"},decorators:[z=>i.jsx("div",{style:{maxWidth:"16rem"},children:i.jsx(z,{})})]};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,S,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,I,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...(B=(I=o.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var b,W,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...(x=(W=a.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var O,T,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var _,C,P;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(P=(C=t.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const E=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],q=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,Secondary:r,Tertiary:n,TextWrapping:t,WithIcon:o,WithIconBefore:a,WithIconOnly:s,__namedExportsOrder:E,default:V},Symbol.toStringTag,{value:"Module"}));export{q as B,e as P,r as S,n as T,o as W,a,s as b,t as c};