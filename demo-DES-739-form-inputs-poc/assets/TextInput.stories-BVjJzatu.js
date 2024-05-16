import{j as m}from"./jsx-runtime-Nms4Y4qS.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as B}from"./index-BwDkhjyp.js";const p=B.forwardRef(({className:l,type:d="text",...u},i)=>m.jsx("input",{...u,className:z("ams-text-input",l),ref:i,type:d}));p.displayName="TextInput";try{p.displayName="TextInput",p.__docgenInfo={description:"",displayName:"TextInput",props:{type:{defaultValue:{value:"text"},description:"The options for type in this input are 'text', 'password', 'email, 'tel', 'url'",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}}}}}catch{}const{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,K={title:"Components/Forms/Text Input",component:p,args:{disabled:!1,invalid:!1,value:""},render:({invalid:l,...d})=>{const[,u]=F(),i=V=>{u({value:V.target.value})};return m.jsx("form",{children:m.jsx(p,{required:l,onChange:i,...d})})}},e={},r={args:{placeholder:"E-mail"}},a={args:{invalid:!0,pattern:"[ž]"}},s={args:{disabled:!0}},t={args:{type:"password"}},o={args:{type:"email"}},n={args:{type:"tel"}},c={args:{type:"url"}};var g,_,x;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(x=(_=e.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var y,f,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'E-mail'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var E,I,S;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    invalid: true,
    pattern: '[ž]'
  }
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,h,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var P,j,w;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var O,D,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'email'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,U,A;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'tel'
  }
}`,...(A=(U=n.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var C,q,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'url'
  }
}`,...(M=(q=c.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const L=["Default","Placeholder","Invalid","Disabled","Password","Email","Tel","Url"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:s,Email:o,Invalid:a,Password:t,Placeholder:r,Tel:n,Url:c,__namedExportsOrder:L,default:K},Symbol.toStringTag,{value:"Module"}));export{s as D,o as E,a as I,r as P,G as T,c as U,t as a,n as b};
