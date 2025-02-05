import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{I as h}from"./index.esm-BH242R5B.js";import{d as y}from"./exampleContent-B9IK-krr.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as _}from"./index-D7uoVdV3.js";const f=_.forwardRef(({children:e,className:r,inverseColor:i,...p},C)=>a.jsx("figcaption",{...p,ref:C,className:g("ams-figure__caption",i&&"ams-figure__caption--inverse-color",r),children:e}));f.displayName="Figure.Caption";try{Figure.Caption.displayName="Figure.Caption",Figure.Caption.__docgenInfo={description:"",displayName:"Figure.Caption",props:{inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}const x=_.forwardRef(({children:e,className:r,...i},p)=>a.jsx("figure",{...i,ref:p,className:g("ams-figure",r),children:e}));x.displayName="Figure";const t=Object.assign(x,{Caption:f});try{t.displayName="Figure",t.__docgenInfo={description:"",displayName:"Figure",props:{}}}catch{}const F=y(),j={title:"Components/Media/Figure",component:t,args:{children:F,inverseColor:!1},render:({children:e,...r})=>a.jsxs(t,{children:[a.jsx(h,{alt:"",aspectRatio:"2x-wide",sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"}),a.jsx(t.Caption,{...r,children:e})]})},o={},s={args:{inverseColor:!0}};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Default","InverseColour"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:s,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{R as F,s as I};
