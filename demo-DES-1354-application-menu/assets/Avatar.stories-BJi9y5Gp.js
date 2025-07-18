import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{j as p}from"./index.esm-BsJ9Osvl.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as v}from"./index-G8LIXM5I.js";import{I as f}from"./Icon-BBW_x4VP.js";const b=["azure","green","lime","magenta","orange","yellow"],h=({imageSrc:a,initials:r})=>a?e.jsx("img",{alt:"",src:a}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(f,{size:"small",svg:p}),o=v.forwardRef(({className:a,color:r,imageSrc:c,label:i,...u},m)=>{const n=i.slice(0,2).toUpperCase(),d=n.length===0?"Gebruiker":`Initialen gebruiker: ${n}`;return e.jsxs("span",{...u,className:g("ams-avatar",r&&`ams-avatar--${r}`,c&&"ams-avatar--has-image",a),ref:m,children:[e.jsx("span",{className:"ams-visually-hidden",children:d}),e.jsx(h,{imageSrc:c,initials:n})]})});o.displayName="Avatar";try{o.displayName="Avatar",o.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:null,description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"azure"'},{value:'"green"'},{value:'"lime"'},{value:'"magenta"'},{value:'"orange"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const y={title:"Components/Feedback/Avatar",component:o,args:{imageSrc:"",label:"DS"},argTypes:{color:{control:{labels:{undefined:"purple (default)"}},options:[void 0,...b]}}},s={},t={args:{imageSrc:"https://i.pravatar.cc/128",label:"PS"}},l={args:{imageSrc:void 0,label:""}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","WithImage","FallbackIcon"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:l,WithImage:t,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{w as A,l as F,t as W};
