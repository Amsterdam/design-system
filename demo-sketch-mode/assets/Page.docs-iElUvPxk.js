import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-CqryReaq.js";import{t as s}from"./jsx-runtime-Bq1bXGty.js";import{i as c}from"./react-BnCtKaSV.js";import{n as l,t as u}from"./DesignTokensTable-Vn2YhYnx.js";import{t as d}from"./mdx-react-shim-9RzcSRdq.js";import{n as f,t as p}from"./Page.stories-DTBWXgiu.js";var m,h,g=e((()=>{m={page:{"background-color":{$value:`{ams.color.background.body}`,$extensions:{"nl.amsterdam.type":`color`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"max-inline-size":{$value:{value:90,unit:`rem`},$type:`dimension`},"with-menu":{"max-inline-size":{$value:{value:120,unit:`rem`},$type:`dimension`},"area-skip-link":{"margin-inline-end":{$value:`{ams.grid.padding-inline}`,$extensions:{"nl.amsterdam.hint":`Must be the Grid inline padding, to make sure Skip Link and Grid line up.`,"nl.amsterdam.type":`dimension`,"nl.amsterdam.subtype":`space`}}}}}},h={ams:m}}));function _(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,`
`,`
`,`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t,{of:p}),`
`,(0,y.jsx)(n,{}),`
`,(0,y.jsx)(i,{}),`
`,(0,y.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsxs)(r.p,{children:[`The Page component wraps the `,(0,y.jsx)(r.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),`, `,(0,y.jsx)(r.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),`, and the main content in between.
As a root layout component, it must be used for all websites for the City of Amsterdam.`]}),`
`,(0,y.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(r.h4,{id:`public-websites`,children:`Public websites`}),`
`,(0,y.jsxs)(r.p,{children:[`Use the Page as it is.
Its children – a `,(0,y.jsx)(r.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),`, the Page Header, the sections of the page, and the Page Footer – follow one another in document order.
See the `,(0,y.jsx)(r.a,{href:`/docs/pages-public-introduction--docs`,children:`introduction to the public templates`}),` for the structure of a page.`]}),`
`,(0,y.jsx)(r.h4,{id:`internal-websites`,children:`Internal websites`}),`
`,(0,y.jsxs)(r.p,{children:[`Set `,(0,y.jsx)(r.code,{children:`withMenu`}),` to lay the Page out as a grid, with a column for the `,(0,y.jsx)(r.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` beside the header, the body, and the footer.
Every child then needs the class name of the area it belongs in, such as `,(0,y.jsx)(r.code,{children:`ams-page__area--header`}),`.
The description of `,(0,y.jsx)(r.code,{children:`withMenu`}),` in the table above names all five.`]}),`
`,(0,y.jsxs)(r.p,{children:[`Those rules apply to direct children of the Page only, so none of these elements may be wrapped in another one.
See the `,(0,y.jsx)(r.a,{href:`/docs/pages-internal-introduction--docs`,children:`introduction to the internal templates`}),` for the structure of a page.`]}),`
`,(0,y.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(r.h3,{id:`public-websites-1`,children:`Public websites`}),`
`,(0,y.jsxs)(r.p,{children:[`Navigation sits in the Page Header, so no Menu is involved.
See the `,(0,y.jsx)(r.a,{href:`/story/pages-public-home-page--default`,children:`Home Page`}),` template for a full-page example.`]}),`
`,(0,y.jsx)(r.h3,{id:`internal-websites-1`,children:`Internal websites`}),`
`,(0,y.jsxs)(r.p,{children:[`Internal websites can add a `,(0,y.jsx)(r.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` for navigating between its modules and pages.
This is an alternative to the approach using Link Lists, which is appropriate for public, content-oriented websites.`]}),`
`,(0,y.jsxs)(r.p,{children:[`We can’t display the example here, as it requires Compact Mode to be enabled, which affects the example for the public Home Page template.
Open the `,(0,y.jsx)(r.a,{href:`/story/components-containers-page--with-menu`,children:`full example page`}),` or see the `,(0,y.jsx)(r.a,{href:`/story/pages-internal-home-page--default`,children:`Home Page`}),` template.`]}),`
`,(0,y.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsxs)(r.p,{children:[`The Page is a `,(0,y.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` for inline size, so elements inside it can adapt their appearance to the width of the page.
For elements inside a `,(0,y.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Cell`}),` or `,(0,y.jsx)(r.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),`, that nearer container takes precedence; the Page covers everything else.`]}),`
`,(0,y.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,y.jsx)(r.p,{children:`The Page is centered horizontally and sets a maximum width of 90 rems (usually 1440 pixels).
With a Menu, that becomes 120 rems (1920 pixels).`}),`
`,(0,y.jsxs)(r.p,{children:[`An element placed directly in the Page, outside a `,(0,y.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`, spans the full width of the Page rather than the full width of the window.`]}),`
`,(0,y.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),` – the first element in the Page, above the Page Header.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` – sits at the top of the Page.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` – fills the menu column that `,(0,y.jsx)(r.code,{children:`withMenu`}),` adds, on an internal website.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` – sits at the bottom of the Page.`]}),`
`]}),`
`,(0,y.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(u,{tokens:h})]})}function v(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=s(),d(),r(),l(),g(),f()}))();export{v as default};