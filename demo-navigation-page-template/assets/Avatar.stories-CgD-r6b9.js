import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{i as x}from"./index.esm-9B8hlNX4.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as I}from"./index-C0MU9AHG.js";import{I as A}from"./Icon-CJVFfJZC.js";const w=["azure","green","lime","magenta","orange","yellow"],k=({imageSrc:a,initials:r})=>a?e.jsx("img",{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(A,{size:"small",svg:x}),l=I.forwardRef(({className:a,color:r,imageSrc:c,label:h,...y},S)=>{const n=h.slice(0,2).toUpperCase(),_=n.length===0?"Gebruiker":`Initialen gebruiker: ${n}`;return e.jsxs("span",{...y,className:j("ams-avatar",r&&`ams-avatar--${r}`,c&&"ams-avatar--has-image",a),ref:S,children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(k,{imageSrc:c,initials:n})]})});l.displayName="Avatar";try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T={title:"Components/Feedback/Avatar",component:l,args:{imageSrc:"",label:"DS"},argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...w]}}},s={},t={args:{imageSrc:"https://i.pravatar.cc/128",label:"PS"}},o={args:{imageSrc:void 0,label:""}};var i,u,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const N=["Default","WithImage","FallbackIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:o,WithImage:t,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{D as A,o as F,t as W};
