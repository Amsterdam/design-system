import{j as a}from"./jsx-runtime-BlAj40OV.js";import{c as i}from"./clsx-B-dksMZM.js";import{r as l}from"./index-Cs7sjTYM.js";import{S as m}from"./index.esm-DY3iRp4W.js";import{I as f}from"./Icon-msbkstIT.js";const n=l.forwardRef(({label:e="Zoeken",className:r,...s},t)=>a.jsxs("button",{...s,ref:t,className:i("ams-search-field__button",r),children:[a.jsx("span",{className:"ams-visually-hidden",children:e}),a.jsx(f,{svg:m,size:"level-5",square:!0})]}));n.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const c=l.forwardRef(({className:e,dir:r,invalid:s,label:t="Zoeken",...u},h)=>{const o=l.useId();return a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:o,className:"ams-visually-hidden",children:t}),a.jsx("input",{...u,"aria-invalid":s||void 0,autoComplete:"off",className:i("ams-search-field__input",e),dir:r??"auto",enterKeyHint:"search",id:o,ref:h,spellCheck:"false",type:"search"})]})});c.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const p=l.forwardRef(({children:e,className:r,...s},t)=>a.jsx("form",{role:"search",...s,ref:t,className:i("ams-search-field",r),children:e}));p.displayName="SearchField";const d=Object.assign(p,{Button:n,Input:c});try{d.displayName="SearchField",d.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}export{d as S};
