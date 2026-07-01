import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-DW_xZxqu.js";import{n as u,t as d}from"./DesignTokensTable-BFnchdxN.js";import{t as f}from"./mdx-react-shim-C1lc2DdL.js";import{WithCustomLogoLink as p,WithCustomTexts as m,WithDifferentBranding as h,WithMovingLinks as g,WithShortBrandName as _,WithoutMenuButton as v,WithoutMenuButtonOnWideWindow as y,n as b,t as x}from"./PageHeader.stories-DfpW4T2N.js";var S,C,w=e((()=>{S={"page-header":{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.grid.padding-inline}`,$extensions:{"nl.amsterdam.hint":`Must be the Grid inline padding, to make sure Header and Grid line up.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-inline":{$deprecated:"Use `ams.page-header.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.page-header.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},wide:{"padding-inline":{$deprecated:"Use `ams.page-header.vi-wide.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.page-header.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-medium":{"padding-inline":{$value:`{ams.grid.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-wide":{"padding-inline":{$value:`{ams.grid.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"logo-link":{"column-gap":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"brand-name":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}}},"mega-menu":{"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},label:{open:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`},$deprecated:`We no longer make the button label bold when the mega menu is open. Will be removed on or after 2026-09-13.`}}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},menu:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`},$deprecated:"Use `ams.page-header.menu.link.color` instead. Will be removed on or after 2026-09-13."},"column-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}},navigation:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(r,{of:x}),`
`,(0,D.jsx)(s,{}),`
`,(0,D.jsx)(l,{of:x}),`
`,(0,D.jsx)(i,{}),`
`,(0,D.jsx)(c,{}),`
`,(0,D.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,D.jsx)(t.p,{children:`All our websites must start with the Page Header.
Consistent use helps people identify, navigate, and trust our digital channels.`}),`
`,(0,D.jsx)(t.p,{children:`The Page Header is the same on every page of the website, although full-screen pages (e.g. a video or map) may hide it.`}),`
`,(0,D.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsx)(t.p,{children:`The Page Header must show the appropriate logo and brand name.
The navigation structure can be configured freely.`}),`
`,(0,D.jsx)(t.h4,{id:`logo`,children:`Logo`}),`
`,(0,D.jsxs)(t.p,{children:[`Use the correct logo: our main one, one for a sub-brand, or the English variation.
See `,(0,D.jsx)(t.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),` documentation for details.`]}),`
`,(0,D.jsx)(t.p,{children:`The logo links to the homepage of the site it appears on.
This is a common convention that helps people navigate back to the homepage from any page of the website.`}),`
`,(0,D.jsx)(t.p,{children:`For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens.`}),`
`,(0,D.jsx)(t.h4,{id:`brand-name`,children:`Brand name`}),`
`,(0,D.jsx)(t.p,{children:`The City’s main website or that of a sub-brand must not display a brand name, as the logo already includes a wordmark.`}),`
`,(0,D.jsx)(t.p,{children:`All other websites must display the name of the brand or service next to the logo.
This helps people understand they are on a different website and that its navigation is separate from the main one.`}),`
`,(0,D.jsx)(t.p,{children:`An abbreviated brand name can be shown in narrow or medium-wide windows if the full name does not fit.`}),`
`,(0,D.jsx)(t.h4,{id:`inline-menu`,children:`Inline menu`}),`
`,(0,D.jsxs)(t.p,{children:[`The menu to the right can contain a maximum of 5 items, including the menu button.
Labels should be short to help the menu fit on a single line whenever possible.
An `,(0,D.jsx)(t.a,{href:`/docs/brand-assets-icons--docs`,children:`icon`}),` can be added to a menu item if it helps clarify it.
Links move into the collapsible menu on narrow windows, unless they have the `,(0,D.jsx)(t.code,{children:`fixed`}),` prop.`]}),`
`,(0,D.jsx)(t.h4,{id:`menu-button`,children:`Menu button`}),`
`,(0,D.jsxs)(t.p,{children:[`The ‘Menu’ button opens the collapsible menu.
It does not appear when the Page Header has no child content.
Use `,(0,D.jsx)(t.code,{children:`noMenuButtonOnWideWindow`}),` to hide the menu button on wide windows when there are only a few links.`]}),`
`,(0,D.jsx)(t.h4,{id:`collapsible-menu`,children:`Collapsible menu`}),`
`,(0,D.jsxs)(t.p,{children:[`This menu gets accessed through the menu button and offers much room for more links.
Use the `,(0,D.jsx)(t.code,{children:`GridCellNarrowWindowOnly`}),` subcomponent to contain links from the inline menu that disappear in narrow windows.
Don’t add whitespace to the Grid in the collapsible menu – its container already provides this.`]}),`
`,(0,D.jsxs)(t.p,{children:[`If the collapsible menu contains `,(0,D.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Headings`}),`, give them level 2 and a size of ‘level-3’.`]}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`with-moving-links`,children:`With moving links`}),`
`,(0,D.jsxs)(t.p,{children:[`Links can move from the inline menu to the collapsible one on narrow windows.
A `,(0,D.jsx)(t.code,{children:`MenuLink`}),` is hidden by default on narrow windows.
Use `,(0,D.jsx)(t.code,{children:`GridCellNarrowWindowOnly`}),` to show that same link in the collapsible menu on narrow windows.`]}),`
`,(0,D.jsxs)(t.p,{children:[`If you do not want the `,(0,D.jsx)(t.code,{children:`MenuLink`}),` to be hidden, use the `,(0,D.jsx)(t.code,{children:`fixed`}),` prop.`]}),`
`,(0,D.jsx)(t.p,{children:`In this example, ‘English’ moves to the collapsible menu, while ‘Zoeken’ does not.`}),`
`,(0,D.jsx)(o,{of:g}),`
`,(0,D.jsx)(t.h3,{id:`without-menu-button-on-wide-windows`,children:`Without menu button on wide windows`}),`
`,(0,D.jsxs)(t.p,{children:[`If you only have a few links, you may not always need a collapsible menu.
Use `,(0,D.jsx)(t.code,{children:`noMenuButtonOnWideWindow`}),` to hide the menu button on wide windows.
On narrow windows, the menu button will still be visible,
so do not forget to add the links to the collapsible menu.`]}),`
`,(0,D.jsx)(o,{of:y}),`
`,(0,D.jsx)(t.h3,{id:`without-menu-button`,children:`Without menu button`}),`
`,(0,D.jsxs)(t.p,{children:[`In some cases, a collapsible menu might not be necessary.
If the Page Header has no `,(0,D.jsx)(t.code,{children:`children`}),`, the menu button will not appear.
Remember to use the `,(0,D.jsx)(t.code,{children:`fixed`}),` prop if you want the inline menu links to stay in place.`]}),`
`,(0,D.jsx)(o,{of:v}),`
`,(0,D.jsx)(t.h3,{id:`with-short-brand-name`,children:`With short brand name`}),`
`,(0,D.jsx)(t.p,{children:`For brand names that may not fit in a narrow window, a shorter form can be given.
Make sure the abbreviation is widely understood.`}),`
`,(0,D.jsx)(o,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`with-custom-logo-link`,children:`With custom logo link`}),`
`,(0,D.jsx)(t.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,(0,D.jsx)(o,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`with-custom-texts`,children:`With custom texts`}),`
`,(0,D.jsx)(t.p,{children:`The visible text of the menu button, its accessible texts and the accessible navigation description can be customized.`}),`
`,(0,D.jsx)(o,{of:m}),`
`,(0,D.jsx)(t.h3,{id:`with-custom-link-component`,children:`With custom link component`}),`
`,(0,D.jsxs)(t.p,{children:[`Pass a custom link component to the `,(0,D.jsx)(t.code,{children:`logoLinkComponent`}),` prop to use your routing library for the logo link.
Here’s an example with the Link component of Next.js:`]}),`
`,`
`,(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`import { PageHeader } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <PageHeader logoLinkComponent={LinkComponent} />
`})}),`
`,(0,D.jsx)(t.h3,{id:`with-different-branding`,children:`With different branding`}),`
`,(0,D.jsxs)(t.p,{children:[`Websites for the City of Amsterdam `,(0,D.jsx)(t.strong,{children:`must`}),` use one of our own logos and our menu icon.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Other organisations using this component can provide elements to display their own brand.
The image for the logo must be an svg, and its label should be ‘name of the organisation + logo’.
Set the appropriate values for the sizing tokens of `,(0,D.jsx)(t.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),`.
A different icon for the menu button must be an svg as well.`]}),`
`,(0,D.jsx)(o,{of:h}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – contains the Page Header.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` – sits at the bottom of the Page.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),` – the logo shown in the Page Header.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(d,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),f(),a(),u(),w(),b()}))();export{E as default};