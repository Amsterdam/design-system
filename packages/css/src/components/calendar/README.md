<!-- @license CC0-1.0 -->

# Calendar

A visual way to navigate between dates using a calendar view.

## Guidelines

- Use this for a collection of content grouped by date, e.g. an event calendar.
- Display the month for the selected date; this may not be the current month.
- Use [Date Input](/docs/components-forms-date-input--docs) instead to let the user select a date in the context of a form.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.

For this component, use both `linkTemplate` and `linkComponent`, e.g.

```tsx
<Calendar linkComponent={Link} linkTemplate={(date) => `/agenda/${formatDate(date)}`} />
```
