import{j as r}from"./jsx-runtime-BlAj40OV.js";import{k as l}from"./index.esm-BBV4ZYo5.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";import{I as u}from"./Icon-msbkstIT.js";const p=M.forwardRef(({children:e,className:k,disabled:A,icon:a,iconPosition:s,type:R,variant:$="primary",...w},C)=>r.jsxs("button",{...w,ref:C,disabled:A,className:F("ams-button",`ams-button--${$}`,`ams-button--icon-${s}`,k),type:R||"button",children:[a&&(s==="start"||s==="only")&&r.jsx(u,{svg:a,size:"level-5",square:!0}),a&&s==="only"?r.jsx("span",{className:"ams-visually-hidden",children:e}):e,a&&!s&&r.jsx(u,{svg:a,size:"level-5",square:!0})]}));p.displayName="Button";try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}}}}}catch{}const U={title:"Components/Buttons/Button",component:p,args:{children:"Actietekst",variant:"primary",disabled:!1},argTypes:{icon:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."}}},n={},t={args:{variant:"secondary"}},o={args:{variant:"tertiary"}},c={args:{icon:l}},i={args:{icon:l,iconPosition:"start"}},m={args:{variant:"tertiary",icon:l,iconPosition:"only"}},d={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var y,g,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,_,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var I,j,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var T,P,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,q,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconPosition: 'only'
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var N,V,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const D=["Primary","Secondary","Tertiary","EndIcon","StartIcon","OnlyIcon","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,EndIcon:c,OnlyIcon:m,Primary:n,Secondary:t,StartIcon:i,Tertiary:o,TextWrapping:d,__namedExportsOrder:D,default:U},Symbol.toStringTag,{value:"Module"}));export{Q as B,c as E,m as O,n as P,t as S,o as T,i as a,d as b};
