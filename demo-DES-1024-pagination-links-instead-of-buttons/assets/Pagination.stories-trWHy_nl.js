import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{l as T,e as L}from"./index.esm-BEKO1F9l.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as P}from"./index-D7uoVdV3.js";import{I as f}from"./Icon-BoBhPfLP.js";function q(s,i,r){const a=Math.min(i,Math.max(r,5)),l=1;let t=s-Math.floor(a/2);return t=Math.max(t,l),t=Math.min(t,l+i-a),Array.from({length:a},(n,o)=>t+o).reduce((n,o,u)=>u===0&&o!==1?[1,"firstSpacer"]:i>a&&u===a-2&&s<i-2?[...n,"lastSpacer",i]:n.includes("firstSpacer")&&u===1||n.includes("lastSpacer")&&u===a-1?n:[...n,o],[])}const M=({currentPage:s,linkComponent:i,linkTemplate:r,pageNumber:a})=>{if(!i)return null;const l=i;return e.jsx("li",{children:e.jsxs(l,{"aria-current":a===s?"page":void 0,className:"ams-pagination__link",href:r(a),children:[e.jsx("span",{className:"ams-visually-hidden",children:a===s?`Pagina ${a}`:`Ga naar pagina ${a}`}),e.jsx("span",{"aria-hidden":!0,children:a})]})})},H=()=>e.jsx("li",{"aria-hidden":!0,children:"…"}),c=P.forwardRef(({className:s,id:i="ams-pagination",linkComponent:r=m=>e.jsx("a",{...m}),linkTemplate:a,maxVisiblePages:l=7,nextLabel:t="volgende",nextVisuallyHiddenLabel:g="Volgende pagina",page:n=1,previousLabel:o="vorige",previousVisuallyHiddenLabel:u="Vorige pagina",totalPages:h,visuallyHiddenLabel:b="Paginering",...j},_)=>{if(h<=1)return null;const m=r,V=q(n,h,l);return e.jsxs("nav",{...j,"aria-labelledby":i,className:k("ams-pagination",s),ref:_,children:[e.jsx("span",{id:i,className:"ams-visually-hidden",children:b}),n!==1&&e.jsxs(m,{className:"ams-pagination__link",href:a(n-1),rel:"prev",children:[e.jsx(f,{svg:T,size:"level-5"}),e.jsx("span",{className:"ams-visually-hidden",children:u}),e.jsx("span",{"aria-hidden":!0,children:o})]}),e.jsx("ol",{className:"ams-pagination__list",children:V.map(p=>typeof p=="number"?e.jsx(M,{currentPage:n,linkComponent:r,linkTemplate:a,pageNumber:p},p):e.jsx(H,{},p))}),n!==h&&e.jsxs(m,{className:"ams-pagination__link",href:a(n+1),rel:"next",children:[e.jsx("span",{className:"ams-visually-hidden",children:g}),e.jsx("span",{"aria-hidden":!0,children:t}),e.jsx(f,{svg:L,size:"level-5"})]})]})});c.displayName="Pagination";try{c.displayName="Pagination",c.__docgenInfo={description:"",displayName:"Pagination",props:{id:{defaultValue:{value:"ams-pagination"},description:"The id of the accessible label.",name:"id",required:!1,type:{name:"string"}},linkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the links.",name:"linkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},linkTemplate:{defaultValue:null,description:"The template used to construct the link hrefs.",name:"linkTemplate",required:!0,type:{name:"(page: number) => string"}},maxVisiblePages:{defaultValue:{value:"7"},description:"The maximum amount of pages shown. Minimum value: 5.",name:"maxVisiblePages",required:!1,type:{name:"number"}},nextLabel:{defaultValue:{value:"volgende"},description:"The visible label for the link to the next page.",name:"nextLabel",required:!1,type:{name:"string"}},nextVisuallyHiddenLabel:{defaultValue:{value:"Volgende pagina"},description:"The accessible name for the link to the next page.",name:"nextVisuallyHiddenLabel",required:!1,type:{name:"string"}},page:{defaultValue:{value:"1"},description:"The current page number.",name:"page",required:!1,type:{name:"number"}},previousLabel:{defaultValue:{value:"vorige"},description:"The visible label for the link to the previous page.",name:"previousLabel",required:!1,type:{name:"string"}},previousVisuallyHiddenLabel:{defaultValue:{value:"Vorige pagina"},description:"The accessible name for the link to the previous page.",name:"previousVisuallyHiddenLabel",required:!1,type:{name:"string"}},totalPages:{defaultValue:null,description:"The total amount of pages.",name:"totalPages",required:!0,type:{name:"number"}},visuallyHiddenLabel:{defaultValue:{value:"Paginering"},description:"The accessible name for the Pagination component.",name:"visuallyHiddenLabel",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const S={title:"Components/Navigation/Pagination",component:c,args:{page:1,maxVisiblePages:7,totalPages:10,linkTemplate:s=>`#?pagina=${s}`},argTypes:{page:{control:{type:"number",min:1}}}},d={};var v,x,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const A=["Default"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{z as P};
