import{j as a}from"./jsx-runtime-BlAj40OV.js";import{I as m,c as u}from"./index.esm-DQgjFsBh.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{I as y}from"./Icon-msbkstIT.js";const p=$.forwardRef(({children:n,className:E,disabled:R,icon:e,iconPosition:r,type:k,variant:w="primary",...F},M)=>a.jsxs("button",{...F,ref:M,disabled:R,className:U("ams-button",`ams-button--${w}`,e&&r==="only"&&"ams-button--icon-position-only",E),type:k||"button",children:[e&&(r==="start"||r==="only")&&a.jsx(y,{svg:e,size:"level-5",square:r==="only"}),e&&r==="only"?a.jsx("span",{className:"ams-visually-hidden",children:n}):n,e&&!r&&a.jsx(y,{svg:e,size:"level-5"})]}));p.displayName="Button";try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"The position of the icon. The default is after the label.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}}}}}catch{}const D={title:"Components/Buttons/Button",component:p,args:{children:"Versturen",disabled:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select"},options:Object.keys(m),mapping:m},iconPosition:{control:{type:"inline-radio",labels:{undefined:"end",start:"start",only:"only"}},options:[void 0,"start","only"]}}},t={},o={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Sluiten",icon:u}},c={args:{children:"Sluiten",icon:u,iconPosition:"start"}},l={args:{children:"Sluiten",icon:u,iconPosition:"only",variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[n=>a.jsx("div",{style:{maxWidth:"16rem"},children:a.jsx(n,{})})]};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,S,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var I,x,_;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var T,j,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon
  }
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var B,P,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconPosition: 'start'
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var O,V,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconPosition: 'only',
    variant: 'tertiary'
  }
}`,...(z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var C,N,q;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const G=["Primary","Secondary","Tertiary","WithIcon","WithIconAtStart","WithIconOnly","TextWrapping"],X=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:o,Tertiary:s,TextWrapping:d,WithIcon:i,WithIconAtStart:c,WithIconOnly:l,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{X as B,t as P,o as S,s as T,i as W,c as a,l as b,d as c};
