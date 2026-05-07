<!-- @license CC0-1.0 -->

# Dialog

A popup window in which the user must perform an action to proceed.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
  They can be useful for short, essential, non-frequent tasks.
  Consider just using the main flow for regular tasks.
- Compose the Dialog from its Header, Body, and Footer subcomponents.
- Wire `aria-labelledby` on the root Dialog to the `id` of the [Heading](/docs/components-text-heading--docs) in Dialog Header.
- Wrap multiple buttons in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- To open the Dialog, use `Dialog.open(dialogId)` from the React package.
- To close it, either call the `Dialog.close` function, or add a `<form>` like in the ‘Confirmation’ example.
- Dialog is a [query container](/docs/utilities-css-query-container--docs) for inline size, so that elements in it can adapt their appearance to the width of the dialog.
