import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-1Ha5aU2j.js";import{M as a,e as l,P as r,f as h,h as o}from"./index-uCwB1v17.js";import{H as d,W as m,a as c,b as u,c as p,d as w}from"./Header.stories-DlbglviQ.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ulVToHib.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-HS628HCY.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./Grid-ZcS4-HR7.js";import"./paddingClasses-C5gheHLv.js";import"./Logo-DAtY6oNF.js";import"./Heading-YmEnH81o.js";import"./getHeadingTag-Dv1eMqvl.js";import"./Icon-plsGHcLz.js";const x=`<!-- @license CC0-1.0 -->

# Header

Displays the City’s logo at the top of every page, and optionally a navigation menu.
Includes the name of the application if it is not the general website.

## Guidelines

- The Header must be used on all websites and applications for the City of Amsterdam.
- It includes the logo of the City or the organization, the site title (except for the general website), and a menu with links to commonly used pages.
- The Header is important because it conveys our corporate identity and is the first thing people see.
  Using it consistently helps users recognize and trust the website.
- The Header is the same on every page of the application, although full-screen pages may hide it, e.g. a video or a map.
- The inline menu can contain a maximum of 5 items.
  The last two will often be ‘Search’ and ‘Menu’.
- The 'Menu' button opens a collapsible menu, which has room for more links.
- On narrow windows, links can move from the inline menu to the collapsible one.
- Labels should be short to help the inline menu fit on a single line whenever possible.
- An icon can be added to the end of a link to make its destination easier to guess.

## References

- A Header is a [landmark](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark_roles) and can be used to group navigation elements.
- [WCAG 3.2.3](https://wcag.com/designers/3-2-3-consistent-navigation/) Consistent Navigation: Navigation menus that appear on multiple pages are consistent.
`;/*@license CC0-1.0*/function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(r,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-moving-links",children:"With moving links"}),`
`,e.jsxs(n.p,{children:[`Links can move from the inline menu to the collapsible one on narrow windows.
A `,e.jsx(n.code,{children:"MenuLink"}),` is hidden by default on narrow windows.
Use `,e.jsx(n.code,{children:"GridCellNarrowWindowOnly"})," to show that same link in the collapsible menu on narrow windows."]}),`
`,e.jsxs(n.p,{children:["If you do not want the ",e.jsx(n.code,{children:"MenuLink"})," to be hidden, use the ",e.jsx(n.code,{children:"fixed"})," prop."]}),`
`,e.jsx(n.p,{children:"In this example, ‘English’ moves to the collapsible menu, while ‘Zoeken’ does not."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"without-menu-button-on-wide-windows",children:"Without menu button on wide windows"}),`
`,e.jsxs(n.p,{children:[`If you only have a few links, you may not always need a collapsible menu.
Use `,e.jsx(n.code,{children:"noMenuButtonOnWideWindow"}),` to hide the menu button on wide windows.
On narrow windows, the menu button will still be visible,
so do not forget to add the links to the collapsible menu.`]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"without-menu-button",children:"Without menu button"}),`
`,e.jsxs(n.p,{children:[`In some cases, a collapsible menu might not be necessary.
If the Header has no `,e.jsx(n.code,{children:"children"}),`, the menu button will not appear.
Remember to use the `,e.jsx(n.code,{children:"fixed"})," prop if you want the inline menu links to stay in place."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"with-custom-logo-link",children:"With custom logo link"}),`
`,e.jsx(n.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself.`}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"with-custom-texts",children:"With custom texts"}),`
`,e.jsx(n.p,{children:"The text of the menu button and the accessible navigation description can be customized."}),`
`,e.jsx(o,{of:w})]})}function B(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{B as default};
