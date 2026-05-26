import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe--Wd6xKP7.js";import{r as n}from"./react-C3mZySj6.js";import{c as r,f as i}from"./blocks-D_jpiX2f.js";import{t as a}from"./mdx-react-shim-D7-2Ev7Y.js";import{n as o,t as s}from"./TablePage.stories-XV37vVqX.js";function c(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
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
`,(0,u.jsxs)(t.p,{children:[`Place sort and filter controls in a row above the table, not inside the `,(0,u.jsx)(t.code,{children:`<caption>`}),`.
The `,(0,u.jsx)(t.code,{children:`<caption>`}),` element provides the table’s accessible name, and its full subtree is part of that name: a `,(0,u.jsx)(t.code,{children:`<select>`}),` placed there would have its current value concatenated into the name on every announcement.
`,(0,u.jsx)(t.code,{children:`aria-describedby`}),` does not override this – only the name itself does, and overriding a table’s name via ARIA risks browsers exposing it as a layout table.`]}),`
`,(0,u.jsx)(t.p,{children:`Two layouts are supported, available as separate stories under this page:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Sorting With Select`}),` keeps the heading inside `,(0,u.jsx)(t.code,{children:`<caption>`}),` and renders the controls in a separate row above the table.
Use this when the heading may sit directly above the table.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Sorting With Inline Select`}),` places the heading and the controls in one visual row above the table, with a visually hidden `,(0,u.jsx)(t.code,{children:`<caption>`}),` carrying the heading text for the accessible name.
Use this when a single line with the heading on the start and the controls on the end is the preferred layout.
The heading text is duplicated for assistive technology; this is the trade-off for that visual.`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),i(),o()}))();export{l as default};