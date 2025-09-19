import{j as e}from"./iframe-BGTy-t07.js";import{useMDXComponents as s}from"./index-om9qwQov.js";import{M as a,c as i,P as r,e as l,f as d}from"./blocks-_ZgDL6rB.js";import{D as c,C as h}from"./Dialog.stories-D5fzP6Eo.js";import"./index-CLW2uSiG.js";import"./Heading-DDsDCI4K.js";import"./IconButton-iuueHw0m.js";import"./Icon-BpTtXdhX.js";const m=`<!-- @license CC0-1.0 -->

# Dialog

A popup window in which the user must perform an action to proceed.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
- Use a dialog for short and non-frequent tasks.
  Consider using the main flow for regular tasks.
- Wrap multiple buttons in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- To open the Dialog, use \`Dialog.open(dialogId)\` from the React package.
- To close it, either call the \`Dialog.close\` function or add a \`<form>\` as in the ‘confirmation’ example.

## Keyboard support

| key         | function                                                         |
| :---------- | :--------------------------------------------------------------- |
| Tab         | Moves focus to the next focusable element inside the dialog.     |
| Shift + Tab | Moves focus to the previous focusable element inside the dialog. |
| Escape      | Closes the dialog.                                               |

## References

- [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [Return value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
- [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
`;/*@license CC0-1.0*/function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(o.p,{children:["Use a ",e.jsx(o.code,{children:"form"}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(o.code,{children:'method="dialog"'}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,e.jsx(o.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",e.jsx(o.code,{children:"footer"}),`.
Add an `,e.jsx(o.code,{children:"id"})," to the form and use it in the ",e.jsx(o.code,{children:"form"}),` attribute of the buttons.
Set a `,e.jsx(o.code,{children:"value"}),` on each button to identify which one was clicked.
Consult `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"MDN"})," for more information."]}),`
`,e.jsx(d,{of:h})]})}function D(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{D as default};
