import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{i as x}from"./index.esm-X3U7dYaT.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as j}from"./index-D7uoVdV3.js";import{I as A}from"./Image-wjPwPRFj.js";import{I as k}from"./Icon-BoBhPfLP.js";const w=({imageSrc:a,initials:r})=>a?e.jsx(A,{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(k,{svg:x,size:"level-6"}),o=j.forwardRef(({label:a,imageSrc:r,className:h,color:b="purple",...S},y)=>{const n=a.slice(0,2).toUpperCase(),_=n.length===0?"Gebruiker":`Initialen gebruiker: ${n}`;return e.jsxs("span",{...S,ref:y,className:I("ams-avatar",`ams-avatar--${b}`,r&&"ams-avatar--has-image",h),children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(w,{imageSrc:r,initials:n})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"purple"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"dark-green"'},{value:'"green"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const N={title:"Components/Feedback/Avatar",component:o,args:{label:"DS",imageSrc:""}},s={},t={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},l={args:{imageSrc:void 0,label:""}};var c,i,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,v,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const T=["Default","WithImage","FallbackIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:l,WithImage:t,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{O as A,l as F,t as W};
