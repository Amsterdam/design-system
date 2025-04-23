import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as s}from"./index-CxbY7dAs.js";import{M as l,h as r,P as a,i as c,j as t}from"./index-MiloE1hU.js";import{D as h,O as d,A as m,W as p}from"./Dialog.stories-CwHqrvJ9.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bo0BZDrk.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-EPWOvpi9.js";import"./clsx-B-dksMZM.js";import"./index.esm-CblzCDI2.js";import"./exampleContent-r-zRGsZY.js";import"./Heading-BfwCY41a.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-DHPKRPOt.js";import"./Icon-BBW_x4VP.js";const u=`<!-- @license CC0-1.0 -->

# Dialog

A Dialog allows the user to focus on one task or a piece of information by popping up and blocking the page content until the modal task is completed or until the user dismisses the action.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
- Use a dialog for short and non-frequent tasks.
  Consider using the main flow for regular tasks.
- Wrap multiple buttons in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).

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
`;/*@license CC0-1.0*/function i(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:h}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(a,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"open-and-close",children:"Open and close"}),`
`,e.jsxs(o.p,{children:["To open the Dialog, use ",e.jsx(o.code,{children:"Dialog.open(dialogId)"}),` from the React package.
To close the Dialog, use either `,e.jsx(o.code,{children:"Dialog.close"}),", or a ",e.jsx(o.code,{children:"<form>"})," as in the following example."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(o.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(o.p,{children:["Use a ",e.jsx(o.code,{children:"<form>"}),` when asking to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(o.code,{children:'method="dialog"'})," to let the browser close the Dialog automatically when the form is submitted."]}),`
`,e.jsxs(o.p,{children:["Wrap the buttons in an ",e.jsx(o.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",e.jsx(o.code,{children:"footer"}),`.
This ensures correct whitespace and scrolling behaviour.
At the same time, this will position the buttons outside the `,e.jsx(o.code,{children:"form"}),` element.
Create an `,e.jsx(o.code,{children:"id"})," for the form and add it to the submit Button’s ",e.jsx(o.code,{children:"form"})," attribute to connect the two."]}),`
`,e.jsxs(o.p,{children:["If the Action Group must be in the ",e.jsx(o.code,{children:"form"}),`, implement the whitespace and scrolling behaviour as well.
Add a medium bottom margin (`,e.jsx(o.code,{children:"ams-mb-m"}),`) to the element before it.
Make sure the content of the form scrolls if necessary, while the Action Group is visible at the bottom at all times.`]}),`
`,e.jsxs(o.p,{children:["The form returns the ",e.jsx(o.code,{children:"value"}),` of the submit Button, which allows inferring which Button the user clicked.
For more information, see `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"Handling the return value from the dialog (MDN)"}),"."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h3,{id:"tall-content-will-scroll",children:"Tall content will scroll"}),`
`,e.jsx(o.p,{children:"Content that doesn’t fit entirely in the Dialog will scroll."}),`
`,e.jsx(t,{of:p})]})}function R(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{R as default};
