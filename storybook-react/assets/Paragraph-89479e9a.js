import{j as m}from"./jsx-runtime-ffb262ed.js";import{c as s}from"./clsx-1229b3e0.js";import{r as i}from"./index-76fb7be0.js";const n=a=>{if(!a)return"";if(typeof a=="number")return`amsterdam-grid-column-span-${a}`;const{start:e,span:r}=a;return s(e&&`amsterdam-grid-column-start-${e}`,r&&`amsterdam-grid-column-span-${r}`)},l=({children:a,gridColumns:e})=>m.jsx("div",{className:s("amsterdam-grid-cell",n(e)),children:a});l.displayName="GridCell";try{l.displayName="GridCell",l.__docgenInfo={description:"",displayName:"GridCell",props:{start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}},span:{defaultValue:null,description:"",name:"span",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}]}}}}}catch{}const u=i.forwardRef(({children:a,className:e,gridColumns:r,size:t,...p},d)=>m.jsx("p",{ref:d,className:s("amsterdam-paragraph",t&&`amsterdam-paragraph-${t}`,n(r),e),...p,children:a}));u.displayName="Paragraph";try{u.displayName="Paragraph",u.__docgenInfo={description:"",displayName:"Paragraph",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},gridColumns:{defaultValue:null,description:"",name:"gridColumns",required:!1,type:{name:"PageGridColumnNumber | { start?: PageGridColumnNumber; span: PageGridColumnNumber; }"}}}}}catch{}export{l as G,u as P};
//# sourceMappingURL=Paragraph-89479e9a.js.map
