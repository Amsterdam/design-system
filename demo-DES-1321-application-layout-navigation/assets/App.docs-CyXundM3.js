import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as t,e as p,P as i,f as s}from"./index-CkRSJmwy.js";import{A as c}from"./App.stories-BhWTvE6V.js";import{S as d}from"./StatusBadge-DIRNee3V.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DbnGE9WG.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-lXPMbVWU.js";import"./clsx-B-dksMZM.js";import"./index.esm-BuHuBT3Q.js";import"./Badge-nq-uHbpZ.js";const m=`<!-- @license CC0-1.0 -->

# App
`;/*@license CC0-1.0*/function a(o){const e={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(d,{description:"This page is a work in progress and may change in future releases",status:"beta"}),`
`,n.jsx(t,{of:c}),`
`,n.jsx(p,{children:m}),`
`,n.jsx(i,{}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"using-the-app-component",children:"Using the App component"}),`
`,n.jsx(e.p,{children:"The App component provides styling for the children, which are strucured as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<App>
  <SkipLink />
  <App.Header />
  <AppNavigation />
  <main className="ams-app-content">
    <Grid paddingVertical="x-large">
      <Grid.Cell span="all">This is where the main content of your application goes.</Grid.Cell>
    </Grid>
  </main>
  <PageFooter />
</App>
`})}),`
`,n.jsx(e.h2,{id:"appheader",children:"App.Header"}),`
`,n.jsxs(e.p,{children:[`The App component uses a wrapper of the PageHeader component, it displays a custom menu button to
toggle the AppNavigation component which is controlled via the `,n.jsx(e.code,{children:"AppContext"}),` provider.
For navigation links you can pass an array of `,n.jsx(e.code,{children:"PageHeader.MenuLink"})," components to the ",n.jsx(e.code,{children:"appNavigation"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<App.Header appName="Application" appNavigation={[<PageHeader.MenuLink href="/login">Inloggen</PageHeader.MenuLink>]} />
`})})]})}function P(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{P as default};
