import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as i}from"./index-D69mlkTj.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DGN6FpHt.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Developer Guide/Usability"}),`
`,e.jsx(t.h1,{id:"usability",children:"Usability"}),`
`,e.jsx(t.h2,{id:"focus-management",children:"Focus management"}),`
`,e.jsxs(t.p,{children:["In traditional multi-page applications (MPAs), navigating to another page resets the focus to the ",e.jsx(t.code,{children:"<body>"}),` element,
or the first element with an `,e.jsx(t.code,{children:"autofocus"}),` attribute if there is one.
For single-page applications (SPAs) this isn’t always done consistently.
For example, Next.js sets the focus on a new page at roughly the same position as it was on the old page.
This can result in an unexpected focus position, e.g. when navigating between pages of a form.`]}),`
`,e.jsxs(t.p,{children:[`Make sure to correct this focus behaviour in your application.
The simplest and most consistent way to do this is to set focus on the `,e.jsx(t.code,{children:"<body>"}),` element after navigating to another page.
For some applications it might make more sense to set the focus somewhere else,
but be very careful with this.
Your assumptions on how users use the app might not be correct.
Only change the expected focus behaviour when user tests show it’s an improvement,
including for users of screen readers.`]})]})}function x(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
