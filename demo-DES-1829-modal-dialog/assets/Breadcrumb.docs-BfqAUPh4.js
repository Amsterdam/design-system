import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Any2K9Yn.js";import{n as p,t as m}from"./Breadcrumb.stories-EOzLkD2k.js";import{n as h,r as g}from"./BreadcrumbLink.stories-emo_ErL3.js";var _,v;function y(){return(y=e((()=>{_={breadcrumb:{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},separator:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23000000' fill-rule='evenodd' d='m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},"block-size":{$value:`1ex`,$type:`dimension`},"inline-size":{$value:`1ex`,$type:`dimension`},"margin-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:m}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,S.jsx)(r.h3,{id:`link`,children:`Link`}),`
`,(0,S.jsxs)(r.p,{children:[`Renders both the list item and the anchor.
Set `,(0,S.jsx)(r.code,{children:`linkComponent`}),` to integrate with a routing library.`]}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(i,{of:h}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Use a Breadcrumb to show where the current page sits within the hierarchy of the website and to let users navigate between levels.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsx)(r.p,{children:`Don’t use a Breadcrumb on pages that contain forms.
It can distract users from completing the form, or be confused with a progress indicator.`}),`
`,(0,S.jsx)(r.p,{children:`A Breadcrumb should not have more than 5 items.`}),`
`,(0,S.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsx)(r.p,{children:`The first item links to the home page, with ‘Home’ as its text.
This applies to Dutch websites as well.`}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`The items flow as inline text rather than as blocks in a row.
A trail that is too long for the line wraps like a sentence instead of overflowing or scrolling, which is what keeps a Breadcrumb usable on a narrow screen without a separate arrangement for it.`}),`
`,(0,S.jsxs)(r.p,{children:[`The separator is drawn by CSS, so it can never be forgotten or typed differently from one page to the next.
It is sized in `,(0,S.jsx)(r.code,{children:`ex`}),` units, the height of a lowercase letter, so the chevron stays in proportion to the text beside it at every font size.`]}),`
`,(0,S.jsxs)(r.p,{children:[`In a right-to-left writing direction the chevron is mirrored, so it keeps pointing from one item to the next.
See the `,(0,S.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`localisation developer guide`}),` for the design system’s writing-direction support.`]}),`
`,(0,S.jsx)(r.p,{children:`Links are not underlined until the pointer is over them.
The chevrons already mark where one item ends and the next begins, and underlining every step would turn a single line of text into a row of separate objects.`}),`
`,(0,S.jsx)(r.p,{children:`In print, a Breadcrumb is never the last item on a page and is never split across two.
A trail at the foot of one page with the content it introduces on the next would say nothing.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`A Breadcrumb renders a `,(0,S.jsx)(r.code,{children:`nav`}),` around an ordered list, so it is a navigation landmark and the steps keep their order and their number.`]}),`
`,(0,S.jsx)(r.p,{children:`The landmark is named by a heading that is hidden visually and hidden from the outline as well.
It gives the navigation a name for anyone listing the landmarks, without adding an entry to the headings of the page.`}),`
`,(0,S.jsx)(r.p,{children:`The separators are backgrounds on empty pseudo-elements, so nothing is announced between one item and the next.`}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`Routing libraries`}),` – how to integrate links with external routing libraries.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p(),g()})))()}C();export{x as default};