import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-kaVKZBRW.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./DatePicker.stories-CqLGASgu.js";var y,b;function x(){return(x=e((()=>{y={"date-picker":{"font-family":{$value:`{ams.calendar.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.calendar.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.calendar.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.calendar.gap}`,$type:`dimension`},"inline-size":{$value:`{ams.calendar.inline-size}`,$type:`dimension`},"line-height":{$value:`{ams.calendar.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},day:{color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"outline-offset":{$value:`{ams.calendar.day.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},current:{"font-weight":{$value:`{ams.calendar.day.current.font-weight}`,$type:`fontWeight`}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}},"text-decoration-line":{$value:`line-through`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},hover:{"background-color":{$value:`rgb(0 70 153 / 12.5%)`,$type:`color`},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},selected:{"background-color":{$value:`{ams.color.interactive.default}`,$type:`color`},color:{$value:`{ams.color.interactive.inverse}`,$type:`color`},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$type:`color`}}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:v}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsxs)(r.p,{children:[(0,w.jsx)(r.strong,{children:`Note`}),`: Some props are excluded from the controls panel: `,(0,w.jsx)(r.code,{children:`mode`}),`, `,(0,w.jsx)(r.code,{children:`onChange`}),`, and `,(0,w.jsx)(r.code,{children:`value`}),` are managed by the story’s state wrapper; `,(0,w.jsx)(r.code,{children:`defaultMonth`}),`, `,(0,w.jsx)(r.code,{children:`isDateDisabled`}),`, `,(0,w.jsx)(r.code,{children:`maxDate`}),`, and `,(0,w.jsx)(r.code,{children:`minDate`}),` have no suitable control widget for their type.
The `,(0,w.jsx)(r.code,{children:`dir`}),` and the navigation and accessible-name labels are read-only and follow `,(0,w.jsx)(r.code,{children:`locale`}),`, so the controls show a fully localised Date Picker; set them yourself in your app.`]}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(r.p,{children:`Use a Date Picker when someone needs to choose a date or date range from a visible calendar, for example to book an appointment.`}),`
`,(0,w.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[`Use a `,(0,w.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` when the user knows the date and can type it into a form field.`]}),`
`,(0,w.jsxs)(r.li,{children:[`Use a `,(0,w.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` to browse content grouped by date, such as an events calendar.`]}),`
`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(r.p,{children:[`The Date Picker is a controlled component: it keeps no selection of its own.
Pass the current selection with `,(0,w.jsx)(r.code,{children:`value`}),` and update it in the `,(0,w.jsx)(r.code,{children:`onChange`}),` handler.`]}),`
`,(0,w.jsxs)(r.p,{children:[`In the default single mode, `,(0,w.jsx)(r.code,{children:`value`}),` is a `,(0,w.jsx)(r.code,{children:`Date`}),` or `,(0,w.jsx)(r.code,{children:`null`}),` and `,(0,w.jsx)(r.code,{children:`onChange`}),` receives the picked date.
In range mode, set `,(0,w.jsx)(r.code,{children:`mode="range"`}),`; `,(0,w.jsx)(r.code,{children:`value`}),` is a `,(0,w.jsx)(r.code,{children:`DateRange`}),` (`,(0,w.jsx)(r.code,{children:`{ start, end }`}),`) and `,(0,w.jsx)(r.code,{children:`onChange`}),` receives the updated range.
The first pick sets the start, the second sets the end, and picking before the start begins a new range.`]}),`
`,(0,w.jsxs)(r.p,{children:[`If you set `,(0,w.jsx)(r.code,{children:`minDate`}),` or `,(0,w.jsx)(r.code,{children:`maxDate`}),`, ensure the initial `,(0,w.jsx)(r.code,{children:`value`}),` falls within those bounds.
The component does not clamp or validate the incoming value.`]}),`
`,(0,w.jsx)(r.h4,{id:`localisation`,children:`Localisation`}),`
`,(0,w.jsxs)(r.p,{children:[`The Date Picker renders weekday names, the month caption, and the accessible date labels in the language of `,(0,w.jsx)(r.code,{children:`locale`}),`, which defaults to `,(0,w.jsx)(r.code,{children:`nl-NL`}),`.
It does not translate the rest: set `,(0,w.jsx)(r.code,{children:`nextMonthButtonLabel`}),`, `,(0,w.jsx)(r.code,{children:`nextYearButtonLabel`}),`, `,(0,w.jsx)(r.code,{children:`previousMonthButtonLabel`}),`, and `,(0,w.jsx)(r.code,{children:`previousYearButtonLabel`}),` in the same language, or they stay Dutch and screen readers announce a mix.
In range mode, also localise `,(0,w.jsx)(r.code,{children:`rangeStartAccessibleName`}),` and `,(0,w.jsx)(r.code,{children:`rangeEndAccessibleName`}),`; they are appended to the start and end dates when those are announced.
For right-to-left scripts such as Arabic, also add `,(0,w.jsx)(r.code,{children:`dir="rtl"`}),`; this mirrors the layout and the navigation chevrons.
Try the `,(0,w.jsx)(r.code,{children:`locale`}),` control above to preview each language; see the `,(0,w.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`localisation developer guide`}),` for the tested locales.`]}),`
`,(0,w.jsx)(r.p,{children:`If your app uses Date Picker in multiple places with the same language, a small wrapper component avoids repeating these props:`}),`
`,(0,w.jsx)(r.pre,{children:(0,w.jsx)(r.code,{className:`language-tsx`,children:`import type { DatePickerProps } from "@amsterdam/design-system-react";

import { DatePicker } from "@amsterdam/design-system-react";

