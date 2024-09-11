import{j as t}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as r,ak as a,al as l,am as h,an as n}from"./index-B-euPsdf.js";import{D as c,W as d,T as u,V as p}from"./Dialog.stories-DSAno9sx.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CGOBCDO9.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-DOslqLVZ.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./Heading-DUu-96hO.js";import"./getHeadingTag-Dv1eMqvl.js";import"./IconButton-BgcGyAbu.js";import"./Icon-msbkstIT.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(e){const o={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...s(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(r,{of:c}),`
`,t.jsx(a,{children:m}),`
`,t.jsx(l,{}),`
`,t.jsx(h,{}),`
`,t.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(o.h3,{id:"with-scrollbar",children:"With scrollbar"}),`
`,t.jsx(o.p,{children:"Content taller than the dialog itself will scroll."}),`
`,t.jsx(n,{of:d,className:"ams-dialog-story"}),`
`,t.jsx(o.h3,{id:"trigger-button",children:"Trigger Button"}),`
`,t.jsx(o.p,{children:"Click or tap this Button to open the Dialog."}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(o.h4,{id:"utility-functions",children:"Utility functions"}),`
`,t.jsxs(o.p,{children:["To open the Dialog, use ",t.jsx(o.code,{children:"Dialog.open(id)"}),` from the React package.
Pass the Dialog’s `,t.jsx(o.code,{children:"id"}),` to the function to select it.
To close the Dialog, use `,t.jsx(o.code,{children:"Dialog.close"}),"."]}),`
`,t.jsx(o.h3,{id:"vertically-stacked-buttons",children:"Vertically stacked Buttons"}),`
`,t.jsx(o.p,{children:`If the Buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
This can occur with a narrow Dialog, long Button labels, a large text size, or when zooming in.`}),`
`,t.jsx(n,{of:p})]})}function S(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{S as default};
