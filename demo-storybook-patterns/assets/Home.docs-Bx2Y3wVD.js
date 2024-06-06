import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as t}from"./index-CRbi4mQH.js";import{M as o}from"./index-C1iK5tJs.js";import{H as a}from"./Home.stories-4EZK3VTh.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B9aTXRSH.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-B8fMqKf-.js";import"./clsx-B-dksMZM.js";import"./index.esm-DTv5ro-2.js";import"./Footer.stories-D6EsZJcE.js";import"./Spotlight-B-_iGEME.js";import"./VisuallyHidden-CgdwkxFN.js";import"./Grid-BRQJwiXa.js";import"./LinkList-DLJKiwba.js";import"./Icon-j44OzEOs.js";import"./Heading-CGpdaMNv.js";import"./getHeadingElement-DiRwFEz7.js";import"./Paragraph-DpVlyIEJ.js";import"./PageMenu-C-9UIlX6.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(i.h1,{id:"home-page",children:"Home Page"}),`
`,e.jsx(i.h2,{id:"layout",children:"Layout"}),`
`,e.jsx(i.p,{children:"A typical layout for a homepage is:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`<SkipLink href="#main">Direct naar inhoud</SkipLink>
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
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"The Skip Link prevents users from having to pass all preceding navigation links."}),`
`,e.jsx(i.li,{children:"The Screen component sets a maximum width for the entire page."}),`
`,e.jsx(i.li,{children:"The Grid divides the available width into 4, 8, or 12 columns."}),`
`,e.jsx(i.li,{children:"The Header shows the logo and menus for the application."}),`
`,e.jsx(i.li,{children:`The main element wraps everything between Header and Footer.
It carries an id for the skip link to target.`}),`
`,e.jsx(i.li,{children:`An Overlap stacks a Search Field on a background Image.
It is as wide as the Grid, hence it is a sibling of it.`}),`
`,e.jsx(i.li,{children:"Other components in the main area are laid out on a Grid again."}),`
`,e.jsx(i.li,{children:`The Footer contains its own Grid.
This allows its background colour to stretch to the Screen’s width.`}),`
`]})]})}function O(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{O as default};
