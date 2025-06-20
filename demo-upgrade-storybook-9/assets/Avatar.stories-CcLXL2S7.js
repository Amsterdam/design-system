import{r as x,j as e,c as j,p as I}from"./iframe-C5QqADL7.js";import{I as A}from"./Icon-Bx8N-Qsy.js";const w=["azure","green","lime","magenta","orange","yellow"],k=({imageSrc:a,initials:r})=>a?e.jsx("img",{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(A,{size:"small",svg:I}),n=x.forwardRef(({className:a,color:r,imageSrc:c,label:h,...y},S)=>{const o=h.slice(0,2).toUpperCase(),_=o.length===0?"Gebruiker":`Initialen gebruiker: ${o}`;return e.jsxs("span",{...y,className:j("ams-avatar",r&&`ams-avatar--${r}`,c&&"ams-avatar--has-image",a),ref:S,children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(k,{imageSrc:c,initials:o})]})});n.displayName="Avatar";try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T={title:"Components/Feedback/Avatar",component:n,args:{imageSrc:"",label:"DS"},argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...w]}}},s={},t={args:{imageSrc:"https://i.pravatar.cc/128",label:"PS"}},l={args:{imageSrc:void 0,label:""}};var i,u,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const F=["Default","WithImage","FallbackIcon"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:l,WithImage:t,__namedExportsOrder:F,default:T},Symbol.toStringTag,{value:"Module"}));export{z as A,l as F,t as W};
