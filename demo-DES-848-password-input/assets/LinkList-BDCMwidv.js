import{j as n}from"./jsx-runtime-BlAj40OV.js";import{c as r}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Cs7sjTYM.js";import{h as p}from"./index.esm-DY3iRp4W.js";import{I as L}from"./Icon-msbkstIT.js";const k={small:"level-6",medium:"level-5",large:"level-4"},c=o.forwardRef(({children:e,className:s,icon:t,onBackground:i,size:a,...d},u)=>n.jsx("li",{children:n.jsxs("a",{className:r("ams-link-list__link",i&&`ams-link-list__link--on-background-${i}`,a&&`ams-link-list__link--${a}`,s),ref:u,...d,children:[n.jsx(L,{svg:t??p,size:k[a??"medium"]}),e]})}));c.displayName="LinkList.Link";try{LinkList.Link.displayName="LinkList.Link",LinkList.Link.__docgenInfo={description:"One link with a Link List.",displayName:"LinkList.Link",props:{icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!1,type:{name:"Function"}},onBackground:{defaultValue:null,description:"Describes the underlying background colour. Allows the text to provide visual contrast.",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:"The size of the text. Use the same size for all items in the list.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const m=o.forwardRef(({children:e,className:s,...t},i)=>n.jsx("ul",{ref:i,className:r("ams-link-list",s),...t,children:e}));m.displayName="LinkList";const l=Object.assign(m,{Link:c});try{l.displayName="LinkList",l.__docgenInfo={description:"",displayName:"LinkList",props:{}}}catch{}export{l as L};
