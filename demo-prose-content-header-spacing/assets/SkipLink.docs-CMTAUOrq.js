import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-B47_rmJL.js";import{i as p,n as m,r as h,t as g}from"./SkipLink.stories-kpLroesr.js";var _,v;function y(){return(y=e((()=>{_={"skip-link":{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:h}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:h}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Place the Skip Link as the first element in the `,(0,S.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Direct the Skip Link to the main content area on the Page.
Typically, this is the `,(0,S.jsx)(r.code,{children:`main`}),` HTML element.
Repeated navigation blocks such as Breadcrumbs and back Links do not belong to the main content area.`]}),`
`,(0,S.jsx)(r.p,{children:`Complex pages with multiple sections may benefit from more than one Skip Link.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(r.p,{children:`Skip Links are unnecessary on a simple page with only text and minimal navigation.`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Set `,(0,S.jsx)(r.code,{children:`id="inhoud"`}),` on the `,(0,S.jsx)(r.code,{children:`main`}),` HTML element and then use `,(0,S.jsx)(r.code,{children:`href="#inhoud"`}),` on the Skip Link.
If you need multiple words to describe a Skip Link target, use kebab case (`,(0,S.jsx)(r.code,{children:`id="op-deze-manier"`}),`).`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`display-on-focus`,children:`Display on focus`}),`
`,(0,S.jsx)(r.p,{children:`A Skip Link is only displayed when it receives focus.`}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h3,{id:`multiple-links`,children:`Multiple links`}),`
`,(0,S.jsx)(r.p,{children:`You can use more than one Skip Link if you have a complex page with multiple sections.`}),`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`The Skip Link sits above the Page Header and is as wide as the Page container.
It remains hidden until activated with the ‘Tab’ key.
After appearing, it pushes the rest of the page down.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`Following a Skip Link moves the starting point for sequential focus navigation to the target, so the next ‘Tab’ press continues from there.
The target itself does not receive focus, and it does not need to: an `,(0,S.jsx)(r.code,{children:`id`}),` is enough, so leave `,(0,S.jsx)(r.code,{children:`tabindex`}),` off.`]}),`
`,(0,S.jsxs)(r.p,{children:[`A Skip Link is hidden by being clipped to a single pixel rather than by `,(0,S.jsx)(r.code,{children:`display: none`}),`, so it stays in the tab order and in the accessibility tree the whole time.
This is what lets it be the first thing a keyboard user reaches while remaining invisible to everyone else, and it is why a screen reader user encounters it in reading order even though it is never drawn.`]}),`
`,(0,S.jsx)(r.h3,{id:`placement-outside-the-landmarks`,children:`Placement outside the landmarks`}),`
`,(0,S.jsxs)(r.p,{children:[`A Skip Link comes before the Page Header, which puts it ahead of every landmark on the page.
Leave it there.
NL Design System is explicit that this is `,(0,S.jsx)(r.a,{href:`https://www.nldesignsystem.nl/wcag/2.4.1/`,rel:`nofollow`,children:`no violation of success criterion 2.4.1`}),`: a skip link at the top of the page, as the first focusable element and outside a landmark, meets it.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Testing tools report the placement all the same.
axe flags the link under its `,(0,S.jsx)(r.code,{children:`region`}),` rule, ‘All page content should be contained by landmarks’, which is one of its best practices rather than a success criterion.
Treat that result as expected.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Do not wrap the Skip Links in a `,(0,S.jsx)(r.code,{children:`nav`}),` to satisfy it.
The `,(0,S.jsx)(r.a,{href:`https://github.com/nl-design-system/utrecht/blob/main/components/skip-link/README.md`,rel:`nofollow`,children:`Utrecht design system`}),` advises against exactly that, and a navigation landmark holding nothing but links that stay hidden until they are focused lengthens the landmark list without helping anyone find its contents.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – contains the Skip Link as its first element.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};