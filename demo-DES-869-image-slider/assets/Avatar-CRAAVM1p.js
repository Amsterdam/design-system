import{j as e}from"./jsx-runtime-BlAj40OV.js";import{f as d}from"./index.esm-DY3iRp4W.js";import{c}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";import{I as p}from"./Image-CVzrCme5.js";import{I as v}from"./Icon-msbkstIT.js";const g=({imageSrc:a,initials:r})=>a?e.jsx(p,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx(v,{svg:d,size:"level-6"}),t=m.forwardRef(({label:a,imageSrc:r,className:s,color:n="blue",...u},i)=>{const l=a.slice(0,2).toUpperCase(),o=l.length===0?"Gebruiker":`Initialen gebruiker: ${l}`;return e.jsxs("span",{...u,ref:i,className:c("ams-avatar",`ams-avatar--${n}`,r&&"ams-avatar--has-image",s),children:[e.jsx("span",{className:"ams-visually-hidden",children:o}),e.jsx(g,{imageSrc:r,initials:l})]})});t.displayName="Avatar";try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"blue"},description:"The background colour.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"grey-1"'},{value:'"grey-2"'},{value:'"grey-3"'},{value:'"light-blue"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"white"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"The url for the user’s image. Its center will be displayed. Should be square and scaled down.",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The text content. Should be the user’s initials. The first two characters will be displayed.",name:"label",required:!0,type:{name:"string"}}}}}catch{}export{t as A};