import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,m as r,v as i}from"./iframe-ClqxS2aw.js";import{t as a}from"./mdx-react-shim-B5CAElxu.js";import{n as o,t as s}from"./EventsPage.stories-DYaUCPpC.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(n,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`events-page`,children:`Events page`}),`
`,(0,u.jsxs)(t.p,{children:[`A template for finding and browsing activities, such as a city events calendar.
It is a rebuild of `,(0,u.jsx)(t.a,{href:`https://activiteiten.amsterdam.nl`,rel:`nofollow`,children:`activiteiten.amsterdam.nl`}),` using only design system components.`]}),`
`,(0,u.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,u.jsx)(t.p,{children:`The page keeps a single DOM order at every breakpoint.
Only the Grid column placement changes, so the visual order never diverges from the reading and tab order.
The filter panel sits in the left column on wide screens and stacks above the results on narrow screens.`}),`
`,(0,u.jsxs)(t.p,{children:[`The results column is shown two ways.
`,(0,u.jsx)(t.code,{children:`Default`}),` uses a single, scannable column of full-width rows, which suits homogeneous content where people compare dates and locations.
`,(0,u.jsx)(t.code,{children:`Cards`}),` arranges the same activities in a card grid, laid out as a subgrid so the cards line up on the page’s columns next to the taller filter panel.
The same `,(0,u.jsx)(t.code,{children:`Card`}),` switches between a horizontal and a vertical layout based on the width of its container, so neither view changes the DOM.`]}),`
`,(0,u.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`The main region has `,(0,u.jsx)(t.code,{children:`id="inhoud"`}),`, the target of the page’s skip link.`]}),`
`,(0,u.jsxs)(t.li,{children:[`The keyword search is a `,(0,u.jsx)(t.code,{children:`role=search`}),` landmark; date, district, and category filters are grouped with fieldsets and legends.`]}),`
`,(0,u.jsxs)(t.li,{children:[`The result count sits in a polite live region (`,(0,u.jsx)(t.code,{children:`role=status`}),`); in an implementation that updates the results in place, changing this text announces the new count.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Each activity is a list item with a heading that links to its detail page, and its date is marked up with a `,(0,u.jsx)(t.code,{children:`time`}),` element.`]}),`
`,(0,u.jsx)(t.li,{children:`The Calendar is date navigation: each day links to the activities on that day.`}),`
`,(0,u.jsx)(t.li,{children:`The empty state offers a way to recover instead of leaving the user at a dead end.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),o()}))();export{l as default};