import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-yVVtvaQN.js";import{n as u,t as d}from"./DesignTokensTable-BsybdJt8.js";import{t as f}from"./mdx-react-shim-C2lqAQpz.js";import{DatesWithoutLinks as p,n as m,t as h}from"./Calendar.stories-CL5Q3bXe.js";var g,_,v=e((()=>{g={calendar:{"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`},"inline-size":{$value:`20rem`,$type:`dimension`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},link:{color:{$value:`{ams.links.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.links.hover.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}}},_={ams:g}}));function y(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(r,{of:h}),`
`,(0,x.jsx)(s,{}),`
`,(0,x.jsx)(l,{of:h}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(c,{}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Note`}),`: `,(0,x.jsx)(t.code,{children:`dir`}),` and the navigation and accessible-name labels are read-only here and follow `,(0,x.jsx)(t.code,{children:`locale`}),`, so the controls show a fully localised Calendar.
In your own app you set them yourself.`]}),`
`,(0,x.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(t.p,{children:`Use a Calendar to display a month view for content organised by date, such as an event calendar.`}),`
`,(0,x.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(t.p,{children:[`Use a `,(0,x.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` instead when the user needs to select a date in the context of a form.`]}),`
`,(0,x.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsx)(t.p,{children:`Display the month for the selected date, which may not be the current month.`}),`
`,(0,x.jsxs)(t.p,{children:[`Give it an accessible name with `,(0,x.jsx)(t.code,{children:`accessibleName`}),`.
The Calendar renders this name as a visually hidden heading and generates a unique `,(0,x.jsx)(t.code,{children:`id`}),` for it; pass `,(0,x.jsx)(t.code,{children:`accessibleNameId`}),` to set that `,(0,x.jsx)(t.code,{children:`id`}),` yourself.`]}),`
`,(0,x.jsx)(t.h4,{id:`localisation`,children:`Localisation`}),`
`,(0,x.jsxs)(t.p,{children:[`The Calendar renders weekday names, the month caption, and the accessible date labels in the language of `,(0,x.jsx)(t.code,{children:`locale`}),`, which defaults to `,(0,x.jsx)(t.code,{children:`nl-NL`}),`.
It does not translate the rest: set `,(0,x.jsx)(t.code,{children:`accessibleName`}),`, `,(0,x.jsx)(t.code,{children:`nextMonthButtonLabel`}),`, `,(0,x.jsx)(t.code,{children:`nextYearButtonLabel`}),`, `,(0,x.jsx)(t.code,{children:`previousMonthButtonLabel`}),`, and `,(0,x.jsx)(t.code,{children:`previousYearButtonLabel`}),` in the same language, or they stay Dutch and screen readers announce a mix.
For right-to-left scripts such as Arabic, also add `,(0,x.jsx)(t.code,{children:`dir="rtl"`}),`.
Try the `,(0,x.jsx)(t.code,{children:`locale`}),` control above to preview each language; see the `,(0,x.jsx)(t.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`Localisation developer guide`}),` for the tested locales.`]}),`
`,(0,x.jsx)(t.p,{children:`If your app uses Calendar in multiple places with the same language, a small wrapper component avoids repeating these props:`}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-tsx`,children:`import type { CalendarProps } from "@amsterdam/design-system-react";

import { Calendar } from "@amsterdam/design-system-react";

const ArabicCalendar = (props: CalendarProps) => (
  <Calendar
    accessibleName="التقويم"
    dir="rtl"
    locale="ar-MA"
    nextMonthButtonLabel="الشهر التالي"
    nextYearButtonLabel="السنة التالية"
    previousMonthButtonLabel="الشهر السابق"
    previousYearButtonLabel="السنة السابقة"
    {...props}
  />
);
`})}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.h3,{id:`dates-without-links`,children:`Dates without links`}),`
`,(0,x.jsxs)(t.p,{children:[`Each date can be a link, for example to a page that lists that day's events.
`,(0,x.jsx)(t.code,{children:`linkTemplate`}),` builds the target for a date; return `,(0,x.jsx)(t.code,{children:`undefined`}),` to render the date as plain text, or omit `,(0,x.jsx)(t.code,{children:`linkTemplate`}),` entirely to render a plain, non-interactive month.`]}),`
`,(0,x.jsx)(o,{of:p}),`
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
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),f(),a(),u(),v(),m()}))();export{b as default};