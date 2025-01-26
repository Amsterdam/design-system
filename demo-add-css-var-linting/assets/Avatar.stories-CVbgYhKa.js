import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{i as x}from"./index.esm-CQm4RKjO.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as I}from"./index-D7uoVdV3.js";import{I as k}from"./Icon-hgTynAJE.js";const A=["dark-green","green","light-blue","magenta","orange","yellow"],w=({imageSrc:a,initials:r})=>a?e.jsx("img",{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(k,{size:"level-6",svg:x}),n=I.forwardRef(({className:a,color:r,imageSrc:c,label:h,...y},S)=>{const o=h.slice(0,2).toUpperCase(),_=o.length===0?"Gebruiker":`Initialen gebruiker: ${o}`;return e.jsxs("span",{...y,className:j("ams-avatar",r&&`ams-avatar--${r}`,c&&"ams-avatar--has-image",a),ref:S,children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(w,{imageSrc:c,initials:o})]})});n.displayName="Avatar";try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'},{value:'"dark-green"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T={title:"Components/Feedback/Avatar",component:n,args:{imageSrc:"",label:"DS"},argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...A]}}},t={},s={args:{imageSrc:"https://i.pravatar.cc/128",label:"PS"}},l={args:{imageSrc:void 0,label:""}};var i,u,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const N=["Default","WithImage","FallbackIcon"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FallbackIcon:l,WithImage:s,__namedExportsOrder:N,default:T},Symbol.toStringTag,{value:"Module"}));export{E as A,l as F,s as W};
