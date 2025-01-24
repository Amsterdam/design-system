import{j as i}from"./jsx-runtime-z8MfsBtr.js";import{c as l}from"./clsx-B-dksMZM.js";import{r}from"./index-D7uoVdV3.js";import{e as k}from"./index.esm-DCCktRRi.js";import{I as L}from"./Icon-hgTynAJE.js";const f={small:"level-6",medium:"level-5",large:"level-4"},c=r.forwardRef(({children:e,className:n,contrastColor:t,icon:s,inverseColor:d,size:a,...p},u)=>i.jsx("li",{children:i.jsxs("a",{className:l("ams-link-list__link",t&&"ams-link-list__link--contrast-color",d&&"ams-link-list__link--inverse-color",a&&`ams-link-list__link--${a}`,n),ref:u,...p,children:[i.jsx(L,{size:f[a??"medium"],svg:s??k}),e]})}));c.displayName="LinkList.Link";try{LinkList.Link.displayName="LinkList.Link",LinkList.Link.__docgenInfo={description:"One link with a Link List.",displayName:"LinkList.Link",props:{contrastColor:{defaultValue:null,description:"Changes the text colour for readability on a light background.",name:"contrastColor",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display instead of the default chevron. Don’t mix custom icons with chevrons in one list.",name:"icon",required:!1,type:{name:"Function"}},inverseColor:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"inverseColor",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the text. Use the same size for all items in the list.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const m=r.forwardRef(({children:e,className:n,...t},s)=>i.jsx("ul",{className:l("ams-link-list",n),ref:s,...t,children:e}));m.displayName="LinkList";const o=Object.assign(m,{Link:c});try{o.displayName="LinkList",o.__docgenInfo={description:"",displayName:"LinkList",props:{}}}catch{}export{o as L};
