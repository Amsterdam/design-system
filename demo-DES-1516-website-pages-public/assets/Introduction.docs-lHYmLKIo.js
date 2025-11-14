import{j as e}from"./iframe-B2tg4AFe.js";import{useMDXComponents as i}from"./index-Dm0hevZf.js";import{M as o}from"./blocks-sy0QxjJf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLVTDTx0.js";/*@license CC0-1.0*/function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{title:"Pages/Internal/Introduction"}),`
`,e.jsx(n.h1,{id:"internal-applications",children:"Internal applications"}),`
`,e.jsx(n.p,{children:`Backoffice applications, used by the City’s staff rather than available for the public,
The design system also supports internal and backoffice applications.`}),`
`,e.jsx(n.p,{children:`These applications typically require higher information density and faster task execution.
The guidelines below describe how to apply the system in these contexts.`}),`
`,e.jsx(n.h2,{id:"compact-mode",children:"Compact Mode"}),`
`,e.jsxs(n.p,{children:["Internal applications frequently use Compact Mode, which applies reduced sizes for ",e.jsx(n.a,{href:"/docs/brand-design-tokens-typography--docs",children:"typography"})," and ",e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"spacing"}),`.
This mode increases information density and improves the use of available screen space.`]}),`
`,e.jsx(n.p,{children:`Compact Mode automatically adjusts all components.
As a result, they remain consistent and equally suitable for task-oriented workflows as they are for content-driven public websites.`}),`
`,e.jsx(n.h2,{id:"page-structure",children:"Page structure"}),`
`,e.jsx(n.p,{children:"The general structure for a page is:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Page withMenu>
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
`,e.jsx(n.h3,{id:"positioning-classes",children:"Positioning classes"}),`
`,e.jsxs(n.p,{children:["All children of ",e.jsx(n.code,{children:"Page"})," have a class name starting with ",e.jsx(n.code,{children:"ams-page__area--"})," to lay them out correctly on the underlying grid."]}),`
`,e.jsx(n.h3,{id:"with-menu",children:"With menu"}),`
`,e.jsxs(n.p,{children:["Internal applications may use a ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),` to support navigation across major functional areas or modules.
This pattern helps users move efficiently between different parts of the application while keeping the structure clear and predictable.`]}),`
`,e.jsx(n.p,{children:"The component must be rendered twice."}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`One instance, for narrow and medium windows, sits in the Page Header.
The user can access it through the menu button.
Hide the menu button on wide windows.`}),`
`,e.jsxs(n.li,{children:[`A second Menu goes between the Page Header and the main content.
This is for wide windows, where the menu is positioned to the side.
The `,e.jsx(n.code,{children:"inWideWindow"})," prop ensures that only one of both components is present at all times."]}),`
`]}),`
`,e.jsx(n.p,{children:"Make sure that both menus have the same items."}),`
`,e.jsx(n.h2,{id:"related-components",children:"Related components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-breadcrumb--docs",children:"Breadcrumb"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page-header--docs",children:"Page Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-containers-page--docs",children:"Page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/docs/components-navigation-skip-link--docs",children:"Skip Link"})}),`
`]})]})}function h(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{h as default};
