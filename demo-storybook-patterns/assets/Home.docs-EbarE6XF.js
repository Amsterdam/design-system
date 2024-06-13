import{j as i}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as t}from"./index-CRbi4mQH.js";import{M as o}from"./index-8pFNm1r4.js";import{H as a}from"./Home.stories-Cwz99QkQ.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-8YKzsVWg.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-D0TyGo1s.js";import"./clsx-B-dksMZM.js";import"./index.esm-Dr6r5gIo.js";import"./Overlap.stories-_GdD6m5P.js";import"./SearchField-CInIFeRk.js";import"./VisuallyHidden-CgdwkxFN.js";import"./Icon-j44OzEOs.js";import"./AspectRatio-DxP_kpbd.js";import"./Image-Bf5zYcta.js";import"./Grid-BRQJwiXa.js";import"./SkipLink.stories-pfcoplYa.js";import"./Screen-nsUNRErq.js";import"./Paragraph-DpVlyIEJ.js";import"./AppHeader-B8P9aCGM.js";import"./PageMenu.stories-C2vX01eL.js";import"./PageMenu-C-9UIlX6.js";import"./Footer.stories-DgYEi-d3.js";import"./Spotlight-DxKcSLEi.js";import"./LinkList-s1wDkkgS.js";import"./Row-BFZhQNgN.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";/*@license CC0-1.0*/function r(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...e.components};return i.jsxs(i.Fragment,{children:[`
`,`
`,i.jsx(o,{of:a}),`
`,i.jsx(n.h1,{id:"home-page",children:"Home Page"}),`
`,i.jsx(n.h2,{id:"layout",children:"Layout"}),`
`,i.jsx(n.p,{children:"A typical layout for a homepage is:"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<SkipLink href="#main">Direct naar inhoud</SkipLink>
<Screen maxWidth="wide">
  <Grid>
    <Header />
  </Grid>
  <main id="main">
    <Overlap>
      <Search />
    </Overlap>
    <Grid>
      <MostVisited />
    </Grid>
  </main>
  <Footer>
    <Grid />
  </Footer>
</Screen>
`})}),`
`,i.jsxs(n.ol,{children:[`
`,i.jsx(n.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,i.jsx(n.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,i.jsx(n.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,i.jsx(n.li,{children:"The Header shows the logo and menus for the application."}),`
`,i.jsx(n.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,i.jsx(n.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,i.jsx(n.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,i.jsx(n.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function R(e={}){const{wrapper:n}={...t(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(r,{...e})}):r(e)}export{R as default};
