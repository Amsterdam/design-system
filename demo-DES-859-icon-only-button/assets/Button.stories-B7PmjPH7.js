import{j as r}from"./jsx-runtime-BlAj40OV.js";import{k as m}from"./index.esm-BBV4ZYo5.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";import{I as p}from"./Icon-msbkstIT.js";const d=M.forwardRef(({children:e,className:E,disabled:$,icon:a,iconPosition:n,type:R,variant:k="primary",...w},C)=>r.jsxs("button",{...w,ref:C,disabled:$,className:F("ams-button",`ams-button--${k}`,`ams-button--icon-${n}`,E),type:R||"button",children:[a&&(n==="start"||n==="only")&&r.jsx(p,{svg:a,size:"level-5",square:!0}),a&&n==="only"?r.jsx("span",{className:"ams-visually-hidden",children:e}):e,a&&!n&&r.jsx(p,{svg:a,size:"level-5",square:!0})]}));d.displayName="Button";try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}}}}}catch{}const U={title:"Components/Buttons/Button",component:d,args:{children:"Versturen",variant:"primary",disabled:!1},argTypes:{icon:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."}}},s={},t={args:{children:"Annuleren",variant:"secondary"}},o={args:{children:"Terug",variant:"tertiary"}},c={args:{icon:m}},i={args:{icon:m,iconPosition:"start"}},l={args:{variant:"tertiary",icon:m,iconPosition:"only"}},u={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var I,j,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var B,P,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,q,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconPosition: 'only'
  }
}`,...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,W,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const D=["Primary","Secondary","Tertiary","Icon","StartIcon","OnlyIcon","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,Icon:c,OnlyIcon:l,Primary:s,Secondary:t,StartIcon:i,Tertiary:o,TextWrapping:u,__namedExportsOrder:D,default:U},Symbol.toStringTag,{value:"Module"}));export{Q as B,c as I,l as O,s as P,t as S,o as T,i as a,u as b};
