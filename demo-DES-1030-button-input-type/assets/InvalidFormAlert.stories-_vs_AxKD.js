import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-C0MU9AHG.js";import{c as b}from"./clsx-B-dksMZM.js";import{A as I}from"./Alert-DUiItZHI.js";import{L as h}from"./LinkList-B3fOQhw0.js";const s=n.forwardRef(({className:e,errors:r,focusOnRender:t=!0,hasFocusedOnce:a,heading:d="Verbeter de fouten voor u verder gaat",headingLevel:c,setHasFocusedOnce:y,..._},F)=>{const o=n.useRef(null);return n.useImperativeHandle(F,()=>o.current),n.useEffect(()=>{o.current&&t&&!a&&(o.current.focus(),y(!0))},[o]),i.jsx(I,{..._,className:b("ams-invalid-form-alert",e),heading:d,headingLevel:c,ref:o,severity:"error",tabIndex:-1,children:i.jsx(h,{children:r.map(({id:m,label:f})=>i.jsx(h.Link,{href:m,children:f},`${m}-${f}`))})})});s.displayName="InvalidFormAlertWithErrors";try{s.displayName="InvalidFormAlertWithErrors",s.__docgenInfo={description:"",displayName:"InvalidFormAlertWithErrors",props:{heading:{defaultValue:{value:"Verbeter de fouten voor u verder gaat"},description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:null,description:`The hierarchical level of the Invalid Form Alert’s Heading within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},errors:{defaultValue:null,description:"The list of error messages to display.",name:"errors",required:!0,type:{name:"ErrorLink[]"}},focusOnRender:{defaultValue:{value:"true"},description:"Whether the component receives focus on first render",name:"focusOnRender",required:!1,type:{name:"boolean"}},hasFocusedOnce:{defaultValue:null,description:"Whether the component has set focus once.",name:"hasFocusedOnce",required:!0,type:{name:"boolean"}},setHasFocusedOnce:{defaultValue:null,description:"Callback to let parent component know whether focus has been set once.",name:"setHasFocusedOnce",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const A=(e,r={plural:"invoerfouten",singular:"invoerfout"})=>{const[t,a]=n.useState();return n.useEffect(()=>{a(document.title)},[]),t&&(e.length===1?document.title=`(${e.length} ${r.singular}) ${t}`:e.length>1?document.title=`(${e.length} ${r.plural}) ${t}`:document.title=t),null},u=n.forwardRef(({errorCountLabel:e,errors:r,...t},a)=>{A(r,e);const[d,c]=n.useState(!1);if(r.length!==0)return i.jsx(s,{...t,errors:r,hasFocusedOnce:d,ref:a,setHasFocusedOnce:c})});u.displayName="InvalidFormAlert";try{u.displayName="InvalidFormAlert",u.__docgenInfo={description:"",displayName:"InvalidFormAlert",props:{errorCountLabel:{defaultValue:{value:"{ plural: 'invoerfouten', singular: 'invoerfout' }"},description:`The text following the error count.
This is used to show the error count in the document title.`,name:"errorCountLabel",required:!1,type:{name:"{ plural: string; singular: string; }"}},errors:{defaultValue:null,description:"The list of error messages to display.",name:"errors",required:!0,type:{name:"ErrorLink[]"}},focusOnRender:{defaultValue:{value:"true"},description:"Whether the component receives focus on first render",name:"focusOnRender",required:!1,type:{name:"boolean"}},heading:{defaultValue:{value:"Verbeter de fouten voor u verder gaat"},description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:null,description:`The hierarchical level of the Invalid Form Alert’s Heading within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const T={title:"Components/Forms/Invalid Form Alert",component:u,args:{errors:[{id:"#",label:"Vul een geldige datum in (bijvoorbeeld 6 januari 2030)."},{id:"#",label:"De geldigheidsdatum van uw paspoort moet in de toekomst liggen."}],focusOnRender:!1,headingLevel:2}},l={};var p,v,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const V=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:V,default:T},Symbol.toStringTag,{value:"Module"}));export{j as I};
