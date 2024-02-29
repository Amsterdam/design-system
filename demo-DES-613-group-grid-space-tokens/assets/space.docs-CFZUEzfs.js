import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as s}from"./index-DAFN9hdM.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BgHWj-7w.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function t(n){const i=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Design Guidelines/Space"}),`
`,e.jsx(i.h1,{id:"space",children:"Space"}),`
`,e.jsx(i.p,{children:"We distinguish 4 types of white space: Grid, Stack, Inside, and Type."}),`
`,e.jsx(i.h2,{id:"grid-space",children:"Grid Space"}),`
`,e.jsxs(i.p,{children:["This type of space creates gaps between the columns and rows of the ",e.jsx(i.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`.
It visually separates the most significant sections of a page, which in turn highlights the boundaries of every individual section.
Grid Space helps the user recognize the layout of the page and find what they are looking for.
It implements the Law of Proximity, one of the `,e.jsx(i.a,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Gestalt Principles"}),"."]}),`
`,e.jsx(i.p,{children:`The width or height of this type of space is fluid, depending on the width of the window.
Five options are available, of which the middle one is the default.
Multiplication factors for the smaller and larger lengths are ¼, ½, 1½, and 2.
The tables below show the resulting pixel widths at some reference widths.`}),`
`,e.jsx(i.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(i.p,{children:"In Spacious Mode, the medium grid space grows from 16 to 56 pixels between window widths of 320 and 1600."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"right"}),e.jsx(i.th,{align:"center",children:"320"}),e.jsx(i.th,{align:"center",children:"576"}),e.jsx(i.th,{align:"center",children:"1088"}),e.jsx(i.th,{align:"center",children:"1600"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra small"})}),e.jsx(i.td,{align:"center",children:"4"}),e.jsx(i.td,{align:"center",children:"6"}),e.jsx(i.td,{align:"center",children:"10"}),e.jsx(i.td,{align:"center",children:"14"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Small"})}),e.jsx(i.td,{align:"center",children:"8"}),e.jsx(i.td,{align:"center",children:"12"}),e.jsx(i.td,{align:"center",children:"20"}),e.jsx(i.td,{align:"center",children:"28"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Medium"})}),e.jsx(i.td,{align:"center",children:e.jsx(i.strong,{children:"16"})}),e.jsx(i.td,{align:"center",children:e.jsx(i.strong,{children:"24"})}),e.jsx(i.td,{align:"center",children:e.jsx(i.strong,{children:"40"})}),e.jsx(i.td,{align:"center",children:e.jsx(i.strong,{children:"56"})})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Large"})}),e.jsx(i.td,{align:"center",children:"24"}),e.jsx(i.td,{align:"center",children:"36"}),e.jsx(i.td,{align:"center",children:"60"}),e.jsx(i.td,{align:"center",children:"84"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra large"})}),e.jsx(i.td,{align:"center",children:"32"}),e.jsx(i.td,{align:"center",children:"48"}),e.jsx(i.td,{align:"center",children:"80"}),e.jsx(i.td,{align:"center",children:"102"})]})]})]}),`
`,e.jsx(i.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(i.p,{children:"In Compact Mode, the medium grid space grows from 16 to 40 pixels between window widths of 1088 and 2624."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"right"}),e.jsx(i.th,{align:"right",children:"1088"}),e.jsx(i.th,{align:"right",children:"1600"}),e.jsx(i.th,{align:"right",children:"2112"}),e.jsx(i.th,{align:"right",children:"2624"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra small"})}),e.jsx(i.td,{align:"right",children:"4"}),e.jsx(i.td,{align:"right",children:"6"}),e.jsx(i.td,{align:"right",children:"8"}),e.jsx(i.td,{align:"right",children:"10"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Small"})}),e.jsx(i.td,{align:"right",children:"8"}),e.jsx(i.td,{align:"right",children:"12"}),e.jsx(i.td,{align:"right",children:"16"}),e.jsx(i.td,{align:"right",children:"20"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Medium"})}),e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"16"})}),e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"24"})}),e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"32"})}),e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"40"})})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Large"})}),e.jsx(i.td,{align:"right",children:"24"}),e.jsx(i.td,{align:"right",children:"36"}),e.jsx(i.td,{align:"right",children:"48"}),e.jsx(i.td,{align:"right",children:"60"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra large"})}),e.jsx(i.td,{align:"right",children:"32"}),e.jsx(i.td,{align:"right",children:"48"}),e.jsx(i.td,{align:"right",children:"64"}),e.jsx(i.td,{align:"right",children:"80"})]})]})]}),`
`,e.jsx(i.h2,{id:"stack-space",children:"Stack Space"}),`
`,e.jsx(i.p,{children:`This is the space between sets of components, for example between a list of cards, or next to an image.
It is also used for combinations of components, like an icon accompanying a text, or a row of buttons.`}),`
`,e.jsx(i.p,{children:"More information on this type of space will follow."}),`
`,e.jsx(i.h2,{id:"inside-space",children:"Inside Space"}),`
`,e.jsx(i.p,{children:`This is the space at the four edges of a component: at the top, bottom, start, and end of its containing box.
It is used for buttons and input fields, and for larger components with a coloured background or border.`}),`
`,e.jsx(i.p,{children:"The medium size is 24 pixels wide in Spacious Mode, and 16 in Compact Mode."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"right"}),e.jsx(i.th,{align:"right",children:"Spacious"}),e.jsx(i.th,{align:"right",children:"Compact"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra small"})}),e.jsx(i.td,{align:"right",children:"6"}),e.jsx(i.td,{align:"right",children:"4"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Small"})}),e.jsx(i.td,{align:"right",children:"12"}),e.jsx(i.td,{align:"right",children:"8"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Medium"})}),e.jsx(i.td,{align:"right",children:"24"}),e.jsx(i.td,{align:"right",children:"16"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Large"})}),e.jsx(i.td,{align:"right",children:"36"}),e.jsx(i.td,{align:"right",children:"24"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:e.jsx(i.strong,{children:"Extra large"})}),e.jsx(i.td,{align:"right",children:"48"}),e.jsx(i.td,{align:"right",children:"32"})]})]})]}),`
`,e.jsx(i.h2,{id:"type-space",children:"Type Space"}),`
`,e.jsx(i.p,{children:"This is the vertical space between text components like headings, paragraphs, and lists."}),`
`,e.jsx(i.p,{children:"More information on this type of space will follow."}),`
`,e.jsx(i.h2,{id:"about-the-units-we-use",children:"About the units we use"}),`
`,e.jsxs(i.p,{children:[`We use pixels in our documentation on sizes to convey a more accurate mental image.
In code, sizes are defined in relative units (like `,e.jsx(i.code,{children:"rem"}),", ",e.jsx(i.code,{children:"em"}),", ",e.jsx(i.code,{children:"ex"}),", ",e.jsx(i.code,{children:"vw"}),", ",e.jsx(i.code,{children:"vh"}),", and ",e.jsx(i.code,{children:"ch"}),") to make components more flexible and accessible."]})]})}function f(n={}){const{wrapper:i}=Object.assign({},r(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{f as default};
