import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-DDIQjgnz.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{n as a,t as o}from"./PageAnatomy-CD3Va-3z.js";import{t as s}from"./mdx-react-shim-9RzcSRdq.js";import{n as c,t as l}from"./HandbookPage.stories-Bzbt2PPC.js";var u,d=e((()=>{u=[[{height:320,label:`Table of contents`},{height:440,label:`Chapter`}]]}));function f(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:l}),`
`,(0,m.jsx)(t.h1,{id:`handbook-page`,children:`Handbook page`}),`
`,(0,m.jsx)(t.p,{children:`Use this template for long-form reference content that is split across many short pages, such as a personnel handbook or a policy document.`}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(o,{labels:u,of:l}),`
`,(0,m.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Two `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Links`}),` at the top of the page let keyboard users jump straight to the table of contents or to the content.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The page uses a two-column `,(0,m.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` layout.`]}),`
`,(0,m.jsxs)(t.li,{children:[`The left column holds a collapsible `,(0,m.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` showing the full document tree.`,`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Set `,(0,m.jsx)(t.code,{children:`aria-current="page"`}),` on the active link.`]}),`
`,(0,m.jsxs)(t.li,{children:[`Drive each branch with the controlled `,(0,m.jsx)(t.code,{children:`expanded`}),` prop and an `,(0,m.jsx)(t.code,{children:`onToggle`}),` handler, so the current position stays open as the reader moves through the document.
Keeping the Table of Contents mounted means the link a keyboard user just activated never loses focus.`]}),`
`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`The right column contains a `,(0,m.jsx)(t.code,{children:`main`}),` element using the `,(0,m.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class.`,`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`Each page opens with a level 1 `,(0,m.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, followed by a large lead `,(0,m.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` and body text.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`The Grid uses the `,(0,m.jsx)(t.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.`]}),`
`,(0,m.jsx)(t.li,{children:`The Prose utility class handles vertical spacing within the content area automatically.`}),`
`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=r(),s(),t(),a(),d(),c()}))();export{p as default};