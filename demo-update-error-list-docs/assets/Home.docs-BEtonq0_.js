import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as t}from"./index-CLRpqg89.js";import{H as a}from"./Home.stories-D9e7Iev0.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DRuqyS4C.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-BU3jxVh8.js";import"./clsx-B-dksMZM.js";import"./index.esm-Dr6r5gIo.js";import"./Overlap.stories-CyLzdqTb.js";import"./SearchField-BywiADXF.js";import"./Icon-j44OzEOs.js";import"./AspectRatio-DxP_kpbd.js";import"./Image-Bf5zYcta.js";import"./Grid-BRQJwiXa.js";import"./SkipLink.stories-B7I4lLCA.js";import"./Screen-nsUNRErq.js";import"./Paragraph-DpVlyIEJ.js";import"./AppHeader-BOUfgISl.js";import"./PageMenu.stories-CI-pLzqM.js";import"./PageMenu-C-9UIlX6.js";import"./Footer.stories-Ci_2UQH1.js";import"./Spotlight-DxKcSLEi.js";import"./LinkList-s1wDkkgS.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";/*@license CC0-1.0*/function r(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{of:a}),`
`,n.jsx(i.h1,{id:"home-page",children:"Home Page"}),`
`,n.jsx(i.h2,{id:"layout",children:"Layout"}),`
`,n.jsx(i.p,{children:"A typical layout for a homepage:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<SkipLink href="#main">Direct naar inhoud</SkipLink>
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
`,n.jsxs(i.ol,{children:[`
`,n.jsx(i.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,n.jsx(i.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,n.jsx(i.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,n.jsx(i.li,{children:"The Header shows the logo and menus for the application."}),`
`,n.jsx(i.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,n.jsx(i.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,n.jsx(i.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,n.jsx(i.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function N(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{N as default};
