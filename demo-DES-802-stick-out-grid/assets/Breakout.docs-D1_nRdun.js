import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as i,al as r,am as l,an as p}from"./index-DR9YjeOl.js";import{B as h,M as c}from"./Breakout.stories-DeGnu_tk.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Cr7rlFYu.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./index.esm-DFuBI4B0.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./paddingClasses-C5gheHLv.js";const m=`<!-- @license CC0-1.0 -->

# Breakout

A playful composition of visual content breaking out of a Spotlight.
`;/*@license CC0-1.0*/function n(o){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(t.p,{children:`This example lets an image pop out.
The text next to it defines the height of the Spotlight.
On narrower screens, the text moves below the image.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,e.jsxs(t.p,{children:["This component is an extension of ",e.jsx(t.code,{children:"Grid"}),`, so it offers the same props.
Additionally, `,e.jsx(t.code,{children:"Breakout"})," allows cells to span multiple columns, and a cell to expand to cover its adjacent gaps and margins."]}),`
`,e.jsxs(t.p,{children:["The Breakout’s Cell that contains the Spotlight must use the ",e.jsx(t.code,{children:"coverGap"}),` prop to extend to the gaps and margins around it.
This prop can be used only on Cells that span all columns of the grid, so `,e.jsx(t.code,{children:'span="all"'})," is required as well."]}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"vertical-layout",children:"Vertical layout"}),`
`,e.jsx(t.p,{children:"Large content, such as a map or a big image, can be placed at the top of the Spotlight, with related text positioned underneath."}),`
`,e.jsx(p,{of:c})]})}function S(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{S as default};
