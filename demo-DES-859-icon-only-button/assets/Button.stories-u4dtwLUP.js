import{j as e}from"./jsx-runtime-BlAj40OV.js";import{h as p}from"./index.esm-DQgjFsBh.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{I as m}from"./Icon-msbkstIT.js";const u=$.forwardRef(({children:r,className:E,disabled:R,icon:a,iconPosition:n,type:w,variant:C="primary",...F},M)=>e.jsxs("button",{...F,ref:M,disabled:R,className:U("ams-button",`ams-button--${C}`,n==="only"&&"ams-button--icon-position-only",E),type:w||"button",children:[a&&(n==="start"||n==="only")&&e.jsx(m,{svg:a,size:"level-5",square:!0}),a&&n==="only"?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,a&&!n&&e.jsx(m,{svg:a,size:"level-5",square:!0})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"The position of the icon. The default is after the label.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}},variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const k={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,variant:"primary",icon:null},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}},iconPosition:{if:{arg:"icon",neq:null},control:{type:"inline-radio",labels:{undefined:"end",start:"start",only:"only"}},options:[void 0,"start","only"]}}},t={},o={args:{children:"Annuleren",variant:"secondary"}},s={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Bel 14 020",icon:p}},c={args:{children:"Bel 14 020",icon:p,iconPosition:"start"}},l={args:{children:"Bel 14 020",icon:p,iconPosition:"only",variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var y,g,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,x,B;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var _,I,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Bel 14 020',
    icon: PhoneIcon
  }
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,W,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Bel 14 020',
    icon: PhoneIcon,
    iconPosition: 'start'
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,A,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Bel 14 020',
    icon: PhoneIcon,
    iconPosition: 'only',
    variant: 'tertiary'
  }
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var z,N,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const D=["Primary","Secondary","Tertiary","WithIcon","WithIconAtStart","WithIconOnly","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:o,Tertiary:s,TextWrapping:d,WithIcon:i,WithIconAtStart:c,WithIconOnly:l,__namedExportsOrder:D,default:k},Symbol.toStringTag,{value:"Module"}));export{Q as B,t as P,o as S,s as T,i as W,c as a,l as b,d as c};
