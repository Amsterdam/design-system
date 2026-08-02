import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-zzQRermb.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";import{n as o,t as s}from"./PageAnatomy-D0eyY1dW.js";import{n as c,t as l}from"./TablePage.stories-BRGCH0Nt.js";var u;function d(){return(d=e((()=>{u=[[{height:`heading`,label:`Page title`},{height:`body`,label:`Table`}]]})))()}function f(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`table-page`,children:`Table page`}),`
`,(0,m.jsx)(t.p,{children:`These examples show how to use the Table component in Compact Mode to work with data sets.
They include various ways to sort, filter and operate on data.`}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(s,{labels:u,menu:!0,mode:`compact`,of:l,story:`SortingWithSelect`}),`
`,(0,m.jsx)(t.h2,{id:`make-table-state-easy-to-share`,children:`Make table state easy to share`}),`
`,(0,m.jsxs)(t.p,{children:[`Store the current state of the table features in the URL – the sort column and direction, active filters, the current page of a paginated set, etc.
This works `,(0,m.jsx)(t.em,{children:`with`}),` the web platform instead of around it: it allows users to bookmark, share or navigate to a specific state of the table.
For example:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{children:`https://yourapp.amsterdam.nl/some-table-page?status=4&sort=name-asc&page-size=20&page=3
`})}),`
`,(0,m.jsx)(t.p,{children:`This is why we use links and forms for table controls rather than buttons.`}),`
`,(0,m.jsx)(t.h2,{id:`sort-and-filter-controls`,children:`Sort and filter controls`}),`
`,(0,m.jsxs)(t.p,{children:[`Place sort and filter controls in a row outside the table, never inside the `,(0,m.jsx)(t.code,{children:`<caption>`}),`.
The `,(0,m.jsx)(t.code,{children:`<caption>`}),` provides the table’s accessible name, and its full subtree is part of that name: a `,(0,m.jsx)(t.code,{children:`<select>`}),` placed there would have its current value concatenated into the name on every announcement.`]}),`
`,(0,m.jsxs)(t.p,{children:[`There are two ways to lay this out, and both keep a `,(0,m.jsx)(t.code,{children:`<caption>`}),` on the table for its accessible name and data-table semantics:`]}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Controls above the table.`}),` Add the controls in a row above the table and keep the caption visible inside it.
This is the simplest option and needs no extra markup.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.strong,{children:`Controls inline after the heading (recommended).`}),` Place a visible heading and the controls on one row above the table – the heading on the start, the controls on the end – and give the table a visually hidden `,(0,m.jsx)(t.code,{children:`<caption>`}),` carrying the same text.
The heading text is duplicated for assistive technology; this is the trade-off for placing the controls on the same line as the heading.`]}),`
`]}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.strong,{children:`Sorting With Select`}),` story demonstrates the recommended layout.`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),a(),t(),o(),d(),c()})))()}h();export{p as default};