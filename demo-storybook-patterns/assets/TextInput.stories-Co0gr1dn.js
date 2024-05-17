import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{c as y}from"./clsx-B-dksMZM.js";import{r as E}from"./index-BwDkhjyp.js";const o=E.forwardRef(({className:e,...n},c)=>p.jsx("input",{...n,className:y("ams-text-input",e),ref:c,type:"text"}));o.displayName="TextInput";try{o.displayName="TextInput",o.__docgenInfo={description:"",displayName:"TextInput",props:{}}}catch{}const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Text Input",component:o,args:{disabled:!1,invalid:!1,value:""},render:({invalid:e,...n})=>{const[,c]=S(),b=v=>{c({value:v.target.value})};return p.jsx("form",{children:p.jsx(o,{pattern:e?"[ž]":".*",required:e,onChange:b,...n})})}},r={},a={args:{placeholder:"E-mail"}},s={args:{invalid:!0}},t={args:{disabled:!0}};var d,l,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,_;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'E-mail'
  }
}`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,h,T;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const O=["Default","Placeholder","Invalid","Disabled"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,Invalid:s,Placeholder:a,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{t as D,s as I,a as P,R as T};
