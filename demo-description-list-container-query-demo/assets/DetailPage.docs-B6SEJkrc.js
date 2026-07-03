import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-BLi7U86A.js";import{t as a}from"./mdx-react-shim-DgCBcVsL.js";import{n as o,t as s}from"./DetailPage.stories-BdMOaan4.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(r,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`detail-page`,children:`Detail page`}),`
`,(0,u.jsxs)(t.p,{children:[`A detail page presents the data of a single object – an address in this example.
The `,(0,u.jsx)(t.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` is the component of choice for this.`]}),`
`,(0,u.jsx)(t.h2,{id:`one-component-two-orientations`,children:`One component, two orientations`}),`
`,(0,u.jsx)(t.p,{children:`The example renders the exact same Description List twice: once in a Grid Cell spanning 9 columns and once in a cell spanning 3.
On a wide window, the list in the wide cell places terms and descriptions side by side, while the list in the narrow cell stacks them.`}),`
`,(0,u.jsxs)(t.p,{children:[`This works through the `,(0,u.jsx)(t.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` that Grid Cell establishes.
The Description List queries the width of that container instead of the window: it uses the horizontal orientation when its container is at least `,(0,u.jsx)(t.code,{children:`32rem`}),` wide.
Page and Dialog establish the same container, so the component adapts to the space it actually gets, wherever it is used.`]}),`
`,(0,u.jsx)(t.p,{children:`Resize the window to see both lists respond to the changing widths of their cells.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),i(),o()}))();export{l as default};