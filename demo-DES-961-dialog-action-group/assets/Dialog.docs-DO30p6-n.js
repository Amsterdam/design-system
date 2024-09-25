import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as s,ak as a,al as l,am as h,an as n}from"./index-D5xxp5Bh.js";import{D as c,O as d,A as m,W as u,V as p}from"./Dialog.stories-GFP-_-AB.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BfRxh9FL.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-Dsp8WWD2.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";import"./Heading-DUu-96hO.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-CifdSLJY.js";import"./Icon-msbkstIT.js";const f=`<!-- @license CC0-1.0 -->

# Dialog

A Dialog allows the user to focus on one task or a piece of information by popping up and blocking the page content until the modal task is completed or until the user dismisses the action.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
- Use a dialog for short and non-frequent tasks.
  Consider using the main flow for regular tasks.

## The order of buttons

If your Dialog needs more than one button, put the one for the primary action first and the other buttons behind it.
Sighted users will read the primary action first, in line with the natural reading order.
The same goes for users of screen readers, who will hear the primary action first, and users of a keyboard, who will focus the primary action first.
Also, this approach keeps the order of buttons consistent on both narrow and wide screens: if the buttons do not fit next to each other, they get stacked vertically with the primary action on top.

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
`;/*@license CC0-1.0*/function i(t){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"open-and-close",children:"Open and close"}),`
`,e.jsxs(o.p,{children:["To open the Dialog, use ",e.jsx(o.code,{children:"Dialog.open(dialogId)"}),` from the React package.
To close the Dialog, use either `,e.jsx(o.code,{children:"Dialog.close"}),", or a ",e.jsx(o.code,{children:"<form>"})," as in the following example."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(o.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(o.p,{children:["Use a ",e.jsx(o.code,{children:"<form>"}),` when asking to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(o.code,{children:'method="dialog"'})," to let the browser close the Dialog automatically when the form is submitted."]}),`
`,e.jsxs(o.p,{children:["Wrap one or more buttons in an Action Group and place it in the ",e.jsx(o.code,{children:"footer"}),`.
This ensures correct whitespace and scrolling behaviour.
At the same time, it positions the buttons outside the `,e.jsx(o.code,{children:"form"}),` element.
Create an `,e.jsx(o.code,{children:"id"})," for the form and add it to the submit Button’s ",e.jsx(o.code,{children:"form"})," attribute to connect the two."]}),`
`,e.jsxs(o.p,{children:["If the Action Group needs to live inside of the ",e.jsx(o.code,{children:"form"}),", add a medium bottom margin (",e.jsx(o.code,{children:"ams-mb--md"}),") to the element before it and make scrolling work correctly."]}),`
`,e.jsxs(o.p,{children:["The form returns the ",e.jsx(o.code,{children:"value"}),` of the submit Button, which allows inferring which Button the user clicked.
For more information, see `,e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"Handling the return value from the dialog (MDN)"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"tall-content-will-scroll",children:"Tall content will scroll"}),`
`,e.jsx(o.p,{children:"Content that doesn’t fit entirely in the Dialog will scroll."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"vertically-stacked-buttons",children:"Vertically stacked Buttons"}),`
`,e.jsx(o.p,{children:`If the Buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
This can occur with a narrow Dialog, long Button labels, a large text size, or when zooming in.`}),`
`,e.jsx(n,{of:p})]})}function U(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{U as default};
