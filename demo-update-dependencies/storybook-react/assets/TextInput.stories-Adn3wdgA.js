import{T as o,j as n}from"./index.esm-CLOhk4zb.js";const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Forms/Text Input",component:o,args:{disabled:!1,invalid:!1,value:""},render:({invalid:t,...h})=>{const[,v]=E(),I=S=>{v({value:S.target.value})};return n.jsx("form",{children:n.jsx(o,{pattern:t?"[ž]":".*",required:t,onChange:I,...h})})}},e={},r={args:{placeholder:"E-mail"}},a={args:{invalid:!0}},s={args:{disabled:!0}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,i,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'E-mail'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,g,_;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const T=["Default","Placeholder","Invalid","Disabled"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:s,Invalid:a,Placeholder:r,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{s as D,a as I,r as P,D as T};
