import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as p}from"./index-CxbY7dAs.js";import{M as r,e as i,P as a,f as s}from"./index-Bw0oe55n.js";import{A as c}from"./App.stories-CiGUSsGw.js";import{S as m}from"./StatusBadge-DIRNee3V.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CyeIshz9.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-DiS55S8D.js";import"./clsx-B-dksMZM.js";import"./index.esm-C5xRV4Dl.js";import"./App-a4fwV3aY.js";import"./PageHeader-Cjx9ZPCH.js";import"./Grid-BHIDbP7U.js";import"./paddingClasses-BhwbQ8nP.js";import"./Icon-BBW_x4VP.js";import"./Logo-BXVw7-MZ.js";import"./Badge-nq-uHbpZ.js";const d=`<!-- @license CC0-1.0 -->

# App
`;/*@license CC0-1.0*/function t(o){const e={code:"code",h2:"h2",p:"p",pre:"pre",...p(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(m,{description:"This page is a work in progress and may change in future releases",status:"beta"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(i,{children:d}),`
`,n.jsx(a,{}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"using-the-app-component",children:"Using the App component"}),`
`,n.jsx(e.p,{children:"The App component provides styling for the children, which are strucured as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<App>
  <SkipLink />
  <App.Header />
  <AppNavigation />
  <main className="ams-app-content">This is where the main content of your application goes.</main>
  <PageFooter />
</App>
`})}),`
`,n.jsx(e.h2,{id:"appheader",children:"App.Header"}),`
`,n.jsxs(e.p,{children:[`The App component uses a wrapper of the PageHeader component, it displays a custom menu button to
toggle the AppNavigation component which is controlled via the `,n.jsx(e.code,{children:"AppContext"}),` provider.
For navigation links you can pass an array of `,n.jsx(e.code,{children:"PageHeader.MenuLink"})," components to the ",n.jsx(e.code,{children:"appNavigation"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<App.Header appName="Application" appNavigation={[<PageHeader.MenuLink href="/login">Inloggen</PageHeader.MenuLink>]} />
`})})]})}function F(o={}){const{wrapper:e}={...p(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{F as default};
