import{j as e}from"./jsx-runtime-BlAj40OV.js";import{k as m}from"./index.esm-BBV4ZYo5.js";import{c as C}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{I as p}from"./Icon-msbkstIT.js";const u=F.forwardRef(({children:r,className:O,disabled:E,icon:a,iconPosition:n,type:R,variant:$="primary",...k},w)=>e.jsxs("button",{...k,ref:w,disabled:E,className:C("ams-button",`ams-button--${$}`,`ams-button--icon-${n}`,O),type:R||"button",children:[a&&(n==="start"||n==="only")&&e.jsx(p,{svg:a,size:"level-5",square:!0}),a&&n==="only"?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,a&&!n&&e.jsx(p,{svg:a,size:"level-5",square:!0})]}));u.displayName="Button";try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"An icon to add to the button.",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"The position of the icon. The default is after the label.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}},variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const M={title:"Components/Buttons/Button",component:u,args:{children:"Versturen",disabled:!1,variant:"primary"},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},icon:{table:{disable:!0}}}},t={},s={args:{children:"Annuleren",variant:"secondary"}},o={args:{children:"Terug",variant:"tertiary"}},i={args:{children:"Delen",icon:m}},c={args:{children:"Delen",icon:m,iconPosition:"start"}},l={args:{children:"Delen",icon:m,iconPosition:"only",variant:"tertiary"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var y,g,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Annuleren',
    variant: 'secondary'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,x,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Terug',
    variant: 'tertiary'
  }
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var I,T,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var j,B,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var A,D,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'only',
    variant: 'tertiary'
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var q,z,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const U=["Primary","Secondary","Tertiary","WithIcon","WithIconAtStart","WithIconOnly","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:s,Tertiary:o,TextWrapping:d,WithIcon:i,WithIconAtStart:c,WithIconOnly:l,__namedExportsOrder:U,default:M},Symbol.toStringTag,{value:"Module"}));export{Q as B,t as P,s as S,o as T,i as W,c as a,l as b,d as c};
