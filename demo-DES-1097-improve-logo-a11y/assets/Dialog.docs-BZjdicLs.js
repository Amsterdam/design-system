import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as r,f as s,P as a,h as l,i as d}from"./index-C-h_YLS-.js";import{D as c,C as m}from"./Dialog.stories-B7SbdQGa.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DqbmKSfK.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-CzeA3yEM.js";import"./clsx-B-dksMZM.js";import"./index.esm-CblzCDI2.js";import"./v4-CtRu48qb.js";import"./Heading-7IbEntpa.js";import"./getHeadingTag-C4Rztoc8.js";import"./IconButton-DHPKRPOt.js";import"./Icon-BBW_x4VP.js";const h=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(r,{of:c}),`
`,o.jsx(s,{children:h}),`
`,o.jsx(a,{}),`
`,o.jsx(l,{}),`
`,o.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,o.jsx(e.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,o.jsxs(e.p,{children:["Use a ",o.jsx(e.code,{children:"form"}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,o.jsx(e.code,{children:'method="dialog"'}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,o.jsx(e.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",o.jsx(e.code,{children:"footer"}),`.
Add an `,o.jsx(e.code,{children:"id"})," to the form and use it in the ",o.jsx(e.code,{children:"form"}),` attribute of the buttons.
Set a `,o.jsx(e.code,{children:"value"}),` on each button to identify which one was clicked.
Consult `,o.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"MDN"})," for more information."]}),`
`,o.jsx(d,{of:m})]})}function U(n={}){const{wrapper:e}={...i(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t(n)}export{U as default};
