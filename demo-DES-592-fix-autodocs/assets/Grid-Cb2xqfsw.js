import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as m}from"./index-CBqU2yxZ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const f=(e,l)=>{if(!e&&!l)return[];const a=[];if(e==="all"||typeof e=="number")a.push(`ams-grid__cell--span-${e}`);else if(e){const{narrow:r,medium:i,wide:s}=e;a.push(`ams-grid__cell--span-${r}`,`ams-grid__cell--span-${i}-medium`,`ams-grid__cell--span-${s}-wide`)}if(typeof l=="number")a.push(`ams-grid__cell--start-${l}`);else if(l){const{narrow:r,medium:i,wide:s}=l;a.push(`ams-grid__cell--start-${r}`,`ams-grid__cell--start-${i}-medium`,`ams-grid__cell--start-${s}-wide`)}return a},o=m.forwardRef(({as:e="div",children:l,className:a,span:r,start:i,...s},d)=>n.jsx(e,{...s,ref:d,className:u("ams-grid__cell",f(r,i),a),children:l}));o.displayName="Grid.Cell";try{Grid.Cell.displayName="Grid.Cell",Grid.Cell.__docgenInfo={description:"",displayName:"Grid.Cell",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"section"'},{value:'"div"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const g=(e,l,a)=>{const r=[];return a?[`ams-grid--padding-vertical--${a}`]:(e&&r.push(`ams-grid--padding-bottom--${e}`),l&&r.push(`ams-grid--padding-top--${l}`),r)},c=m.forwardRef(({children:e,className:l,gapVertical:a,paddingBottom:r,paddingTop:i,paddingVertical:s,...d},p)=>n.jsx("div",{...d,ref:p,className:u("ams-grid",a&&`ams-grid--gap-vertical--${a}`,g(r,i,s),l),children:e}));c.displayName="Grid";const t=Object.assign(c,{Cell:o});try{t.displayName="Grid",t.__docgenInfo={description:"",displayName:"Grid",props:{gapVertical:{defaultValue:null,description:"The amount of vertical white space between rows of the grid.",name:"gapVertical",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"large"'}]}},paddingBottom:{defaultValue:null,description:"The amount of vertical white space below the grid.",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},paddingTop:{defaultValue:null,description:"The amount of vertical white space above the grid.",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},paddingVertical:{defaultValue:null,description:"The amount of vertical white space above and below the grid.",name:"paddingVertical",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}}}}}catch{}export{t as G};
