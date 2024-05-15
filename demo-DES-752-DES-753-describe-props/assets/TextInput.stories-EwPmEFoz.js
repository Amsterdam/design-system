import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as E}from"./index-BwDkhjyp.js";const o=E.forwardRef(({className:e,...n},c)=>i.jsx("input",{...n,className:b("ams-text-input",e),ref:c,type:"text"}));o.displayName="TextInput";try{o.displayName="TextInput",o.__docgenInfo={description:"",displayName:"TextInput",props:{}}}catch{}const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Text Input",component:o,args:{disabled:!1,invalid:!1,value:""},argTypes:{disabled:{description:"Prevents interaction. Use sparingly."},invalid:{description:"Whether the value fails a validation rule."},value:{description:"The value of the field."}},render:({invalid:e,...n})=>{const[,c]=S(),T=y=>{c({value:y.target.value})};return i.jsx("form",{children:i.jsx(o,{pattern:e?"[ž]":".*",required:e,onChange:T,...n})})}},r={},a={args:{placeholder:"E-mail"}},s={args:{invalid:!0}},t={args:{disabled:!0}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'E-mail'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var _,f,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,v,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(v=t.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const O=["Default","Placeholder","Invalid","Disabled"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,Invalid:s,Placeholder:a,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{t as D,s as I,a as P,R as T};
