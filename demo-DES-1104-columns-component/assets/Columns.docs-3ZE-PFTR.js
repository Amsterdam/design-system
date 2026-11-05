import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,f as r,m as i,n as a,u as o}from"./blocks-B1lbre73.js";import{t as s}from"./jsx-runtime-BG4KOiPz.js";import{i as c,r as l}from"./react-Bg8UoiFE.js";import{n as u,t as d}from"./DesignTokensTable-yDl_Qmur.js";import{i as f,n as p,r as m,t as h}from"./Columns.stories-oL74rhj3.js";var g,_;function v(){return(v=e((()=>{g={columns:{"column-count":{$value:1,$description:`The maximum number of columns in a narrow window. The medium and wide windows have their own.`,$type:`number`},"column-gap":{$value:`{ams.grid.column-gap}`,$description:`Matches the gap between the columns of the Grid, so the columns line up with its Cells.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"column-width":{$value:`14rem`,$description:`The minimum width of a column. A Cell too narrow for the column count shows fewer columns.`,$type:`dimension`},"vi-medium":{"column-count":{$value:2,$description:`The maximum number of columns in a medium window, from the medium breakpoint of the Grid.`,$type:`number`}},"vi-wide":{"column-count":{$value:3,$description:`The maximum number of columns in a wide window, from the wide breakpoint of the Grid.`,$type:`number`}}}},_={ams:g}})))()}function y(e){let i={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(o,{of:h}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i.p,{children:`This component has no props to configure.`}),`
`,(0,x.jsx)(i.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(i.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(i.p,{children:`Use Columns for content made of many short parts, such as a long list: the topics in a mega menu or the facilities of a location.
The content uses the width it has, and takes up less height.`}),`
`,(0,x.jsx)(i.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(i.p,{children:[`To place separate blocks of content side by side, use the `,(0,x.jsx)(i.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.`]}),`
`,(0,x.jsx)(i.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsx)(i.p,{children:`Keep the parts short.
A long one can break across two columns.`}),`
`,(0,x.jsx)(i.p,{children:`The content reads down the first column, then the next.
Sort a list so it can be scanned that way, for example alphabetically.`}),`
`,(0,x.jsx)(i.p,{children:`Small layout glitches in Safari, described under Features, are fine as long as the content stays easy to read.`}),`
`,(0,x.jsx)(i.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(i.h3,{id:`with-unordered-list`,children:`With Unordered List`}),`
`,(0,x.jsx)(i.p,{children:`Columns makes the columns, so there is no need to split a long list with HTML.
That would make its semantics incorrect.`}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(i.h3,{id:`with-prose`,children:`With Prose`}),`
`,(0,x.jsx)(i.p,{children:`A few paragraphs could flow into columns as well.
Keep it short.
A longer text makes readers scroll back up to continue in the next column.`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(i.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsxs)(i.p,{children:[`Columns shows at most one column in a narrow window, two in a medium one and three in a wide one.
It uses the breakpoints of the Grid.
Each column is at least `,(0,x.jsx)(i.code,{children:`14rem`}),` wide, so a Cell that is too narrow for that many columns shows fewer.`]}),`
`,(0,x.jsx)(i.p,{children:`The columns end at about the same height.`}),`
`,(0,x.jsxs)(i.p,{children:[`Safari has two known issues with content in columns.
Content laid out as a grid or with flexbox can have a line cut in half where a column ends.
This includes a `,(0,x.jsx)(i.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),`, an `,(0,x.jsx)(i.a,{href:`/docs/components-text-ordered-list--docs`,children:`Ordered List`}),`, an `,(0,x.jsx)(i.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` and a `,(0,x.jsx)(i.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),`.
And the space between two parts can move to the top of the next column, so that column starts lower than the first.`]}),`
`,(0,x.jsx)(i.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(i.p,{children:`The space between the columns is the same as between the columns of the Grid.
In a Cell that spans the whole Grid, the columns line up with the columns of the Grid.
Each takes four, because the Grid has four, eight and twelve columns.`}),`
`,(0,x.jsx)(i.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(i.p,{children:[`Columns renders a `,(0,x.jsx)(i.code,{children:`div`}),`, which adds nothing to the accessibility tree.
It changes how its content is laid out, not the markup.
A list inside stays one list, so its structure reaches assistive technology as `,(0,x.jsx)(i.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` requires: a screen reader announces one list with all its items.
Screen readers and the keyboard follow the markup, down the first column and then the next, which is also the order in which the content reads on screen.`]}),`
`,(0,x.jsx)(i.p,{children:`In Safari, a link at the top of the second or a later column loses the top edge of its focus outline.
This is a known issue.`}),`
`,(0,x.jsx)(i.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(i.ul,{children:[`
`,(0,x.jsxs)(i.li,{children:[(0,x.jsx)(i.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – places separate blocks of content side by side.`]}),`
`,(0,x.jsxs)(i.li,{children:[(0,x.jsx)(i.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` – a list of links, such as the topics in a mega menu.`]}),`
`,(0,x.jsxs)(i.li,{children:[(0,x.jsx)(i.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – a list of items in no particular order.`]}),`
`]}),`
`,(0,x.jsx)(i.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=s(),l(),i(),u(),v(),f()})))()}S();export{b as default};