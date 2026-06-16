import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-DpIhiSdO.js";import{n as u,t as d}from"./DesignTokensTable-DtR46p0y.js";import{t as f}from"./mdx-react-shim-B3xrZjYw.js";import{DisabledDates as p,Range as m,WithinMonthBounds as h,n as g,t as _}from"./DatePicker.stories-C4MiStlR.js";var v,y,b=e((()=>{v={"date-picker":{"font-family":{$value:`{ams.calendar.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.calendar.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.calendar.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.calendar.gap}`,$type:`dimension`},"inline-size":{$value:`{ams.calendar.inline-size}`,$type:`dimension`},"line-height":{$value:`{ams.calendar.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"outline-offset":{$value:`{ams.calendar.day.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.calendar.day.current.font-weight}`,$type:`fontWeight`}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}},"text-decoration-line":{$value:`line-through`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},hover:{"background-color":{$value:`rgb(0 70 153 / 12.5%)`,$type:`color`},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},selected:{"background-color":{$value:`{ams.color.interactive.default}`,$type:`color`},color:{$value:`{ams.color.interactive.inverse}`,$type:`color`},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$type:`color`}}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(o,{of:_}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r,{of:_}),`
`,(0,C.jsx)(l,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsxs)(t.p,{children:[(0,C.jsx)(t.strong,{children:`Note`}),`: Some props are excluded from the controls panel: `,(0,C.jsx)(t.code,{children:`mode`}),`, `,(0,C.jsx)(t.code,{children:`onChange`}),`, and `,(0,C.jsx)(t.code,{children:`value`}),` are managed by the story’s state wrapper; `,(0,C.jsx)(t.code,{children:`defaultMonth`}),`, `,(0,C.jsx)(t.code,{children:`isDateDisabled`}),`, `,(0,C.jsx)(t.code,{children:`locale`}),`, `,(0,C.jsx)(t.code,{children:`maxDate`}),`, and `,(0,C.jsx)(t.code,{children:`minDate`}),` have no suitable control widget for their type.`]}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use a Date Picker when someone needs to choose a date or date range from a visible calendar, for example to book an appointment.`}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[`Use a `,(0,C.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` when the user knows the date and can type it into a form field.`]}),`
`,(0,C.jsxs)(t.li,{children:[`Use a `,(0,C.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` to browse content grouped by date, such as an events calendar.`]}),`
`]}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(t.p,{children:[`The Date Picker is a controlled component: it keeps no selection of its own.
Pass the current selection with `,(0,C.jsx)(t.code,{children:`value`}),` and update it in the `,(0,C.jsx)(t.code,{children:`onChange`}),` handler.`]}),`
`,(0,C.jsxs)(t.p,{children:[`In the default single mode, `,(0,C.jsx)(t.code,{children:`value`}),` is a `,(0,C.jsx)(t.code,{children:`Date`}),` or `,(0,C.jsx)(t.code,{children:`null`}),` and `,(0,C.jsx)(t.code,{children:`onChange`}),` receives the picked date.
In range mode, set `,(0,C.jsx)(t.code,{children:`mode="range"`}),`; `,(0,C.jsx)(t.code,{children:`value`}),` is a `,(0,C.jsx)(t.code,{children:`DateRange`}),` (`,(0,C.jsx)(t.code,{children:`{ start, end }`}),`) and `,(0,C.jsx)(t.code,{children:`onChange`}),` receives the updated range.
The first pick sets the start, the second sets the end, and picking before the start begins a new range.`]}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`range-selection`,children:`Range selection`}),`
`,(0,C.jsxs)(t.p,{children:[`Set `,(0,C.jsx)(t.code,{children:`mode="range"`}),` to let users pick a start and end date.
The Date Picker itself does not communicate that a range is expected — use a label, heading, or instruction to make this clear.`]}),`
`,(0,C.jsx)(t.p,{children:`The user picks the start date first.
A second click on a later date completes the range; clicking the same date completes a one-day range.
Clicking a date before the current start discards the selection and begins a new range from that date.
Any click after the range is complete starts over.`}),`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`limiting-the-selectable-period`,children:`Limiting the selectable period`}),`
`,(0,C.jsxs)(t.p,{children:[`Use `,(0,C.jsx)(t.code,{children:`minDate`}),` and `,(0,C.jsx)(t.code,{children:`maxDate`}),` to bound the selectable period.
Dates outside the range cannot be selected, and the month and year navigation buttons stop at the edges of the range.`]}),`
`,(0,C.jsx)(t.p,{children:`When the bounds fall within the current month, dates outside them appear disabled: they are struck through and cannot be selected, but remain reachable by keyboard.
When the bounds align with month edges, all dates are selectable and only the navigation buttons are affected.`}),`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`disabling-individual-dates`,children:`Disabling individual dates`}),`
`,(0,C.jsxs)(t.p,{children:[`Pass `,(0,C.jsx)(t.code,{children:`isDateDisabled`}),` to prevent selection of specific dates, such as ones that are unavailable.
Disabled dates remain reachable with the keyboard and are announced, but they cannot be selected.`]}),`
`,(0,C.jsx)(c,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,C.jsxs)(t.p,{children:[`The day grid follows the `,(0,C.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/grid/`,rel:`nofollow`,children:`WAI-ARIA grid pattern`}),`.
Arrow keys move between days, Home and End jump to the start and end of the week, and Page Up and Page Down move between months — hold Shift for years.
Enter or Space selects the focused day.
Moving past the end of a month shows the adjacent month and keeps focus on the day.`]}),`
`,(0,C.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(t.p,{children:[`The grid takes its accessible name from the visible month caption, so screen readers announce which month is shown.
Each day button is labelled with its full date, including the weekday, so a day number is never read out of context.
In range mode, the start and end dates are announced as such; override `,(0,C.jsx)(t.code,{children:`rangeStartAccessibleName`}),` and `,(0,C.jsx)(t.code,{children:`rangeEndAccessibleName`}),` to localise these.`]}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – lets the user type a known date into a form field.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – displays content organised by date in a month view.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),s(),g(),b(),u()}))();export{S as default};