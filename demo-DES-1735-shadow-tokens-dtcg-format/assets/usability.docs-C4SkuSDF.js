import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i}from"./blocks-Dm6Xc5U_.js";import{t as a}from"./mdx-react-shim-DojbLbVr.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Usability`}),`
`,(0,c.jsx)(t.h1,{id:`usability`,children:`Usability`}),`
`,(0,c.jsx)(t.h2,{id:`focus-management`,children:`Focus management`}),`
`,(0,c.jsxs)(t.p,{children:[`In traditional multipage applications (MPAs), navigating to another page resets the focus to the `,(0,c.jsx)(t.code,{children:`<body>`}),` element,
or the first element with an `,(0,c.jsx)(t.code,{children:`autofocus`}),` attribute if there is one.
For single-page applications (SPAs) this isn’t always done consistently.
For example, Next.js sets the focus on a new page at roughly the same position as it was on the old page.
This can result in an unexpected focus position, e.g. when navigating between pages of a form.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Make sure to correct this focus behaviour in your website.
The simplest and most consistent way to do this is to set focus on the `,(0,c.jsx)(t.code,{children:`<body>`}),` element after navigating to another page.
For some websites it might make more sense to set the focus somewhere else,
but be very careful with this.
Your assumptions on how users use the app might not be correct.
Only change the expected focus behaviour when user tests show it’s an improvement,
including for users of screen readers.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};