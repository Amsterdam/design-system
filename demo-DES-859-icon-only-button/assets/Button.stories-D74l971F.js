import{j as e}from"./jsx-runtime-BlAj40OV.js";import{k as m}from"./index.esm-BBV4ZYo5.js";import{c as C}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{I as p}from"./Icon-msbkstIT.js";const u=F.forwardRef(({children:r,className:O,disabled:E,icon:a,iconPosition:n,type:R,variant:$="primary",...k},w)=>e.jsxs("button",{...k,ref:w,disabled:E,className:C("ams-button",`ams-button--${$}`,`ams-button--icon-${n}`,O),type:R||"button",children:[a&&(n==="start"||n==="only")&&e.jsx(p,{svg:a,size:"level-5",square:!0}),a&&n==="only"?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,a&&!n&&e.jsx(p,{svg:a,size:"level-5",square:!0})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}}}}}catch{}const M={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}}}},s={},t={args:{children:"Annuleren",variant:"secondary"}},o={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Delen",icon:m}},c={args:{children:"Delen",icon:m,iconPosition:"start"}},l={args:{children:"Delen",icon:m,iconPosition:"only",variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,S,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,b,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(b=o.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var I,W,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon
  }
}`,...(j=(W=i.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var T,B,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var D,V,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'only',
    variant: 'tertiary'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var z,A,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const U=["Primary","Secondary","Tertiary","WithIcon","WithIconAtStart","WithIconOnly","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,Primary:s,Secondary:t,Tertiary:o,TextWrapping:d,WithIcon:i,WithIconAtStart:c,WithIconOnly:l,__namedExportsOrder:U,default:M},Symbol.toStringTag,{value:"Module"}));export{Q as B,s as P,t as S,o as T,i as W,c as a,l as b,d as c};
