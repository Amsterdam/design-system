import{j as e}from"./iframe-DxFJ3SCQ.js";import{useMDXComponents as a}from"./index-CdbzGJT0.js";import{M as s,f as l,P as r,h as d,i as o}from"./blocks-DPfOuimJ.js";import{a as h,W as m,b as c,c as u,d as p,e as g}from"./PageHeader.stories-subHrOVf.js";import{D as f}from"./DesignTokensTable-CKsYRah6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnyXa-QK.js";import"./useIsAfterBreakpoint-D1dnsZY7.js";import"./Grid-MYDwhdvH.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-C8rLjmkz.js";import"./Logo-Bu-3c_8u.js";const x=`<!-- @license CC0-1.0 -->

# Page Header

Displays the City’s logo at the top of every page, and optionally a navigation menu.
Includes the name of the website if it is not the general one.

## Guidelines

- The Page Header must be used on all websites for the City of Amsterdam.
- It includes the logo of the City or the organization, the site title (except for the general website), and a menu with links to commonly used pages.
- The Page Header is important because it conveys our corporate identity and is the first thing people see.
  Using it consistently helps users recognize and trust the website.
- The Page Header is the same on every page of the website, although full-screen pages may hide it, e.g. a video or a map.
- The inline menu can contain a maximum of 5 items.
  The last two will often be ‘Search’ and ‘Menu’.
- An icon can be added to such a menu item if it helps clarify it, e.g. for searching and for logging in and out.
- The 'Menu' button opens a collapsible menu, which has room for more links.
- On narrow windows, links can move from the inline menu to the collapsible one.
- Labels should be short to help the inline menu fit on a single line whenever possible.
- An icon can be added to the end of a link to make its destination easier to guess.
- For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens.
- If the collapsible menu contains [Headings](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs), give them level 2 and a size of ‘level-3’.
- There’s no need to add whitespace to the Grid in the collapsible menu.
  Its container already does this.

## References

- A Page Header is a [landmark](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark_roles) and can be used to group navigation elements.
- [WCAG 3.2.3](https://wcag.com/designers/3-2-3-consistent-navigation/) Consistent Navigation: Navigation menus that appear on multiple pages are consistent.
`,w={"page-header":{"font-family":{value:"{ams.typography.font-family}"},"padding-block":{value:"{ams.space.l}"},"padding-inline":{value:"{ams.grid.padding-inline}",comment:"Must be the Grid inline padding, to make sure Header and Grid line up"},medium:{"padding-inline":{value:"{ams.grid.medium.padding-inline}"}},wide:{"padding-inline":{value:"{ams.grid.wide.padding-inline}"}},"logo-link":{"column-gap":{value:"{ams.space.m}"},"outline-offset":{value:"{ams.focus.outline-offset}"}},"brand-name":{color:{value:"{ams.color.text.default}"},"font-size":{value:"{ams.typography.heading.3.font-size}"},"font-weight":{value:"{ams.typography.heading.font-weight}"},"line-height":{value:"{ams.typography.heading.3.line-height}"},"text-wrap":{value:"{ams.typography.heading.text-wrap}"}},"mega-menu":{"padding-block":{value:"{ams.space.l}"},button:{cursor:{value:"{ams.cursor.interactive}"},label:{open:{"font-weight":{value:"{ams.typography.body-text.bold.font-weight}"}}}}},menu:{"column-gap":{value:"{ams.space.l}"},"row-gap":{value:"{ams.space.xs}"},item:{color:{value:"{ams.links.color}"},"column-gap":{value:"{ams.space.xs}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"padding-block":{value:"{ams.space.xs}"},hover:{color:{value:"{ams.links.hover.color}"}}},link:{gap:{value:"{ams.space.xs}"},"text-decoration-line":{value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{value:"{ams.links.text-decoration-thickness}"},"text-underline-offset":{value:"{ams.links.text-underline-offset}"},hover:{"text-decoration-line":{value:"{ams.links.subtle.hover.text-decoration-line}"}}}},navigation:{"column-gap":{value:"{ams.space.l}"},"row-gap":{value:"{ams.space.l}"}}}},b={ams:w};function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:h}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
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
If the Page Header has no `,e.jsx(n.code,{children:"children"}),`, the menu button will not appear.
Remember to use the `,e.jsx(n.code,{children:"fixed"})," prop if you want the inline menu links to stay in place."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"with-custom-logo-link",children:"With custom logo link"}),`
`,e.jsx(n.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"with-custom-texts",children:"With custom texts"}),`
`,e.jsx(n.p,{children:"The text of the menu button and the accessible navigation description can be customized."}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"with-a-custom-link-component",children:"With a custom link component"}),`
`,e.jsxs(n.p,{children:["Pass a custom link component to the ",e.jsx(n.code,{children:"logoLinkComponent"}),` prop to use your routing library for the logo link.
Here’s an example with the Link component of Next.js:`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { PageHeader } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <PageHeader logoLinkComponent={LinkComponent} />
`})}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:b})]})}function I(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{I as default};
