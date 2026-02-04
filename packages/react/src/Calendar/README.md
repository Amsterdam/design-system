<!-- @license CC0-1.0 -->

# React Calendar component

[Calendar documentation](../../../css/src/components/calendar/README.md)

## Modes

The `mode` prop determines how the Calendar behaves.

### Link

In `link` mode every date is a link, for example to a page listing the events on that date.
`linkTemplate` builds the target of each link; return `undefined` from it to render a date as plain text.
`linkComponent` lets a router supply its own link component, such as the one from Next.js.

```tsx
<Calendar linkComponent={Link} linkTemplate={(date) => `/agenda/${toISODate(date)}`} mode="link" />
```

### Single

In `single` mode the Calendar is a controlled picker for one date.
Pass `value` and `onChange` to manage the selected date.

```tsx
<Calendar mode="single" onChange={setDate} value={date} />
```

### Range

In `range` mode the Calendar is a controlled picker for a start and end date.
`value` is a `DateRange`; either endpoint may be `null` while the range is incomplete.

```tsx
<Calendar mode="range" onChange={setStay} value={stay} />
```

## Disabling dates

In the `single` and `range` modes, `isDateDisabled` prevents selection of individual dates, such as dates that are unavailable.
`minDate` and `maxDate` set the selectable bounds; they also disable month navigation once the target month falls outside them.
