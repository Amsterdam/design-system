import{j as e}from"./iframe-dgEAF-i_.js";import{useMDXComponents as o}from"./index-BLAAk9vz.js";import{M as a,f as l,P as m,h as d,i as s}from"./blocks-CqhUXDPD.js";import{a as r,W as p,b as h,c,d as u,e as g}from"./PageHeader.stories-BSvNNkMy.js";import{D as y}from"./DesignTokensTable-3_z6rOY_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MnO2o9cL.js";import"./useIsAfterBreakpoint-DuJt_epB.js";import"./Grid-CL0cBHbh.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-6USxPGTW.js";import"./Logo-Bc4Z6vEr.js";import"./BorderSample-C-hdHLiF.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-TJlcbOhC.js";import"./SpaceSample-HsUDYSDa.js";const x=`<!-- @license CC0-1.0 -->

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
`,f={"page-header":{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"padding-block":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.grid.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.hint":"Must be the Grid inline padding, to make sure Header and Grid line up.","amsterdam.designsystem.subtype":"space"}},medium:{"padding-inline":{$value:"{ams.grid.medium.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},wide:{"padding-inline":{$value:"{ams.grid.wide.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},"logo-link":{"column-gap":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},"brand-name":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.heading.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"text-wrap":{$value:"{ams.typography.heading.text-wrap}"}},"mega-menu":{"padding-block":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},button:{cursor:{$value:"{ams.cursor.interactive}"},label:{open:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}}}}},menu:{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"row-gap":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},item:{color:{$value:"{ams.links.color}",$type:"color"},"column-gap":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"}}},link:{gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},hover:{"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}}}},navigation:{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"row-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}}},b={ams:f};function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:r}),`
`,e.jsx(l,{children:x}),`
`,e.jsx(m,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-moving-links",children:"With moving links"}),`
`,e.jsxs(n.p,{children:[`Links can move from the inline menu to the collapsible one on narrow windows.
A `,e.jsx(n.code,{children:"MenuLink"}),` is hidden by default on narrow windows.
Use `,e.jsx(n.code,{children:"GridCellNarrowWindowOnly"})," to show that same link in the collapsible menu on narrow windows."]}),`
`,e.jsxs(n.p,{children:["If you do not want the ",e.jsx(n.code,{children:"MenuLink"})," to be hidden, use the ",e.jsx(n.code,{children:"fixed"})," prop."]}),`
`,e.jsx(n.p,{children:"In this example, ‘English’ moves to the collapsible menu, while ‘Zoeken’ does not."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"without-menu-button-on-wide-windows",children:"Without menu button on wide windows"}),`
`,e.jsxs(n.p,{children:[`If you only have a few links, you may not always need a collapsible menu.
Use `,e.jsx(n.code,{children:"noMenuButtonOnWideWindow"}),` to hide the menu button on wide windows.
On narrow windows, the menu button will still be visible,
so do not forget to add the links to the collapsible menu.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"without-menu-button",children:"Without menu button"}),`
`,e.jsxs(n.p,{children:[`In some cases, a collapsible menu might not be necessary.
If the Page Header has no `,e.jsx(n.code,{children:"children"}),`, the menu button will not appear.
Remember to use the `,e.jsx(n.code,{children:"fixed"})," prop if you want the inline menu links to stay in place."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"with-custom-logo-link",children:"With custom logo link"}),`
`,e.jsx(n.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"with-custom-texts",children:"With custom texts"}),`
`,e.jsx(n.p,{children:"The text of the menu button and the accessible navigation description can be customized."}),`
`,e.jsx(s,{of:g}),`
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
`,e.jsx(y,{tokens:b})]})}function N(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{N as default};
