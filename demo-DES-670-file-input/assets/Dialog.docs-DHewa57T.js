import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{M as a,d as i,P as l,e as c,f as n}from"./index-CyMpimE3.js";import{D as h,W as d,T as p,V as m}from"./Dialog.stories-D3C0fHQf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dxhw88fg.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Heading-CWbN3elW.js";import"./getHeadingElement-DiRwFEz7.js";import"./IconButton-CFmnpWmC.js";import"./index.esm-DQkeu4as.js";import"./VisuallyHidden-Db-04MJ9.js";import"./Icon-CuaumHXX.js";import"./Button-_hHZidVy.js";import"./Paragraph-C4jU4-Z4.js";const u=`<!-- @license CC0-1.0 -->

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

## Keyboard Support

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
`;function r(t){const o={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"with-scrollbar",children:"With Scrollbar"}),`
`,e.jsx(o.p,{children:"Content taller than the dialog itself will scroll."}),`
`,e.jsx(n,{of:d,className:"ams-dialog-story"}),`
`,e.jsx(o.h2,{id:"open-dialog-button",children:"Open Dialog Button"}),`
`,e.jsx(o.p,{children:"Click or tap the button to open a dialog."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.p,{children:"Some basic example code to open and close a dialog:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`const openDialog = () => (document.querySelector("#openDialog") as HTMLDialogElement)?.showModal();

const closeDialog = (e: MouseEvent<HTMLButtonElement>) => e.currentTarget.closest("dialog")?.close();
`})}),`
`,e.jsx(o.h2,{id:"vertically-stacked-buttons",children:"Vertically Stacked Buttons"}),`
`,e.jsx(o.p,{children:`If the buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
This can occur with a narrow Dialog, long Button labels, a large text size or zooming in.`}),`
`,e.jsx(n,{of:m})]})}function P(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{P as default};
