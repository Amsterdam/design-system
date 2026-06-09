import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-D-kNad4B.js";import{r as n}from"./react-C6o6U554.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-Dx1ohW5O.js";import{n as l,t as u}from"./DesignTokensTable-BxTw6Bs4.js";import{t as d}from"./mdx-react-shim-B7aRfeHi.js";import{DatesWithoutLinks as f,n as p,t as m}from"./Calendar.stories-C2K1Kce0.js";var h,g=e((()=>{h=`<!-- @license CC0-1.0 -->

# Calendar

A visual way to navigate between dates using a calendar view.

## Guidelines

- Use this for a collection of content grouped by date, e.g. an event calendar.
- Display the month for the selected date; this may not be the current month.
- Use [Date Input](/docs/components-forms-date-input--docs) instead to let the user select a date in the context of a form.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.

For this component, use both \`linkTemplate\` and \`linkComponent\`, e.g.

\`\`\`tsx
<Calendar linkComponent={Link} linkTemplate={(date) => \`/agenda/\${formatDate(date)}\`} />
\`\`\`
`})),_,v,y=e((()=>{_={calendar:{"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`},"inline-size":{$value:`20rem`,$type:`dimension`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},link:{color:{$value:`{ams.links.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.links.hover.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}}},v={ams:_}}));function b(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(c,{children:h}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`building-link-urls`,children:`Building link urls`}),`
`,(0,S.jsxs)(t.p,{children:[`This example for a `,(0,S.jsx)(t.code,{children:`linkTemplate`}),` function produces links like `,(0,S.jsx)(t.code,{children:`?date=2026-12-04`}),` for December 4, 2026:`]}),`
`,`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-ts`,children:'const formatDate = (date: Date) =>\n  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`\n\nconst linkTemplate = (date: Date): string => `?date=${formatDate(date)}`\n'})}),`
`,(0,S.jsx)(t.h3,{id:`dates-without-links`,children:`Dates without links`}),`
`,(0,S.jsxs)(t.p,{children:[`Each date can be a link, for example to a page that lists that day’s events.
`,(0,S.jsx)(t.code,{children:`linkTemplate`}),` builds the target for a date; return `,(0,S.jsx)(t.code,{children:`undefined`}),` to render that date as plain text, or omit it to render a plain, non-interactive month.
`,(0,S.jsx)(t.code,{children:`linkComponent`}),` lets a router supply its own link component, such as the one from Next.js.`]}),`
`,(0,S.jsx)(t.p,{children:`In this example, weekends have no link and render as plain text.`}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(t.p,{children:[`The Calendar renders as a `,(0,S.jsx)(t.code,{children:`nav`}),` landmark.
Give it an accessible name with `,(0,S.jsx)(t.code,{children:`accessibleName`}),`.
The Calendar renders this name as a visually hidden heading and generates a unique `,(0,S.jsx)(t.code,{children:`id`}),` for it; pass `,(0,S.jsx)(t.code,{children:`accessibleNameId`}),` to set that `,(0,S.jsx)(t.code,{children:`id`}),` yourself.`]}),`
`,(0,S.jsx)(t.p,{children:`Screen readers announce each link with its full date, including the weekday, so a day number is never read out of context.`}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(u,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),d(),i(),p(),g(),y(),l()}))();export{x as default};