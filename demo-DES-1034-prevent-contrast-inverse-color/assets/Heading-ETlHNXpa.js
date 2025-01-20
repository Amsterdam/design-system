import{j as d}from"./jsx-runtime-z8MfsBtr.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as c}from"./index-D7uoVdV3.js";import{g as v}from"./getHeadingTag-Dv1eMqvl.js";const e=c.forwardRef(({children:a,className:i,color:l,level:r=1,size:t,...n},s)=>{const o=v(r),u=t??`level-${r}`;return d.jsx(o,{ref:s,className:m("ams-heading",`ams-heading--${u}`,l&&`ams-heading--${l}-color`,i),...n,children:a})});e.displayName="Heading";try{e.displayName="Heading",e.__docgenInfo={description:"",displayName:"Heading",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},level:{defaultValue:{value:"1"},description:"The hierarchical level within the document.",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},size:{defaultValue:null,description:"Uses larger or smaller text without changing its position in the heading hierarchy.",name:"size",required:!1,type:{name:"enum",value:[{value:'"level-1"'},{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'}]}}}}}catch{}export{e as H};