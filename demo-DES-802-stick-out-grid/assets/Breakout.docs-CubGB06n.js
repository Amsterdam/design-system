import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import{ae as i,ak as r,al as l,am as p,an as o}from"./index-x6daq7ym.js";import{B as h,M as c,C as m}from"./Breakout.stories-D6HjcgpB.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BO3ihpmU.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./index.esm-DFuBI4B0.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./paddingClasses-C5gheHLv.js";const d=`<!-- @license CC0-1.0 -->

# Breakout

A playful composition of visual content breaking out of a Spotlight.
`;/*@license CC0-1.0*/function s(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(r,{children:d}),`
`,e.jsx(t.p,{children:`This example lets an image pop out.
The text next to it defines the height of the Spotlight.
On narrower screens, the text moves below the image.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,e.jsxs(t.p,{children:["This component is an extension of ",e.jsx(t.code,{children:"Grid"}),`, so it offers the same props.
Additionally, `,e.jsx(t.code,{children:"Breakout"})," allows cells to span multiple columns, and a cell to expand to cover its adjacent gaps and margins."]}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"vertical-layout",children:"Vertical layout"}),`
`,e.jsx(t.p,{children:"Large content, such as a map or a big image, can be placed at the top of the Spotlight, with related text positioned underneath."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h3,{id:"covering-gaps",children:"Covering gaps"}),`
`,e.jsxs(t.p,{children:["The Breakout’s Cell that contains the Spotlight must use the ",e.jsx(t.code,{children:"coverGap"}),` prop to extend to the gaps and margins around it.
This prop can be used only on Cells that span all columns of the grid, so `,e.jsx(t.code,{children:'span="all"'})," is required as well."]}),`
`,e.jsx(o,{of:m})]})}function D(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{D as default};
