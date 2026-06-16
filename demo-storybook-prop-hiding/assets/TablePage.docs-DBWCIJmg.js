import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,l as r,m as i}from"./blocks-DfKBLcre.js";import{t as a}from"./mdx-react-shim-9UcMWREx.js";import{n as o,t as s}from"./TablePage.stories-DNO82ybU.js";function c(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,(0,u.jsx)(r,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`table-page`,children:`Table page`}),`
`,(0,u.jsx)(t.p,{children:`These examples show how to use the Table component in Compact Mode to work with data sets.
They include various ways to sort, filter and operate on data.`}),`
`,(0,u.jsx)(t.h2,{id:`make-table-state-easy-to-share`,children:`Make table state easy to share`}),`
`,(0,u.jsxs)(t.p,{children:[`Store the current state of the table features in the URL – the sort column and direction, active filters, the current page of a paginated set, etc.
This works `,(0,u.jsx)(t.em,{children:`with`}),` the web platform instead of around it: it allows users to bookmark, share or navigate to a specific state of the table.
For example:`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{children:`https://yourapp.amsterdam.nl/some-table-page?status=4&sort=name-asc&page-size=20&page=3
`})}),`
`,(0,u.jsx)(t.p,{children:`This is why we use links and forms for table controls rather than buttons.`}),`
`,(0,u.jsx)(t.h2,{id:`sort-and-filter-controls`,children:`Sort and filter controls`}),`
`,(0,u.jsxs)(t.p,{children:[`Place sort and filter controls in a row outside the table, never inside the `,(0,u.jsx)(t.code,{children:`<caption>`}),`.
The `,(0,u.jsx)(t.code,{children:`<caption>`}),` provides the table’s accessible name, and its full subtree is part of that name: a `,(0,u.jsx)(t.code,{children:`<select>`}),` placed there would have its current value concatenated into the name on every announcement.`]}),`
`,(0,u.jsxs)(t.p,{children:[`There are two ways to lay this out, and both keep a `,(0,u.jsx)(t.code,{children:`<caption>`}),` on the table for its accessible name and data-table semantics:`]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Controls above the table.`}),` Add the controls in a row above the table and keep the caption visible inside it.
This is the simplest option and needs no extra markup.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Controls inline after the heading (recommended).`}),` Place a visible heading and the controls on one row above the table – the heading on the start, the controls on the end – and give the table a visually hidden `,(0,u.jsx)(t.code,{children:`<caption>`}),` carrying the same text.
The heading text is duplicated for assistive technology; this is the trade-off for placing the controls on the same line as the heading.`]}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.strong,{children:`Sorting With Select`}),` story demonstrates the recommended layout.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),i(),o()}))();export{l as default};