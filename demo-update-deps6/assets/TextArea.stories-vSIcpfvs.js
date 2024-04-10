import{j as p}from"./jsx-runtime-CKrituN3.js";import{c as E}from"./exampleContent-DcLVbCjv.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as V}from"./index-CBqU2yxZ.js";const n=V.forwardRef(({className:c,resize:i,...l},d)=>p.jsx("textarea",{...l,ref:d,className:I("ams-text-area",i&&`ams-text-area--resize-${i}`,l.cols&&"ams-text-area--cols",c)}));n.displayName="TextArea";try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{resize:{defaultValue:null,description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,H=E(),P={title:"Components/Forms/Text Area",component:n,args:{value:H,disabled:!1},argTypes:{resize:{control:{type:"radio",labels:{undefined:"default",none:"none",horizontal:"horizontal",vertical:"vertical"}},options:[void 0,"none","horizontal","vertical"]},cols:{control:{type:"number"}},rows:{control:{type:"number"}}},render:({invalid:c,...i})=>{const[,l]=C(),d=D=>{l({value:D.target.value})};return p.jsx("form",{children:p.jsx(n,{required:c,onChange:d,...i})})}},e={},r={args:{resize:"vertical"}},a={args:{resize:"horizontal"}},s={args:{resize:"none"}},o={args:{value:"",invalid:!0}},t={args:{disabled:!0}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var z,v,_;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,f,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,b,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...(R=(b=s.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var S,T,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: '',
    invalid: true
  }
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var j,N,O;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const q=["Default","VerticalResize","HorizontalResize","NoResize","Invalid","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,HorizontalResize:a,Invalid:o,NoResize:s,VerticalResize:r,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{t as D,a as H,o as I,s as N,K as T,r as V};
