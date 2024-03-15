import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as t}from"./index-DSz_1G2r.js";import{M as o}from"./index-DU7JPqrC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CP88y_As.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Design Guidelines/Space"}),`
`,e.jsx(n.h1,{id:"space",children:"Space"}),`
`,e.jsx(n.p,{children:"We distinguish 4 types of white space: Grid, Stack, Inside, and Type."}),`
`,e.jsx(n.h2,{id:"grid-space",children:"Grid Space"}),`
`,e.jsxs(n.p,{children:["This type of space creates gaps between the columns and rows of the ",e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),`.
It visually separates the most significant sections of a page, which in turn highlights the boundaries of every individual section.
Grid Space helps the user recognize the layout of the page and find what they are looking for.
It implements the Law of Proximity, one of the `,e.jsx(n.a,{href:"https://www.interaction-design.org/literature/topics/gestalt-principles",rel:"nofollow",children:"Gestalt Principles"}),"."]}),`
`,e.jsx(n.p,{children:`The width or height of this type of space is fluid, depending on the width of the window.
Five options are available, of which the middle one is the default.
Multiplication factors for the smaller and larger lengths are ¼, ½, 1½, and 2.
The tables below show the resulting pixel widths at some reference widths.`}),`
`,e.jsx(n.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(n.p,{children:"In Spacious Mode, the medium grid space grows from 16 to 56 pixels between window widths of 320 and 1600."}),`
`,e.jsxs(n.p,{children:[`|                 |  320   |  576   |  1088  |  1600  |
| --------------: | :----: | :----: | :----: | :----: |
| `,e.jsx(n.strong,{children:"Extra small"}),` |   4    |   6    |   10   |   14   |
|       `,e.jsx(n.strong,{children:"Small"}),` |   8    |   12   |   20   |   28   |
|      `,e.jsx(n.strong,{children:"Medium"})," | ",e.jsx(n.strong,{children:"16"})," | ",e.jsx(n.strong,{children:"24"})," | ",e.jsx(n.strong,{children:"40"})," | ",e.jsx(n.strong,{children:"56"}),` |
|       `,e.jsx(n.strong,{children:"Large"}),` |   24   |   36   |   60   |   84   |
| `,e.jsx(n.strong,{children:"Extra large"})," |   32   |   48   |   80   |  102   |"]}),`
`,e.jsx(n.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(n.p,{children:"In Compact Mode, the medium grid space grows from 16 to 40 pixels between window widths of 1088 and 2624."}),`
`,e.jsxs(n.p,{children:[`|                 |   1088 |   1600 |   2112 |   2624 |
| --------------: | -----: | -----: | -----: | -----: |
| `,e.jsx(n.strong,{children:"Extra small"}),` |      4 |      6 |      8 |     10 |
|       `,e.jsx(n.strong,{children:"Small"}),` |      8 |     12 |     16 |     20 |
|      `,e.jsx(n.strong,{children:"Medium"})," | ",e.jsx(n.strong,{children:"16"})," | ",e.jsx(n.strong,{children:"24"})," | ",e.jsx(n.strong,{children:"32"})," | ",e.jsx(n.strong,{children:"40"}),` |
|       `,e.jsx(n.strong,{children:"Large"}),` |     24 |     36 |     48 |     60 |
| `,e.jsx(n.strong,{children:"Extra large"})," |     32 |     48 |     64 |     80 |"]}),`
`,e.jsx(n.h2,{id:"stack-space",children:"Stack Space"}),`
`,e.jsx(n.p,{children:`This is the space between sets of components, for example between a list of cards, or next to an image.
It is also used for combinations of components, like an icon accompanying a text, or a row of buttons.`}),`
`,e.jsx(n.p,{children:`This type of space is static; it is the same for any window width.
Five options are available.
The medium size is 16 pixels wide in both Spacious and Compact Mode.`}),`
`,e.jsxs(n.p,{children:[`|                 | Width |
| --------------: | ----: |
| `,e.jsx(n.strong,{children:"Extra small"}),` |     8 |
|       `,e.jsx(n.strong,{children:"Small"}),` |    12 |
|      `,e.jsx(n.strong,{children:"Medium"}),` |    16 |
|       `,e.jsx(n.strong,{children:"Large"}),` |    24 |
| `,e.jsx(n.strong,{children:"Extra large"})," |    32 |"]}),`
`,e.jsx(n.h2,{id:"inside-space",children:"Inside Space"}),`
`,e.jsx(n.p,{children:`This is the space at the four edges of a component: at the top, bottom, start, and end of its containing box.
It is used for buttons and input fields, and for larger components with a coloured background or border.`}),`
`,e.jsx(n.p,{children:"The medium size is 16 pixels wide in both Spacious and Compact Mode."}),`
`,e.jsxs(n.p,{children:[`|                 | Width |
| --------------: | ----: |
| `,e.jsx(n.strong,{children:"Extra small"}),` |     8 |
|       `,e.jsx(n.strong,{children:"Small"}),` |    12 |
|      `,e.jsx(n.strong,{children:"Medium"}),` |    16 |
|       `,e.jsx(n.strong,{children:"Large"}),` |    24 |
| `,e.jsx(n.strong,{children:"Extra large"})," |    32 |"]}),`
`,e.jsx(n.h2,{id:"type-space",children:"Type Space"}),`
`,e.jsx(n.p,{children:"This is the vertical space between text components like headings, paragraphs, and lists."}),`
`,e.jsx(n.p,{children:"More information on this type of space will follow."}),`
`,e.jsx(n.h2,{id:"about-the-units-we-use",children:"About the units we use"}),`
`,e.jsxs(n.p,{children:[`We use pixels in our documentation on sizes to convey a more accurate mental image.
In code, sizes are defined in relative units (like `,e.jsx(n.code,{children:"rem"}),", ",e.jsx(n.code,{children:"em"}),", ",e.jsx(n.code,{children:"ex"}),", ",e.jsx(n.code,{children:"vw"}),", ",e.jsx(n.code,{children:"vh"}),", and ",e.jsx(n.code,{children:"ch"}),") to make components more flexible and accessible."]})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
