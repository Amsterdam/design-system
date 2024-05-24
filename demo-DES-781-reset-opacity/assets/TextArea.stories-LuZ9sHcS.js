import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{a as E}from"./exampleContent-CRK3_7Hv.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as w}from"./index-BwDkhjyp.js";const n=w.forwardRef(({className:i,resize:c,...l},d)=>p.jsx("textarea",{...l,ref:d,className:I("ams-text-area",c&&`ams-text-area--resize-${c}`,l.cols&&"ams-text-area--cols",i)}));n.displayName="TextArea";try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{resize:{defaultValue:null,description:"Allows the user to resize the text box. The default is resizing in both directions.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const{useArgs:V}=__STORYBOOK_MODULE_PREVIEW_API__,P=E(),C={title:"Components/Forms/Text Area",component:n,args:{value:P,disabled:!1},argTypes:{cols:{control:{type:"number"},description:"The width, expressed in the average number of characters."},disabled:{description:"Prevents interaction. Avoid if possible."},resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},rows:{control:{type:"number"},description:"The number of lines to show"},value:{description:"The value of the field."}},render:({invalid:i,...c})=>{const[,l]=V(),d=D=>{l({value:D.target.value})};return p.jsx("form",{children:p.jsx(n,{required:i,onChange:d,...c})})}},e={},r={args:{resize:"vertical"}},a={args:{resize:"horizontal"}},s={args:{resize:"none"}},o={args:{value:"",invalid:!0}},t={args:{disabled:!0}};var u,m,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,z,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(h=(z=r.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var f,x,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var b,T,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var A,R,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: '',
    invalid: true
  }
}`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,N,O;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const H=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,HorizontalResize:a,Invalid:o,NoResize:s,VerticalResize:r,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{t as D,a as H,o as I,s as N,K as T,r as V};
