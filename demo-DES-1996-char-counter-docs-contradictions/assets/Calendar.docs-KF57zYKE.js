import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BJpo0U7p.js";import{n as p,r as m,t as h}from"./Calendar.stories-BAkYevTL.js";var g,_;function v(){return(v=e((()=>{g={calendar:{"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`},"inline-size":{$value:`20rem`,$type:`dimension`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},link:{color:{$value:`{ams.links.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{color:{$value:`{ams.links.hover.color}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsxs)(r.p,{children:[(0,x.jsx)(r.strong,{children:`Note`}),`: `,(0,x.jsx)(r.code,{children:`dir`}),` and the navigation and accessible-name labels are read-only here and follow `,(0,x.jsx)(r.code,{children:`locale`}),`, so the controls show a fully localised Calendar.
In your own app you set them yourself.`]}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(r.p,{children:`Use a Calendar to display a month view for content organised by date, such as an event calendar.`}),`
`,(0,x.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(r.p,{children:[`Use a `,(0,x.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` instead when the user needs to select a date in the context of a form.`]}),`
`,(0,x.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsx)(r.p,{children:`Display the month for the selected date, which may not be the current month.`}),`
`,(0,x.jsxs)(r.p,{children:[`Give it an accessible name with `,(0,x.jsx)(r.code,{children:`accessibleName`}),`.
The Calendar renders this name as a visually hidden heading and generates a unique `,(0,x.jsx)(r.code,{children:`id`}),` for it; pass `,(0,x.jsx)(r.code,{children:`accessibleNameId`}),` to set that `,(0,x.jsx)(r.code,{children:`id`}),` yourself.`]}),`
`,(0,x.jsx)(r.h4,{id:`localisation`,children:`Localisation`}),`
`,(0,x.jsxs)(r.p,{children:[`The Calendar renders weekday names, the month caption, and the accessible date labels in the language of `,(0,x.jsx)(r.code,{children:`locale`}),`, which defaults to `,(0,x.jsx)(r.code,{children:`nl-NL`}),`.
It does not translate the rest: set `,(0,x.jsx)(r.code,{children:`accessibleName`}),`, `,(0,x.jsx)(r.code,{children:`nextMonthButtonLabel`}),`, `,(0,x.jsx)(r.code,{children:`nextYearButtonLabel`}),`, `,(0,x.jsx)(r.code,{children:`previousMonthButtonLabel`}),`, and `,(0,x.jsx)(r.code,{children:`previousYearButtonLabel`}),` in the same language, or they stay Dutch and screen readers announce a mix.
For right-to-left scripts such as Arabic, also add `,(0,x.jsx)(r.code,{children:`dir="rtl"`}),`; this mirrors the layout and the navigation chevrons.
Try the `,(0,x.jsx)(r.code,{children:`locale`}),` control above to preview each language; see the `,(0,x.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`localisation guide`}),` for the tested locales.`]}),`
`,(0,x.jsxs)(r.p,{children:[`If your app uses Calendar in multiple places with the same language, a small wrapper component avoids repeating these props; the `,(0,x.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` shows an example.`]}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`dates-without-links`,children:`Dates without links`}),`
`,(0,x.jsxs)(r.p,{children:[`Each date can be a link, for example to a page that lists that day's events.
`,(0,x.jsx)(r.code,{children:`linkTemplate`}),` builds the target for a date; return `,(0,x.jsx)(r.code,{children:`undefined`}),` to render the date as plain text, or omit `,(0,x.jsx)(r.code,{children:`linkTemplate`}),` entirely to render a plain, non-interactive month.`]}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsx)(r.h3,{id:`routing-library-integration`,children:`Routing library integration`}),`
`,(0,x.jsxs)(r.p,{children:[`Pass `,(0,x.jsx)(r.code,{children:`linkComponent`}),` to let a router supply its own link element, such as the one from Next.js.
Use it together with `,(0,x.jsx)(r.code,{children:`linkTemplate`}),`.
For more details, see the `,(0,x.jsx)(r.a,{href:`/docs/docs-guidelines-routing-libraries--docs`,children:`routing libraries guide`}),`.`]}),`
`,(0,x.jsxs)(r.p,{children:[`This example for a `,(0,x.jsx)(r.code,{children:`linkTemplate`}),` function produces links like `,(0,x.jsx)(r.code,{children:`?date=2026-12-04`}),` for 4 December 2026:`]}),`
`,`
`,(0,x.jsx)(r.pre,{children:(0,x.jsx)(r.code,{className:`language-ts`,children:'const formatDate = (date: Date) =>\n  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`\n\nconst linkTemplate = (date: Date): string => `?date=${formatDate(date)}`\n'})}),`
`,(0,x.jsx)(r.h3,{id:`custom-navigation-icons`,children:`Custom navigation icons`}),`
`,(0,x.jsxs)(r.p,{children:[`Different navigation icons can be used through the `,(0,x.jsx)(r.code,{children:`*ButtonIcon`}),` props, which each take the same value as the `,(0,x.jsx)(r.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` component’s `,(0,x.jsx)(r.code,{children:`svg`}),` prop.
Websites for the City of Amsterdam must use the default icons.
For right-to-left scripts, give a custom icon a `,(0,x.jsx)(r.code,{children:`data-directional="true"`}),` attribute so it mirrors like the default chevrons; see the `,(0,x.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`localisation guide`}),`.`]}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`The month is laid out as seven equal columns, one per weekday, so the dates line up in vertical columns whatever month is shown and however long the weekday names are.`}),`
`,(0,x.jsx)(r.p,{children:`The grid shows only the days of the month on view, padding the first week with blank cells rather than the previous month’s tail.
Our palette has no comfortable way to mark another month’s dates as secondary, and without that a second set of the same day numbers would read as noise rather than context.`}),`
`,(0,x.jsx)(r.p,{children:`The Calendar is only as wide as it needs to be, up to a set width, and never wider than the space it is given.
It can therefore sit in a narrow column beside other content without a layout deciding its size for it.`}),`
`,(0,x.jsx)(r.p,{children:`The month caption is centred between the navigation buttons rather than placed beside them, so moving from one month to the next does not shift it.`}),`
`,(0,x.jsx)(r.p,{children:`Today is marked by weight alone: no box, no background, no colour of its own.
Dates that are links keep the ordinary link colour, so the marking for today does not compete with the marking for what can be followed.`}),`
`,(0,x.jsx)(r.p,{children:`Navigation chevrons mirror in a right-to-left layout, which is why a custom icon needs to say that it is directional.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(r.p,{children:[`The Calendar renders as a `,(0,x.jsx)(r.code,{children:`nav`}),` landmark.
Screen readers announce each link with its full date, including the weekday, so a day number is never read out of context.`]}),`
`,(0,x.jsxs)(r.p,{children:[`The name of that landmark comes from `,(0,x.jsx)(r.code,{children:`accessibleName`}),`, rendered as a heading that is present in the markup and hidden visually.`]}),`
`,(0,x.jsx)(r.p,{children:`A month whose dates are not links is a plain grid of text.
Nothing in it is focusable, so it is read as content rather than offering a keyboard user a month of stops to pass through.`}),`
`,(0,x.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – lets the user select a date in the context of a form.`]}),`
`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};