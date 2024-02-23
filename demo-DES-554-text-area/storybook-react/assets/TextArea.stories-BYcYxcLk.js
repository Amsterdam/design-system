import{j as t}from"./jsx-runtime-CKrituN3.js";import{W as n}from"./index.esm-B9ehGRlc.js";import{e as R}from"./exampleContent-D2dPQ7p9.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,A=R(),E={title:"Forms/Text Area",component:n,args:{children:A,invalid:!1},argTypes:{resize:{control:{type:"select"},options:["horizontal","vertical"]},grow:{control:{type:"boolean"}},cols:{control:{type:"number"}},rows:{control:{type:"number"}},disabled:{control:{type:"boolean"}}},render:({invalid:S,...T})=>{const[,b]=j(),y=O=>{b({value:O.target.value})};return t.jsx("form",{children:t.jsx(n,{required:S,onChange:y,...T})})}},e={},r={args:{invalid:!0}},a={args:{resize:"vertical"}},s={args:{resize:"horizontal"}},o={args:{grow:!0,children:"This textarea grows with its content"}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var z,_,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var v,f,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    grow: true,
    children: 'This textarea grows with its content'
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const I=["Default","Invalid","VerticalResize","HorizontalResize","Grow"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Grow:o,HorizontalResize:s,Invalid:r,VerticalResize:a,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{o as G,s as H,G as T,a as V};
