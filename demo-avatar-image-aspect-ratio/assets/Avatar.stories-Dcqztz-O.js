import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{i as x}from"./index.esm-X3U7dYaT.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as I}from"./index-D7uoVdV3.js";import{I as k}from"./Icon-BoBhPfLP.js";const A=({imageSrc:a,initials:r})=>a?e.jsx("img",{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(k,{svg:x,size:"level-6"}),o=I.forwardRef(({label:a,imageSrc:r,className:f,color:h="blue",...y},S)=>{const n=a.slice(0,2).toUpperCase(),_=n.length===0?"Gebruiker":`Initialen gebruiker: ${n}`;return e.jsxs("span",{...y,ref:S,className:j("ams-avatar",`ams-avatar--${h}`,r&&"ams-avatar--has-image",f),children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(A,{imageSrc:r,initials:n})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const w={title:"Components/Feedback/Avatar",component:o,args:{label:"DS",imageSrc:""}},t={},s={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},l={args:{imageSrc:void 0,label:""}};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const N=["Default","WithImage","FallbackIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FallbackIcon:l,WithImage:s,__namedExportsOrder:N,default:w},Symbol.toStringTag,{value:"Module"}));export{D as A,l as F,s as W};
