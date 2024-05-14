import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{useMDXComponents as i}from"./index-DlpNa54Y.js";import{M as s,d as a,P as l,e as h,f as n}from"./index-CWWv1kTU.js";import{D as d,W as p,T as c,V as m}from"./Dialog.stories-DSIsxJAO.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BF84vEil.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./index-COebWTXQ.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Heading-mbayTkiK.js";import"./getHeadingElement-DiRwFEz7.js";import"./IconButton-B8Ra7ApA.js";import"./index.esm-DQkeu4as.js";import"./VisuallyHidden-Db-04MJ9.js";import"./Icon-tKAGJH_4.js";import"./Button-DXS7hO6e.js";import"./Paragraph-B6eM4Eli.js";const u=`<!-- @license CC0-1.0 -->

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
`;function r(o){const e={a:"a",h2:"h2",p:"p",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
`,t.jsx(a,{children:u}),`
`,t.jsx(l,{}),`
`,t.jsx(h,{}),`
`,t.jsx(e.h2,{id:"with-scrollbar",children:"With Scrollbar"}),`
`,t.jsx(e.p,{children:"Content taller than the dialog itself will scroll."}),`
`,t.jsx(n,{of:p,className:"ams-dialog-story"}),`
`,t.jsx(e.h2,{id:"open-dialog-button",children:"Open Dialog Button"}),`
`,t.jsx(e.p,{children:"Click or tap the button to open a dialog."}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"vertically-stacked-buttons",children:"Vertically Stacked Buttons"}),`
`,t.jsxs(e.p,{children:[`If the buttons don’t fit next to each other, they will stack vertically and stretch to the full width.
View this example in a narrow window, enlarge your browser’s text size, or `,t.jsx(e.a,{href:"?path=/story/components-containers-dialog--vertical-buttons&globals=viewport:phone",children:"use the ‘Phone’ size of the preview"}),"."]}),`
`,t.jsx(n,{of:m})]})}function V(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{V as default};
