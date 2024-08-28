import{j as o}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as l,am as c,an as n}from"./index-DmKHNmFL.js";import{D as h,W as d,T as p,V as u}from"./Dialog.stories-B-sb6mtz.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-YNOilpC9.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-CKMrc-NS.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./Heading-DUu-96hO.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-Dm87s2wh.js";import"./Icon-msbkstIT.js";const m=`<!-- @license CC0-1.0 -->

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

You can close a Dialog without submitting by using \`<button type="button" onClick={closeDialog}>\`.
This uses the \`closeDialog\` function from the React package.

## References

- [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [Return value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
- [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
`;/*@license CC0-1.0*/function i(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[`
`,`
`,o.jsx(a,{of:h}),`
`,o.jsx(r,{children:m}),`
`,o.jsx(l,{}),`
`,o.jsx(c,{}),`
`,o.jsx(t.h2,{id:"with-scrollbar",children:"With Scrollbar"}),`
`,o.jsx(t.p,{children:"Content taller than the dialog itself will scroll."}),`
`,o.jsx(n,{of:d,className:"ams-dialog-story"}),`
`,o.jsx(t.h2,{id:"open-dialog-button",children:"Open Dialog Button"}),`
`,o.jsx(t.p,{children:"Click or tap the button to open a dialog."}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(t.p,{children:"You can open the dialog using this code:"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-ts",children:`const openDialog = () => (document.querySelector("#openDialog") as HTMLDialogElement)?.showModal();
`})}),`
`,o.jsxs(t.p,{children:["To close it, use the the ",o.jsx(t.code,{children:"closeDialog"})," function from the React package."]}),`
`,o.jsx(t.h2,{id:"vertically-stacked-buttons",children:"Vertically Stacked Buttons"}),`
`,o.jsx(t.p,{children:`If the buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
This can occur with a narrow Dialog, long Button labels, a large text size or zooming in.`}),`
`,o.jsx(n,{of:u})]})}function B(e={}){const{wrapper:t}={...s(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{B as default};
