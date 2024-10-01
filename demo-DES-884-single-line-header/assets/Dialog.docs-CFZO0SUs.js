import{j as t}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as r,ak as a,al as l,am as h,an as n}from"./index-DDYKb9Jw.js";import{D as c,F as d,W as u,T as m,V as p}from"./Dialog.stories-BMxszLFB.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DBFtTgIR.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-CybY6CMG.js";import"./clsx-B-dksMZM.js";import"./index.esm-DUIRolM2.js";import"./Heading-DUu-96hO.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-BydeB_ot.js";import"./Icon-msbkstIT.js";const g=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(o){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...o.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(r,{of:c}),`
`,t.jsx(a,{children:g}),`
`,t.jsx(l,{}),`
`,t.jsx(h,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"form-in-a-dialog",children:"Form in a Dialog"}),`
`,t.jsxs(e.p,{children:["Set ",t.jsx(e.code,{children:'method="dialog"'}),` when using a form in Dialog.
This closes the Dialog when submitting the form.
Pass the submit Button to the `,t.jsx(e.code,{children:"footer"}),` prop,
and link it to the form by passing its `,t.jsx(e.code,{children:"id"})," to the Buttons ",t.jsx(e.code,{children:"form"}),` attribute.
The Dialog returns the value of the submit Button, so you can check which Button was clicked.
For more information, see `,t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"Handling the return value from the dialog (MDN)"}),"."]}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h3,{id:"with-scrollbar",children:"With scrollbar"}),`
`,t.jsx(e.p,{children:"Content taller than the dialog itself will scroll."}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(e.h3,{id:"trigger-button",children:"Trigger Button"}),`
`,t.jsx(e.p,{children:"Click or tap this Button to open the Dialog."}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h4,{id:"utility-functions",children:"Utility functions"}),`
`,t.jsxs(e.p,{children:["To open the Dialog, use ",t.jsx(e.code,{children:"Dialog.open(id)"}),` from the React package.
Pass the Dialog’s `,t.jsx(e.code,{children:"id"}),` to the function to select it.
To close the Dialog, use `,t.jsx(e.code,{children:"Dialog.close"}),"."]}),`
`,t.jsx(e.h3,{id:"vertically-stacked-buttons",children:"Vertically stacked Buttons"}),`
`,t.jsx(e.p,{children:`If the Buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
This can occur with a narrow Dialog, long Button labels, a large text size, or when zooming in.`}),`
`,t.jsx(n,{of:p})]})}function I(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{I as default};
