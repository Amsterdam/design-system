import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as n,a as p,b as f}from"./index.esm-Bv5DmutW.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as g}from"./index-G8LIXM5I.js";import{I as y}from"./Icon-BBW_x4VP.js";import{R as x}from"./Row-DPyRQ-WY.js";import{H as _}from"./Heading-BfwCY41a.js";import{I as b}from"./IconButton-CwFFXfEb.js";const A={error:n,success:p,warning:n},t=g.forwardRef(({children:r,className:l,closeable:s,closeButtonLabel:i="Sluiten",heading:o,headingLevel:c,onClose:u,severity:a,...d},m)=>{const h=a?A[a]:f;return e.jsxs("section",{...d,className:v("ams-alert",a&&`ams-alert--${a}`,l),ref:m,children:[e.jsx("div",{className:"ams-alert__severity-indicator",children:e.jsx(y,{color:"inverse",size:"heading-4",svg:h})}),e.jsxs("div",{className:"ams-alert__content",children:[e.jsxs(x,{align:"between",alignVertical:"start",children:[e.jsx(_,{level:c,size:"level-4",children:o}),s&&e.jsx(b,{label:i,onClick:u,size:"heading-4"})]}),r]})]})});t.displayName="Alert";try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the user can dismiss the Alert. Adds a button to its top right.",name:"closeable",required:!1,type:{name:"boolean"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Alert.",name:"closeButtonLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}},headingLevel:{defaultValue:null,description:`The hierarchical level of the Alert’s Heading within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},onClose:{defaultValue:null,description:"A function to run when dismissing.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:null,description:"The significance of the message conveyed.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}}}}}catch{}export{t as A};
