import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{s as T,g as q}from"./index.esm-BvH5J7G8.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as f}from"./index-BwDkhjyp.js";import{I as b}from"./Icon-CuaumHXX.js";function M(u,i,c){const o=Math.min(i,Math.max(c,5)),d=1;let r=u-Math.floor(o/2);return r=Math.max(r,d),r=Math.min(r,d+i-o),Array.from({length:o},(s,t)=>r+t).reduce((s,t,l)=>l===0&&t!==1?[1,"firstSpacer"]:i>o&&l===o-2&&u<i-2?[...s,"lastSpacer",i]:s.includes("firstSpacer")&&l===1||s.includes("lastSpacer")&&l===o-1?s:[...s,t],[])}const g=f.forwardRef(({className:u,maxVisiblePages:i=7,nextAriaLabel:c="Volgende pagina",nextLabel:o="volgende",onPageChange:d,page:r=1,previousAriaLabel:h="Vorige pagina",previousLabel:s="vorige",totalPages:t,...l},j)=>{const[a,P]=f.useState(r),V=f.useMemo(()=>M(a,t,i),[a,t,i]),p=e=>{d!==void 0&&d(e),P(e)},C=()=>{p(a-1)},L=()=>{p(a+1)};return t<=1?null:n.jsx("nav",{...l,className:v("ams-pagination",u),ref:j,"aria-label":"Paginering",children:n.jsxs("ol",{className:"ams-pagination__list",children:[n.jsx("li",{children:n.jsxs("button",{"aria-label":h,className:"ams-pagination__button",disabled:a===1,onClick:C,type:"button",children:[n.jsx(b,{svg:T,size:"level-5"}),s]})}),V.map(e=>typeof e=="number"?n.jsx("li",{children:n.jsx("button",{"aria-current":e===a?!0:void 0,"aria-label":e===a?`Pagina ${e}`:`Ga naar pagina ${e}`,className:v("ams-pagination__button",e===a&&"ams-pagination__button--current"),onClick:()=>e!==a&&p(e),tabIndex:e===a?-1:0,type:"button",children:e})},e):n.jsx("li",{"aria-hidden":!0,"data-testid":e,children:"…"},e)),n.jsx("li",{children:n.jsxs("button",{"aria-label":c,className:"ams-pagination__button",disabled:a===t,onClick:L,type:"button",children:[o,n.jsx(b,{svg:q,size:"level-5"})]})})]})})});g.displayName="Pagination";try{g.displayName="Pagination",g.__docgenInfo={description:"",displayName:"Pagination",props:{maxVisiblePages:{defaultValue:{value:"7"},description:"The maximum amount of pages shown. Minimum value: 5.",name:"maxVisiblePages",required:!1,type:{name:"number"}},nextAriaLabel:{defaultValue:{value:"Volgende pagina"},description:"The accessible name for the link to the next page.",name:"nextAriaLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"volgende"},description:"The label for the link to the next page.",name:"nextLabel",required:!1,type:{name:"string"}},onPageChange:{defaultValue:null,description:"A function to run when the page number changes.",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},page:{defaultValue:{value:"1"},description:"The current page number.",name:"page",required:!1,type:{name:"number"}},previousAriaLabel:{defaultValue:{value:"Vorige pagina"},description:"The accessible name for the link to the previous page.",name:"previousAriaLabel",required:!1,type:{name:"string"}},previousLabel:{defaultValue:{value:"vorige"},description:"The label for the link to the previous page.",name:"previousLabel",required:!1,type:{name:"string"}},totalPages:{defaultValue:null,description:"The total amount of pages.",name:"totalPages",required:!0,type:{name:"number"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const k={title:"Components/Navigation/Pagination",component:g,args:{page:1,maxVisiblePages:7,totalPages:10},argTypes:{onPageChange:{action:"page changed"}}},m={};var x,_,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const A=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{D as P};
