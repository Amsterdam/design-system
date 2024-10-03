import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as i}from"./index-BI1Biiay.js";import{ae as s,ak as r,al as a,am as l,an as h}from"./index-CpLBrxbQ.js";import{S as d,V as c}from"./SpotlightGrid.stories-CehYlqDK.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Coi229bS.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-CdfKI2Ga.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";import"./paddingClasses-C5gheHLv.js";const p=`<!-- @license CC0-1.0 -->

# Spotlight Grid

A composition that lets a figure – e.g. an image, video or map – break out of a Spotlight.
`;/*@license CC0-1.0*/function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:d}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(t.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(t.p,{children:["This component is an extension of ",e.jsx(t.code,{children:"Grid"}),`.
It offers the same props, although `,e.jsx(t.code,{children:"span"})," and ",e.jsx(t.code,{children:"start"})," have been renamed to ",e.jsx(t.code,{children:"colSpan"})," and ",e.jsx(t.code,{children:"colStart"}),`.
Additionally, `,e.jsx(t.code,{children:"SpotlightGrid"})," allows cells to span multiple rows."]}),`
`,e.jsxs(t.p,{children:["The Cell containing the Spotlight must have ",e.jsx(t.code,{children:'has="spotlight"'}),` to extend to the gaps and margins around it.
This prop can be used only on Cells that span all columns of the grid, so `,e.jsx(t.code,{children:'span="all"'})," is required as well."]}),`
`,e.jsxs(t.p,{children:["The Cell containing the figure must have ",e.jsx(t.code,{children:'has="figure"'})," to ensure it aligns to the bottom."]}),`
`,e.jsx(t.p,{children:`The content that doesn’t break out defines the height of the Spotlight.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,e.jsx(t.p,{children:"On narrower screens, let the text move below the image."}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"vertical-layout",children:"Vertical layout"}),`
`,e.jsx(t.p,{children:"A large figure can be placed at the top of the Spotlight, with related text positioned underneath."}),`
`,e.jsx(h,{of:c})]})}function A(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{A as default};
