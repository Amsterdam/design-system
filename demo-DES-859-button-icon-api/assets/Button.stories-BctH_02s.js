import{j as e}from"./jsx-runtime-BlAj40OV.js";import{I as y,c as p}from"./index.esm-DQgjFsBh.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{I as g}from"./Icon-msbkstIT.js";const u=$.forwardRef(({children:r,className:E,disabled:k,icon:n,iconBefore:m,iconOnly:a,type:w,variant:F="primary",...L},M)=>e.jsxs("button",{...L,ref:M,disabled:k,className:U("ams-button",`ams-button--${F}`,a&&"ams-button--icon-only",E),type:w||"button",children:[n&&(m||a)&&e.jsx(g,{svg:n,size:"level-5",square:a}),n&&a?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,n&&!m&&!a&&e.jsx(g,{svg:n,size:"level-5"})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconBefore:{defaultValue:null,description:"Position the icon before the label. After is the default. Requires the `icon` prop to be set.",name:"iconBefore",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Leaves only the icon visible in the button. Requires the `icon` prop to be set.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,iconOnly:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(y)],mapping:y},iconBefore:{control:{type:"boolean"},if:{arg:"icon"}},iconOnly:{control:{type:"boolean"},if:{arg:"icon"}}}},o={},t={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Sluiten",icon:p}},c={args:{children:"Sluiten",icon:p,iconBefore:!0}},l={args:{children:"Sluiten",icon:p,iconOnly:!0,variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var f,v,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,S,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var O,q,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var P,z,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconOnly: true,
    variant: 'tertiary'
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var C,N,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const G=["Primary","Secondary","Tertiary","WithIcon","WithIconBefore","WithIconOnly","TextWrapping"],Y=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,Secondary:t,Tertiary:s,TextWrapping:d,WithIcon:i,WithIconBefore:c,WithIconOnly:l,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{Y as B,o as P,t as S,s as T,i as W,c as a,l as b,d as c};
