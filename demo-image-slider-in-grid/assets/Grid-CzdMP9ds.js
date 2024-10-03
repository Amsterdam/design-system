import{j as n}from"./jsx-runtime-BlAj40OV.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Cs7sjTYM.js";import{g as f,p as g}from"./paddingClasses-C5gheHLv.js";const m=o.forwardRef(({as:e="div",children:l,className:a,span:r,start:i,...s},d)=>n.jsx(e,{...s,ref:d,className:u("ams-grid__cell",f(r,i),a),children:l}));m.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const p=o.forwardRef(({children:e,className:l,gapVertical:a,paddingBottom:r,paddingTop:i,paddingVertical:s,...d},c)=>n.jsx("div",{...d,ref:c,className:u("ams-grid",a&&`ams-grid--gap-vertical--${a}`,g("grid",r,i,s),l),children:e}));p.displayName="Grid";const t=Object.assign(p,{Cell:m});try{t.displayName="Grid",t.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of space between rows.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of space below.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingTop:{defaultValue:null,description:"The amount of space above.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},paddingVertical:{defaultValue:null,description:"The amount of space above and below.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}}}}}catch{}export{t as G};
