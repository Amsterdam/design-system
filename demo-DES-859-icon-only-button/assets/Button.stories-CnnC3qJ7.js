import{j as e}from"./jsx-runtime-BlAj40OV.js";import{k as u}from"./index.esm-BBV4ZYo5.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";import{I as l}from"./Icon-msbkstIT.js";const p=M.forwardRef(({children:r,className:k,type:A,disabled:R,variant:$="primary",icon:a,iconPosition:n="none",...w},C)=>e.jsxs("button",{...w,ref:C,disabled:R,className:F("ams-button",`ams-button--${$}`,`ams-button--icon-${n}`,k),type:A||"button",children:[a&&(n==="start"||n==="only")&&e.jsx(l,{svg:a,size:"level-5",square:!0}),a&&n==="only"?e.jsx("span",{className:"ams-visually-hidden",children:r}):r,a&&n==="end"&&e.jsx(l,{svg:a,size:"level-5",square:!0})]}));p.displayName="Button";try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:{value:"none"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"end"'},{value:'"start"'},{value:'"only"'}]}}}}}catch{}const U={title:"Components/Buttons/Button",component:p,args:{children:"Actietekst",variant:"primary",disabled:!1},argTypes:{icon:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."}}},s={},o={args:{variant:"secondary"}},t={args:{variant:"tertiary"}},i={args:{icon:u,iconPosition:"start"}},c={args:{icon:u,iconPosition:"end"}},d={args:{variant:"tertiary",icon:u,iconPosition:"only"}},m={args:{children:"Vergunningsaanvraag verzenden"},decorators:[r=>e.jsx("div",{style:{maxWidth:"16rem"},children:e.jsx(r,{})})]};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,_,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var I,j,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var B,T,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon,
    iconPosition: 'end'
  }
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,q,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconPosition: 'only'
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,V,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const D=["Primary","Secondary","Tertiary","StartIcon","EndIcon","OnlyIcon","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:c,OnlyIcon:d,Primary:s,Secondary:o,StartIcon:i,Tertiary:t,TextWrapping:m,__namedExportsOrder:D,default:U},Symbol.toStringTag,{value:"Module"}));export{Q as B,c as E,d as O,s as P,o as S,t as T,i as a,m as b};
