import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as l}from"./clsx-B-dksMZM.js";import{r as s}from"./index-BwDkhjyp.js";import{b as f}from"./index.esm-DQkeu4as.js";import{V as n}from"./VisuallyHidden-Db-04MJ9.js";import{I as _}from"./Icon-CuaumHXX.js";const c=s.forwardRef(({label:r="Zoeken",className:a,...t},i)=>e.jsxs("button",{...t,ref:i,className:l("ams-search-field__button",a),children:[e.jsx(n,{children:r}),e.jsx(_,{svg:f,size:"level-5",square:!0})]}));c.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const p=s.forwardRef(({className:r,dir:a,invalid:t,label:i="Zoeken",...h},m)=>{const o=s.useId();return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:o,children:e.jsx(n,{children:i})}),e.jsx("input",{...h,"aria-invalid":t||void 0,autoComplete:"off",className:l("ams-search-field__input",r),dir:a??"auto",enterKeyHint:"search",id:o,ref:m,spellCheck:"false",type:"search"})]})});p.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{invalid:{defaultValue:null,description:"Whether the value fails a validation rule.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const u=s.forwardRef(({children:r,className:a,...t},i)=>e.jsx("form",{role:"search",...t,ref:i,className:l("ams-search-field",a),children:r}));u.displayName="SearchField";const d=Object.assign(u,{Button:c,Input:p});try{d.displayName="SearchField",d.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}export{d as S};