import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-CZmb9BFW.js";import{r as n}from"./react-BCYpKnTu.js";import{c as r,f as i}from"./blocks-S9L-bPs4.js";import{t as a}from"./mdx-react-shim-BYFSBki3.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Pages/Internal/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`internal-websites`,children:`Internal websites`}),`
`,(0,c.jsx)(t.p,{children:`The design system also supports internal websites, such as backoffice systems used by our staff.`}),`
`,(0,c.jsx)(t.p,{children:`These typically require higher information density and faster task execution.
The guidelines below describe how to apply the design in these contexts.`}),`
`,(0,c.jsx)(t.h2,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`Internal websites frequently use `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs`,children:`Compact Mode`}),`, which applies reduced sizes for `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-typography--docs`,children:`typography`}),` and `,(0,c.jsx)(t.a,{href:`/docs/brand-design-tokens-space--docs`,children:`spacing`}),`.
This mode increases information density and improves the use of available screen space.`]}),`
`,(0,c.jsx)(t.p,{children:`Compact Mode automatically adjusts all components.
As a result, they remain consistent and equally suitable for task-oriented workflows as they are for content-driven public websites.`}),`
`,(0,c.jsx)(t.h2,{id:`page-structure`,children:`Page structure`}),`
`,(0,c.jsx)(t.p,{children:`The general structure for a page is:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page withMenu>
  <SkipLink className="ams-page__area--skip-link" href="#inhoud">
    Direct naar inhoud
  </SkipLink>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Menu />
  </PageHeader>
  <Menu className="ams-page__area--menu" inWideWindow />
  <main className="ams-page__area--body" id="inhoud">
    <Grid />
  </main>
  <PageFooter className="ams-page__area--footer" />
</Page>
`})}),`
`,(0,c.jsx)(t.h3,{id:`positioning-classes`,children:`Positioning classes`}),`
`,(0,c.jsxs)(t.p,{children:[`All children of `,(0,c.jsx)(t.code,{children:`Page`}),` have a class name starting with `,(0,c.jsx)(t.code,{children:`ams-page__area--`}),` to lay them out correctly on the underlying grid.`]}),`
`,(0,c.jsx)(t.h3,{id:`with-menu`,children:`With menu`}),`
`,(0,c.jsxs)(t.p,{children:[`Internal websites may use a `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` to support navigation across major functional areas or modules.
This pattern helps users move efficiently between different parts of the website while keeping the structure clear and predictable.`]}),`
`,(0,c.jsx)(t.p,{children:`The component must be rendered twice.`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`One instance, for narrow and medium windows, sits in the Page Header.
The user can access it through the menu button.
Hide the menu button on wide windows.`}),`
`,(0,c.jsxs)(t.li,{children:[`A second Menu goes between the Page Header and the main content.
This is for wide windows, where the menu is positioned to the side.
The `,(0,c.jsx)(t.code,{children:`inWideWindow`}),` prop ensures that only one of both components is present at all times.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Make sure that both menus have the same items.`}),`
`,(0,c.jsx)(t.h2,{id:`related-components`,children:`Related components`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`})}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};