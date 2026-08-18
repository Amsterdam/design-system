import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable--FLJ5FG6.js";import{a as p,i as m,n as h,r as g,t as _}from"./ModalDialog.stories-LW3zBYLW.js";import{r as v,t as y}from"./ModalDialogHeader.stories-D4VBtFCk.js";var b,x;function S(){return(S=e((()=>{b={"modal-dialog":{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.modal-dialog.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`0`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`borderWidth`}},"box-shadow":{$value:`none`,$extensions:{"nl.amsterdam.type":`shadow`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"inline-size":{$value:`calc(100% - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-inline-size":{$value:{value:48,unit:`rem`},$type:`dimension`},"vi-medium":{"inline-size":{$value:`calc(100% - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}}},backdrop:{"background-color":{$value:`rgb(24 24 24 / 62.5%)`,$type:`color`}},header:{"column-gap":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},body:{"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"min-block-size":{$value:`calc(2 * {ams.typography.body-text.font-size} * {ams.typography.body-text.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},footer:{"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:h}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsx)(r.p,{children:`Compose a Modal Dialog from its Header, Body, and Footer subcomponents.
The Body holds the main content of the dialog and has no props of its own; the examples below show it in place.`}),`
`,(0,T.jsx)(r.h3,{id:`header`,children:`Header`}),`
`,(0,T.jsxs)(r.p,{children:[`The Header contains the title of the dialog and always renders a button to dismiss it.
Pass `,(0,T.jsx)(r.code,{children:`closeButtonAccessibleName`}),` to translate the name of that button for screen readers, and `,(0,T.jsx)(r.code,{children:`closeButtonSize`}),` to match the button to the size of your Heading.
Any content you add to the Header – a `,(0,T.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, a subtitle, or both – stacks to the left of the close button.`]}),`
`,(0,T.jsx)(a,{of:y}),`
`,(0,T.jsx)(i,{of:y}),`
`,(0,T.jsx)(r.h3,{id:`footer`,children:`Footer`}),`
`,(0,T.jsxs)(r.p,{children:[`The Footer holds one Button or an `,(0,T.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` containing more of them.
It is optional: a dialog can rely on the close button in the Header alone.`]}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Use a Modal Dialog for a self-contained task or message that needs the user’s full attention.
It can hold anything from a short message to a form for creating or editing content.
Interaction with the rest of the page is blocked until the dialog is closed.
Modal Dialogs suit applications best, where people carry out focused tasks as part of their work.`}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsx)(r.p,{children:`Use Modal Dialogs sparingly because they interrupt the user’s workflow.
Consider handling regular tasks in the main flow instead.
A Modal Dialog can always be dismissed without completing its task, so don’t use it for a message the user must act on.`}),`
`,(0,T.jsxs)(r.p,{children:[`On a public-facing website, keep a whole task out of a dialog.
Let people complete it inline or on a page of its own, so they keep the browser’s back button, a link they can share or bookmark, and their work if the page reloads.
When a website only needs a short confirmation or a yes/no question, use a `,(0,T.jsx)(r.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` instead.`]}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Compose the dialog from its Header, Body, and Footer subcomponents, in that order.`}),`
`,(0,T.jsxs)(r.p,{children:[`Give the dialog an accessible name.
Add an `,(0,T.jsx)(r.code,{children:`id`}),` to the Heading in the Header and pass it to the `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),` prop of the dialog.
Use heading level 1: a Modal Dialog is a new layer that covers the page, so its heading hierarchy starts over.`]}),`
`,(0,T.jsxs)(r.p,{children:[`To open the dialog, use `,(0,T.jsx)(r.code,{children:`ModalDialog.open`}),` from the React package.
It takes a CSS selector, so include the `,(0,T.jsx)(r.code,{children:`#`}),` when referencing an id: `,(0,T.jsx)(r.code,{children:`ModalDialog.open('#my-dialog')`}),`.
Alternatively, keep the dialog rendered and control it with the `,(0,T.jsx)(r.code,{children:`open`}),` prop and the `,(0,T.jsx)(r.code,{children:`onClose`}),` event – see `,(0,T.jsx)(r.a,{href:`#controlling-the-dialog-with-state`,children:`the ‘Controlled’ example`}),`.`]}),`
`,(0,T.jsxs)(r.p,{children:[`To close it, call the `,(0,T.jsx)(r.code,{children:`ModalDialog.close`}),` function from a button inside the dialog, or submit a `,(0,T.jsx)(r.code,{children:`<form method="dialog">`}),` inside it, as the form at the top of this page does.
Give each submit Button a `,(0,T.jsx)(r.code,{children:`value`}),` to identify which one closed the dialog; see `,(0,T.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog`,rel:`nofollow`,children:`MDN`}),` for handling the return value.
The Escape key always closes the dialog as well.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Wrap multiple buttons in an `,(0,T.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` and place it in the Footer.`]}),`
`,(0,T.jsx)(r.h4,{id:`focusing-a-specific-element`,children:`Focusing a specific element`}),`
`,(0,T.jsxs)(r.p,{children:[`By default the browser focuses the close button, so the user can read the dialog first.
To move the initial focus, add the `,(0,T.jsx)(r.code,{children:`autofocus`}),` attribute (`,(0,T.jsx)(r.code,{children:`autoFocus`}),` in React) to the element the user should act on first, such as a text field or the primary Button.
Do this sparingly, as focus that lands past the heading and body text makes screen reader users skip it.`]}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`with-a-subtitle`,children:`With a subtitle`}),`
`,(0,T.jsx)(r.p,{children:`Add a subtitle by placing a Paragraph after the Heading in the Header.
Both stack to the left of the close button.`}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h3,{id:`a-longer-body-that-scrolls`,children:`A longer body that scrolls`}),`
`,(0,T.jsx)(r.p,{children:`When the content is taller than the available space, the Body scrolls while the Header and Footer stay in view.
This keeps a longer task within reach – a form with many fields, or a text the user reads before deciding.`}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h3,{id:`controlling-the-dialog-with-state`,children:`Controlling the dialog with state`}),`
`,(0,T.jsxs)(r.p,{children:[`Keep the dialog rendered and pass a boolean to the `,(0,T.jsx)(r.code,{children:`open`}),` prop to open and close it from your application’s state.
The component calls `,(0,T.jsx)(r.code,{children:`showModal()`}),` and `,(0,T.jsx)(r.code,{children:`close()`}),` on the dialog element for you.
It never renders the `,(0,T.jsx)(r.code,{children:`open`}),` attribute, which would make the dialog non-modal.
Listen to the `,(0,T.jsx)(r.code,{children:`onClose`}),` event to synchronise your state when the dialog closes itself, e.g. through the Escape key.
Don’t render the dialog conditionally: unmounting it while open skips the `,(0,T.jsx)(r.code,{children:`close`}),` event and the browser’s focus restoration.`]}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsxs)(r.p,{children:[`The Modal Dialog is a `,(0,T.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` for inline size, so elements inside it can adapt their appearance to the width of the dialog.`]}),`
`,(0,T.jsx)(r.h3,{id:`scrolling`,children:`Scrolling`}),`
`,(0,T.jsx)(r.p,{children:`Both the dialog and its Body can scroll.
If the content of the Body is taller than the available space, the Body scrolls while the Header and Footer remain visible.
In vertically short windows, or with strongly enlarged text, the Body keeps a minimum height of two lines of body text and the dialog itself scrolls instead.
This keeps all content reachable, up to a text size of 400%.`}),`
`,(0,T.jsx)(r.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,T.jsxs)(r.table,{children:[(0,T.jsx)(r.thead,{children:(0,T.jsxs)(r.tr,{children:[(0,T.jsx)(r.th,{style:{textAlign:`left`},children:`Key`}),(0,T.jsx)(r.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,T.jsxs)(r.tbody,{children:[(0,T.jsxs)(r.tr,{children:[(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Tab`}),(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Moves focus to the next focusable element inside the Modal Dialog.`})]}),(0,T.jsxs)(r.tr,{children:[(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Moves focus to the previous focusable element inside the Modal Dialog.`})]}),(0,T.jsxs)(r.tr,{children:[(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Arrow keys`}),(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Scroll the Body when it has focus and its content overflows.`})]}),(0,T.jsxs)(r.tr,{children:[(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Escape`}),(0,T.jsx)(r.td,{style:{textAlign:`left`},children:`Closes the Modal Dialog.`})]})]})]}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`The Header always renders the close button, so the dialog can be dismissed at any point.
The button is pinned to the top right, next to the first line of the Header’s content, and its icon aligns with a level 2 heading by default.`}),`
`,(0,T.jsx)(r.p,{children:`The dialog is sized against the window rather than against its content, so it opens at a predictable size, and a maximum width caps it on wide screens.
The Body reserves space for its scrollbar whether or not one appears, so its text does not shift sideways as content loads.`}),`
`,(0,T.jsx)(r.p,{children:`The Header, Body, and Footer are told apart by their padding alone.
In forced colours mode that is not enough, so the Header and Footer gain hairline separators marking the edges of the part that scrolls, and the dialog’s border keeps a floor of one pixel to hold its edge against the page behind.`}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`The component renders a native `,(0,T.jsx)(r.code,{children:`dialog`}),` element and opens it with `,(0,T.jsx)(r.code,{children:`showModal()`}),`.
The browser then provides the modal behaviour: the rest of the page becomes `,(0,T.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert`,rel:`nofollow`,children:`inert`}),`, Tab stays inside the dialog without a focus trap of our own, the Escape key closes it, and focus returns to the triggering element on close.
The dialog has the `,(0,T.jsx)(r.code,{children:`dialog`}),` role and is marked as modal for assistive technologies automatically.`]}),`
`,(0,T.jsxs)(r.p,{children:[`The dialog does not name itself: it takes its accessible name from the element that `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),` references, and warns in the browser console when it has none.
`,(0,T.jsx)(r.a,{href:`#how-to-use`,children:`How to use`}),` covers providing that name.`]}),`
`,(0,T.jsxs)(r.p,{children:[`A scrolling Body takes keyboard focus in its own right, so someone navigating by keyboard can scroll long content with the arrow keys even when nothing inside it is focusable, as `,(0,T.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#keyboard`,rel:`nofollow`,children:`WCAG 2.1.1`}),` requires.
Chromium and Firefox already make an overflowing scroll container focusable; Safari does not, so the component makes the Body focusable itself.`]}),`
`,(0,T.jsx)(r.p,{children:`Scrolling of the page behind the dialog is suppressed while it is open.
Opening a modal does not lock scrolling on its own, and iOS Safari still needs JavaScript for a guarantee, so a gesture over the backdrop there can move the page underneath.`}),`
`,(0,T.jsx)(r.p,{children:`Note that a modal dialog requires JavaScript: without it, the dialog stays closed and its content stays hidden.`}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` – a smaller dialog for a short confirmation, question, or reminder.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-feedback-alert--docs`,children:`Alert`}),` – a message shown in place, without interrupting the user.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` – lays out multiple Buttons.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),p(),v()})))()}E();export{w as default};