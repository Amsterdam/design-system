import{j as e}from"./iframe-57u3-cBE.js";import{useMDXComponents as i}from"./index-URNxHfqa.js";import{M as s,f as t,P as l,h as d,i as r}from"./blocks-2CDdM7at.js";import{D as c,C as m}from"./Dialog.stories-DgO5iQfY.js";import{D as p}from"./DesignTokensTable-3ORTI5Zu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Deq6Nar5.js";import"./Heading-DG5beig_.js";import"./IconButton-BDawF2Q6.js";import"./Icon-Dm3Nc9qK.js";import"./ColorSample-Dx8uBIa2.js";const u=`<!-- @license CC0-1.0 -->

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
`,h={dialog:{"background-color":{$value:"{ams.color.background}",$type:"color"},"border-color":{$value:"{ams.dialog.background-color}",$type:"color"},"border-style":{$value:"solid"},"border-width":{$value:"{ams.border.width.m}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},gap:{$value:"{ams.space.m}",$type:"dimension"},"inline-size":{$value:"calc(100% - 2 * {ams.space.l})",$type:"dimension"},"max-block-size":{$value:"calc(100dvh - 2 * {ams.space.l})",$type:"dimension"},"max-inline-size":{$value:{value:48,unit:"rem"},$type:"dimension"},medium:{"inline-size":{$value:"calc(100% - 2 * {ams.space.xl})",$type:"dimension"},"max-block-size":{$value:"calc(100dvh - 2 * {ams.space.xl})",$type:"dimension"}},backdrop:{"background-color":{$value:"rgb(24 24 24 / 62.5%)",$type:"color"}},header:{gap:{$value:"{ams.space.m}",$type:"dimension"},"padding-block":{$value:"{ams.space.l} 0",$type:"dimension"},"padding-inline":{$value:"{ams.space.l}",$type:"dimension"},medium:{"padding-block":{$value:"{ams.space.xl} 0",$type:"dimension"},"padding-inline":{$value:"{ams.space.xl}",$type:"dimension"}}},body:{"padding-block":{$value:"0"},"padding-inline":{$value:"{ams.space.l}",$type:"dimension"},medium:{"padding-inline":{$value:"{ams.space.xl}",$type:"dimension"}}},footer:{"padding-block":{$value:"0 {ams.space.l}",$type:"dimension"},"padding-inline":{$value:"{ams.space.l}",$type:"dimension"},medium:{"padding-block":{$value:"0 {ams.space.xl}",$type:"dimension"},"padding-inline":{$value:"{ams.space.xl}",$type:"dimension"}}}}},g={ams:h};function a(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(t,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.code,{children:"form"}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(n.code,{children:'method="dialog"'}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,e.jsx(n.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",e.jsx(n.code,{children:"footer"}),`.
Add an `,e.jsx(n.code,{children:"id"})," to the form and use it in the ",e.jsx(n.code,{children:"form"}),` attribute of the buttons.
Set a `,e.jsx(n.code,{children:"value"}),` on each button to identify which one was clicked.
Consult `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"MDN"})," for more information."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:g})]})}function C(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{C as default};
