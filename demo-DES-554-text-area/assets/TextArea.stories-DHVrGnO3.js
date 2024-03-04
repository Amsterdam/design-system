import{j as t}from"./jsx-runtime-CKrituN3.js";import{W as n}from"./index.esm-CoJgIkPc.js";import{e as j}from"./exampleContent-BoywlOQx.js";const{useArgs:A}=__STORYBOOK_MODULE_PREVIEW_API__,D=j(),E={title:"Components/Forms/Text Area",component:n,args:{children:D,disabled:!1},argTypes:{resize:{control:{type:"select"},options:["default","none","horizontal","vertical"]},cols:{control:{type:"number"}},rows:{control:{type:"number"}},disabled:{control:{type:"boolean"}}},render:({invalid:S,...y})=>{const[,O]=A(),R=T=>{O({value:T.target.value})};return t.jsx("form",{children:t.jsx(n,{required:S,onChange:R,...y})})}},e={},r={args:{children:"",invalid:!0}},a={args:{disabled:!0}},s={args:{resize:"vertical"}},o={args:{resize:"horizontal"}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: '',
    invalid: true
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,z;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(g=a.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var _,b,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const I=["Default","Invalid","Disabled","VerticalResize","HorizontalResize"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,HorizontalResize:o,Invalid:r,VerticalResize:s,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,o as H,r as I,H as T,s as V};
