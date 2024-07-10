import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{a as r,b as v,c as h}from"./index.esm-Dr6r5gIo.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as y}from"./index-uCp2LrAq.js";import{I as x}from"./Icon-j44OzEOs.js";import{H as _}from"./Heading-BflZBnnJ.js";import{I as b}from"./IconButton-BIJEN4e9.js";const A={error:r,info:v,success:h,warning:r},l=y.forwardRef(({children:s,className:i,closeable:o,closeButtonLabel:c="Sluiten",heading:a,headingLevel:u=2,onClose:d,severity:t="warning",...m},f)=>{const n=a?"level-4":"level-5",p=a?"section":"div";return e.jsxs(p,{...m,ref:f,className:g("ams-alert",t&&`ams-alert--${t}`,i),children:[e.jsx("div",{className:"ams-alert__icon",children:e.jsx(x,{size:n,svg:A[t]})}),e.jsxs("div",{className:"ams-alert__content",children:[a&&e.jsx(_,{level:u,size:"level-4",children:a}),s]}),o&&e.jsx(b,{label:c,size:n,onClick:d})]})});l.displayName="Alert";try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the user can dismiss the Alert. Adds a button to its top right.",name:"closeable",required:!1,type:{name:"boolean"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Alert.",name:"closeButtonLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:`The hierarchical level of the Heading within the document.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},onClose:{defaultValue:null,description:"A function to run when dismissing.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:{value:"warning"},description:"The significance of the message conveyed.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}}}}}catch{}export{l as A};
