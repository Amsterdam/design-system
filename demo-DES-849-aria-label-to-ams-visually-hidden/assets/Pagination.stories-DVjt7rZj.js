import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as T,g as q}from"./index.esm-BdsPla5o.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as h}from"./index-Cs7sjTYM.js";import{I as x}from"./Icon-msbkstIT.js";function M(u,i,p){const s=Math.min(i,Math.max(p,5)),d=1;let o=u-Math.floor(s/2);return o=Math.max(o,d),o=Math.min(o,d+i-s),Array.from({length:s},(r,t)=>o+t).reduce((r,t,l)=>l===0&&t!==1?[1,"firstSpacer"]:i>s&&l===s-2&&u<i-2?[...r,"lastSpacer",i]:r.includes("firstSpacer")&&l===1||r.includes("lastSpacer")&&l===s-1?r:[...r,t],[])}const c=h.forwardRef(({className:u,maxVisiblePages:i=7,nextAriaLabel:p="Volgende pagina",nextLabel:s="volgende",onPageChange:d,page:o=1,previousAriaLabel:f="Vorige pagina",previousLabel:r="vorige",totalPages:t,...l},j)=>{const[n,P]=h.useState(o),V=h.useMemo(()=>M(n,t,i),[n,t,i]),g=a=>{d!==void 0&&d(a),P(a)},C=()=>{g(n-1)},L=()=>{g(n+1)};return t<=1?null:e.jsxs("nav",{...l,className:v("ams-pagination",u),ref:j,children:[e.jsx("span",{className:"ams-visually-hidden",children:"Paginering"}),e.jsxs("ol",{className:"ams-pagination__list",children:[e.jsx("li",{children:e.jsxs("button",{className:"ams-pagination__button",disabled:n===1,onClick:C,type:"button",children:[e.jsx(x,{svg:T,size:"level-5"}),e.jsx("span",{className:"ams-visually-hidden",children:f}),e.jsx("span",{"aria-hidden":!0,children:r})]})}),V.map(a=>typeof a=="number"?e.jsx("li",{children:e.jsxs("button",{"aria-current":a===n?!0:void 0,className:v("ams-pagination__button",a===n&&"ams-pagination__button--current"),onClick:()=>a!==n&&g(a),tabIndex:a===n?-1:0,type:"button",children:[e.jsx("span",{className:"ams-visually-hidden",children:a===n?`Pagina ${a}`:`Ga naar pagina ${a}`}),e.jsx("span",{"aria-hidden":!0,children:a})]})},a):e.jsx("li",{"aria-hidden":!0,"data-testid":a,children:"…"},a)),e.jsx("li",{children:e.jsxs("button",{className:"ams-pagination__button",disabled:n===t,onClick:L,type:"button",children:[e.jsx("span",{className:"ams-visually-hidden",children:p}),e.jsx("span",{"aria-hidden":!0,children:s}),e.jsx(x,{svg:q,size:"level-5"})]})})]})]})});c.displayName="Pagination";try{c.displayName="Pagination",c.__docgenInfo={description:"",displayName:"Pagination",props:{maxVisiblePages:{defaultValue:{value:"7"},description:"The maximum amount of pages shown. Minimum value: 5.",name:"maxVisiblePages",required:!1,type:{name:"number"}},nextAriaLabel:{defaultValue:{value:"Volgende pagina"},description:"The accessible name for the link to the next page.",name:"nextAriaLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"volgende"},description:"The label for the link to the next page.",name:"nextLabel",required:!1,type:{name:"string"}},onPageChange:{defaultValue:null,description:"A function to run when the page number changes.",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},page:{defaultValue:{value:"1"},description:"The current page number.",name:"page",required:!1,type:{name:"number"}},previousAriaLabel:{defaultValue:{value:"Vorige pagina"},description:"The accessible name for the link to the previous page.",name:"previousAriaLabel",required:!1,type:{name:"string"}},previousLabel:{defaultValue:{value:"vorige"},description:"The label for the link to the previous page.",name:"previousLabel",required:!1,type:{name:"string"}},totalPages:{defaultValue:null,description:"The total amount of pages.",name:"totalPages",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const k={title:"Components/Navigation/Pagination",component:c,args:{page:1,maxVisiblePages:7,totalPages:10},argTypes:{onPageChange:{action:"page changed"}}},m={};var b,y,_;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const A=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{D as P};
