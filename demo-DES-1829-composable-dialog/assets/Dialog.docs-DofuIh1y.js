import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-DPJDk1iB.js";import{r as n}from"./react-8SOJ-g74.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DfAa5JVK.js";import{n as l,t as u}from"./DesignTokensTable-DqBxC2w1.js";import{t as d}from"./mdx-react-shim-CnC8HOLy.js";import{Confirmation as f,LegacyProps as p,n as m,t as h}from"./Dialog.stories-CzXEtvFC.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

# Dialog

A popup window in which the user must perform an action to proceed.

## Guidelines

- Use dialogs sparingly because they interrupt the user’s workflow.
  They can be useful for short, essential, non-frequent tasks.
  Consider just using the main flow for regular tasks.
- Compose the Dialog from its Header, Body, and Footer subcomponents.
- Wire \`aria-labelledby\` on the root Dialog to the \`id\` of the [Heading](/docs/components-text-heading--docs) in Dialog Header.
- Wrap multiple buttons in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- To open the Dialog, use \`Dialog.open(dialogId)\` from the React package.
- To close it, either call the \`Dialog.close\` function, or add a \`<form>\` like in the ‘Confirmation’ example.
- Dialog is a [query container](/docs/utilities-css-query-container--docs) for inline size, so that elements in it can adapt their appearance to the width of the dialog.
`})),v,y,b=e((()=>{v={dialog:{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.dialog.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`initial`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},"box-shadow":{$value:`initial`,$extensions:{"nl.amsterdam.type":`shadow`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`calc(100% - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-inline-size":{$value:{value:48,unit:`rem`},$type:`dimension`},medium:{"inline-size":{$deprecated:"Use `ams.dialog.vi-medium.inline-size` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`},"max-block-size":{$deprecated:"Use `ams.dialog.vi-medium.max-block-size` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`}},"vi-medium":{"inline-size":{$value:`calc(100% - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}}},backdrop:{"background-color":{$value:`rgb(24 24 24 / 62.5%)`,$type:`color`}},header:{gap:{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.l} 0`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-block":{$deprecated:"Use `ams.dialog.header.vi-medium.padding-block` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$deprecated:"Use `ams.dialog.header.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-block":{$value:`{ams.space.xl} 0`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},body:{"padding-block":{$value:`0`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-inline":{$deprecated:"Use `ams.dialog.body.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},footer:{"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},medium:{"padding-block":{$deprecated:"Use `ams.dialog.footer.vi-medium.padding-block` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$deprecated:"Use `ams.dialog.footer.vi-medium.padding-inline` instead. Will be removed on or after 2026-10-20.",$value:`initial`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,C.jsxs)(t.p,{children:[`Compose a Dialog from sub-components: `,(0,C.jsx)(t.code,{children:`Dialog.Header`}),`, `,(0,C.jsx)(t.code,{children:`Dialog.Body`}),`, `,(0,C.jsx)(t.code,{children:`Dialog.Footer`}),`, and the optional `,(0,C.jsx)(t.code,{children:`Dialog.CloseButton`}),`.
Wire `,(0,C.jsx)(t.code,{children:`aria-labelledby`}),` on the root `,(0,C.jsx)(t.code,{children:`Dialog`}),` to the `,(0,C.jsx)(t.code,{children:`id`}),` of the heading inside `,(0,C.jsx)(t.code,{children:`Dialog.Header`}),` so screen readers announce the dialog with its name.`]}),`
`,(0,C.jsx)(t.pre,{children:(0,C.jsx)(t.code,{className:`language-tsx`,children:`<Dialog aria-labelledby="dialog-label">
  <form>
    <Dialog.Header>
      <Heading id="dialog-label" level={1} size="level-3">
        Inloggen
      </Heading>
      <Dialog.CloseButton />
    </Dialog.Header>
    <Dialog.Body>…</Dialog.Body>
    <Dialog.Footer>
      <Button>Versturen</Button>
    </Dialog.Footer>
  </form>
</Dialog>
`})}),`
`,(0,C.jsx)(t.h2,{id:`keyboard-support`,children:`Keyboard support`}),`
`,(0,C.jsxs)(t.table,{children:[(0,C.jsx)(t.thead,{children:(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`key`}),(0,C.jsx)(t.th,{style:{textAlign:`left`},children:`function`})]})}),(0,C.jsxs)(t.tbody,{children:[(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Tab`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Moves focus to the next focusable element inside the dialog.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Moves focus to the previous focusable element inside the dialog.`})]}),(0,C.jsxs)(t.tr,{children:[(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Escape`}),(0,C.jsx)(t.td,{style:{textAlign:`left`},children:`Closes the dialog.`})]})]})]}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`asking-to-confirm`,children:`Asking to confirm`}),`
`,(0,C.jsxs)(t.p,{children:[`Use a `,(0,C.jsx)(t.code,{children:`form`}),` when asking the user to confirm an action, e.g. through ‘OK’ and ‘Cancel’ buttons.
Add `,(0,C.jsx)(t.code,{children:`method="dialog"`}),` to make the browser close the Dialog when the form is submitted.
Wrap multiple Buttons in an `,(0,C.jsx)(t.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` and place it in `,(0,C.jsx)(t.code,{children:`Dialog.Footer`}),`.
Add an `,(0,C.jsx)(t.code,{children:`id`}),` to the form and use it in the `,(0,C.jsx)(t.code,{children:`form`}),` attribute of the buttons.
Set a `,(0,C.jsx)(t.code,{children:`value`}),` on each button to identify which one was clicked.
Consult `,(0,C.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog`,rel:`nofollow`,children:`MDN`}),` for more information.`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h2,{id:`migrating-from-the-deprecated-props`,children:`Migrating from the deprecated props`}),`
`,(0,C.jsxs)(t.p,{children:[`The `,(0,C.jsx)(t.code,{children:`heading`}),`, `,(0,C.jsx)(t.code,{children:`footer`}),`, and `,(0,C.jsx)(t.code,{children:`closeButtonLabel`}),` props are deprecated and will be removed on or after 2026-11-06.
Replace them with the composable sub-components shown above.
The `,(0,C.jsx)(t.code,{children:`Dialog.open(id)`}),` and `,(0,C.jsx)(t.code,{children:`Dialog.close(event)`}),` static helpers are unaffected.`]}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsx)(t.li,{children:(0,C.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement`,rel:`nofollow`,children:`HTMLDialogElement`})}),`
`,(0,C.jsx)(t.li,{children:(0,C.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue`,rel:`nofollow`,children:`Return value`})}),`
`,(0,C.jsx)(t.li,{children:(0,C.jsx)(t.a,{href:`https://www.nngroup.com/articles/modal-nonmodal-dialog/`,rel:`nofollow`,children:`Modal & Nonmodal Dialogs: When (& When Not) to Use Them`})}),`
`,(0,C.jsx)(t.li,{children:(0,C.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,rel:`nofollow`,children:`Patterns`})}),`
`]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};