import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as r,f as i,P as a,h,i as l}from"./index-CmOTT0Tf.js";import{B as c,V as d}from"./Breakout.stories-CdoNRWZ9.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dy5ZX1Ud.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-BWMqCmbs.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./paddingClasses-C5gheHLv.js";const p=`<!-- @license CC0-1.0 -->

# Breakout

A composition that lets a figure – e.g. an image, video or map – break out of a Spotlight.
`;/*@license CC0-1.0*/function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
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
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"vertical-layout",children:"Vertical layout"}),`
`,e.jsx(t.p,{children:"A large figure can be placed at the top of the Spotlight, with related text positioned underneath."}),`
`,e.jsx(l,{of:d})]})}function A(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{A as default};
