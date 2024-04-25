import{j as y}from"./jsx-runtime-CKrituN3.js";import{c as G}from"./clsx-B-dksMZM.js";import{r as H}from"./index-CBqU2yxZ.js";const d=H.forwardRef(({className:e,type:u,...i},g)=>y.jsx("input",{...i,className:G("ams-input",e),ref:g,type:u}));d.displayName="Input";try{d.displayName="Input",d.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"file"'},{value:'"password"'}]}}}}}catch{}const{useArgs:J}=__STORYBOOK_MODULE_PREVIEW_API__,Q={title:"Components/Forms/Input",component:d,args:{type:"text",disabled:!1,invalid:!1,value:""},render:({invalid:e,...u})=>{const[,i]=J(),g=k=>{i({value:k.target.value})};return y.jsx("form",{children:y.jsx(d,{pattern:e?"[ž]":".*",required:e,onChange:g,...u})})}},r={},a={args:{type:"email",placeholder:"E-mail"}},s={args:{invalid:!0}},o={args:{disabled:!0}},t={args:{type:"file"}},n={args:{type:"password",placeholder:"Wachtwoord"}},c={args:{type:"email",placeholder:"E-mail"}},l={args:{type:"number"}},p={args:{type:"tel"}},m={args:{type:"url"}};var _,f,v;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,b,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'E-mail'
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,I,x;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(x=(I=s.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var w,P,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(P=o.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,O,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'file'
  }
}`,...(D=(O=t.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var T,F,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Wachtwoord'
  }
}`,...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var U,A,C;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'E-mail'
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,q,M;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...(M=(q=l.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var V,z,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'tel'
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var K,L,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'url'
  }
}`,...(Y=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const X=["Default","Placeholder","Invalid","Disabled","File","Password","Email","Number","Tel","Url"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:o,Email:c,File:t,Invalid:s,Number:l,Password:n,Placeholder:a,Tel:p,Url:m,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{o as D,c as E,t as F,re as I,l as N,a as P,p as T,m as U,s as a,n as b};
