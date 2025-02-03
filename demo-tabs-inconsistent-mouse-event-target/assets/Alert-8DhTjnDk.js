import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{S as l,a as p,b as f}from"./index.esm-P1wEHiuM.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as g}from"./index-D7uoVdV3.js";import{I as y}from"./Icon-hgTynAJE.js";import{R as x}from"./Row-CWs564rB.js";import{H as _}from"./Heading-ylGTSCSS.js";import{I as b}from"./IconButton-BSjC75tO.js";const A={error:l,success:p,warning:l},a=g.forwardRef(({children:r,className:n,closeable:s,closeButtonLabel:i="Sluiten",heading:o,headingLevel:c,onClose:u,severity:t,...d},m)=>{const h=t?A[t]:f;return e.jsxs("section",{...d,className:v("ams-alert",t&&`ams-alert--${t}`,n),ref:m,children:[e.jsx("div",{className:"ams-alert__severity-indicator",children:e.jsx(y,{inverseColor:!0,size:"level-4",svg:h})}),e.jsxs("div",{className:"ams-alert__content",children:[e.jsxs(x,{align:"between",alignVertical:"start",children:[e.jsx(_,{level:c,size:"level-4",children:o}),s&&e.jsx(b,{label:i,onClick:u,size:"level-4"})]}),r]})]})});a.displayName="Alert";try{a.displayName="Alert",a.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the user can dismiss the Alert. Adds a button to its top right.",name:"closeable",required:!1,type:{name:"boolean"}},closeButtonLabel:{defaultValue:{value:"Sluiten"},description:"The label for the button that dismisses the Alert.",name:"closeButtonLabel",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!0,type:{name:"string"}},headingLevel:{defaultValue:null,description:`The hierarchical level of the Alert’s Heading within the document.
There is no default value; determine the correct level for each instance.
Note: this intentionally does not change the font size.`,name:"headingLevel",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},onClose:{defaultValue:null,description:"A function to run when dismissing.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:null,description:"The significance of the message conveyed.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}}}}}catch{}export{a as A};
