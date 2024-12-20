import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{useMDXComponents as s}from"./index-3rgQkYFR.js";import{ae as r,aq as i,ar as a,as as l,at as h}from"./index-C3sciwF0.js";import{B as c,V as d}from"./Breakout.stories-C5lINmIg.js";import"./index-D2MAbzvX.js";import"./index-RigO-4kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C48nIWGx.js";import"../sb-preview/runtime.js";import"./index-BIm0odtm.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index.esm-fRmPg76r.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bz9pa_xK.js";import"./paddingClasses-C5gheHLv.js";const p=`<!-- @license CC0-1.0 -->

# Breakout

A composition that lets a figure – e.g. an image, video or map – break out of a Spotlight.
`;/*@license CC0-1.0*/function n(o){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:c}),`
`,e.jsx(i,{children:p}),`
`,e.jsx(t.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(t.p,{children:["This component is an extension of ",e.jsx(t.code,{children:"Grid"}),`.
It offers the same props, although `,e.jsx(t.code,{children:"span"})," and ",e.jsx(t.code,{children:"start"})," have been renamed to ",e.jsx(t.code,{children:"colSpan"})," and ",e.jsx(t.code,{children:"colStart"}),`.
Additionally, `,e.jsx(t.code,{children:"Breakout"})," allows cells to span multiple rows."]}),`
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
`,e.jsx(h,{of:d})]})}function B(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{B as default};
