import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as s,h as a,P as r,i as l}from"./index-DNYSKmlO.js";import{D as m}from"./Dialog.stories-CC7tort_.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DefeR1k_.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-B0AKU8Wx.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bv5DmutW.js";import"./Heading-BfwCY41a.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-CwFFXfEb.js";import"./Icon-BBW_x4VP.js";const h=`<!-- @license CC0-1.0 -->

# Dialog

A Dialog allows the user to focus on one task or a piece of information by popping up and blocking the page content until the modal task is completed or until the user dismisses the action.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
- Use a dialog for short and non-frequent tasks.
  Consider using the main flow for regular tasks.
- Wrap multiple buttons in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- To open the Dialog, use \`Dialog.open(dialogId)\` from the React package.
  To close it, use either \`Dialog.close\`, or a \`<form>\` as in the following example.

## Asking to confirm

Use a \`<form>\` when asking to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add \`method="dialog"\` to let the browser close the Dialog automatically when the form is submitted.

Wrap the buttons in an [Action Group](/docs/components-layout-action-group--docs) and place it in the \`footer\`.
This ensures correct whitespace and scrolling behaviour.
At the same time, this will position the buttons outside the \`form\` element.
Create an \`id\` for the form and add it to the submit Button’s \`form\` attribute to connect the two.

If the Action Group must be in the \`form\`, implement the whitespace and scrolling behaviour as well.
Add a medium bottom margin (\`ams-mb-m\`) to the element before it.
Make sure the content of the form scrolls if necessary, while the Action Group is visible at the bottom at all times.

The form returns the \`value\` of the submit Button, which allows inferring which Button the user clicked.
For more information, see [Handling the return value from the dialog (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog).

## Keyboard support

| key         | function                                                         |
| :---------- | :--------------------------------------------------------------- |
| Tab         | Moves focus to the next focusable element inside the dialog.     |
| Shift + Tab | Moves focus to the previous focusable element inside the dialog. |
| Escape      | Closes the dialog.                                               |

## Closing Dialog without submit

You can close a Dialog without submitting by using \`<button type="button" onClick={Dialog.close}>\`.

## References

- [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [Return value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
- [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
`;/*@license CC0-1.0*/function n(t){return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(s,{of:m}),`
`,o.jsx(a,{children:h}),`
`,o.jsx(r,{}),`
`,o.jsx(l,{})]})}function E(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n()}export{E as default};
