import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{T as n}from"./TextInput-w5YF2xZS.js";const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Forms/Text Input",component:n,args:{disabled:!1,invalid:!1,value:""},argTypes:{disabled:{description:"Prevents interaction. Avoid if possible."},invalid:{description:"Whether the value fails a validation rule."},value:{description:"The value of the field."}},render:({invalid:t,...b})=>{const[,x]=S(),T=I=>{x({value:I.target.value})};return o.jsx("form",{children:o.jsx(n,{pattern:t?"[ž]":".*",required:t,onChange:T,...b})})}},e={},r={args:{placeholder:"E-mail"}},a={args:{invalid:!0}},s={args:{disabled:!0}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'E-mail'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,h,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const O=["Default","Placeholder","Invalid","Disabled"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:s,Invalid:a,Placeholder:r,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{s as D,a as I,r as P,D as T};
