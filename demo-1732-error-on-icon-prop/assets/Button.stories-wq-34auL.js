import{j as e}from"./jsx-runtime-BlAj40OV.js";import{I as g,c as p}from"./index.esm-DQgjFsBh.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as G}from"./index-Cs7sjTYM.js";import{I as d}from"./Icon-msbkstIT.js";const u=G.forwardRef(({children:r,className:F,disabled:R,icon:n,iconBefore:m,iconOnly:y,type:E,variant:k="primary",...M},U)=>{const $=()=>{switch(!0){case!n:return r;case m:return e.jsxs(e.Fragment,{children:[e.jsx(d,{svg:n,size:"level-5"}),r]});case y:return e.jsxs(e.Fragment,{children:[e.jsx(d,{svg:n,size:"level-5",square:!0}),e.jsx("span",{className:"ams-visually-hidden",children:r},2)]});default:return e.jsxs(e.Fragment,{children:[r,e.jsx(d,{svg:n,size:"level-5"})]})}};return e.jsx("button",{...M,className:D("ams-button",`ams-button--${k}`,n&&y&&!m&&"ams-button--icon-only",F),disabled:R,ref:U,type:E||"button",children:$()})});u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"Adds an icon to the button, showing it after the label.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Shows the icon before the label. Requires a value for `icon`. Cannot be used together with `iconOnly`.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Shows the icon without the label. Requires a value for `icon`. Cannot be used together with `iconBefore`.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(g)],mapping:g},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},a={},o={args:{children:"Annuleren",variant:"secondary"}},t={args:{children:"Terug",variant:"tertiary"}},s={args:{children:"Sluiten",icon:p}},i={args:{children:"Sluiten",icon:p,iconBefore:!0}},c={args:{children:"Sluiten",icon:p,iconOnly:!0,variant:"tertiary"}},l={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var h,f,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,S,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,B,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(j=(B=t.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var _,O,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...(W=(O=s.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var T,w,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...(q=(w=i.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var C,V,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var N,P,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(A=(P=l.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const J=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],Z=Object.freeze(Object.defineProperty({__proto__:null,Primary:a,Secondary:o,Tertiary:t,TextWrapping:l,WithIcon:s,WithIconBefore:i,WithIconOnly:c,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as B,a as P,o as S,t as T,s as W,i as a,c as b,l as c};
