import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-CuAf8lRO.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{t as a}from"./mdx-react-shim-9RzcSRdq.js";import{n as o,t as s}from"./HandbookPage.stories-6qF0zWPn.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(n,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`handbook-page`,children:`Handbook page`}),`
`,(0,u.jsx)(t.p,{children:`Use this template for long-form reference content that is split across many short pages, such as a personnel handbook or a policy document.`}),`
`,(0,u.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Two `,(0,u.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Links`}),` at the top of the page let keyboard users jump straight to the table of contents or to the content.`]}),`
`,(0,u.jsxs)(t.li,{children:[`The page uses a two-column `,(0,u.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` layout.`]}),`
`,(0,u.jsxs)(t.li,{children:[`The left column holds a collapsible `,(0,u.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` showing the full document tree.`,`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Set `,(0,u.jsx)(t.code,{children:`aria-current="page"`}),` on the active link.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Drive each branch with the controlled `,(0,u.jsx)(t.code,{children:`expanded`}),` prop and an `,(0,u.jsx)(t.code,{children:`onToggle`}),` handler, so the current position stays open as the reader moves through the document.
Keeping the Table of Contents mounted means the link a keyboard user just activated never loses focus.`]}),`
`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[`The right column contains a `,(0,u.jsx)(t.code,{children:`main`}),` element using the `,(0,u.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class.`,`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Each page opens with a level 1 `,(0,u.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, followed by a large lead `,(0,u.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` and body text.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`The Grid uses the `,(0,u.jsx)(t.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.`]}),`
`,(0,u.jsx)(t.li,{children:`The Prose utility class handles vertical spacing within the content area automatically.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=r(),a(),t(),o()}))();export{l as default};