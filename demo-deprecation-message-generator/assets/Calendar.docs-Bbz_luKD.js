import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-BVycD619.js";import{n as u,t as d}from"./DesignTokensTable-D7ZMO-wO.js";import{t as f}from"./mdx-react-shim-DbgpVB5j.js";import{DatesWithoutLinks as p,n as m,t as h}from"./Calendar.stories-BveXtqcG.js";var g,_,v=e((()=>{g={calendar:{"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`},"inline-size":{$value:`20rem`,$type:`dimension`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},link:{color:{$value:`{ams.links.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.links.hover.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}}},_={ams:g}}));function y(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(o,{of:h}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(l,{}),`
`,(0,x.jsx)(a,{}),`
`,(0,x.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(t.p,{children:`Use a Calendar to display a month view for content organised by date, such as an event calendar.`}),`
`,(0,x.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(t.p,{children:[`Use a `,(0,x.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` instead when the user needs to select a date in the context of a form.`]}),`
`,(0,x.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsx)(t.p,{children:`Display the month for the selected date, which may not be the current month.`}),`
`,(0,x.jsxs)(t.p,{children:[`Give it an accessible name with `,(0,x.jsx)(t.code,{children:`accessibleName`}),`.
The Calendar renders this name as a visually hidden heading and generates a unique `,(0,x.jsx)(t.code,{children:`id`}),` for it; pass `,(0,x.jsx)(t.code,{children:`accessibleNameId`}),` to set that `,(0,x.jsx)(t.code,{children:`id`}),` yourself.`]}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.h3,{id:`dates-without-links`,children:`Dates without links`}),`
`,(0,x.jsxs)(t.p,{children:[`Each date can be a link, for example to a page that lists that day's events.
`,(0,x.jsx)(t.code,{children:`linkTemplate`}),` builds the target for a date; return `,(0,x.jsx)(t.code,{children:`undefined`}),` to render the date as plain text, or omit `,(0,x.jsx)(t.code,{children:`linkTemplate`}),` entirely to render a plain, non-interactive month.`]}),`
`,(0,x.jsx)(c,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsx)(t.h3,{id:`routing-library-integration`,children:`Routing library integration`}),`
`,(0,x.jsxs)(t.p,{children:[`Pass `,(0,x.jsx)(t.code,{children:`linkComponent`}),` to let a router supply its own link element, such as the one from Next.js.
Use it together with `,(0,x.jsx)(t.code,{children:`linkTemplate`}),`.
For more details, see the `,(0,x.jsx)(t.a,{href:`/docs/docs-developer-guide-routing-libraries--docs`,children:`routing libraries developer guide`}),`.`]}),`
`,(0,x.jsxs)(t.p,{children:[`This example for a `,(0,x.jsx)(t.code,{children:`linkTemplate`}),` function produces links like `,(0,x.jsx)(t.code,{children:`?date=2026-12-04`}),` for December 4, 2026:`]}),`
`,`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-ts`,children:'const formatDate = (date: Date) =>\n  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`\n\nconst linkTemplate = (date: Date): string => `?date=${formatDate(date)}`\n'})}),`
`,(0,x.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(t.p,{children:[`The Calendar renders as a `,(0,x.jsx)(t.code,{children:`nav`}),` landmark.
Screen readers announce each link with its full date, including the weekday, so a day number is never read out of context.`]}),`
`,(0,x.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – lets the user select a date in the context of a form.`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),f(),s(),u(),v(),m()}))();export{b as default};