import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,f as r,i,m as a,n as o,u as s}from"./blocks-B1lbre73.js";import{t as c}from"./jsx-runtime-BG4KOiPz.js";import{i as l,r as u}from"./react-Bg8UoiFE.js";import{n as d,t as f}from"./DesignTokensTable-coQgGbQe.js";import{a as p,i as m,n as h,r as g,t as _}from"./Columns.stories-Dsog0WG8.js";var v,y;function b(){return(b=e((()=>{v={columns:{"column-gap":{$value:`{ams.grid.column-gap}`,$description:`Matches the gap between the columns of the Grid, so the columns line up with its Cells.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},y={ams:v}})))()}function x(e){let a={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(r,{}),`
`,(0,C.jsx)(t,{of:_}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(a.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(a.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(a.p,{children:`Use Columns for content with many short parts, such as the topics in a mega menu or the facilities of a location.
It spreads the content over the width, so it takes up less height.`}),`
`,(0,C.jsx)(a.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(a.p,{children:[`Use the `,(0,C.jsx)(a.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` to put separate blocks of content side by side.`]}),`
`,(0,C.jsx)(a.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsx)(a.p,{children:`Make the columns line up with the Grid.
In a Cell that spans 8 Grid columns, for example, use 2 or 4 columns, not 3.`}),`
`,(0,C.jsx)(a.p,{children:`Make sure each column is wide enough for its content.
This matters most in a narrow Cell.`}),`
`,(0,C.jsx)(a.p,{children:`Use one column in a narrow window.
Only use more if each part is a word or two, such as the names of the city districts.
Otherwise the text wraps over many short lines.`}),`
`,(0,C.jsx)(a.p,{children:`Keep the parts short.
A long one can break across two columns.`}),`
`,(0,C.jsx)(a.p,{children:`People read down the first column, then the next.
Sort a list so it makes sense in that order, for example alphabetically.`}),`
`,(0,C.jsx)(a.p,{children:`Safari shows some small layout errors, described under Features.
These are fine as long as the content stays easy to read.`}),`
`,(0,C.jsx)(a.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(a.h3,{id:`responsive-count`,children:`Responsive count`}),`
`,(0,C.jsxs)(a.p,{children:[`The number of columns can vary with the window width.
Give `,(0,C.jsx)(a.code,{children:`count`}),` three values, for narrow, medium, and wide windows.
These topics show one column in a narrow window, two in a medium one, and three in a wide one.`]}),`
`,(0,C.jsx)(o,{of:h}),`
`,(0,C.jsx)(a.h3,{id:`with-unordered-list`,children:`With Unordered List`}),`
`,(0,C.jsx)(a.p,{children:`A long list stays one list, while Columns spreads it over the columns.`}),`
`,(0,C.jsx)(o,{of:m}),`
`,(0,C.jsx)(a.h3,{id:`with-prose`,children:`With Prose`}),`
`,(0,C.jsx)(a.p,{children:`A few paragraphs can go into columns too.
Keep them short, or readers have to scroll back up to read the next column.`}),`
`,(0,C.jsx)(o,{of:g}),`
`,(0,C.jsx)(a.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(a.p,{children:`By default, Columns shows two columns from the medium breakpoint of the Grid.
A narrow window shows one column.`}),`
`,(0,C.jsxs)(a.p,{children:[`A number for `,(0,C.jsx)(a.code,{children:`count`}),` changes the number of columns from the medium breakpoint.
A narrow window still shows one column.
An object for `,(0,C.jsx)(a.code,{children:`count`}),` sets the number for narrow, medium, and wide windows separately.`]}),`
`,(0,C.jsx)(a.p,{children:`The columns end at about the same height.`}),`
`,(0,C.jsx)(a.p,{children:`Safari has two known issues with content in columns:`}),`
`,(0,C.jsxs)(a.ul,{children:[`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.strong,{children:`Cut lines:`}),` a line can be cut in half where a column ends.
This happens in content that uses grid or flexbox, such as a `,(0,C.jsx)(a.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),`, an `,(0,C.jsx)(a.a,{href:`/docs/components-text-ordered-list--docs`,children:`Ordered List`}),`, an `,(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),`, or a `,(0,C.jsx)(a.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),`.`]}),`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.strong,{children:`Uneven columns:`}),` the space between two parts can move to the top of the next column.
That column then starts lower than the first.`]}),`
`]}),`
`,(0,C.jsxs)(a.p,{children:[`WebKit tracks these in its bugs about `,(0,C.jsx)(a.a,{href:`https://bugs.webkit.org/show_bug.cgi?id=233397`,rel:`nofollow`,children:`grid`}),`, `,(0,C.jsx)(a.a,{href:`https://bugs.webkit.org/show_bug.cgi?id=78562`,rel:`nofollow`,children:`flexbox`}),`, and `,(0,C.jsx)(a.a,{href:`https://bugs.webkit.org/show_bug.cgi?id=242313`,rel:`nofollow`,children:`spacing`}),`.`]}),`
`,(0,C.jsx)(a.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(a.p,{children:`The space between the columns is the same as in the Grid.
Two columns line up with the Grid in any Cell that spans an even number of Grid columns.
That is why two is the default.`}),`
`,(0,C.jsx)(a.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(a.p,{children:[`Columns renders a `,(0,C.jsx)(a.code,{children:`div`}),`, which adds nothing to the accessibility tree.
It changes the layout, not the markup.
A list inside stays one list.
A screen reader announces it once, with all its items, as `,(0,C.jsx)(a.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` requires.
Screen readers and the keyboard go down the first column, then the next.
That is the same order in which the content reads on screen.`]}),`
`,(0,C.jsxs)(a.p,{children:[`In Safari, a link at the top of the second or a later column loses the top edge of its focus outline.
This is a known issue.
WebKit cuts off shadows in the same way, and `,(0,C.jsx)(a.a,{href:`https://bugs.webkit.org/show_bug.cgi?id=14137`,rel:`nofollow`,children:`tracks it as a bug`}),`.`]}),`
`,(0,C.jsx)(a.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(a.ul,{children:[`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – places separate blocks of content side by side.`]}),`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` – a list of links, such as the topics in a mega menu.`]}),`
`,(0,C.jsxs)(a.li,{children:[(0,C.jsx)(a.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` – a list of items in no particular order.`]}),`
`]}),`
`,(0,C.jsx)(a.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),a(),d(),b(),p()})))()}w();export{S as default};