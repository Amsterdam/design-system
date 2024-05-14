import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{M as l}from"./index-Bf7c9ihO.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bt1XMaRe.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Design Guidelines/Space"}),`
`,e.jsx(t.h1,{id:"space",children:"Space"}),`
`,e.jsx(t.p,{children:"We distinguish 4 types of white space: Grid, Stack, Inside, and Type."}),`
`,e.jsx(t.h2,{id:"grid-space",children:"Grid Space"}),`
`,e.jsxs(t.p,{children:["This type of space creates gaps between the columns and rows of the ",e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`.
It visually separates the most significant sections of a page, which in turn highlights the boundaries of every individual section.
Grid Space helps the user recognize the layout of the page and find what they are looking for.
It implements the Law of Proximity, one of the `,e.jsx(t.a,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles",rel:"nofollow",children:"Gestalt Principles"}),"."]}),`
`,e.jsx(t.p,{children:`The width or height of this type of space is fluid, depending on the width of the window.
Five options are available, of which the middle one is the default.
Multiplication factors for the smaller and larger lengths are ¼, ½, 1½, and 2.
The tables below show the resulting pixel widths at some reference widths.`}),`
`,e.jsx(t.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(t.p,{children:"In Spacious Mode, the medium grid space grows from 16 to 56 pixels between window widths of 320 and 1600."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"right"}}),e.jsx(t.th,{style:{textAlign:"center"},children:"320"}),e.jsx(t.th,{style:{textAlign:"center"},children:"576"}),e.jsx(t.th,{style:{textAlign:"center"},children:"832"}),e.jsx(t.th,{style:{textAlign:"center"},children:"1088"}),e.jsx(t.th,{style:{textAlign:"center"},children:"1344"}),e.jsx(t.th,{style:{textAlign:"center"},children:"1600"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra small"})}),e.jsx(t.td,{style:{textAlign:"center"},children:"4"}),e.jsx(t.td,{style:{textAlign:"center"},children:"6"}),e.jsx(t.td,{style:{textAlign:"center"},children:"8"}),e.jsx(t.td,{style:{textAlign:"center"},children:"10"}),e.jsx(t.td,{style:{textAlign:"center"},children:"12"}),e.jsx(t.td,{style:{textAlign:"center"},children:"14"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Small"})}),e.jsx(t.td,{style:{textAlign:"center"},children:"8"}),e.jsx(t.td,{style:{textAlign:"center"},children:"12"}),e.jsx(t.td,{style:{textAlign:"center"},children:"16"}),e.jsx(t.td,{style:{textAlign:"center"},children:"20"}),e.jsx(t.td,{style:{textAlign:"center"},children:"24"}),e.jsx(t.td,{style:{textAlign:"center"},children:"28"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Medium"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"16"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"24"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"32"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"40"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"48"})}),e.jsx(t.td,{style:{textAlign:"center"},children:e.jsx(t.strong,{children:"56"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Large"})}),e.jsx(t.td,{style:{textAlign:"center"},children:"24"}),e.jsx(t.td,{style:{textAlign:"center"},children:"36"}),e.jsx(t.td,{style:{textAlign:"center"},children:"48"}),e.jsx(t.td,{style:{textAlign:"center"},children:"60"}),e.jsx(t.td,{style:{textAlign:"center"},children:"72"}),e.jsx(t.td,{style:{textAlign:"center"},children:"84"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra large"})}),e.jsx(t.td,{style:{textAlign:"center"},children:"32"}),e.jsx(t.td,{style:{textAlign:"center"},children:"48"}),e.jsx(t.td,{style:{textAlign:"center"},children:"64"}),e.jsx(t.td,{style:{textAlign:"center"},children:"80"}),e.jsx(t.td,{style:{textAlign:"center"},children:"96"}),e.jsx(t.td,{style:{textAlign:"center"},children:"102"})]})]})]}),`
`,e.jsx(t.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(t.p,{children:"In Compact Mode, the medium grid space grows from 16 to 40 pixels between window widths of 1088 and 2624."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"right"}}),e.jsx("th",{style:{textAlign:"center"},children:"320"}),e.jsx("th",{style:{textAlign:"center"},children:"576"}),e.jsx("th",{style:{textAlign:"center"},children:"832"}),e.jsx("th",{style:{textAlign:"center"},children:"1088"}),e.jsx("th",{style:{textAlign:"center"},children:"1344"}),e.jsx("th",{style:{textAlign:"center"},children:"1600"}),e.jsx("th",{style:{textAlign:"center"},children:"1856"}),e.jsx("th",{style:{textAlign:"center"},children:"2112"}),e.jsx("th",{style:{textAlign:"center"},children:"2368"}),e.jsx("th",{style:{textAlign:"center"},children:"2624"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"right"},children:e.jsx("strong",{children:"Extra small"})}),e.jsx("td",{colspan:4,style:{textAlign:"center"},children:e.jsx(t.p,{children:"4"})}),e.jsx("td",{style:{textAlign:"center"},children:"5"}),e.jsx("td",{style:{textAlign:"center"},children:"6"}),e.jsx("td",{style:{textAlign:"center"},children:"7"}),e.jsx("td",{style:{textAlign:"center"},children:"8"}),e.jsx("td",{style:{textAlign:"center"},children:"9"}),e.jsx("td",{style:{textAlign:"center"},children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"right"},children:e.jsx("strong",{children:"Small"})}),e.jsx("td",{colspan:4,style:{textAlign:"center"},children:e.jsx(t.p,{children:"8"})}),e.jsx("td",{style:{textAlign:"center"},children:"10"}),e.jsx("td",{style:{textAlign:"center"},children:"12"}),e.jsx("td",{style:{textAlign:"center"},children:"14"}),e.jsx("td",{style:{textAlign:"center"},children:"16"}),e.jsx("td",{style:{textAlign:"center"},children:"18"}),e.jsx("td",{style:{textAlign:"center"},children:"20"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"right"},children:e.jsx("strong",{children:"Medium"})}),e.jsx("td",{colspan:4,style:{textAlign:"center"},children:e.jsx("strong",{children:"16"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"20"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"24"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"28"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"32"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"36"})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx("strong",{children:"40"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"right"},children:e.jsx("strong",{children:"Large"})}),e.jsx("td",{colspan:4,style:{textAlign:"center"},children:e.jsx(t.p,{children:"24"})}),e.jsx("td",{style:{textAlign:"center"},children:"30"}),e.jsx("td",{style:{textAlign:"center"},children:"36"}),e.jsx("td",{style:{textAlign:"center"},children:"42"}),e.jsx("td",{style:{textAlign:"center"},children:"48"}),e.jsx("td",{style:{textAlign:"center"},children:"54"}),e.jsx("td",{style:{textAlign:"center"},children:"60"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"right"},children:e.jsx("strong",{children:"Extra large"})}),e.jsx("td",{colspan:4,style:{textAlign:"center"},children:e.jsx(t.p,{children:"32"})}),e.jsx("td",{style:{textAlign:"center"},children:"40"}),e.jsx("td",{style:{textAlign:"center"},children:"48"}),e.jsx("td",{style:{textAlign:"center"},children:"56"}),e.jsx("td",{style:{textAlign:"center"},children:"64"}),e.jsx("td",{style:{textAlign:"center"},children:"72"}),e.jsx("td",{style:{textAlign:"center"},children:"80"})]})]})]}),`
`,e.jsx(t.h2,{id:"stack-space",children:"Stack Space"}),`
`,e.jsx(t.p,{children:`This is the space between sets of components, for example between a list of cards, or next to an image.
It is also used for combinations of components, like an icon accompanying a text, or a row of buttons.`}),`
`,e.jsx(t.p,{children:`This type of space is static; it is the same for any window width.
Five options are available.
The medium size is 16 pixels wide in both Spacious and Compact Mode.`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"right"}}),e.jsx(t.th,{style:{textAlign:"right"},children:"Width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra small"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Small"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Medium"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Large"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra large"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"32"})]})]})]}),`
`,e.jsx(t.h2,{id:"inside-space",children:"Inside Space"}),`
`,e.jsx(t.p,{children:`This is the space at the four edges of a component: at the top, bottom, start, and end of its containing box.
It is used for buttons and input fields, and for larger components with a coloured background or border.`}),`
`,e.jsx(t.p,{children:"The medium size is 16 pixels wide in both Spacious and Compact Mode."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"right"}}),e.jsx(t.th,{style:{textAlign:"right"},children:"Width"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra small"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"8"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Small"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Medium"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Large"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:e.jsx(t.strong,{children:"Extra large"})}),e.jsx(t.td,{style:{textAlign:"right"},children:"32"})]})]})]}),`
`,e.jsx(t.h2,{id:"type-space",children:"Type Space"}),`
`,e.jsx(t.p,{children:"This is the vertical space between text components like headings, paragraphs, and lists."}),`
`,e.jsx(t.p,{children:"More information on this type of space will follow."}),`
`,e.jsx(t.h2,{id:"about-the-units-we-use",children:"About the units we use"}),`
`,e.jsxs(t.p,{children:[`We use pixels in our documentation on sizes to convey a more accurate mental image.
In code, sizes are defined in relative units (like `,e.jsx(t.code,{children:"rem"}),", ",e.jsx(t.code,{children:"em"}),", ",e.jsx(t.code,{children:"ex"}),", ",e.jsx(t.code,{children:"vw"}),", ",e.jsx(t.code,{children:"vh"}),", and ",e.jsx(t.code,{children:"ch"}),") to make components more flexible and accessible."]})]})}function p(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
