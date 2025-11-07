import{j as e}from"./iframe-FijalPYf.js";import{useMDXComponents as i}from"./index-BgE6F5nh.js";import{M as s}from"./blocks-Cz6cbx3I.js";import{H as t}from"./HomePage.stories-ftLWjMmc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9_L-qnT.js";/*@license CC0-1.0*/function o(a){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h1,{id:"home-page",children:"Home page"}),`
`,e.jsx(n.p,{children:`The content for the home page of an internal application depends very much on the application itself.
Our example currently focuses on the overall layout.`}),`
`,e.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(n.p,{children:"A typical layout for an application:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Page withMenu>
  <SkipLink className="ams-page__area--skip-link" href="#inhoud">
    Direct naar inhoud
  </SkipLink>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Grid>
      <Menu />
    </Grid>
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
`,e.jsx(n.h3,{id:"two-instances-of-menu",children:"Two instances of Menu"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"})," component must be rendered twice."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`One instance, for narrow and medium windows, sits in the Page Header.
The user can access it through the menu button.
Hide the menu button on wide windows.`}),`
`,e.jsxs(n.li,{children:[`A second Menu goes between the Page Header and the main content.
This is for wide windows, where the menu is positioned to the side.
The `,e.jsx(n.code,{children:"inWideWindow"})," prop ensures that only one of both components is present at all times."]}),`
`]}),`
`,e.jsx(n.p,{children:"Make sure that both menus have the same items."})]})}function p(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{p as default};
