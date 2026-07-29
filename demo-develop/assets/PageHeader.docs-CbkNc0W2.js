import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CqryReaq.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-DnAiMGqD.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{WithCustomLogoLink as p,WithCustomTexts as m,WithDifferentBranding as h,WithMovingLinks as g,WithShortBrandName as _,WithoutMenuButton as v,WithoutMenuButtonOnWideWindow as y,n as b,t as x}from"./PageHeader.stories-S7S5qwYf.js";import{MenuLink as S,t as C}from"./PageHeaderMenuLink.stories-DUa4wEt3.js";var w,T,E=e((()=>{w={"page-header":{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.grid.padding-inline}`,$extensions:{"nl.amsterdam.hint":`Must be the Grid inline padding, to make sure Header and Grid line up.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-inline":{$deprecated:"Use `ams.page-header.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.page-header.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},wide:{"padding-inline":{$deprecated:"Use `ams.page-header.vi-wide.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`{ams.page-header.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-medium":{"padding-inline":{$value:`{ams.grid.vi-medium.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"vi-wide":{"padding-inline":{$value:`{ams.grid.vi-wide.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"logo-link":{"column-gap":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"brand-name":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}}},"mega-menu":{"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},button:{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`{ams.border.radius}`,$extensions:{"nl.amsterdam.type":`borderRadius`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},label:{open:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`},$deprecated:`We no longer make the button label bold when the mega menu is open. Will be removed on or after 2026-09-13.`}}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},menu:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`},$deprecated:"Use `ams.page-header.menu.link.color` instead. Will be removed on or after 2026-09-13."},"column-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"font-family":{$deprecated:"Use `ams.page-header.font-family` instead, which the menu items inherit. Will be removed on or after 2027-01-21.",$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}},navigation:{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},T={ams:w}}));function D(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[`
`,`
`,`
`,`
`,(0,k.jsx)(s,{of:x}),`
`,(0,k.jsx)(o,{}),`
`,(0,k.jsx)(t,{of:x}),`
`,(0,k.jsx)(n,{}),`
`,(0,k.jsx)(i,{}),`
`,(0,k.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,k.jsx)(r.p,{children:`The Grid Cell Narrow Window Only subcomponent accepts all Grid Cell props and is only displayed in narrow windows.
The primary example uses it to repeat a menu link below the header.`}),`
`,(0,k.jsx)(r.h3,{id:`menu-link`,children:`Menu Link`}),`
`,(0,k.jsxs)(r.p,{children:[`Navigates to an important page.
Set `,(0,k.jsx)(r.code,{children:`fixed`}),` to keep the link visible next to the menu button in narrow windows, and add an `,(0,k.jsx)(r.code,{children:`icon`}),` to display after the text.`]}),`
`,(0,k.jsx)(a,{of:S}),`
`,(0,k.jsx)(i,{of:S}),`
`,(0,k.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,k.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,k.jsx)(r.p,{children:`All our websites must start with the Page Header.
Consistent use helps people identify, navigate, and trust our digital channels.`}),`
`,(0,k.jsx)(r.p,{children:`The Page Header is the same on every page of the website, although full-screen pages (e.g. a video or map) may hide it.`}),`
`,(0,k.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,k.jsx)(r.p,{children:`The Page Header must show the appropriate logo and brand name.
The navigation structure can be configured freely.`}),`
`,(0,k.jsx)(r.h4,{id:`logo`,children:`Logo`}),`
`,(0,k.jsxs)(r.p,{children:[`Use the correct logo: our main one, one for a sub-brand, or the English variation.
See `,(0,k.jsx)(r.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),` documentation for details.`]}),`
`,(0,k.jsx)(r.p,{children:`The logo links to the homepage of the site it appears on.
This is a common convention that helps people navigate back to the homepage from any page of the website.`}),`
`,(0,k.jsx)(r.p,{children:`For websites with a brand name that feature the standard Amsterdam logo, only the emblem is shown on narrow screens.`}),`
`,(0,k.jsx)(r.h4,{id:`brand-name`,children:`Brand name`}),`
`,(0,k.jsx)(r.p,{children:`The City’s main website or that of a sub-brand must not display a brand name, as the logo already includes a wordmark.`}),`
`,(0,k.jsx)(r.p,{children:`All other websites must display the name of the brand or service next to the logo.
This helps people understand they are on a different website and that its navigation is separate from the main one.`}),`
`,(0,k.jsx)(r.p,{children:`An abbreviated brand name can be shown in narrow or medium-wide windows if the full name does not fit.`}),`
`,(0,k.jsx)(r.h4,{id:`inline-menu`,children:`Inline menu`}),`
`,(0,k.jsxs)(r.p,{children:[`The menu to the right can contain a maximum of 5 items, including the menu button.
Labels should be short to help the menu fit on a single line whenever possible.
An `,(0,k.jsx)(r.a,{href:`/docs/brand-assets-icons--docs`,children:`icon`}),` can be added to a menu item if it helps clarify it.
Links move into the collapsible menu on narrow windows, unless they have the `,(0,k.jsx)(r.code,{children:`fixed`}),` prop.`]}),`
`,(0,k.jsx)(r.h4,{id:`menu-button`,children:`Menu button`}),`
`,(0,k.jsxs)(r.p,{children:[`The ‘Menu’ button opens the collapsible menu.
It does not appear when the Page Header has no child content.
Use `,(0,k.jsx)(r.code,{children:`noMenuButtonOnWideWindow`}),` to hide the menu button on wide windows when there are only a few links.`]}),`
`,(0,k.jsx)(r.h4,{id:`collapsible-menu`,children:`Collapsible menu`}),`
`,(0,k.jsxs)(r.p,{children:[`This menu gets accessed through the menu button and offers much room for more links.
Use the `,(0,k.jsx)(r.code,{children:`GridCellNarrowWindowOnly`}),` subcomponent to contain links from the inline menu that disappear in narrow windows.
Don’t add whitespace to the Grid in the collapsible menu – its container already provides this.`]}),`
`,(0,k.jsxs)(r.p,{children:[`If the collapsible menu contains `,(0,k.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Headings`}),`, give them level 2 and a size of ‘level-3’.`]}),`
`,(0,k.jsx)(r.h4,{id:`controlling-the-menu`,children:`Controlling the menu`}),`
`,(0,k.jsxs)(r.p,{children:[`By default the Page Header keeps track of whether the collapsible menu is open.
Set `,(0,k.jsx)(r.code,{children:`defaultOpen`}),` to have it open on the first render.`]}),`
`,(0,k.jsxs)(r.p,{children:[`To control the menu yourself, pass `,(0,k.jsx)(r.code,{children:`open`}),` and update it from the `,(0,k.jsx)(r.code,{children:`onOpenChange`}),` callback.
This matters most in a single-page app: the Page Header stays mounted while navigating, so the menu would otherwise stay open after someone follows a link inside it.
Keep the open state in your own component and close it whenever the route changes:`]}),`
`,`
`,(0,k.jsx)(r.pre,{children:(0,k.jsx)(r.code,{className:`language-tsx`,children:`function Header() {
  const { pathname } = useLocation() // The current route from your router
  const [menuOpen, setMenuOpen] = useState(false)
  const [previousPathname, setPreviousPathname] = useState(pathname)

  // Close the collapsible menu whenever the route changes
  if (pathname !== previousPathname) {
    setPreviousPathname(pathname)
    setMenuOpen(false)
  }

  return (
    <PageHeader onOpenChange={setMenuOpen} open={menuOpen}>
      {/* Collapsible menu content */}
    </PageHeader>
  )
}
`})}),`
`,(0,k.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,k.jsx)(r.h3,{id:`with-moving-links`,children:`With moving links`}),`
`,(0,k.jsxs)(r.p,{children:[`Links can move from the inline menu to the collapsible one on narrow windows.
A `,(0,k.jsx)(r.code,{children:`MenuLink`}),` is hidden by default on narrow windows.
Use `,(0,k.jsx)(r.code,{children:`GridCellNarrowWindowOnly`}),` to show that same link in the collapsible menu on narrow windows.`]}),`
`,(0,k.jsxs)(r.p,{children:[`If you do not want the `,(0,k.jsx)(r.code,{children:`MenuLink`}),` to be hidden, use the `,(0,k.jsx)(r.code,{children:`fixed`}),` prop.`]}),`
`,(0,k.jsx)(r.p,{children:`In this example, ‘English’ moves to the collapsible menu, while ‘Zoeken’ does not.`}),`
`,(0,k.jsx)(a,{of:g}),`
`,(0,k.jsx)(r.h3,{id:`without-menu-button-on-wide-windows`,children:`Without menu button on wide windows`}),`
`,(0,k.jsxs)(r.p,{children:[`If you only have a few links, you may not always need a collapsible menu.
Use `,(0,k.jsx)(r.code,{children:`noMenuButtonOnWideWindow`}),` to hide the menu button on wide windows.
On narrow windows, the menu button will still be visible,
so do not forget to add the links to the collapsible menu.`]}),`
`,(0,k.jsx)(a,{of:y}),`
`,(0,k.jsx)(r.h3,{id:`without-menu-button`,children:`Without menu button`}),`
`,(0,k.jsxs)(r.p,{children:[`In some cases, a collapsible menu might not be necessary.
If the Page Header has no `,(0,k.jsx)(r.code,{children:`children`}),`, the menu button will not appear.
Remember to use the `,(0,k.jsx)(r.code,{children:`fixed`}),` prop if you want the inline menu links to stay in place.`]}),`
`,(0,k.jsx)(a,{of:v}),`
`,(0,k.jsx)(r.h3,{id:`with-short-brand-name`,children:`With short brand name`}),`
`,(0,k.jsx)(r.p,{children:`For brand names that may not fit in a narrow window, a shorter form can be given.
Make sure the abbreviation is widely understood.`}),`
`,(0,k.jsx)(a,{of:_}),`
`,(0,k.jsx)(r.h3,{id:`with-custom-logo-link`,children:`With custom logo link`}),`
`,(0,k.jsx)(r.p,{children:`The destination and accessible text of the logo link can be customized,
as well as the logo itself and its accessible name.`}),`
`,(0,k.jsx)(a,{of:p}),`
`,(0,k.jsx)(r.h3,{id:`with-custom-texts`,children:`With custom texts`}),`
`,(0,k.jsx)(r.p,{children:`The visible text of the menu button, its accessible texts and the accessible navigation description can be customized.`}),`
`,(0,k.jsx)(a,{of:m}),`
`,(0,k.jsx)(r.h3,{id:`with-custom-link-component`,children:`With custom link component`}),`
`,(0,k.jsxs)(r.p,{children:[`Pass a custom link component to the `,(0,k.jsx)(r.code,{children:`logoLinkComponent`}),` prop to use your routing library for the logo link.
Here’s an example with the Link component of Next.js:`]}),`
`,`
`,(0,k.jsx)(r.pre,{children:(0,k.jsx)(r.code,{className:`language-tsx`,children:`import { PageHeader } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <PageHeader logoLinkComponent={LinkComponent} />
`})}),`
`,(0,k.jsx)(r.h3,{id:`with-different-branding`,children:`With different branding`}),`
`,(0,k.jsx)(r.p,{children:`Websites for the City of Amsterdam must use one of our own logos and the default menu icon.`}),`
`,(0,k.jsxs)(r.p,{children:[`Other organisations using this component can provide elements to display their own brand.
The image for the logo must be an svg, and its label should be ‘name of the organisation + logo’.
Set the appropriate values for the sizing tokens of `,(0,k.jsx)(r.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),`.
A different icon for the menu button must be an svg as well.`]}),`
`,(0,k.jsx)(a,{of:h}),`
`,(0,k.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,k.jsxs)(r.p,{children:[`The logo and the navigation share one area of the header rather than sitting in two columns.
The navigation holds a second, invisible copy of the logo, which reserves the space the real one occupies so the menu wraps around it at the right point.
This is what allows every link to live inside a single `,(0,k.jsx)(r.code,{children:`nav`}),` element while the menu still behaves as if the logo were part of the same row.`]}),`
`,(0,k.jsx)(r.p,{children:`On narrow screens the standard logo is cropped to its emblem by a container 0.881 rem wide.
That figure is the midpoint between the right edge of the emblem and the left edge of the wordmark, so the crop leaves equal space on both sides and does not depend on rounding to land in the right place.`}),`
`,(0,k.jsx)(r.p,{children:`The brand name is set at the size of a level 3 Heading and balances its line lengths, so a name that wraps does not end on a single short word beside the logo.
Below the wide breakpoint a short form replaces it where one is given.`}),`
`,(0,k.jsx)(r.p,{children:`Menu links are hidden below the wide breakpoint unless they are fixed, and reappear inside the collapsible menu.
The menu button’s icon turns into a cross when the menu opens, animated only for users who have not asked for reduced motion.`}),`
`,(0,k.jsx)(r.p,{children:`In print, the menu button keeps its blue background rather than being flattened to save ink.`}),`
`,(0,k.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,k.jsxs)(r.p,{children:[`A Page Header renders a `,(0,k.jsx)(r.code,{children:`header`}),` element, which is exposed as the `,(0,k.jsx)(r.code,{children:`banner`}),` landmark.`]}),`
`,(0,k.jsx)(r.p,{children:`The logo link is named by a sentence that is in the markup and hidden visually: ‘Ga naar de homepage’, followed by the brand name where there is one.
A link named after the picture inside it would announce as a logo rather than as a way home, which tells a screen reader user what they are looking at instead of where the link goes.`}),`
`,(0,k.jsxs)(r.p,{children:[`The navigation is labelled by a heading that is hidden visually and hidden from the outline as well.
It gives the `,(0,k.jsx)(r.code,{children:`nav`}),` landmark a name without adding a heading to the page structure, so a screen reader user hears which navigation this is when they reach it and does not meet an extra entry when they list the headings.`]}),`
`,(0,k.jsx)(r.p,{children:`The menu button shows ‘Menu’ and announces something else.
Its visible word is hidden from assistive technology, and a hidden phrase in its place says whether activating it will show or hide the menu, so the name states the action rather than only the destination.
The button also reports whether the menu is open and names the region it controls.`}),`
`,(0,k.jsx)(r.p,{children:`The invisible copy of the logo inside the navigation is hidden from assistive technology and from the keyboard, so it is neither announced nor focusable a second time.`}),`
`,(0,k.jsxs)(r.p,{children:[`The list item holding the menu button carries the `,(0,k.jsx)(r.code,{children:`hidden`}),` attribute and is revealed by the stylesheet.
If that stylesheet never arrives, the collapsible menu stays visible in full instead of leaving a button that cannot open anything.`]}),`
`,(0,k.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,k.jsxs)(r.ul,{children:[`
`,(0,k.jsxs)(r.li,{children:[(0,k.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – contains the Page Header.`]}),`
`,(0,k.jsxs)(r.li,{children:[(0,k.jsx)(r.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` – sits at the bottom of the Page.`]}),`
`,(0,k.jsxs)(r.li,{children:[(0,k.jsx)(r.a,{href:`/docs/components-media-logo--docs`,children:`Logo`}),` – the logo shown in the Page Header.`]}),`
`]}),`
`,(0,k.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,k.jsx)(d,{tokens:T})]})}function O(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=c(),f(),r(),u(),E(),b(),C()}))();export{O as default};