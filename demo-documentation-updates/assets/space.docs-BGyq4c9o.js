import{j as i}from"./jsx-runtime-CKrituN3.js";import{M as s}from"./index-CMKzkGYi.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuX8CP_M.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function t(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",code:"code"},r(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(s,{title:"Docs/Design Guidelines/Space"}),`
`,i.jsx(e.h1,{id:"space",children:"Space"}),`
`,i.jsx(e.p,{children:"We distinguish 4 types of white space: Grid, Stack, Inside, and Type."}),`
`,i.jsx(e.h2,{id:"grid-space",children:"Grid Space"}),`
`,i.jsxs(e.p,{children:["This type of space creates gaps between the columns and rows of the ",i.jsx(e.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`.
It visually separates the most significant sections of a page, which in turn highlights the boundaries of every individual section.
Grid Space helps the user recognize the layout of the page and find what they are looking for.
It implements the Law of Proximity, one of the `,i.jsx(e.a,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles",target:"_blank",rel:"nofollow noopener noreferrer",children:"Gestalt Principles"}),"."]}),`
`,i.jsx(e.p,{children:`The width or height of this type of space is fluid, depending on the width of the window.
Five options are available, of which the middle one is the default.
Multiplication factors for the smaller and larger lengths are ¼, ½, 1½, and 2.
The tables below show the resulting pixel widths at some reference widths.`}),`
`,i.jsx(e.h4,{id:"spacious",children:"Spacious"}),`
`,i.jsx(e.p,{children:"In Spacious Mode, the medium grid space grows from 16 to 56 pixels between window widths of 320 and 1600."}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{align:"right"}),i.jsx(e.th,{align:"center",children:"320"}),i.jsx(e.th,{align:"center",children:"576"}),i.jsx(e.th,{align:"center",children:"1088"}),i.jsx(e.th,{align:"center",children:"1600"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra small"})}),i.jsx(e.td,{align:"center",children:"4"}),i.jsx(e.td,{align:"center",children:"6"}),i.jsx(e.td,{align:"center",children:"10"}),i.jsx(e.td,{align:"center",children:"14"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Small"})}),i.jsx(e.td,{align:"center",children:"8"}),i.jsx(e.td,{align:"center",children:"12"}),i.jsx(e.td,{align:"center",children:"20"}),i.jsx(e.td,{align:"center",children:"28"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Medium"})}),i.jsx(e.td,{align:"center",children:i.jsx(e.strong,{children:"16"})}),i.jsx(e.td,{align:"center",children:i.jsx(e.strong,{children:"24"})}),i.jsx(e.td,{align:"center",children:i.jsx(e.strong,{children:"40"})}),i.jsx(e.td,{align:"center",children:i.jsx(e.strong,{children:"56"})})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Large"})}),i.jsx(e.td,{align:"center",children:"24"}),i.jsx(e.td,{align:"center",children:"36"}),i.jsx(e.td,{align:"center",children:"60"}),i.jsx(e.td,{align:"center",children:"84"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra large"})}),i.jsx(e.td,{align:"center",children:"32"}),i.jsx(e.td,{align:"center",children:"48"}),i.jsx(e.td,{align:"center",children:"80"}),i.jsx(e.td,{align:"center",children:"102"})]})]})]}),`
`,i.jsx(e.h4,{id:"compact",children:"Compact"}),`
`,i.jsx(e.p,{children:"In Compact Mode, the medium grid space grows from 16 to 40 pixels between window widths of 1088 and 2624."}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{align:"right"}),i.jsx(e.th,{align:"right",children:"1088"}),i.jsx(e.th,{align:"right",children:"1600"}),i.jsx(e.th,{align:"right",children:"2112"}),i.jsx(e.th,{align:"right",children:"2624"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra small"})}),i.jsx(e.td,{align:"right",children:"4"}),i.jsx(e.td,{align:"right",children:"6"}),i.jsx(e.td,{align:"right",children:"8"}),i.jsx(e.td,{align:"right",children:"10"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Small"})}),i.jsx(e.td,{align:"right",children:"8"}),i.jsx(e.td,{align:"right",children:"12"}),i.jsx(e.td,{align:"right",children:"16"}),i.jsx(e.td,{align:"right",children:"20"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Medium"})}),i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"16"})}),i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"24"})}),i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"32"})}),i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"40"})})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Large"})}),i.jsx(e.td,{align:"right",children:"24"}),i.jsx(e.td,{align:"right",children:"36"}),i.jsx(e.td,{align:"right",children:"48"}),i.jsx(e.td,{align:"right",children:"60"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra large"})}),i.jsx(e.td,{align:"right",children:"32"}),i.jsx(e.td,{align:"right",children:"48"}),i.jsx(e.td,{align:"right",children:"64"}),i.jsx(e.td,{align:"right",children:"80"})]})]})]}),`
`,i.jsx(e.h2,{id:"stack-space",children:"Stack Space"}),`
`,i.jsx(e.p,{children:`This is the space between sets of components, for example between a list of cards, or next to an image.
It is also used for combinations of components, like an icon accompanying a text, or a row of buttons.`}),`
`,i.jsx(e.p,{children:`This type of space is static; it is the same for any window width.
Five options are available.
The medium size is 16 pixels wide in both Spacious and Compact Mode.`}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{align:"right"}),i.jsx(e.th,{align:"right",children:"Width"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra small"})}),i.jsx(e.td,{align:"right",children:"8"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Small"})}),i.jsx(e.td,{align:"right",children:"12"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Medium"})}),i.jsx(e.td,{align:"right",children:"16"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Large"})}),i.jsx(e.td,{align:"right",children:"24"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra large"})}),i.jsx(e.td,{align:"right",children:"32"})]})]})]}),`
`,i.jsx(e.h2,{id:"inside-space",children:"Inside Space"}),`
`,i.jsx(e.p,{children:`This is the space at the four edges of a component: at the top, bottom, start, and end of its containing box.
It is used for buttons and input fields, and for larger components with a coloured background or border.`}),`
`,i.jsx(e.p,{children:"The medium size is 16 pixels wide in both Spacious and Compact Mode."}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{align:"right"}),i.jsx(e.th,{align:"right",children:"Width"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra small"})}),i.jsx(e.td,{align:"right",children:"8"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Small"})}),i.jsx(e.td,{align:"right",children:"12"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Medium"})}),i.jsx(e.td,{align:"right",children:"16"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Large"})}),i.jsx(e.td,{align:"right",children:"24"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{align:"right",children:i.jsx(e.strong,{children:"Extra large"})}),i.jsx(e.td,{align:"right",children:"32"})]})]})]}),`
`,i.jsx(e.h2,{id:"type-space",children:"Type Space"}),`
`,i.jsx(e.p,{children:"This is the vertical space between text components like headings, paragraphs, and lists."}),`
`,i.jsx(e.p,{children:"More information on this type of space will follow."}),`
`,i.jsx(e.h2,{id:"about-the-units-we-use",children:"About the units we use"}),`
`,i.jsxs(e.p,{children:[`We use pixels in our documentation on sizes to convey a more accurate mental image.
In code, sizes are defined in relative units (like `,i.jsx(e.code,{children:"rem"}),", ",i.jsx(e.code,{children:"em"}),", ",i.jsx(e.code,{children:"ex"}),", ",i.jsx(e.code,{children:"vw"}),", ",i.jsx(e.code,{children:"vh"}),", and ",i.jsx(e.code,{children:"ch"}),") to make components more flexible and accessible."]})]})}function u(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?i.jsx(e,Object.assign({},n,{children:i.jsx(t,n)})):t(n)}export{u as default};
