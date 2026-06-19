import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,l as r,m as i}from"./blocks-jkxf_EfV.js";import{t as a}from"./mdx-react-shim-DKf8ZkPQ.js";import{n as o,t as s}from"./HomePage.stories-CfUCTbRZ.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,`
`,(0,u.jsx)(r,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`home-page`,children:`Home page`}),`
`,(0,u.jsx)(t.p,{children:`The starting page of a website generally provides a broad overview of subjects, common tasks, and recent articles.`}),`
`,(0,u.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,u.jsx)(t.p,{children:`A typical layout for a homepage:`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader />
  <main id="inhoud">
    <Overlap>
      <Search />
    </Overlap>
    <Grid>
      <AppComponent1 />
      <AppComponent2 />
      <AppComponent3 />
    </Grid>
  </main>
  <PageFooter>
    <PageFooter.Spotlight>
      <Grid />
    </PageFooter.Spotlight>
    <PageFooter.Menu />
  </PageFooter>
</Page>
`})}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`The Skip Link prevents users from having to pass all preceding navigation links.`}),`
`,(0,u.jsx)(t.li,{children:`The Page container sets a maximum width for the entire page.`}),`
`,(0,u.jsx)(t.li,{children:`The Grid divides the available width into 4, 8, or 12 columns.`}),`
`,(0,u.jsx)(t.li,{children:`The Page Header shows the logo and menus for the website.`}),`
`,(0,u.jsx)(t.li,{children:`The main element wraps everything between Page Header and Page Footer.
It carries an id for the skip link to target.`}),`
`,(0,u.jsx)(t.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,(0,u.jsx)(t.li,{children:`Other components in the main area are laid out on a Grid again.`}),`
`,(0,u.jsx)(t.li,{children:`The Page Footer contains its own Grid.
This allows its background colour to stretch to the Page’s width.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`If there is no single, most prominent heading for the home page, add a visually hidden level 1 heading with a text like ‘Homepage van (name of the organisation)’.
Assign level 2 and a size of ‘level-1’ to the visible headings.`}),`
`,(0,u.jsx)(t.li,{children:`Use the default size of ‘level-3’ headings in Cards and set their appropriate levels.`}),`
`,(0,u.jsx)(t.li,{children:`Do the same for blocks consisting of Heading, Paragraph, Standalone Link and Link List.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`In Grids of Cards, use a large vertical gap.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),i(),o()}))();export{l as default};