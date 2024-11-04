import{j as r}from"./jsx-runtime-BlAj40OV.js";import{I as y,c as m}from"./index.esm-DQgjFsBh.js";import{c as $}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";import{I as g}from"./Icon-msbkstIT.js";const u=D.forwardRef(({children:n,className:R,disabled:E,icon:e,iconBefore:p,iconOnly:a,type:k,variant:F="primary",...M},U)=>r.jsxs("button",{...M,className:$("ams-button",`ams-button--${F}`,e&&a&&!p&&"ams-button--icon-only",R),disabled:E,ref:U,type:k||"button",children:[e&&(p||a)&&r.jsx(g,{svg:e,size:"level-5",square:a}),e&&a?r.jsx("span",{className:"ams-visually-hidden",children:n}):n,e&&!p&&!a&&r.jsx(g,{svg:e,size:"level-5"})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"Adds an icon to the button, showing it after the label.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Shows the icon before the label. Requires a value for `icon`. Cannot be used together with `iconOnly`.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Shows the icon without the label. Requires a value for `icon`. Cannot be used together with `iconBefore`.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,icon:void 0,iconBefore:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(y)],mapping:y},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},o={},t={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Sluiten",icon:m}},c={args:{children:"Sluiten",icon:m,iconBefore:!0}},l={args:{children:"Sluiten",icon:m,iconOnly:!0,variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[n=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(n,{})})]};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,S,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var x,B,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(B=s.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var j,W,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var O,q,w;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var C,V,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var N,P,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const H=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],Y=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,Secondary:t,Tertiary:s,TextWrapping:d,WithIcon:i,WithIconBefore:c,WithIconOnly:l,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as B,o as P,t as S,s as T,i as W,c as a,l as b,d as c};
