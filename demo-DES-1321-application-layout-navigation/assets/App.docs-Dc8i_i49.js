import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as p,e as i,P as r,f as s}from"./index-BZO24QCd.js";import{A as c}from"./App.stories-B1bsK5mm.js";import{S as d}from"./StatusBadge-DIRNee3V.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DkUK5zAo.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-j6sYkVOr.js";import"./clsx-B-dksMZM.js";import"./index.esm-C5xRV4Dl.js";import"./App-Cc0gwcCZ.js";import"./Badge-nq-uHbpZ.js";const m=`<!-- @license CC0-1.0 -->

# App
`;/*@license CC0-1.0*/function a(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,`
`,n.jsx(d,{description:"This page is a work in progress and may change in future releases",status:"beta"}),`
`,n.jsx(p,{of:c}),`
`,n.jsx(i,{children:m}),`
`,n.jsx(r,{}),`
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"using-the-app-component",children:"Using the App component"}),`
`,n.jsx(e.p,{children:"The App component provides styling for the children, which are strucured as follows:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<App>
  <SkipLink />
  <PageHeader />
  <AppNavigation />
  <main className="ams-app-content">This is where the main content of your application goes.</main>
  <PageFooter />
</App>
`})}),`
`,n.jsx(e.p,{children:"You will also need to keep track of the open state of the AppNavigation component, which can be done using a state management library or React's built-in state management."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const LayoutContent = ({ children, navExpanded, navItems }: LayoutProps) => {
  const { appNavigationOpen, setAppNavigationOpen } = useLayoutContext();

  return (
    <App>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>

      <PageHeader appnavigation appNavigationExpanded={setAppNavigationOpen}></PageHeader>

      <AppNavigation aria-label="Main" className={clsx(appNavigationOpen && "ams-app-navigation--open")} />
    </App>
  );
};

export const Layout = (props: LayoutProps) => (
  <LayoutProvider>
    <LayoutContent {...props} />
  </LayoutProvider>
);
`})}),`
`,n.jsx(e.p,{children:"The LayoutContext can be set up like this:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { createContext, ReactNode, useContext, useState } from "react";

type LayoutContextType = {
  appNavigationOpen: boolean;
  setAppNavigationOpen: (open: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [appNavigationOpen, setAppNavigationOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ appNavigationOpen, setAppNavigationOpen }}>{children}</LayoutContext.Provider>
  );
};
`})})]})}function b(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{b as default};
