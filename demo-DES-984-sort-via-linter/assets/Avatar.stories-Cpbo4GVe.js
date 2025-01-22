import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{i as x}from"./index.esm-DfRxjY0e.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as I}from"./index-D7uoVdV3.js";import{I as k}from"./Icon-BoBhPfLP.js";const A=({imageSrc:a,initials:l})=>a?e.jsx("img",{alt:"",src:a}):l.length?e.jsx("span",{"aria-hidden":!0,children:l}):e.jsx(k,{size:"level-6",svg:x}),o=I.forwardRef(({className:a,color:l="blue",imageSrc:c,label:h,...y},S)=>{const n=h.slice(0,2).toUpperCase(),_=n.length===0?"Gebruiker":`Initialen gebruiker: ${n}`;return e.jsxs("span",{...y,ref:S,className:j("ams-avatar",`ams-avatar--${l}`,c&&"ams-avatar--has-image",a),children:[e.jsx("span",{className:"ams-visually-hidden",children:_}),e.jsx(A,{imageSrc:c,initials:n})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const w={title:"Components/Feedback/Avatar",component:o,args:{imageSrc:"",label:"DS"}},r={},t={args:{imageSrc:"https://i.pravatar.cc/128",label:"PS"}},s={args:{imageSrc:void 0,label:""}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS'
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,b,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const N=["Default","WithImage","FallbackIcon"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FallbackIcon:s,WithImage:t,__namedExportsOrder:N,default:w},Symbol.toStringTag,{value:"Module"}));export{D as A,s as F,t as W};
