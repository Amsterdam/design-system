import{j as e}from"./iframe-BER7bSZ3.js";import{useMDXComponents as i}from"./index-BtLczzPr.js";import{M as a,e as l,f as r,h as d,i as t}from"./blocks-CJChmwxH.js";import{a as h,W as m,b as c,c as p,d as u,e as g,f as x,g as f}from"./PageHeader.stories-CoyKr8ag.js";import{D as b}from"./DesignTokensTable-BVPVFiWc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dghf3X2J.js";import"./ExampleLogo-BGOc5MWV.js";import"./useViewportHasMinWidth-JicHeymJ.js";import"./Grid-CVX7NLNW.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-Bb_Cox6y.js";import"./BorderSample-d61-1XZi.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-Dkgb2hZw.js";import"./ColorSample-CeusogLI.js";import"./SpaceSample-BueiKdAB.js";import"./TypographySample-CYquL5sD.js";const y=`<!-- @license CC0-1.0 -->

# Page Header

Conveys the origin and authority of the website through a logo and an optional name.
Can serve as a consistent starting point for navigation.

## Guidelines

- All our websites must start with the Page Header.
  Consistent use helps people identify, navigate, and trust our digital channels.
- The Page Header must show the appropriate logo and brand name.
  The navigation structure can be configured freely.
- The Page Header is the same on every page of the website, although full-screen pages (e.g. a video or map) may hide it.
- Continue below to the [guidelines for elements](#guidelines-for-elements).
`,w={"page-header":{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"padding-block":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.grid.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.hint":"Must be the Grid inline padding, to make sure Header and Grid line up.","nl.amsterdam.subtype":"space"}},medium:{"padding-inline":{$value:"{ams.grid.medium.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},wide:{"padding-inline":{$value:"{ams.grid.wide.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},"logo-link":{"column-gap":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},"brand-name":{color:{$value:"{ams.color.text.default}",$type:"color"},"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.heading.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"text-wrap":{$value:"{ams.typography.heading.text-wrap}"}},"mega-menu":{"padding-block":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},button:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},label:{open:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight",$deprecated:"We no longer make the button label bold when the mega menu is open. Will be removed in release 6.0.0."}}},"padding-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{"background-color":{$value:"{ams.color.interactive.hover}",$type:"color"},color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},menu:{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"row-gap":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},item:{color:{$deprecated:"Use `ams.page-header.menu.link.color` instead.",$value:"{ams.links.color}",$type:"color"},"column-gap":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"}}},link:{color:{$value:"{ams.links.color}",$type:"color"},gap:{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}}}},navigation:{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"row-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}}}},$={ams:w};function s(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(l,{children:y}),`
`,e.jsx(r,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"guidelines-for-elements",children:"Guidelines for elements"}),`
`,e.jsx(n.h3,{id:"logo",children:"Logo"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Use the correct logo: our main one, one for a sub-brand, or the English variation.
See `,e.jsx(n.a,{href:"/docs/components-media-logo--docs",children:"Logo"})," documentation for details."]}),`
`,e.jsx(n.li,{children:`The logo links to the homepage of the site it appears on.
This is a common convention that helps people navigate back to the homepage from any page of the website.`}),`
`,e.jsx(n.li,{children:"For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens."}),`
`]}),`
`,e.jsx(n.h3,{id:"brand-name",children:"Brand name"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The City’s main website or that of a sub-brand must not display a brand name, as the logo already includes a wordmark."}),`
`,e.jsx(n.li,{children:`All other websites must display the name of the brand or service next to the logo.
This helps people understand they are on a different website and that its navigation is separate from the main one.`}),`
`,e.jsx(n.li,{children:"An abbreviated brand name can be shown in narrow or medium-wide windows if the full name does not fit."}),`
`]}),`
`,e.jsx(n.h3,{id:"inline-menu",children:"Inline menu"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The menu to the right can contain a maximum of 5 items, including the menu button."}),`
`,e.jsx(n.li,{children:"Labels should be short to help the menu fit on a single line whenever possible."}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.a,{href:"/docs/brand-assets-icons--docs",children:"icon"})," can be added to a menu item if it helps clarify it."]}),`
`,e.jsxs(n.li,{children:["Links move into the collapsible menu on narrow windows, unless they have the ",e.jsx(n.code,{children:"fixed"})," prop."]}),`
`]}),`
`,e.jsx(n.h3,{id:"menu-button",children:"Menu button"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`The ‘Menu’ button opens the collapsible menu.
It does not appear when the Page Header has no child content.`}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"noMenuButtonOnWideWindow"})," to hide the menu button on wide windows when there are only a few links."]}),`
`]}),`
`,e.jsx(n.h3,{id:"collapsible-menu",children:"Collapsible menu"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This menu gets accessed through the menu button and offers much room for more links."}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"GridCellNarrowWindowOnly"})," subcomponent to contain links from the inline menu that disappear in narrow windows."]}),`
`,e.jsxs(n.li,{children:["If the collapsible menu contains ",e.jsx(n.a,{href:"https://designsystem.amsterdam/?path=/docs/components-text-heading--docs",rel:"nofollow",children:"Headings"}),", give them level 2 and a size of ‘level-3’."]}),`
`,e.jsx(n.li,{children:"Don’t add whitespace to the Grid in the collapsible menu — its container already provides this."}),`
`]}),`
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
`,e.jsx(n.h3,{id:"with-short-brand-name",children:"With short brand name"}),`
`,e.jsx(n.p,{children:`For brand names that may not fit in a narrow window, a shorter form can be given.
Make sure the abbreviation is widely understood.`}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"with-custom-logo-link",children:"With custom logo link"}),`
`,e.jsx(n.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h3,{id:"with-custom-texts",children:"With custom texts"}),`
`,e.jsx(n.p,{children:"The visible text of the menu button, its accessible texts and the accessible navigation description can be customized."}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"with-custom-link-component",children:"With custom link component"}),`
`,e.jsxs(n.p,{children:["Pass a custom link component to the ",e.jsx(n.code,{children:"logoLinkComponent"}),` prop to use your routing library for the logo link.
Here’s an example with the Link component of Next.js:`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { PageHeader } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <PageHeader logoLinkComponent={LinkComponent} />
`})}),`
`,e.jsx(n.h3,{id:"with-different-branding",children:"With different branding"}),`
`,e.jsxs(n.p,{children:["Websites for the City of Amsterdam ",e.jsx(n.strong,{children:"must"})," use one of our own logos and our menu icon."]}),`
`,e.jsxs(n.p,{children:[`Other organisations using this component can provide elements to display their own brand.
The image for the logo must be an svg, and its label should be ‘name of the organisation + logo’.
Set the appropriate values for the sizing tokens of `,e.jsx(n.a,{href:"/docs/components-media-logo--docs",children:"Logo"}),`.
A different icon for the menu button must be an svg as well.`]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(b,{tokens:$})]})}function E(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{E as default};
