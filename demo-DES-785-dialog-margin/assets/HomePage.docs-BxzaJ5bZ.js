import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as t}from"./index-DvCRlHwv.js";import{H as a}from"./HomePage.stories-B--EHawi.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DeUQe5kp.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-D-8Z0FST.js";import"./clsx-B-dksMZM.js";import"./index.esm-Dr6r5gIo.js";import"./Overlap.stories-BEeerAj3.js";import"./SearchField-BywiADXF.js";import"./Icon-j44OzEOs.js";import"./AspectRatio-DxP_kpbd.js";import"./Image-Bf5zYcta.js";import"./Grid-C20C3THO.js";import"./config-DikISZ6Z.js";import"./PageMenu.stories-CI-pLzqM.js";import"./PageMenu-C-9UIlX6.js";import"./Footer.stories-s-4_HAfU.js";import"./Spotlight-CscDyz0Q.js";import"./LinkList-s1wDkkgS.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-DpVlyIEJ.js";/*@license CC0-1.0*/function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...i.components};return n.jsxs(n.Fragment,{children:[`
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
