import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as t}from"./index-CtvziGXy.js";import{H as a}from"./HomePage.stories-DcHdeGFr.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DR8f1FmP.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-DtdRefBQ.js";import"./clsx-B-dksMZM.js";import"./index.esm-BpRbI1Jo.js";import"./Overlap.stories-B-noU2R6.js";import"./SearchField-DdjpQyU6.js";import"./Icon-msbkstIT.js";import"./AspectRatio-Cd0KgYDn.js";import"./Image-CVzrCme5.js";import"./Grid-CurDwTEg.js";import"./config-Ci_1OUBO.js";import"./PageMenu.stories-6uJeB4xF.js";import"./PageMenu-uyrCXmgZ.js";import"./Footer.stories-V3oWcNeI.js";import"./Spotlight-IssvtslZ.js";import"./LinkList-Cds4KX6I.js";import"./Heading-BgL7hu1i.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-BWS5kDPY.js";/*@license CC0-1.0*/function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...i.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"home-page",children:"Home Page"}),`
`,n.jsx(e.h2,{id:"layout",children:"Layout"}),`
`,n.jsx(e.p,{children:"A typical layout for a homepage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<SkipLink href="#main">Direct naar inhoud</SkipLink>
<Screen maxWidth="wide">
  <Grid>
    <Header />
  </Grid>
  <main id="main">
    <Overlap>
      <Search />
    </Overlap>
    <Grid>
      <AppComponent1 />
      <AppComponent2 />
      <AppComponent3 />
    </Grid>
  </main>
  <Footer>
    <Grid />
  </Footer>
</Screen>
`})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,n.jsx(e.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,n.jsx(e.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,n.jsx(e.li,{children:"The Header shows the logo and menus for the application."}),`
`,n.jsx(e.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,n.jsx(e.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,n.jsx(e.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,n.jsx(e.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function _(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{_ as default};
