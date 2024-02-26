import{j as n}from"./jsx-runtime-CKrituN3.js";import{W as c}from"./index.esm-B9ehGRlc.js";import{e as E}from"./exampleContent-D2dPQ7p9.js";const{useArgs:I}=__STORYBOOK_MODULE_PREVIEW_API__,P=E(),V={title:"Forms/Text Area",component:c,args:{children:P},argTypes:{resize:{control:{type:"select"},options:["none","horizontal","vertical"]},grow:{control:{type:"boolean"}},cols:{control:{type:"number"}},rows:{control:{type:"number"}},disabled:{control:{type:"boolean"}}},render:({invalid:T,...j})=>{const[,w]=I(),A=D=>{w({value:D.target.value})};return n.jsx("form",{children:n.jsx(c,{required:T,onChange:A,...j})})}},e={},r={args:{children:"",invalid:!0}},a={args:{disabled:!0}},s={args:{resize:"vertical"}},o={args:{resize:"horizontal"}},t={args:{grow:!0}};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: '',
    invalid: true
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,z,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(z=a.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var b,h,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,S,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,O,R;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    grow: true
  }
}`,...(R=(O=t.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const G=["Default","Invalid","Disabled","VerticalResize","HorizontalResize","Grow"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:a,Grow:t,HorizontalResize:o,Invalid:r,VerticalResize:s,__namedExportsOrder:G,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,t as G,o as H,r as I,W as T,s as V};
