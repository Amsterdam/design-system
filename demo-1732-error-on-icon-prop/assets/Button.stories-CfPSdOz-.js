import{j as r}from"./jsx-runtime-BlAj40OV.js";import{I as g,c as p}from"./index.esm-DQgjFsBh.js";import{c as D}from"./clsx-B-dksMZM.js";import{r as G}from"./index-Cs7sjTYM.js";import{I as d}from"./Icon-msbkstIT.js";const u=G.forwardRef(({children:e,className:R,disabled:E,icon:n,iconBefore:m,iconOnly:y,type:k,variant:F="primary",...M},U)=>{const $=()=>{switch(!0){case!n:return e;case m:return[r.jsx(d,{svg:n,size:"level-5"},1),e];case y:return[r.jsx(d,{svg:n,size:"level-5",square:!0},1),r.jsx("span",{className:"ams-visually-hidden",children:e},2)];default:return[e,r.jsx(d,{svg:n,size:"level-5"},2)]}};return r.jsx("button",{...M,className:D("ams-button",`ams-button--${F}`,n&&y&&!m&&"ams-button--icon-only",R),disabled:E,ref:U,type:k||"button",children:$()})});u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"Adds an icon to the button, showing it after the label.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Shows the icon before the label. Requires a value for `icon`. Cannot be used together with `iconOnly`.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Shows the icon without the label. Requires a value for `icon`. Cannot be used together with `iconBefore`.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(g)],mapping:g},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},a={},o={args:{children:"Annuleren",variant:"secondary"}},t={args:{children:"Terug",variant:"tertiary"}},s={args:{children:"Sluiten",icon:p}},i={args:{children:"Sluiten",icon:p,iconBefore:!0}},c={args:{children:"Sluiten",icon:p,iconOnly:!0,variant:"tertiary"}},l={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,S,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,B,_;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var j,O,W;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
