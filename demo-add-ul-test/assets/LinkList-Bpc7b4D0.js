import{j as i}from"./jsx-runtime-CKrituN3.js";import{c as o}from"./clsx-B-dksMZM.js";import{r as c}from"./index-CBqU2yxZ.js";import{d as p}from"./index.esm-DjZ2yxjc.js";import{I as L}from"./Icon-DW52t4nJ.js";const f={small:"level-6",medium:"level-5",large:"level-4"},m=c.forwardRef(({children:e,className:n,href:t,icon:s,onBackground:l,size:a,...u},k)=>i.jsx("li",{children:i.jsxs("a",{className:o("ams-link-list__link",l&&`ams-link-list__link--on-background-${l}`,a&&`ams-link-list__link--${a}`,n),href:t,ref:k,...u,children:[i.jsx(L,{svg:s??p,size:f[a??"medium"]}),e]})}));m.displayName="LinkList.Link";try{LinkList.Link.displayName="LinkList.Link",LinkList.Link.__docgenInfo={description:"One link with a Link List.",displayName:"LinkList.Link",props:{href:{defaultValue:null,description:"The target url for the link.",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`An icon to display instead of the default chevron.
Don’t mix custom icons with chevrons in one list.`,name:"icon",required:!1,type:{name:"Function"}},onBackground:{defaultValue:null,description:"Whether the link sits on a dark background.",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'},{value:'"default"'}]}},size:{defaultValue:null,description:`The text size for the link.
Use the same size for all items in the list.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const d=c.forwardRef(({children:e,className:n,...t},s)=>i.jsx("ul",{ref:s,className:o("ams-link-list",n),...t,children:e}));d.displayName="LinkList";const r=Object.assign(d,{Link:m});try{r.displayName="LinkList",r.__docgenInfo={description:"",displayName:"LinkList",props:{}}}catch{}export{r as L};
