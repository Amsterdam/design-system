import{j as r}from"./jsx-runtime-CKrituN3.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as a}from"./index-CBqU2yxZ.js";const s=a.forwardRef(({children:c,className:i,invalid:t,indeterminate:n,...l},m)=>{const o=a.useId(),e=a.useRef(null);return a.useImperativeHandle(m,()=>e.current),a.useEffect(()=>{e.current&&(e.current.indeterminate=!!n)},[e,n]),r.jsxs("div",{className:d("ams-checkbox",i),children:[r.jsx("input",{...l,type:"checkbox",className:"ams-checkbox__input",ref:e,id:o,"aria-invalid":t||void 0}),r.jsxs("label",{className:"ams-checkbox__label",htmlFor:o,children:[r.jsx("span",{className:"ams-checkbox__checkmark"}),c]})]})});s.displayName="Checkbox";try{s.displayName="Checkbox",s.__docgenInfo={description:"",displayName:"Checkbox",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}export{s as C};
