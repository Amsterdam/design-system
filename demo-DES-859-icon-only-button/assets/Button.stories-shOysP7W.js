import{j as e}from"./jsx-runtime-BlAj40OV.js";import{I as m,c as p}from"./index.esm-DQgjFsBh.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{I as y}from"./Icon-msbkstIT.js";const u=$.forwardRef(({children:r,className:E,disabled:R,icon:n,iconPosition:a,type:k,variant:w="primary",...F},M)=>e.jsxs("button",{...F,ref:M,disabled:R,className:U("ams-button",`ams-button--${w}`,a==="only"&&"ams-button--icon-position-only",E),type:k||"button",children:[n&&(a==="start"||a==="only")&&e.jsx(y,{svg:n,size:"level-5",square:!0}),n&&a==="only"?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,n&&!a&&e.jsx(y,{svg:n,size:"level-5",square:!0})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"The position of the icon. The default is after the label.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}},variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const D={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,variant:"primary",icon:null},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{control:{type:"select"},options:Object.keys(m),mapping:m},iconPosition:{control:{type:"inline-radio",labels:{undefined:"end",start:"start",only:"only"}},options:[void 0,"start","only"]}}},t={},o={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Sluiten",icon:p}},c={args:{children:"Sluiten",icon:p,iconPosition:"start"}},l={args:{children:"Sluiten",icon:p,iconPosition:"only",variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,S,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var O,V,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconPosition: 'only',
    variant: 'tertiary'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,C,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const G=["Primary","Secondary","Tertiary","WithIcon","WithIconAtStart","WithIconOnly","TextWrapping"],X=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:o,Tertiary:s,TextWrapping:d,WithIcon:i,WithIconAtStart:c,WithIconOnly:l,__namedExportsOrder:G,default:D},Symbol.toStringTag,{value:"Module"}));export{X as B,t as P,o as S,s as T,i as W,c as a,l as b,d as c};
