import{j as u}from"./jsx-runtime-Nms4Y4qS.js";import{a as E}from"./exampleContent-CRK3_7Hv.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as w}from"./index-BwDkhjyp.js";const n=w.forwardRef(({className:i,dir:d,resize:c,...l},p)=>u.jsx("textarea",{...l,ref:p,className:I("ams-text-area",c&&`ams-text-area--resize-${c}`,l.cols&&"ams-text-area--cols",i),dir:d??"auto"}));n.displayName="TextArea";try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{resize:{defaultValue:null,description:"Allows the user to resize the text box. The default is resizing in both directions.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,P=E(),C={title:"Components/Forms/Text Area",component:n,args:{value:P,disabled:!1},argTypes:{cols:{control:{type:"number"},description:"The width, expressed in the average number of characters."},disabled:{description:"Prevents interaction. Avoid if possible."},resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},rows:{control:{type:"number"},description:"The number of lines to show"},value:{description:"The value of the field."}},render:({invalid:i,...d})=>{const[,c]=V(),l=p=>{c({value:p.target.value})};return u.jsx("form",{children:u.jsx(n,{required:i,onChange:l,...d})})}},e={},r={args:{resize:"vertical"}},a={args:{resize:"horizontal"}},s={args:{resize:"none"}},o={args:{value:"",invalid:!0}},t={args:{disabled:!0}};var m,g,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var z,h,f;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,_,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var T,y,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var R,S,j;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: '',
    invalid: true
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,O,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(O=t.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const H=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,HorizontalResize:a,Invalid:o,NoResize:s,VerticalResize:r,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,a as H,o as I,s as N,K as T,r as V};
