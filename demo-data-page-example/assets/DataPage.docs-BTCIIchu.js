import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-eJlzwjW6.js";import{n as u,t as d}from"./DataPage.stories-CaIXc7g8.js";var f;function p(){return(p=e((()=>{f=[[{height:`heading`,label:`Page title`},{height:`body`,label:`Object metadata`},{height:`panel`,label:`Table of contents`},{height:`card`,label:`Status assessment`},{height:`card`,label:`Risk score`},{height:`panel`,label:`Condition report`},{height:`panel`,label:`Condition report`},{height:`card`,label:`Measures`},{height:`body`,label:`Documents`},{height:`card`,label:`Further research`},{height:`heading`,label:`Amendments`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,menu:!0,mode:`compact`,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for everything an application records about a single object, where the reader needs its metadata in view while working through the record.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` to work through a set of such objects rather than one of them.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsx)(n.p,{children:`The page title names the object.
The actions that apply to the whole of it sit beside that title rather than with any one section below.`}),`
`,(0,g.jsxs)(n.p,{children:[`A sidebar carries what stays true of the object: its metadata in a `,(0,g.jsx)(n.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),`, a button opening the passport that holds the rest, and a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` listing the sections beside it.
The record follows: assessments a reader takes in at a glance, condition reports and documents in `,(0,g.jsx)(n.a,{href:`/docs/components-containers-table--docs`,children:`Tables`}),`.`]}),`
`,(0,g.jsx)(n.p,{children:`Pair a term with its description directly in that Description List.
A Section groups several terms that share one description, which does not arise here.`}),`
`,(0,g.jsx)(n.p,{children:`A record is rarely complete.
A section with nothing to show keeps its table and fills a row with the news, so that the reader learns the section exists and is empty rather than meeting a gap where it should be.`}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.p,{children:[`Each column is a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs#subgrid`,children:`Grid Subgrid`}),` rather than a Cell, which is what `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#side-by-side-blocks`,children:`Layout and spacing`}),` asks for where two columns run beside one another and one is much taller.
A Subgrid is a single item in the row of the Grid however many Cells it holds, so neither column has to span rows to stay beside the other, and every Cell still lands on the columns of the page.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` spaces the Cells whose contents it can reach.
The section that pairs its heading with a download link puts both in a `,(0,g.jsx)(n.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),`, which hides that heading from Prose, so the Cell sets its own margins in the amounts Prose gives the same elements a section above.`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The sidebar comes first in source, so its metadata and its links precede the sections in the reading and the tab order.
The layout these templates share wraps the body in `,(0,g.jsx)(n.code,{children:`main`}),`, which puts the sidebar inside that landmark rather than beside it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Every section heading carries the `,(0,g.jsx)(n.code,{children:`id`}),` its Table of Contents entry points at.
Following an entry moves the reading position to the heading itself, rather than to the box drawn around the section.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Each table names itself with a `,(0,g.jsx)(n.code,{children:`caption`}),`, in whichever of the two ways the `,(0,g.jsx)(n.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` documents: wrapped around the visible heading where nothing sits between the two, and visually hidden where a row of buttons does.
Where a checkbox or a button repeats down a table, a visually hidden phrase extends its accessible name with the row it belongs to, so that a screen reader tells one ‘Inspectie’ or ‘Toon onderdelen’ from the next.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-internal-table-page--docs`,children:`Table Page`}),` – for working through a set of objects rather than one of them.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` – the in-page navigation the sidebar carries.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs`,children:`Layout and spacing`}),` – the Cell sizes and the Grid padding this page follows.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};