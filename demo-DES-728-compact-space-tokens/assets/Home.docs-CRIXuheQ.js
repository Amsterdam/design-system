import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as t,P as a}from"./index-BVRM6LFZ.js";import{H as s}from"./Home.stories-JfxlFWGh.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Ct84x3Gn.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-in71gV51.js";import"./clsx-B-dksMZM.js";import"./index.esm-BmSTY5-j.js";import"./Overlap.stories-CSOBqSs9.js";import"./SearchField-CoIfFc1B.js";import"./Icon-j44OzEOs.js";import"./AspectRatio-CtAqoBrq.js";import"./Image-Bf5zYcta.js";import"./Grid-C20C3THO.js";import"./meta-DQBbhJbE.js";import"./PageMenu.stories-CIBTxqzb.js";import"./PageMenu-C-9UIlX6.js";import"./Footer.stories-DW2uInYy.js";import"./Spotlight-CscDyz0Q.js";import"./LinkList-B-fKfq07.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-DpVlyIEJ.js";/*@license CC0-1.0*/function r(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(t,{of:s}),`
`,n.jsx(i.h1,{id:"home-page",children:"Home Page"}),`
`,n.jsx(a,{}),`
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
`]})]})}function _(e={}){const{wrapper:i}={...o(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{_ as default};