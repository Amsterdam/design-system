import{j as n}from"./jsx-runtime-CKrituN3.js";import{W as c}from"./index.esm-C0HePVW4.js";import{e as E}from"./exampleContent-BoywlOQx.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,P=E(),C={title:"Components/Forms/Text Area",component:c,args:{defaultValue:P,disabled:!1,name:"text-area",resize:"default"},argTypes:{resize:{control:{type:"select"},options:["default","none","horizontal","vertical"]},cols:{control:{type:"number"}},rows:{control:{type:"number"}},disabled:{control:{type:"boolean"}}},render:({invalid:T,...V})=>{const[,j]=I(),A=D=>{j({value:D.target.value})};return n.jsx("form",{children:n.jsx(c,{required:T,onChange:A,...V})})}},e={},r={args:{defaultValue:"",invalid:!0}},a={args:{disabled:!0}},s={args:{resize:"vertical"}},o={args:{resize:"horizontal"}},t={args:{resize:"none"}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    invalid: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,z,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(z=a.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var _,b,x;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,S,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var R,y,O;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(O=(y=t.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const H=["Default","Invalid","Disabled","VerticalResize","HorizontalResize","NoResize"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,HorizontalResize:o,Invalid:r,NoResize:t,VerticalResize:s,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{a as D,o as H,r as I,t as N,q as T,s as V};
