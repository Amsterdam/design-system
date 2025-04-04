import{I as l}from"./index.esm-Bv5DmutW.js";import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as b}from"./index-G8LIXM5I.js";import{I as x}from"./Icon-BiLXnzv6.js";const a=b.forwardRef(({children:t,className:y,color:s,icon:n,...v},_)=>i.jsxs("a",{...v,className:S("ams-standalone-link",s&&`ams-standalone-link--${s}`,n&&"ams-standalone-link--with-icon",y),ref:_,children:[n&&i.jsx(x,{svg:n}),t]}));a.displayName="StandaloneLink";try{a.displayName="StandaloneLink",a.__docgenInfo={description:"",displayName:"StandaloneLink",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a light or dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'},{value:'"contrast"'}]}},icon:{defaultValue:null,description:"Adds an icon to the link, showing it before the link text.",name:"icon",required:!1,type:{name:"Function"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const C={title:"Components/Navigation/Standalone Link",component:a,args:{children:"Link label",href:"#"},argTypes:{children:{description:"The link text.",table:{disable:!1}},color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},href:{description:"The url for the link.",name:"href",type:{name:"string",required:!1}},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:l,options:[void 0,...Object.keys(l)]}}},e={},o={args:{color:"contrast"}},r={args:{color:"inverse"}};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'contrast'
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,k;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const I=["Default","ContrastColour","InverseColour"],q=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:o,Default:e,InverseColour:r,__namedExportsOrder:I,default:C},Symbol.toStringTag,{value:"Module"}));export{o as C,r as I,q as S};
