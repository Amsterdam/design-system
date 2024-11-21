import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{l as M,h as H}from"./index.esm-aJhbD0if.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as c}from"./index-B-o1Wr-g.js";import{I as x}from"./Icon-D1obyjGa.js";function I(o,i,g){const s=Math.min(i,Math.max(g,5)),u=1;let r=o-Math.floor(s/2);return r=Math.max(r,u),r=Math.min(r,u+i-s),Array.from({length:s},(l,t)=>r+t).reduce((l,t,d)=>d===0&&t!==1?[1,"firstSpacer"]:i>s&&d===s-2&&o<i-2?[...l,"lastSpacer",i]:l.includes("firstSpacer")&&d===1||l.includes("lastSpacer")&&d===s-1?l:[...l,t],[])}const p=c.forwardRef(({className:o,maxVisiblePages:i=7,nextLabel:g="volgende",nextVisuallyHiddenLabel:s="Volgende pagina",onPageChange:u,page:r=1,previousLabel:f="vorige",previousVisuallyHiddenLabel:l="Vorige pagina",totalPages:t,visuallyHiddenLabel:d="Paginering",...V},P)=>{const[n,L]=c.useState(r),C=c.useMemo(()=>I(n,t,i),[n,t,i]),h=a=>{u!==void 0&&u(a),L(a)},T=()=>{h(n-1)},q=()=>{h(n+1)},v=c.useId();return t<=1?null:e.jsxs("nav",{...V,"aria-labelledby":v,className:b("ams-pagination",o),ref:P,children:[e.jsx("span",{id:v,className:"ams-visually-hidden",children:d}),e.jsxs("ol",{className:"ams-pagination__list",children:[e.jsx("li",{children:e.jsxs("button",{className:"ams-pagination__button",disabled:n===1,onClick:T,type:"button",children:[e.jsx(x,{svg:M,size:"level-5"}),e.jsx("span",{className:"ams-visually-hidden",children:l}),e.jsx("span",{"aria-hidden":!0,children:f})]})}),C.map(a=>typeof a=="number"?e.jsx("li",{children:e.jsxs("button",{"aria-current":a===n?!0:void 0,className:b("ams-pagination__button",a===n&&"ams-pagination__button--current"),onClick:()=>a!==n&&h(a),tabIndex:a===n?-1:0,type:"button",children:[e.jsx("span",{className:"ams-visually-hidden",children:a===n?`Pagina ${a}`:`Ga naar pagina ${a}`}),e.jsx("span",{"aria-hidden":!0,children:a})]})},a):e.jsx("li",{"aria-hidden":!0,"data-testid":a,children:"…"},a)),e.jsx("li",{children:e.jsxs("button",{className:"ams-pagination__button",disabled:n===t,onClick:q,type:"button",children:[e.jsx("span",{className:"ams-visually-hidden",children:s}),e.jsx("span",{"aria-hidden":!0,children:g}),e.jsx(x,{svg:H,size:"level-5"})]})})]})]})});p.displayName="Pagination";try{p.displayName="Pagination",p.__docgenInfo={description:"",displayName:"Pagination",props:{maxVisiblePages:{defaultValue:{value:"7"},description:"The maximum amount of pages shown. Minimum value: 5.",name:"maxVisiblePages",required:!1,type:{name:"number"}},nextLabel:{defaultValue:{value:"volgende"},description:"The visible label for the next page-button.",name:"nextLabel",required:!1,type:{name:"string"}},nextVisuallyHiddenLabel:{defaultValue:{value:"Volgende pagina"},description:"The accessible name for the next page-button.",name:"nextVisuallyHiddenLabel",required:!1,type:{name:"string"}},onPageChange:{defaultValue:null,description:"A function to run when the page number changes.",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},page:{defaultValue:{value:"1"},description:"The current page number.",name:"page",required:!1,type:{name:"number"}},previousLabel:{defaultValue:{value:"vorige"},description:"The visible label for the previous page-button.",name:"previousLabel",required:!1,type:{name:"string"}},previousVisuallyHiddenLabel:{defaultValue:{value:"Vorige pagina"},description:"The accessible name for the previous page-button.",name:"previousVisuallyHiddenLabel",required:!1,type:{name:"string"}},totalPages:{defaultValue:null,description:"The total amount of pages.",name:"totalPages",required:!0,type:{name:"number"}},visuallyHiddenLabel:{defaultValue:{value:"Paginering"},description:"The accessible name for the Pagination component.",name:"visuallyHiddenLabel",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Components/Navigation/Pagination",component:p,args:{page:1,maxVisiblePages:7,totalPages:10},argTypes:{onPageChange:{action:"page changed"},page:{control:{type:"number",min:1}}},decorators:[(o,{args:i})=>e.jsx("div",{id:"ams-docs-custom-root",children:e.jsx(o,{})},JSON.stringify(i))],parameters:{html:{root:"#ams-docs-custom-root"}}},m={};var y,_,j;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const k=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{N as P};
