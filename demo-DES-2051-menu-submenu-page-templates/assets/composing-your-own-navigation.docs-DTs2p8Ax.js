import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-CXJ28Utr.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Pages/Guidelines/Composing your own navigation`}),`
`,(0,c.jsx)(t.h1,{id:`composing-your-own-navigation`,children:`Composing your own navigation`}),`
`,(0,c.jsx)(t.p,{children:`Internal websites navigate in more ways than one Menu can decide for them.
The design system offers the parts and a set of working models, and leaves the choice to the team that knows the website.`}),`
`,(0,c.jsxs)(t.p,{children:[`Every model here uses the shell from `,(0,c.jsx)(t.a,{href:`/docs/pages-guidelines-page-structure--docs`,children:`Page structure`}),`: a Menu in the Page Header for narrow and medium windows, and the same Menu beside the page in a wide window.`]}),`
`,(0,c.jsx)(t.h2,{id:`the-order-to-decide-in`,children:`The order to decide in`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`How many levels.`}),` Count the level in the Menu, then each level below it.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Where each level lives.`}),` In the Menu, in the body of the page, or on a page of its own.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Who sets the width of the Menu beside the page.`}),` The application, or the user.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`the-links`,children:`The links`}),`
`,(0,c.jsxs)(t.p,{children:[`A Menu with one level holds a `,(0,c.jsx)(t.code,{children:`Menu.Link`}),` per page.
A Menu with two levels holds a `,(0,c.jsx)(t.code,{children:`Menu.Item`}),` for each link that has a submenu.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`const links = (
  <>
    <Menu.Link href="/dashboard" icon={<PieChartFillIcon />}>
      Dashboard
    </Menu.Link>
    <Menu.Item href="/rapportages" icon={<DocumentsFillIcon />} label="Rapportages">
      <Menu.Link href="/rapportages/vergunninghouders">Vergunninghouders</Menu.Link>
      <Menu.Link href="/rapportages/maandrapportages">Maandrapportages</Menu.Link>
    </Menu.Item>
  </>
);
`})}),`
`,(0,c.jsx)(t.p,{children:`The snippets below show the two Menus in their place in the Page, and pass them these links.
The other children of the Page are left out.`}),`
`,(0,c.jsx)(t.h2,{id:`one-level`,children:`One level`}),`
`,(0,c.jsx)(t.h3,{id:`the-menu-alone`,children:`The Menu alone`}),`
`,(0,c.jsxs)(t.p,{children:[`The Menu is a narrow column of icons with a label.
See the `,(0,c.jsx)(t.a,{href:`/story/pages-internal-home-page--default`,children:`Internal Home Page`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`It takes the least room and has nothing to learn.
It fits a website whose pages all sit on one level.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page withMenu>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Menu>{links}</Menu>
  </PageHeader>
  <Menu className="ams-page__area--menu" inWideWindow>
    {links}
  </Menu>
</Page>
`})}),`
`,(0,c.jsx)(t.h2,{id:`two-levels-in-the-menu`,children:`Two levels in the Menu`}),`
`,(0,c.jsx)(t.p,{children:`A wide Menu shows its submenus; the narrow column does not.
The Menu in the Page Header always shows them.`}),`
`,(0,c.jsx)(t.h3,{id:`always-wide-open-submenus`,children:`Always wide, open submenus`}),`
`,(0,c.jsxs)(t.p,{children:[`The application keeps the Menu wide, and every submenu is open.
See `,(0,c.jsx)(t.a,{href:`/story/pages-internal-navigation-models--always-wide-open-submenus`,children:`Always wide, open submenus`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Users see every page at once and nothing moves.
It costs `,(0,c.jsx)(t.code,{children:`14rem`}),` of the width of every page, and the Menu grows long with more than a few submenus.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page withMenu>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Menu>{links}</Menu>
  </PageHeader>
  <Menu className="ams-page__area--menu" expanded inWideWindow>
    {links}
  </Menu>
</Page>
`})}),`
`,(0,c.jsx)(t.h3,{id:`always-wide-collapsible-submenus`,children:`Always wide, collapsible submenus`}),`
`,(0,c.jsxs)(t.p,{children:[`The application keeps the Menu wide, and each submenu has a button to show and hide it.
See `,(0,c.jsx)(t.a,{href:`/story/pages-internal-navigation-models--always-wide-collapsible-submenus`,children:`Always wide, collapsible submenus`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The Menu stays short with many submenus.
It costs the same `,(0,c.jsx)(t.code,{children:`14rem`}),`, and a submenu that is closed hides its links.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page withMenu>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Menu collapsibleSubmenus>{links}</Menu>
  </PageHeader>
  <Menu className="ams-page__area--menu" collapsibleSubmenus expanded inWideWindow>
    {links}
  </Menu>
</Page>
`})}),`
`,(0,c.jsx)(t.h3,{id:`widened-by-the-user`,children:`Widened by the user`}),`
`,(0,c.jsxs)(t.p,{children:[`The Menu has a button that lets users widen and narrow it.
See `,(0,c.jsx)(t.a,{href:`/story/pages-internal-navigation-models--widened-by-user`,children:`Widened by user`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Users who know the website keep the room for their work.
While the Menu is narrow, nothing shows that a link has a submenu, and the page shifts each time the Menu changes width.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Page withMenu>
  <PageHeader className="ams-page__area--header" noMenuButtonOnWideWindow>
    <Menu collapsibleSubmenus>{links}</Menu>
  </PageHeader>
  <Menu className="ams-page__area--menu" collapsibleSubmenus expandable inWideWindow>
    {links}
  </Menu>
</Page>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Start the Menu out wide with `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),` on a page that sits in a submenu, so users see where they are.`]}),`
`,(0,c.jsx)(t.h2,{id:`lower-levels-in-the-page`,children:`Lower levels in the page`}),`
`,(0,c.jsx)(t.p,{children:`The Menu stays a narrow column with one level, and the page carries the rest.`}),`
`,(0,c.jsx)(t.h3,{id:`a-table-of-contents-for-the-section`,children:`A Table of Contents for the section`}),`
`,(0,c.jsxs)(t.p,{children:[`A `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-table-of-contents--docs`,children:`Table of Contents`}),` in the body lists the pages of the current section.
See `,(0,c.jsx)(t.a,{href:`/story/pages-internal-navigation-models--narrow-with-table-of-contents`,children:`Narrow with Table of Contents`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`It can nest further levels, and users see the sibling pages while they read.
It costs a column of the page, and in a narrow window the list sits above the content.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<TableOfContents heading="Rapportages">
  <TableOfContents.List>
    <TableOfContents.Link aria-current="page" href="/rapportages/vergunninghouders" label="Vergunninghouders" />
    <TableOfContents.Link href="/rapportages/maandrapportages" label="Maandrapportages" />
  </TableOfContents.List>
</TableOfContents>
`})}),`
`,(0,c.jsx)(t.h3,{id:`a-section-page`,children:`A section page`}),`
`,(0,c.jsxs)(t.p,{children:[`The link in the Menu leads to a page that lists the pages of its section.
See `,(0,c.jsx)(t.a,{href:`/story/pages-internal-navigation-models--narrow-with-section-overview`,children:`Narrow with section overview`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`It needs no extra navigation at all.
It costs a click, and a page in the section does not show its sibling pages.`}),`
`,(0,c.jsx)(t.h3,{id:`tabs-in-the-page`,children:`Tabs in the page`}),`
`,(0,c.jsxs)(t.p,{children:[`A vertical `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),` shows the sections, and a horizontal one the pages of the current section.
See the `,(0,c.jsx)(t.a,{href:`/docs/pages-internal-navigation-page--docs`,children:`Internal Navigation Page`}),`, which is experimental: the two Tab Navigations stack above the content in a narrow window.`]}),`
`,(0,c.jsx)(t.h2,{id:`rules-that-apply-to-every-model`,children:`Rules that apply to every model`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`A link with a submenu leads to a page that lists the pages below it, so no page is reachable through a submenu alone.`}),`
`,(0,c.jsxs)(t.li,{children:[`The submenu or the section of the current page is open.
With `,(0,c.jsx)(t.code,{children:`collapsibleSubmenus`}),`, set `,(0,c.jsx)(t.code,{children:`defaultExpanded`}),` on its `,(0,c.jsx)(t.code,{children:`Menu.Item`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`The link to the current page has `,(0,c.jsx)(t.code,{children:`aria-current="page"`}),`.
The Menu has no visual style for it yet.`]}),`
`,(0,c.jsxs)(t.li,{children:[`What a user closes stays closed while they navigate.
The application keeps that state: pass `,(0,c.jsx)(t.code,{children:`expanded`}),` and `,(0,c.jsx)(t.code,{children:`onToggle`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`The Menu in the Page Header and the Menu beside the page offer the same links.`}),`
`,(0,c.jsxs)(t.li,{children:[`Each navigation landmark on the page has a name of its own.
The Menu beside the page is called ‘Hoofdmenu’ unless you set `,(0,c.jsx)(t.code,{children:`accessibleName`}),`; a Table of Contents takes its name from its `,(0,c.jsx)(t.code,{children:`heading`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`A button that shows and hides a submenu follows the `,(0,c.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/`,rel:`nofollow`,children:`disclosure pattern for navigation`}),` of the ARIA Authoring Practices Guide.`]}),`
`,(0,c.jsx)(t.h2,{id:`something-else`,children:`Something else`}),`
`,(0,c.jsx)(t.p,{children:`Where your website asks for a model we do not show, such as a second column beside the Menu, build it from these parts.
The rules above are there so it comes out consistent with the rest, not to keep the set closed.`}),`
`,(0,c.jsx)(t.p,{children:`Tell us what you built and what you had to invent for it.`}),`
`,(0,c.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/pages-guidelines-page-structure--docs`,children:`Page structure`}),` – the shell every internal page shares.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/pages-internal-navigation-models--docs`,children:`Navigation Models`}),` – the models above as working pages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` – the component and its props.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};