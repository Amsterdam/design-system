import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{i as x}from"./index.esm-X3U7dYaT.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as j}from"./index-D7uoVdV3.js";import{I as k}from"./Image-wjPwPRFj.js";import{I as A}from"./Icon-BoBhPfLP.js";const w=["dark-green","green","light-blue","magenta","orange","yellow"],T=({imageSrc:a,initials:r})=>a?e.jsx(k,{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(A,{svg:x,size:"level-6"}),n=j.forwardRef(({label:a,imageSrc:r,className:h,color:c,...y},S)=>{const o=a.slice(0,2).toUpperCase(),_=o.length===0?"Gebruiker":`Initialen gebruiker: ${o}`;return e.jsxs("span",{...y,ref:S,className:I("ams-avatar",c&&`ams-avatar--${c}`,r&&"ams-avatar--has-image",h),children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(T,{imageSrc:r,initials:o})]})});n.displayName="Avatar";try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"dark-green"'},{value:'"green"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const N={title:"Components/Feedback/Avatar",component:n,args:{label:"DS",imageSrc:""},argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...w]}}},t={},s={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},l={args:{imageSrc:void 0,label:""}};var i,u,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const q=["Default","WithImage","FallbackIcon"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FallbackIcon:l,WithImage:s,__namedExportsOrder:q,default:N},Symbol.toStringTag,{value:"Module"}));export{V as A,l as F,s as W};
