import{j as r}from"./jsx-runtime-BlAj40OV.js";import{k as l}from"./index.esm-BBV4ZYo5.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as M}from"./index-Cs7sjTYM.js";import{I as u}from"./Icon-msbkstIT.js";const d=M.forwardRef(({children:e,className:$,disabled:k,icon:a,iconPosition:s,type:A,variant:R="primary",...w},C)=>r.jsxs("button",{...w,ref:C,disabled:k,className:F("ams-button",`ams-button--${R}`,`ams-button--icon-${s}`,$),type:A||"button",children:[a&&(s==="start"||s==="only")&&r.jsx(u,{svg:a,size:"level-5",square:!0}),a&&s==="only"?r.jsx("span",{className:"ams-visually-hidden",children:e}):e,a&&!s&&r.jsx(u,{svg:a,size:"level-5",square:!0})]}));d.displayName="Button";try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"The level of prominence. Use a primary button only once per page or section.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Function"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"only"'}]}}}}}catch{}const U={title:"Components/Buttons/Button",component:d,args:{children:"Actietekst",variant:"primary",disabled:!1},argTypes:{icon:{table:{disable:!0}},disabled:{description:"Prevents interaction. Avoid if possible."}}},t={},n={args:{variant:"secondary"}},o={args:{variant:"tertiary"}},c={args:{icon:l}},i={args:{icon:l,iconPosition:"start"}},m={args:{variant:"tertiary",icon:l,iconPosition:"only"}},p={args:{children:"Vergunningsaanvraag verzenden"},decorators:[e=>r.jsx("div",{style:{maxWidth:"16rem"},children:r.jsx(e,{})})]};var y,g,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,_,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var I,j,B;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var T,P,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: ShareIcon,
    iconPosition: 'start'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,z,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconPosition: 'only'
  }
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var V,W,E;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Vergunningsaanvraag verzenden'
  },
  decorators: [Story => <div style={{
    maxWidth: '16rem'
  }}>
        <Story />
      </div>]
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const D=["Primary","Secondary","Tertiary","Icon","StartIcon","OnlyIcon","TextWrapping"],Q=Object.freeze(Object.defineProperty({__proto__:null,Icon:c,OnlyIcon:m,Primary:t,Secondary:n,StartIcon:i,Tertiary:o,TextWrapping:p,__namedExportsOrder:D,default:U},Symbol.toStringTag,{value:"Module"}));export{Q as B,c as I,m as O,t as P,n as S,o as T,i as a,p as b};
