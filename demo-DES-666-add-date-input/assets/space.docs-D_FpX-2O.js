import{j as t}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as s}from"./index-DSz_1G2r.js";import{M as l}from"./index-WK4yneUc.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DaJCmzA3.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";function n(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Docs/Design Guidelines/Space"}),`
`,t.jsx(e.h1,{id:"space",children:"Space"}),`
`,t.jsx(e.p,{children:"We distinguish 4 types of white space: Grid, Stack, Inside, and Type."}),`
`,t.jsx(e.h2,{id:"grid-space",children:"Grid Space"}),`
`,t.jsxs(e.p,{children:["This type of space creates gaps between the columns and rows of the ",t.jsx(e.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`.
It visually separates the most significant sections of a page, which in turn highlights the boundaries of every individual section.
Grid Space helps the user recognize the layout of the page and find what they are looking for.
It implements the Law of Proximity, one of the `,t.jsx(e.a,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles",rel:"nofollow",children:"Gestalt Principles"}),"."]}),`
`,t.jsx(e.p,{children:`The width or height of this type of space is fluid, depending on the width of the window.
Five options are available, of which the middle one is the default.
Multiplication factors for the smaller and larger lengths are ¼, ½, 1½, and 2.
The tables below show the resulting pixel widths at some reference widths.`}),`
`,t.jsx(e.h4,{id:"spacious",children:"Spacious"}),`
`,t.jsx(e.p,{children:"In Spacious Mode, the medium grid space grows from 16 to 56 pixels between window widths of 320 and 1600."}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"right"}}),t.jsx(e.th,{style:{textAlign:"center"},children:"320"}),t.jsx(e.th,{style:{textAlign:"center"},children:"576"}),t.jsx(e.th,{style:{textAlign:"center"},children:"1088"}),t.jsx(e.th,{style:{textAlign:"center"},children:"1600"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra small"})}),t.jsx(e.td,{style:{textAlign:"center"},children:"4"}),t.jsx(e.td,{style:{textAlign:"center"},children:"6"}),t.jsx(e.td,{style:{textAlign:"center"},children:"10"}),t.jsx(e.td,{style:{textAlign:"center"},children:"14"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Small"})}),t.jsx(e.td,{style:{textAlign:"center"},children:"8"}),t.jsx(e.td,{style:{textAlign:"center"},children:"12"}),t.jsx(e.td,{style:{textAlign:"center"},children:"20"}),t.jsx(e.td,{style:{textAlign:"center"},children:"28"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Medium"})}),t.jsx(e.td,{style:{textAlign:"center"},children:t.jsx(e.strong,{children:"16"})}),t.jsx(e.td,{style:{textAlign:"center"},children:t.jsx(e.strong,{children:"24"})}),t.jsx(e.td,{style:{textAlign:"center"},children:t.jsx(e.strong,{children:"40"})}),t.jsx(e.td,{style:{textAlign:"center"},children:t.jsx(e.strong,{children:"56"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Large"})}),t.jsx(e.td,{style:{textAlign:"center"},children:"24"}),t.jsx(e.td,{style:{textAlign:"center"},children:"36"}),t.jsx(e.td,{style:{textAlign:"center"},children:"60"}),t.jsx(e.td,{style:{textAlign:"center"},children:"84"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra large"})}),t.jsx(e.td,{style:{textAlign:"center"},children:"32"}),t.jsx(e.td,{style:{textAlign:"center"},children:"48"}),t.jsx(e.td,{style:{textAlign:"center"},children:"80"}),t.jsx(e.td,{style:{textAlign:"center"},children:"102"})]})]})]}),`
`,t.jsx(e.h4,{id:"compact",children:"Compact"}),`
`,t.jsx(e.p,{children:"In Compact Mode, the medium grid space grows from 16 to 40 pixels between window widths of 1088 and 2624."}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"right"}}),t.jsx(e.th,{style:{textAlign:"right"},children:"1088"}),t.jsx(e.th,{style:{textAlign:"right"},children:"1600"}),t.jsx(e.th,{style:{textAlign:"right"},children:"2112"}),t.jsx(e.th,{style:{textAlign:"right"},children:"2624"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"4"}),t.jsx(e.td,{style:{textAlign:"right"},children:"6"}),t.jsx(e.td,{style:{textAlign:"right"},children:"8"}),t.jsx(e.td,{style:{textAlign:"right"},children:"10"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"8"}),t.jsx(e.td,{style:{textAlign:"right"},children:"12"}),t.jsx(e.td,{style:{textAlign:"right"},children:"16"}),t.jsx(e.td,{style:{textAlign:"right"},children:"20"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Medium"})}),t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"16"})}),t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"24"})}),t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"32"})}),t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"40"})})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"24"}),t.jsx(e.td,{style:{textAlign:"right"},children:"36"}),t.jsx(e.td,{style:{textAlign:"right"},children:"48"}),t.jsx(e.td,{style:{textAlign:"right"},children:"60"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"32"}),t.jsx(e.td,{style:{textAlign:"right"},children:"48"}),t.jsx(e.td,{style:{textAlign:"right"},children:"64"}),t.jsx(e.td,{style:{textAlign:"right"},children:"80"})]})]})]}),`
`,t.jsx(e.h2,{id:"stack-space",children:"Stack Space"}),`
`,t.jsx(e.p,{children:`This is the space between sets of components, for example between a list of cards, or next to an image.
It is also used for combinations of components, like an icon accompanying a text, or a row of buttons.`}),`
`,t.jsx(e.p,{children:`This type of space is static; it is the same for any window width.
Five options are available.
The medium size is 16 pixels wide in both Spacious and Compact Mode.`}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"right"}}),t.jsx(e.th,{style:{textAlign:"right"},children:"Width"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"8"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"12"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Medium"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"16"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"24"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"32"})]})]})]}),`
`,t.jsx(e.h2,{id:"inside-space",children:"Inside Space"}),`
`,t.jsx(e.p,{children:`This is the space at the four edges of a component: at the top, bottom, start, and end of its containing box.
It is used for buttons and input fields, and for larger components with a coloured background or border.`}),`
`,t.jsx(e.p,{children:"The medium size is 16 pixels wide in both Spacious and Compact Mode."}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{style:{textAlign:"right"}}),t.jsx(e.th,{style:{textAlign:"right"},children:"Width"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"8"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Small"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"12"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Medium"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"16"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"24"})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{style:{textAlign:"right"},children:t.jsx(e.strong,{children:"Extra large"})}),t.jsx(e.td,{style:{textAlign:"right"},children:"32"})]})]})]}),`
`,t.jsx(e.h2,{id:"type-space",children:"Type Space"}),`
`,t.jsx(e.p,{children:"This is the vertical space between text components like headings, paragraphs, and lists."}),`
`,t.jsx(e.p,{children:"More information on this type of space will follow."}),`
`,t.jsx(e.h2,{id:"about-the-units-we-use",children:"About the units we use"}),`
`,t.jsxs(e.p,{children:[`We use pixels in our documentation on sizes to convey a more accurate mental image.
In code, sizes are defined in relative units (like `,t.jsx(e.code,{children:"rem"}),", ",t.jsx(e.code,{children:"em"}),", ",t.jsx(e.code,{children:"ex"}),", ",t.jsx(e.code,{children:"vw"}),", ",t.jsx(e.code,{children:"vh"}),", and ",t.jsx(e.code,{children:"ch"}),") to make components more flexible and accessible."]})]})}function A(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{A as default};
