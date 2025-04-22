import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as r,h as s,P as a,i as l,j as h}from"./index-Dzj4MOQ_.js";import{D as c,C as m}from"./Dialog.stories-BO73rsP1.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DMU38X0J.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-D-umWefS.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bv5DmutW.js";import"./v4-CtRu48qb.js";import"./Heading-BfwCY41a.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-CwFFXfEb.js";import"./Icon-BBW_x4VP.js";const d=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function t(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:c}),`
`,e.jsx(s,{children:d}),`
`,e.jsx(a,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(o.p,{children:["Use a ",e.jsx(o.code,{children:"<form>"}),` when asking to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(o.code,{children:'method="dialog"'})," to let the browser close the Dialog automatically when the form is submitted."]}),`
`,e.jsxs(o.p,{children:["Wrap the buttons in an ",e.jsx(o.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",e.jsx(o.code,{children:"footer"}),`.
This ensures correct whitespace and scrolling behaviour.
At the same time, this will position the buttons outside the `,e.jsx(o.code,{children:"form"}),` element.
Create an `,e.jsx(o.code,{children:"id"})," for the form and add it to the submit Button’s ",e.jsx(o.code,{children:"form"})," attribute to connect the two."]}),`
`,e.jsxs(o.p,{children:["If the Action Group must be in the ",e.jsx(o.code,{children:"form"}),`, implement the whitespace and scrolling behaviour as well.
Add a medium bottom margin (`,e.jsx(o.code,{children:"ams-mb-m"}),`) to the element before it.
Make sure the Action Group is visible at the bottom at all times.`]}),`
`,e.jsxs(o.p,{children:["The form returns the ",e.jsx(o.code,{children:"value"}),` of the submit Button, which allows inferring which Button the user clicked.
For more information, see `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"Handling the return value from the dialog (MDN)"}),"."]}),`
`,e.jsx(h,{of:m})]})}function U(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{U as default};