const ArabicDatePicker = (props: DatePickerProps) => (
  <DatePicker
    dir="rtl"
    locale="ar-MA"
    nextMonthButtonLabel="الشهر التالي"
    nextYearButtonLabel="السنة التالية"
    previousMonthButtonLabel="الشهر السابق"
    previousYearButtonLabel="السنة السابقة"
    rangeEndAccessibleName="تاريخ النهاية"
    rangeStartAccessibleName="تاريخ البداية"
    {...props}
  />
);
`})}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`range`,children:`Range`}),`
`,(0,w.jsxs)(r.p,{children:[`Set `,(0,w.jsx)(r.code,{children:`mode="range"`}),` to let users pick a start and end date.
The Date Picker itself does not communicate that a range is expected.
Use a label, heading, or instruction to make this clear.`]}),`
`,(0,w.jsx)(r.p,{children:`The user picks the start date first.
A second click on a later date completes the range; clicking the same date completes a one-day range.
Clicking a date before the current start discards the selection and begins a new range from that date.
Any click after the range is complete starts over.`}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h3,{id:`disabled-dates`,children:`Disabled dates`}),`
`,(0,w.jsxs)(r.p,{children:[`Pass `,(0,w.jsx)(r.code,{children:`isDateDisabled`}),` to prevent selection of specific dates, such as ones that are unavailable.
Disabled dates remain reachable with the keyboard and are announced, but they cannot be selected.`]}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(r.h3,{id:`within-month-bounds`,children:`Within-month bounds`}),`
`,(0,w.jsxs)(r.p,{children:[`Use `,(0,w.jsx)(r.code,{children:`minDate`}),` and `,(0,w.jsx)(r.code,{children:`maxDate`}),` to bound the selectable period.
Dates outside the range cannot be selected, and the month and year navigation buttons stop at the edges of the range.`]}),`
`,(0,w.jsx)(r.p,{children:`When the bounds fall within the current month, dates outside them appear disabled: they are struck through and cannot be selected, but remain reachable by keyboard.`}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`limited-to-one-month`,children:`Limited to one month`}),`
`,(0,w.jsxs)(r.p,{children:[`When `,(0,w.jsx)(r.code,{children:`minDate`}),` and `,(0,w.jsx)(r.code,{children:`maxDate`}),` align with month edges, all dates remain selectable.
Only the navigation buttons are disabled.`]}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(r.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,w.jsxs)(r.p,{children:[`The day grid follows the `,(0,w.jsx)(r.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/grid/`,rel:`nofollow`,children:`WAI-ARIA grid pattern`}),`.
Arrow keys move between days, Home and End jump to the start and end of the week, and Page Up and Page Down move between months; hold Shift for years.
Enter or Space selects the focused day.
Moving past the end of a month shows the adjacent month and keeps focus on the day.`]}),`
`,(0,w.jsx)(r.h3,{id:`custom-navigation-icons`,children:`Custom navigation icons`}),`
`,(0,w.jsxs)(r.p,{children:[`Different navigation icons can be used through the `,(0,w.jsx)(r.code,{children:`*ButtonIcon`}),` props, which each take the same value as the `,(0,w.jsx)(r.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` component’s `,(0,w.jsx)(r.code,{children:`svg`}),` prop.
Websites for the City of Amsterdam must use the default icons.
For right-to-left scripts, give a custom icon a `,(0,w.jsx)(r.code,{children:`data-directional="true"`}),` attribute so it mirrors like the default chevrons; see the `,(0,w.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs`,children:`localisation developer guide`}),`.`]}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsxs)(r.p,{children:[`The Date Picker is intentionally an inline component: the calendar sits directly in the page, not in a dropdown or popover opened from a field or button.
Finding the optimal date is a focused task for the user; placing it directly on the page makes it easier to use and gives it the space and attention it deserves.
If the layout truly has no room, placing the Date Picker inside a modal `,(0,w.jsx)(r.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` is an acceptable last resort.`]}),`
`,(0,w.jsx)(r.p,{children:`A date that falls outside the bounds is struck through rather than removed or greyed into the background.
It keeps its place in the grid, so the shape of the month stays intact and the reason a date cannot be chosen is visible rather than inferred from a gap.`}),`
`,(0,w.jsx)(r.p,{children:`The grid shows only the days of the month on view; the first week is padded with blank cells rather than the previous month’s tail.
Our palette has no comfortable way to mark another month’s dates as secondary, and without that a second set of the same day numbers — two 1sts, two 30ths — would confuse more than it clarifies.
Showing them would also raise a question the inline grid is better without: if someone picked a day carried in from a neighbouring month, should the grid jump to that month? Leaving those days out avoids it.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(r.p,{children:[`The grid takes its accessible name from the visible month caption, so screen readers announce which month is shown.
Each day button is labelled with its full date, including the weekday, so a day number is never read out of context.
In range mode, the start and end dates are announced as such; override `,(0,w.jsx)(r.code,{children:`rangeStartAccessibleName`}),` and `,(0,w.jsx)(r.code,{children:`rangeEndAccessibleName`}),` to localise these.`]}),`
`,(0,w.jsx)(r.p,{children:`Dates that cannot be chosen stay reachable with the keyboard and are still announced.
Someone moving through the month therefore learns which days are unavailable instead of finding the grid silently skip over them.`}),`
`,(0,w.jsxs)(r.p,{children:[`The month names, weekday names and spoken dates follow `,(0,w.jsx)(r.code,{children:`locale`}),`, while the navigation labels do not.
‘Localisation’ under ‘How to use’ lists the ones you have to set yourself, and leaving them unset is what produces the mix of two languages a screen reader would read out.`]}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),` – lets the user type a known date into a form field.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-navigation-calendar--docs`,children:`Calendar`}),` – displays content organised by date in a month view.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),g()})))()}T();export{C as default};