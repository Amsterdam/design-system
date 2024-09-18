import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import{ae as r,ak as i,al as p,am as l,an as n}from"./index-SA0u2ywZ.js";import{B as h,M as m,C as c}from"./Breakout.stories-Cpt6mtT2.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CkKC2YwC.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./exampleContent-Gq_MSqYX.js";import"./clsx-B-dksMZM.js";import"./paddingClasses-C5gheHLv.js";import"./Screen-Bi3gjHLv.js";import"./Spotlight-i1uKJTzV.js";import"./Paragraph-BWS5kDPY.js";import"./Image-CVzrCme5.js";import"./AspectRatio-BYbD0Ehv.js";const d=`<!-- @license CC0-1.0 -->

# Breakout

A playful composition of visual content breaking out of a Spotlight.
`;/*@license CC0-1.0*/function s(o){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(i,{children:d}),`
`,e.jsx(t.p,{children:`This example lets an image pop out.
The text next to it defines the height of the Spotlight.
On narrower screens, the text moves below the image.
Ensure that the text is short, or the image tall, to prevent losing the break-out effect.`}),`
`,e.jsxs(t.p,{children:["This component is a copy of ",e.jsx(t.code,{children:"Grid"}),`, so it offers the same props.
Additionally, `,e.jsx(t.code,{children:"Breakout"})," allows cells to span multiple columns, and a cell to expand to cover its adjacent gaps and margins."]}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[`The example isn’t very wide on this page.
And due to how Storybook works, the Grid in the example may incorrectly use 12 columns.
Both circumstances prevent the image from breaking out if the random example text is long.
The `,e.jsx(t.a,{href:"?path=/story/components-containers-breakout--default",children:"separate page"})," for this example shows this composition better."]})}),`
`,e.jsx(p,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"vertical-layout",children:"Vertical layout"}),`
`,e.jsx(t.p,{children:"Large content, such as a map or a big image, can be placed at the top of the Spotlight, with related text positioned underneath."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"covering-gaps",children:"Covering gaps"}),`
`,e.jsxs(t.p,{children:["The Breakout’s Cell that contains the Spotlight must use the ",e.jsx(t.code,{children:"coverGap"}),` prop to extend to the gaps and margins around it.
This prop can be used only on Cells that span all columns of the grid, so `,e.jsx(t.code,{children:'span="all"'})," is required as well."]}),`
`,e.jsx(n,{of:c})]})}function L(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{L as default};
