import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as l}from"./clsx-B-dksMZM.js";import{r as i}from"./index-BwDkhjyp.js";import{b as u}from"./index.esm-DQkeu4as.js";import{V as d}from"./VisuallyHidden-Db-04MJ9.js";import{I as f}from"./Icon-CuaumHXX.js";const n=i.forwardRef(({label:r="Zoeken",className:a,...t},s)=>e.jsxs("button",{...t,ref:s,className:l("ams-search-field__button",a),children:[e.jsx(d,{children:r}),e.jsx(f,{svg:u,size:"level-5",square:!0})]}));n.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const p=i.forwardRef(({className:r,dir:a,label:t="Zoeken",...s},m)=>{const o=i.useId();return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:o,children:e.jsx(d,{children:t})}),e.jsx("input",{...s,autoComplete:"off",className:l("ams-search-field__input",r),dir:a??"auto",enterKeyHint:"search",id:o,ref:m,spellCheck:"false",type:"search"})]})});p.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{label:{defaultValue:{value:"Zoeken"},description:"Describes the field for screen readers.",name:"label",required:!1,type:{name:"string"}}}}}catch{}const h=i.forwardRef(({children:r,className:a,...t},s)=>e.jsx("form",{role:"search",...t,ref:s,className:l("ams-search-field",a),children:r}));h.displayName="SearchField";const c=Object.assign(h,{Button:n,Input:p});try{c.displayName="SearchField",c.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}export{c as S};