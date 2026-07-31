import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{h as t,u as n}from"./blocks-DDIQjgnz.js";import{t as r}from"./jsx-runtime-Bq1bXGty.js";import{i}from"./react-BnCtKaSV.js";import{n as a,t as o}from"./anatomyLabels-CHj8PodC.js";import{n as s,t as c}from"./HomePage.stories-DzgRWFtT.js";import{n as l,t as u}from"./PageAnatomy-eCGsDali.js";import{t as d}from"./mdx-react-shim-9RzcSRdq.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,`
`,(0,m.jsx)(n,{of:c}),`
`,(0,m.jsx)(t.h1,{id:`home-page`,children:`Home page`}),`
`,(0,m.jsx)(t.p,{children:`The starting page of a website generally provides a broad overview of subjects, common tasks, and recent articles.`}),`
`,(0,m.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,m.jsx)(t.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,m.jsx)(u,{labels:o,of:c}),`
`,(0,m.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,m.jsx)(t.p,{children:`A typical layout for a homepage:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`<Page>
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
`,(0,m.jsxs)(t.ol,{children:[`
`,(0,m.jsx)(t.li,{children:`The Skip Link prevents users from having to pass all preceding navigation links.`}),`
`,(0,m.jsx)(t.li,{children:`The Page container sets a maximum width for the entire page.`}),`
`,(0,m.jsx)(t.li,{children:`The Grid divides the available width into 4, 8, or 12 columns.`}),`
`,(0,m.jsx)(t.li,{children:`The Page Header shows the logo and menus for the website.`}),`
`,(0,m.jsx)(t.li,{children:`The main element wraps everything between Page Header and Page Footer.
It carries an id for the skip link to target.`}),`
`,(0,m.jsx)(t.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,(0,m.jsx)(t.li,{children:`Other components in the main area are laid out on a Grid again.`}),`
`,(0,m.jsx)(t.li,{children:`The Page Footer contains its own Grid.
This allows its background colour to stretch to the Page’s width.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`headings`,children:`Headings`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`If there is no single, most prominent heading for the home page, add a visually hidden level 1 heading with a text like ‘Homepage van (name of the organisation)’.
Assign level 2 and a size of ‘level-1’ to the visible headings.`}),`
`,(0,m.jsx)(t.li,{children:`Use the default size of ‘level-3’ headings in Cards and set their appropriate levels.`}),`
`,(0,m.jsx)(t.li,{children:`Do the same for blocks consisting of Heading, Paragraph, Standalone Link and Link List.`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`In Grids of Cards, use a large vertical gap.`}),`
`]})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=r(),d(),t(),l(),a(),s()}))();export{p as default};