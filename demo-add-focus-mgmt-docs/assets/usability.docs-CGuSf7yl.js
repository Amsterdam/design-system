import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as s}from"./index-CRbi4mQH.js";import{M as i}from"./index-BznAY5Oe.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bbg9GxfC.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Design Guidelines/Usability"}),`
`,e.jsx(t.h1,{id:"usability",children:"Usability"}),`
`,e.jsx(t.h2,{id:"focus-management",children:"Focus management"}),`
`,e.jsxs(t.p,{children:["In traditional multi-page applications (MPAs) moving to another page means resetting focus to the ",e.jsx(t.code,{children:"<body>"}),` element,
or the first element with an `,e.jsx(t.code,{children:"autofocus"}),` attribute if there is one.
For single-page applications (SPAs) this isn’t always done consistently.
For example, Next.js sets the focus on a new page at roughly the same position as it was on the old page,
resulting in an unexpected focus position.`]}),`
`,e.jsxs(t.p,{children:[`Make sure to correct this focus behaviour in your application.
The simplest and most consistent way to do this is to set focus on the `,e.jsx(t.code,{children:"<body>"}),` element when moving to another page.
For some applications it might make more sense to set the focus somewhere else when moving to a new page,
but be very careful with this.
Your assumptions on how your users use your app might not be correct.
Only change the expected focus behaviour when user tests show it’s an improvement,
including for users of screen readers.`]})]})}function x(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
