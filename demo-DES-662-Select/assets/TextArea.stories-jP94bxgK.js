import{j as n}from"./jsx-runtime-CKrituN3.js";import{a0 as c}from"./index.esm-Bd-4oyph.js";import{e as I}from"./exampleContent-BoywlOQx.js";const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,V=I(),C={title:"Components/Forms/Text Area",component:c,args:{value:V,disabled:!1},argTypes:{resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},cols:{control:{type:"number"}},rows:{control:{type:"number"}},disabled:{control:{type:"boolean"}}},render:({invalid:T,...j})=>{const[,A]=P(),D=E=>{A({value:E.target.value})};return n.jsx("form",{children:n.jsx(c,{required:T,onChange:D,...j})})}},e={},r={args:{resize:"vertical"}},a={args:{resize:"horizontal"}},s={args:{resize:"none"}},o={args:{value:"",invalid:!0}},t={args:{disabled:!0}};var i,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,z,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(v=(z=a.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var b,_,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(f=(_=s.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var h,x,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: '',
    invalid: true
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var R,y,O;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(y=t.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const H=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,HorizontalResize:a,Invalid:o,NoResize:s,VerticalResize:r,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,a as H,o as I,s as N,w as T,r as V};
