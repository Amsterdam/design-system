import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as a,e as r,P as l,f as h,h as t}from"./index-Bcgz9_u-.js";import{P as d,W as m,a as c,b as p,c as u,d as w}from"./PageHeader.stories-D0M3C2N8.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dafr5fSX.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-CMapxPh_.js";import"./clsx-B-dksMZM.js";import"./index.esm-D3RaMjqb.js";import"./Grid-BHIDbP7U.js";import"./paddingClasses-BhwbQ8nP.js";import"./Icon-Pril9caF.js";import"./Logo-BXVw7-MZ.js";const x=`<!-- @license CC0-1.0 -->

# Page Header

Displays the City’s logo at the top of every page, and optionally a navigation menu.
Includes the name of the application if it is not the general website.

## Guidelines

- The Page Header must be used on all websites and applications for the City of Amsterdam.
- It includes the logo of the City or the organization, the site title (except for the general website), and a menu with links to commonly used pages.
- The Page Header is important because it conveys our corporate identity and is the first thing people see.
  Using it consistently helps users recognize and trust the website.
- The Page Header is the same on every page of the application, although full-screen pages may hide it, e.g. a video or a map.
- The inline menu can contain a maximum of 5 items.
  The last two will often be ‘Search’ and ‘Menu’.
- The 'Menu' button opens a collapsible menu, which has room for more links.
- On narrow windows, links can move from the inline menu to the collapsible one.
- Labels should be short to help the inline menu fit on a single line whenever possible.
- An icon can be added to the end of a link to make its destination easier to guess.
- For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens.

## References

- A Page Header is a [landmark](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark_roles) and can be used to group navigation elements.
- [WCAG 3.2.3](https://wcag.com/designers/3-2-3-consistent-navigation/) Consistent Navigation: Navigation menus that appear on multiple pages are consistent.
`;/*@license CC0-1.0*/function i(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-moving-links",children:"With moving links"}),`
`,e.jsxs(n.p,{children:[`Links can move from the inline menu to the collapsible one on narrow windows.
A `,e.jsx(n.code,{children:"MenuLink"}),` is hidden by default on narrow windows.
Use `,e.jsx(n.code,{children:"GridCellNarrowWindowOnly"})," to show that same link in the collapsible menu on narrow windows."]}),`
`,e.jsxs(n.p,{children:["If you do not want the ",e.jsx(n.code,{children:"MenuLink"})," to be hidden, use the ",e.jsx(n.code,{children:"fixed"})," prop."]}),`
`,e.jsx(n.p,{children:"In this example, ‘English’ moves to the collapsible menu, while ‘Zoeken’ does not."}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"without-menu-button-on-wide-windows",children:"Without menu button on wide windows"}),`
`,e.jsxs(n.p,{children:[`If you only have a few links, you may not always need a collapsible menu.
Use `,e.jsx(n.code,{children:"noMenuButtonOnWideWindow"}),` to hide the menu button on wide windows.
On narrow windows, the menu button will still be visible,
so do not forget to add the links to the collapsible menu.`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h3,{id:"without-menu-button",children:"Without menu button"}),`
`,e.jsxs(n.p,{children:[`In some cases, a collapsible menu might not be necessary.
If the Page Header has no `,e.jsx(n.code,{children:"children"}),`, the menu button will not appear.
Remember to use the `,e.jsx(n.code,{children:"fixed"})," prop if you want the inline menu links to stay in place."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"with-custom-logo-link",children:"With custom logo link"}),`
`,e.jsx(n.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"with-custom-texts",children:"With custom texts"}),`
`,e.jsx(n.p,{children:"The text of the menu button and the accessible navigation description can be customized."}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h3,{id:"with-a-custom-link-component",children:"With a custom link component"}),`
`,e.jsxs(n.p,{children:["Pass a custom link component to the ",e.jsx(n.code,{children:"logoLinkComponent"}),` prop to use your application’s routing library for the logo link.
Here’s an example with the Link component of Next.js:`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { PageHeader } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <PageHeader logoLinkComponent={LinkComponent} />
`})})]})}function E(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{E as default};
