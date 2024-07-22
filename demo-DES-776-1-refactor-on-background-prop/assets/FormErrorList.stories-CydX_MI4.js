import{j as i}from"./jsx-runtime-BlAj40OV.js";import{r as t}from"./index-Cs7sjTYM.js";import{c as F}from"./clsx-B-dksMZM.js";import{A as L}from"./Alert-Q3CxKT-I.js";import{L as h}from"./LinkList-Bn07eV2y.js";const l=t.forwardRef(({className:e,errors:o,focusOnRender:r=!0,hasFocusedOnce:n,heading:d="Verbeter de fouten voor u verder gaat",headingLevel:c=2,setHasFocusedOnce:y,...E},_)=>{const a=t.useRef(null);return t.useImperativeHandle(_,()=>a.current),t.useEffect(()=>{a.current&&r&&!n&&(a.current.focus(),y(!0))},[a]),i.jsx(L,{...E,className:F("ams-form-error-list",e),heading:d,headingLevel:c,ref:a,severity:"error",tabIndex:-1,children:i.jsx(h,{children:o.map(({id:m,label:f})=>i.jsx(h.Link,{href:m,children:f},`${m}-${f}`))})})});l.displayName="FormErrorListWithErrors";try{l.displayName="FormErrorListWithErrors",l.__docgenInfo={description:"",displayName:"FormErrorListWithErrors",props:{heading:{defaultValue:{value:"Verbeter de fouten voor u verder gaat"},description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:`The hierarchical level of the Heading within the document.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},errors:{defaultValue:null,description:"The list of error messages to display.",name:"errors",required:!0,type:{name:"FormError[]"}},focusOnRender:{defaultValue:{value:"true"},description:"Whether the component receives focus on first render",name:"focusOnRender",required:!1,type:{name:"boolean"}},hasFocusedOnce:{defaultValue:null,description:"Whether the component has set focus once.",name:"hasFocusedOnce",required:!0,type:{name:"boolean"}},setHasFocusedOnce:{defaultValue:null,description:"Callback to let parent component know whether focus has been set once.",name:"setHasFocusedOnce",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const b=(e,o={plural:"invoerfouten",singular:"invoerfout"})=>{const[r,n]=t.useState();return t.useEffect(()=>{n(document.title)},[]),r&&(e.length===1?document.title=`(${e.length} ${o.singular}) ${r}`:e.length>1?document.title=`(${e.length} ${o.plural}) ${r}`:document.title=r),null},u=t.forwardRef(({errors:e,errorCountLabel:o,...r},n)=>{b(e,o);const[d,c]=t.useState(!1);if(e.length!==0)return i.jsx(l,{...r,errors:e,hasFocusedOnce:d,ref:n,setHasFocusedOnce:c})});u.displayName="FormErrorList";try{u.displayName="FormErrorList",u.__docgenInfo={description:"",displayName:"FormErrorList",props:{errorCountLabel:{defaultValue:null,description:`The text following the error count.
This is used to show the error count in the document title.`,name:"errorCountLabel",required:!1,type:{name:"{ plural: string; singular: string; }"}},errors:{defaultValue:null,description:"The list of error messages to display.",name:"errors",required:!0,type:{name:"FormError[]"}},focusOnRender:{defaultValue:null,description:"Whether the component receives focus on first render",name:"focusOnRender",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:null,description:`The hierarchical level of the Heading within the document.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const x={title:"Components/Forms/Form Error List",component:u,args:{errors:[{id:"#",label:"Vul een geldige datum in (bijvoorbeeld 6 januari 2030)."},{id:"#",label:"De geldigheidsdatum van uw paspoort moet in de toekomst liggen."}],focusOnRender:!1}},s={};var p,g,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const O=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:O,default:x},Symbol.toStringTag,{value:"Module"}));export{w as F};
