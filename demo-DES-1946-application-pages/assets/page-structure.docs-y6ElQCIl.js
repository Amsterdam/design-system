import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-BQKRe05W.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Pages/Guidelines/Page structure`}),`
`,(0,c.jsx)(t.h1,{id:`page-structure`,children:`Page structure`}),`
`,(0,c.jsx)(t.p,{children:`Every page template is built from the same shell.
This page gives that shell for both contexts, and the rules that hold for any page inside it.`}),`
`,(0,c.jsx)(t.h2,{id:`a-public-page`,children:`A public page`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader>
    <Grid />
  </PageHeader>
  <Grid>
    <Breadcrumb />
  </Grid>
  <main id="inhoud">
    <Grid>{/* the Content Header */}</Grid>
    <Grid>{/* the body */}</Grid>
  </main>
  <PageFooter>
    <PageFooter.Spotlight>
      <Grid />
    </PageFooter.Spotlight>
    <PageFooter.Menu />
  </PageFooter>
</Page>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Public websites cannot use the `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` component.
They should offer navigation using the Page Header only.`]}),`
`,(0,c.jsx)(t.h2,{id:`an-internal-page`,children:`An internal page`}),`
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
`,(0,c.jsxs)(t.p,{children:[`All children of `,(0,c.jsx)(t.code,{children:`Page`}),` have a class name starting with `,(0,c.jsx)(t.code,{children:`ams-page__area--`}),` to lay them out correctly on the underlying grid.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Internal websites may use a `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` to support navigation across major functional areas or modules.
This pattern helps users move efficiently between different parts of the website while keeping the structure clear and predictable.`]}),`
`,(0,c.jsx)(t.p,{children:`The component must be rendered twice.`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`One instance, for narrow and medium windows, sits in the Page Header.
The user can access it through the menu button.
Hide the menu button on wide windows: this instance hides itself there, so the button would open an empty menu.`}),`
`,(0,c.jsxs)(t.li,{children:[`A second Menu goes between the Page Header and the main content.
This is for wide windows, where the menu is positioned to the side.
The `,(0,c.jsx)(t.code,{children:`inWideWindow`}),` prop ensures that only one of both components is present at all times.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Make sure that both menus have the same items.`}),`
`,(0,c.jsx)(t.h2,{id:`landmarks`,children:`Landmarks`}),`
`,(0,c.jsxs)(t.p,{children:[`A landmark is not always a section itself.
The Content Header is a section of its own, so a content page wraps its sections in a `,(0,c.jsx)(t.code,{children:`main`}),` element, or places `,(0,c.jsx)(t.code,{children:`main`}),` in a Grid Cell beside a sidebar.
A page that is a single section — a question page of a Form Flow, for instance — sets `,(0,c.jsx)(t.code,{children:`as="main"`}),` on that Grid instead.
Such a wrapper takes no padding of its own, and the Grids inside and around it keep theirs.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),` takes a Grid of its own above `,(0,c.jsx)(t.code,{children:`main`}),`, so that its `,(0,c.jsx)(t.code,{children:`nav`}),` element stays outside the main landmark.`]}),`
`,(0,c.jsx)(t.h2,{id:`the-skip-link`,children:`The skip link`}),`
`,(0,c.jsxs)(t.p,{children:[`Every page opens with a `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-skip-link--docs`,children:`Skip Link`}),` targeting `,(0,c.jsx)(t.code,{children:`#inhoud`}),`, which is the `,(0,c.jsx)(t.code,{children:`id`}),` of the `,(0,c.jsx)(t.code,{children:`main`}),` element.
The shared layout of these templates renders it, so a template itself only has to provide the `,(0,c.jsx)(t.code,{children:`main`}),` it points at.`]}),`
`,(0,c.jsx)(t.h2,{id:`headings-on-a-page`,children:`Headings on a page`}),`
`,(0,c.jsxs)(t.p,{children:[`The page title is a level 1 `,(0,c.jsx)(t.a,{href:`/docs/components-text-heading--docs#sections-and-blocks`,children:`Heading`}),`, and the sections below it are level 2.`]}),`
`,(0,c.jsxs)(t.p,{children:[`On a public page, a Heading below the title keeps the size of its level where it introduces a content body, and takes a `,(0,c.jsx)(t.code,{children:`size`}),` one step smaller where it introduces a block or a group of blocks.
Most sections are groups of blocks, so on all but the content page types every heading under the title takes the smaller size.`]}),`
`,(0,c.jsx)(t.p,{children:`Internal pages leave every heading at the size of its level.
Compact Mode already sets the type down a step, and a second reduction would leave too little between a section and the block inside it.`}),`
`,(0,c.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs`,children:`Layout and spacing`}),` – where the space between these sections comes from.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – the outermost wrapper.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` – the top of every page.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` – the bottom of every page.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};