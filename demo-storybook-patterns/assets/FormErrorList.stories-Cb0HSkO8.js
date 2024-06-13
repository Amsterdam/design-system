import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as h}from"./index-uCp2LrAq.js";import{A as v}from"./Alert-n6k6hgPF.js";import{L as n}from"./LinkList-DlMRD75W.js";const r=h.forwardRef(({className:t,errors:a,heading:u="Verbeter de fouten voor u verder gaat",headingLevel:c=2,...p},f)=>{if(a.length!==0)return o.jsx(v,{...p,className:g("ams-form-error-list",t),heading:u,headingLevel:c,ref:f,role:"alert",severity:"error",children:o.jsx(n,{children:a.map(({id:i,label:s})=>o.jsx(n.Link,{href:i,children:s},`${i}-${s}`))})})});r.displayName="FormErrorList";try{r.displayName="FormErrorList",r.__docgenInfo={description:"",displayName:"FormErrorList",props:{errors:{defaultValue:null,description:"The list of error messages to display.",name:"errors",required:!0,type:{name:"FormError[]"}},heading:{defaultValue:{value:"Verbeter de fouten voor u verder gaat"},description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:`The hierarchical level of the Heading within the document.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const _={title:"Components/Forms/Form Error List",component:r,args:{errors:[{id:"#",label:"Vul een geldige datum in (bijvoorbeeld 6 januari 2030)."},{id:"#",label:"De geldigheidsdatum van uw paspoort moet in de toekomst liggen."}]}},e={};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{b as F};
