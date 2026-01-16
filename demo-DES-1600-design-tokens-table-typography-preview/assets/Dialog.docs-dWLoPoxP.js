import{j as e}from"./iframe-uaZW1QRj.js";import{useMDXComponents as a}from"./index-CcoSkRW6.js";import{M as t,f as i,P as d,h as m,i as l}from"./blocks-DB728Lbc.js";import{D as r,C as p}from"./Dialog.stories-DMGsAPLU.js";import{D as c}from"./DesignTokensTable-BfPc17Y0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5Z1rLbs.js";import"./Heading-DNf_hvSS.js";import"./IconButton-ifCjTZdK.js";import"./Icon-CO4S4skG.js";import"./BorderSample-Cn7Ls_0h.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CWG4oLre.js";import"./SpaceSample-CfJsOf7z.js";import"./TypographySample-CWwRv-Hs.js";const u=`<!-- @license CC0-1.0 -->

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
`,h={dialog:{"background-color":{$value:"{ams.color.background}",$type:"color"},"border-color":{$value:"{ams.dialog.background-color}",$type:"color"},"border-style":{$value:"solid",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.border.width.m}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"inline-size":{$value:"calc(100% - 2 * {ams.space.l})",$type:"dimension"},"max-block-size":{$value:"calc(100dvh - 2 * {ams.space.l})",$type:"dimension"},"max-inline-size":{$value:{value:48,unit:"rem"},$type:"dimension"},medium:{"inline-size":{$value:"calc(100% - 2 * {ams.space.xl})",$type:"dimension"},"max-block-size":{$value:"calc(100dvh - 2 * {ams.space.xl})",$type:"dimension"}},backdrop:{"background-color":{$value:"rgb(24 24 24 / 62.5%)",$type:"color"}},header:{gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.space.l} 0",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},medium:{"padding-block":{$value:"{ams.space.xl} 0",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.xl}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}},body:{"padding-block":{$value:"0",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},medium:{"padding-inline":{$value:"{ams.space.xl}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}},footer:{"padding-block":{$value:"0 {ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},medium:{"padding-block":{$value:"0 {ams.space.xl}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.space.xl}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}}}},g={ams:h};function o(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(t,{of:r}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"asking-to-confirm",children:"Asking to confirm"}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.code,{children:"form"}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,e.jsx(n.code,{children:'method="dialog"'}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,e.jsx(n.a,{href:"/docs/components-layout-action-group--docs",children:"Action Group"})," and place it in the ",e.jsx(n.code,{children:"footer"}),`.
Add an `,e.jsx(n.code,{children:"id"})," to the form and use it in the ",e.jsx(n.code,{children:"form"}),` attribute of the buttons.
Set a `,e.jsx(n.code,{children:"value"}),` on each button to identify which one was clicked.
Consult `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog",rel:"nofollow",children:"MDN"})," for more information."]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:g})]})}function W(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{W as default};
