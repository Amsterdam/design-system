import{b as V}from"./exampleContent-CfSKccVj.js";import{j as I}from"./jsx-runtime-X2b_N9AH.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as H}from"./index-uCp2LrAq.js";const i=H.forwardRef(({className:n,dir:j,invalid:w,resize:l,...c},D)=>I.jsx("textarea",{...c,"aria-invalid":w||void 0,className:E("ams-text-area",l&&`ams-text-area--resize-${l}`,c.cols&&"ams-text-area--cols",n),dir:j??"auto",ref:D}));i.displayName="TextArea";try{i.displayName="TextArea",i.__docgenInfo={description:"",displayName:"TextArea",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},resize:{defaultValue:null,description:"Allows the user to resize the text box. The default is resizing in both directions.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O=V(),q={title:"Components/Forms/Text Area",component:i,args:{value:O,disabled:!1,invalid:!1},argTypes:{cols:{control:{type:"number"},description:"The width, expressed in the average number of characters."},disabled:{description:"Prevents interaction. Avoid if possible."},resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},rows:{control:{type:"number"},description:"The number of lines to show"},value:{description:"The value of the field."}}},e={},r={args:{resize:"vertical"}},a={args:{resize:"horizontal"}},s={args:{resize:"none"}},o={args:{invalid:!0}},t={args:{disabled:!0}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,v,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,z,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(h=(z=a.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var x,b,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(_=(b=s.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var y,T,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,R,N;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(R=t.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const P=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,HorizontalResize:a,Invalid:o,NoResize:s,VerticalResize:r,__namedExportsOrder:P,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,a as H,o as I,s as N,$ as T,r as V};
