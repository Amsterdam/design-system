import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,l as r,m as i}from"./blocks-CMoHvt4a.js";import{t as a}from"./mdx-react-shim-DRPBonMy.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Spacing`}),`
`,(0,c.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,c.jsx)(t.p,{children:`The design system offers various tools for adding white space around and between elements.
They operate at different scales – from the entire page layout to individual elements – each serving a distinct purpose.
This page explains which to use in each situation.`}),`
`,(0,c.jsx)(t.h2,{id:`grid`,children:`Grid`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` divides the page into areas and is the foundation of every `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` layout.
It provides 4, 8, or 12 columns depending on the window width.
Its children are Grid Cells that define how many columns they span and, optionally, where they start.`]}),`
`,(0,c.jsx)(t.p,{children:`Use Grid as the top-level layout container for every page.
This makes Grid Cells the context for nearly all elements.
A single page can have several consecutive Grids, which allows mixing in full-width elements.`}),`
`,(0,c.jsx)(t.h2,{id:`row-and-column`,children:`Row and Column`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),` arrange a set of children with uniform spacing.
They use CSS flexbox.
Row places items side by side; Column stacks them vertically.
Both create a gap between their elements and can align them in both directions.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Use them inside Grid Cells when a group of elements needs equal spacing between them.
Do not use Column for editorial text – various element types require different amounts of space between them.
Use `,(0,c.jsx)(t.a,{href:`#prose`,children:`Prose`}),` instead.`]}),`
`,(0,c.jsx)(t.h2,{id:`gap`,children:`Gap`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-gap--docs`,children:`Gap`}),` utility classes add equal white space between all children of the element it’s applied to.
They use CSS grid layout and can be seen as a basic version of Column.`]}),`
`,(0,c.jsx)(t.h2,{id:`margin`,children:`Margin`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` utility classes create white space below a single element.
Use it for individual or a few consecutive elements, where they need specific amounts of space below them.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Refer to the `,(0,c.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`vertical space`}),` guidelines to find the recommended size for each combination.
When the same spacing applies to all siblings, use Gap or Column instead, which avoids singling out the last element.`]}),`
`,(0,c.jsx)(t.h2,{id:`prose`,children:`Prose`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` applies the recommended vertical spacing between all children of a container at once.
Use it for editorial content, like rich-text output from a CMS, or any mix of headings, paragraphs, lists, etc.`]}),`
`,(0,c.jsx)(t.p,{children:`Margin is the right choice for a single targeted override; Prose is the right choice when spacing should be applied to a whole document.`}),`
`,(0,c.jsx)(t.h2,{id:`quick-reference`,children:`Quick reference`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Situation`}),(0,c.jsx)(t.th,{style:{textAlign:`left`},children:`Tool`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`Top-level page layout`}),(0,c.jsx)(t.td,{style:{textAlign:`left`},children:(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`Equal spacing between siblings`}),(0,c.jsxs)(t.td,{style:{textAlign:`left`},children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),` or `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-gap--docs`,children:`Gap`})]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`Space below one element`}),(0,c.jsx)(t.td,{style:{textAlign:`left`},children:(0,c.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:`left`},children:`Editorial content (articles, CMS)`}),(0,c.jsx)(t.td,{style:{textAlign:`left`},children:(0,c.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`})})]})]})]}),`
`,(0,c.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`Space design tokens`}),` – the names and lengths for each available size.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/docs-designer-guide-vertical-space--docs`,children:`Vertical space`}),` – how much space to use between specific combinations.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};