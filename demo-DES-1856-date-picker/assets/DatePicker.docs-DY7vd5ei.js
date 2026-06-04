import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-DbOhbNZu.js";import{r as n}from"./react-Df7rj8eU.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-ClqlY6bg.js";import{n as l,t as u}from"./DesignTokensTable-CxMyFiSn.js";import{t as d}from"./mdx-react-shim-DdLwSOce.js";import{DisabledDates as f,LimitedToOneMonth as p,Range as m,n as h,t as g}from"./DatePicker.stories-wrXVR_6g.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# Date Picker

A calendar grid for selecting a single date or a range of dates.

## Guidelines

- Use this to let someone choose a date or date range from a visible calendar, for example to book an appointment.
- Use [Date Input](/docs/components-forms-date-input--docs) when someone knows the date and can type it into a form field.
- Use [Calendar](/docs/components-navigation-calendar--docs) to browse to content grouped by date, such as an events calendar.
- Mark unavailable dates as disabled so they are announced but cannot be selected; limit the selectable period with a minimum and maximum date.
`})),y,b,x=e((()=>{y={"date-picker":{"font-family":{$value:`{ams.calendar.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.calendar.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.calendar.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.calendar.gap}`,$type:`dimension`},"inline-size":{$value:`{ams.calendar.inline-size}`,$type:`dimension`},"line-height":{$value:`{ams.calendar.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"outline-offset":{$value:`{ams.calendar.day.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.calendar.day.current.font-weight}`,$type:`fontWeight`}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}},"text-decoration-line":{$value:`line-through`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},hover:{"background-color":{$value:`rgb(0 70 153 / 12.5%)`,$type:`color`},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},selected:{"background-color":{$value:`{ams.color.interactive.default}`,$type:`color`},color:{$value:`{ams.color.interactive.inverse}`,$type:`color`},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$type:`color`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`controlled-value`,children:`Controlled value`}),`
`,(0,w.jsxs)(t.p,{children:[`The Date Picker is a controlled component: it keeps no selection of its own.
Pass the current selection with `,(0,w.jsx)(t.code,{children:`value`}),` and update it in the `,(0,w.jsx)(t.code,{children:`onChange`}),` handler.`]}),`
`,(0,w.jsxs)(t.p,{children:[`In the default single mode, `,(0,w.jsx)(t.code,{children:`value`}),` is a `,(0,w.jsx)(t.code,{children:`Date`}),` or `,(0,w.jsx)(t.code,{children:`null`}),` and `,(0,w.jsx)(t.code,{children:`onChange`}),` receives the picked date.
In range mode, set `,(0,w.jsx)(t.code,{children:`mode="range"`}),`; `,(0,w.jsx)(t.code,{children:`value`}),` is a `,(0,w.jsx)(t.code,{children:`DateRange`}),` (`,(0,w.jsx)(t.code,{children:`{ start, end }`}),`) and `,(0,w.jsx)(t.code,{children:`onChange`}),` receives the updated range.
The first pick sets the start, the second sets the end, and picking before the start begins a new range.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`limiting-the-selectable-period`,children:`Limiting the selectable period`}),`
`,(0,w.jsxs)(t.p,{children:[`Use `,(0,w.jsx)(t.code,{children:`minDate`}),` and `,(0,w.jsx)(t.code,{children:`maxDate`}),` to bound the selectable period.
Dates outside the range cannot be selected, and the month and year navigation buttons stop at the edges of the range.`]}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h2,{id:`disabling-individual-dates`,children:`Disabling individual dates`}),`
`,(0,w.jsxs)(t.p,{children:[`Pass `,(0,w.jsx)(t.code,{children:`isDateDisabled`}),` to prevent selection of specific dates, such as ones that are unavailable.
Disabled dates remain reachable with the keyboard and are announced, but they cannot be selected.`]}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h2,{id:`keyboard-support`,children:`Keyboard support`}),`
`,(0,w.jsxs)(t.p,{children:[`The day grid follows the `,(0,w.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/grid/`,rel:`nofollow`,children:`WAI-ARIA grid pattern`}),`.
Arrow keys move between days, Home and End jump to the start and end of the week, and Page Up and Page Down move between months (hold Shift for years).
Enter or Space selects the focused day.
Moving past the start or end of a month shows the adjacent month and keeps focus on the day.`]}),`
`,(0,w.jsx)(t.h2,{id:`accessible-name`,children:`Accessible name`}),`
`,(0,w.jsx)(t.p,{children:`The grid takes its accessible name from the visible month caption, so screen readers announce which month is shown.
Each day button is labelled with its full date, including the weekday, so a day number is never read out of context.`}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};