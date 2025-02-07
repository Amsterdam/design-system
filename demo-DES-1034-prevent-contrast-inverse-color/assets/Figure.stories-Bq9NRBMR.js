import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{I as y}from"./index.esm-IMHYXOZR.js";import{d as C}from"./exampleContent-fW-Djhm4.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as f}from"./index-D7uoVdV3.js";const _=f.forwardRef(({children:e,className:r,color:i,...p},h)=>s.jsx("figcaption",{...p,className:g("ams-figure__caption",i&&`ams-figure__caption--${i}`,r),ref:h,children:e}));_.displayName="Figure.Caption";try{Figure.Caption.displayName="Figure.Caption",Figure.Caption.__docgenInfo={description:"",displayName:"Figure.Caption",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}}}}}catch{}const x=f.forwardRef(({children:e,className:r,...i},p)=>s.jsx("figure",{...i,className:g("ams-figure",r),ref:p,children:e}));x.displayName="Figure";const t=Object.assign(x,{Caption:_});try{t.displayName="Figure",t.__docgenInfo={description:"",displayName:"Figure",props:{}}}catch{}const F=C(),j={title:"Components/Media/Figure",component:t.Caption,args:{children:F},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"inverse"]}},render:({children:e,...r})=>s.jsxs(t,{children:[s.jsx(y,{alt:"",aspectRatio:"2x-wide",sizes:"(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px",src:"https://picsum.photos/1600/500",srcSet:"https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"}),s.jsx(t.Caption,{...r,children:e})]})},o={},a={args:{color:"inverse"}};var n,c,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'inverse'
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const v=["Default","InverseColour"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:o,InverseColour:a,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{R as F,a as I};
