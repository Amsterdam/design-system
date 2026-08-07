import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-CGayfJ_N.js";import{n as u,t as d}from"./TablePage.stories-DL1_QVqE.js";var f;function p(){return(p=e((()=>{f=[[{height:`heading`,label:`Page title`},{height:`body`,label:`Table`}]]})))()}function m(e){let n={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,menu:!0,mode:`compact`,of:d,story:`SortingWithSelect`}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page where the work is reading, sorting and filtering a large set of records.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` inside another page type where the data supports the page rather than being the page.`]}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`sorting-with-a-select`,children:`Sorting with a Select`}),`
`,(0,g.jsx)(n.p,{children:`The recommended layout: a visible heading and the sort and filter controls on one row above the table.`}),`
`,(0,g.jsx)(n.h3,{id:`with-pagination`,children:`With Pagination`}),`
`,(0,g.jsx)(n.p,{children:`The same table split over pages, with the current page in the URL.`}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsx)(n.h3,{id:`make-table-state-easy-to-share`,children:`Make table state easy to share`}),`
`,(0,g.jsxs)(n.p,{children:[`Store the current state of the table features in the URL – the sort column and direction, active filters, the current page of a paginated set, etc.
This works `,(0,g.jsx)(n.em,{children:`with`}),` the web platform instead of around it: it allows users to bookmark, share or navigate to a specific state of the table.
For example:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{children:`https://yourapp.amsterdam.nl/some-table-page?status=4&sort=name-asc&page-size=20&page=3
`})}),`
`,(0,g.jsx)(n.p,{children:`This is why we use links and forms for table controls rather than buttons.`}),`
`,(0,g.jsx)(n.h3,{id:`sort-and-filter-controls`,children:`Sort and filter controls`}),`
`,(0,g.jsxs)(n.p,{children:[`Place sort and filter controls in a row outside the table, never inside the `,(0,g.jsx)(n.code,{children:`<caption>`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`There are two ways to lay this out, and both keep a `,(0,g.jsx)(n.code,{children:`<caption>`}),` on the table for its accessible name and data-table semantics:`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Controls above the table.`}),` Add the controls in a row above the table and keep the caption visible inside it.
This is the simplest option and needs no extra markup.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.strong,{children:`Controls inline after the heading (recommended).`}),` Place a visible heading and the controls on one row above the table – the heading on the start, the controls on the end – and give the table a visually hidden `,(0,g.jsx)(n.code,{children:`<caption>`}),` carrying the same text.
The heading text is duplicated for assistive technology; this is the trade-off for placing the controls on the same line as the heading.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The `,(0,g.jsx)(n.code,{children:`<caption>`}),` provides the table’s accessible name, and its full subtree is part of that name: a `,(0,g.jsx)(n.code,{children:`<select>`}),` placed there would have its current value concatenated into the name on every announcement.
This is why the controls sit outside it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Where the controls share a row with a visible heading, the table keeps a visually hidden `,(0,g.jsx)(n.code,{children:`<caption>`}),` carrying the same text.
The heading text is duplicated for assistive technology; this is the trade-off for placing the controls on the same line as the heading.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` – the table itself, and what its Caption is for.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-pagination--docs`,children:`Pagination`}),` – splits a long set over pages.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};