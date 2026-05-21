import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DHvoaJMD.js";import{r as n}from"./react-BxEM7q-b.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DcsQlnEi.js";import{n as l,t as u}from"./DesignTokensTable-CBGd-2fo.js";import{t as d}from"./mdx-react-shim-W34Gl12-.js";import{Confirmation as f,n as p,t as m}from"./Dialog.stories-Ca_Vapye.js";var h,g=e((()=>{h=`<!-- @license CC0-1.0 -->

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
`})),_,v,y=e((()=>{_={dialog:{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.dialog.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`initial`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},"box-shadow":{$value:`initial`,$extensions:{"nl.amsterdam.type":`shadow`}},gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`calc(100% - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-inline-size":{$value:{value:48,unit:`rem`},$type:`dimension`},medium:{"inline-size":{$deprecated:"Use `ams.dialog.vi-medium.inline-size` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`},"max-block-size":{$deprecated:"Use `ams.dialog.vi-medium.max-block-size` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`}},"vi-medium":{"inline-size":{$value:`calc(100% - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}}},backdrop:{"background-color":{$value:`rgb(24 24 24 / 62.5%)`,$type:`color`}},header:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.l} 0`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-block":{$deprecated:"Use `ams.dialog.header.vi-medium.padding-block` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$deprecated:"Use `ams.dialog.header.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-block":{$value:`{ams.space.xl} 0`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},body:{"padding-block":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-inline":{$deprecated:"Use `ams.dialog.body.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},footer:{"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-block":{$deprecated:"Use `ams.dialog.footer.vi-medium.padding-block` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$deprecated:"Use `ams.dialog.footer.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}}},v={ams:_}}));function b(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(r,{of:m}),`
`,(0,S.jsx)(c,{children:h}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(t.h3,{id:`asking-to-confirm`,children:`Asking to confirm`}),`
`,(0,S.jsxs)(t.p,{children:[`Use a `,(0,S.jsx)(t.code,{children:`form`}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,(0,S.jsx)(t.code,{children:`method="dialog"`}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,(0,S.jsx)(t.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` and place it in the `,(0,S.jsx)(t.code,{children:`footer`}),`.
Add an `,(0,S.jsx)(t.code,{children:`id`}),` to the form and use it in the `,(0,S.jsx)(t.code,{children:`form`}),` attribute of the buttons.
Set a `,(0,S.jsx)(t.code,{children:`value`}),` on each button to identify which one was clicked.
Consult `,(0,S.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog`,rel:`nofollow`,children:`MDN`}),` for more information.`]}),`
`,(0,S.jsx)(s,{of:f}),`
`,(0,S.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(u,{tokens:v})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=t(),d(),i(),p(),g(),y(),l()}))();export{x as default};