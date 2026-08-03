import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./anatomyLabels-BTleY0Xv.js";import{n as u,t as d}from"./HomePage.stories-DdUCBQp9.js";import{n as f,t as p}from"./PageAnatomy-B0GvMK_D.js";function m(e){let n={code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(p,{labels:l,of:d}),`
`,(0,g.jsx)(n.h2,{id:`layout`,children:`Layout`}),`
`,(0,g.jsx)(n.p,{children:`A typical layout for a homepage:`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-tsx`,children:`<Page>
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
`,(0,g.jsxs)(n.ol,{children:[`
`,(0,g.jsx)(n.li,{children:`The Skip Link prevents users from having to pass all preceding navigation links.`}),`
`,(0,g.jsx)(n.li,{children:`The Page container sets a maximum width for the entire page.`}),`
`,(0,g.jsx)(n.li,{children:`The Grid divides the available width into 4, 8, or 12 columns.`}),`
`,(0,g.jsx)(n.li,{children:`The Page Header shows the logo and menus for the website.`}),`
`,(0,g.jsx)(n.li,{children:`The main element wraps everything between Page Header and Page Footer.
It carries an id for the skip link to target.`}),`
`,(0,g.jsx)(n.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,(0,g.jsx)(n.li,{children:`Other components in the main area are laid out on a Grid again.`}),`
`,(0,g.jsx)(n.li,{children:`The Page Footer contains its own Grid.
This allows its background colour to stretch to the Page’s width.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`headings`,children:`Headings`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`If there is no single, most prominent heading for the home page, add a visually hidden level 1 heading with a text like ‘Homepage van (name of the organisation)’.
Assign level 2 and a size of ‘level-1’ to the visible headings.`}),`
`,(0,g.jsx)(n.li,{children:`Use the default size of ‘level-3’ headings in Cards and set their appropriate levels.`}),`
`,(0,g.jsx)(n.li,{children:`Do the same for blocks consisting of Heading, Paragraph, Standalone Link and Link List.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`In Grids of Cards, use a large vertical gap.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),f(),c(),u()})))()}_();export{h as default};