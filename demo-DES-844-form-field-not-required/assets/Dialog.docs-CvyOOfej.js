import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as s,ak as i,al as l,am as c,an as n}from"./index-CAcQpMuC.js";import{D as h,W as d,T as p,V as m}from"./Dialog.stories-Cv2d_8GG.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bn-iliHa.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Heading-DUu-96hO.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-DaVLp41G.js";import"./index.esm-DY3iRp4W.js";import"./Icon-msbkstIT.js";import"./Button-fZZcNY7w.js";import"./Paragraph-BWS5kDPY.js";const u=`<!-- @license CC0-1.0 -->

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

## References

- [HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [Return value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue)
- [Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
- [Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
`;/*@license CC0-1.0*/function a(t){const o={code:"code",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:h}),`
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
`,e.jsx(n,{of:m})]})}function H(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{H as default};
