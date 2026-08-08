import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BZDU6x-k.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./AlertDialog.stories-Drb5U1jk.js";import{n as y,r as b}from"./AlertDialogHeader.stories-DpFrZUVv.js";var x,S;function C(){return(C=e((()=>{x={"alert-dialog":{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.alert-dialog.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-radius":{$value:`0`,$extensions:{"nl.amsterdam.type":`borderRadius`}},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`borderWidth`}},"box-shadow":{$value:`none`,$extensions:{"nl.amsterdam.type":`shadow`}},"container-name":{$value:`{ams.query-containers.inline-size.container-name}`},"container-type":{$value:`inline-size`},"inline-size":{$value:`calc(100% - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.l})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-inline-size":{$value:{value:48,unit:`rem`},$type:`dimension`},"vi-medium":{"inline-size":{$value:`calc(100% - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}},"max-block-size":{$value:`calc(100dvh - 2 * {ams.space.xl})`,$extensions:{"nl.amsterdam.type":`dimension`}}},backdrop:{"background-color":{$value:`rgb(24 24 24 / 62.5%)`,$type:`color`}},header:{"column-gap":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"row-gap":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},body:{"min-block-size":{$value:`calc(2 * {ams.typography.body-text.font-size} * {ams.typography.body-text.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},footer:{"padding-block":{$value:`0 {ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"padding-block":{$value:`0 {ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.xl}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},error:{header:{"background-color":{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}}}},success:{header:{"background-color":{$value:`{ams.color.feedback.success}`,$extensions:{"nl.amsterdam.type":`color`}}}},warning:{header:{"background-color":{$value:`{ams.color.feedback.warning}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},S={ams:x}})))()}function w(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:v}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t,{of:v}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsx)(r.p,{children:`Compose an Alert Dialog from its Header, Body, and Footer subcomponents.
The Body holds the main content of the dialog and has no props of its own; the examples below show it in place.`}),`
`,(0,E.jsx)(r.h3,{id:`header`,children:`Header`}),`
`,(0,E.jsxs)(r.p,{children:[`The Header contains the title of the dialog.
Unlike a `,(0,E.jsx)(r.a,{href:`/docs/components-containers-modal-dialog--docs`,children:`Modal Dialog`}),`, it has no close button: an Alert Dialog is dismissed through an action in its Footer.
Pass `,(0,E.jsx)(r.code,{children:`severity`}),` to signal the significance of the message: it adds a matching icon before the title and fills the Header with the corresponding colour.
Place a single `,(0,E.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` in the Header; when a severity fills it, keep the Header to that heading, as smaller text on the fill does not always meet the contrast requirement.`]}),`
`,(0,E.jsx)(a,{of:y}),`
`,(0,E.jsx)(i,{of:y}),`
`,(0,E.jsx)(r.h3,{id:`footer`,children:`Footer`}),`
`,(0,E.jsxs)(r.p,{children:[`The Footer holds one Button or an `,(0,E.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` containing more of them.
It is required: as an Alert Dialog has no close button, the user needs at least one action here to respond and continue.`]}),`
`,(0,E.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(r.p,{children:`Use an Alert Dialog to interrupt the user with an important message that requires a response before they can continue.
It typically appears in reaction to a system event, such as an expiring session or a loss of data, rather than as part of the user’s own flow.
Interaction with the rest of the page is blocked until the user responds.`}),`
`,(0,E.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a `,(0,E.jsx)(r.a,{href:`/docs/components-containers-modal-dialog--docs`,children:`Modal Dialog`}),` for a task or message the user can dismiss without consequence, such as a form or a confirmation the user opened themselves.
The rule of thumb: if the dialog can be closed without the user making a choice, it is a Modal Dialog; if it demands a decision, it is an Alert Dialog.`]}),`
`,(0,E.jsx)(r.p,{children:`Use Alert Dialogs sparingly, as they interrupt the user and demand immediate attention.`}),`
`,(0,E.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsx)(r.p,{children:`Compose the dialog from its Header, Body, and Footer subcomponents, in that order.
Always provide at least one action in the Footer, so the user can respond and continue.`}),`
`,(0,E.jsxs)(r.p,{children:[`Give the dialog an accessible name and description.
Add an `,(0,E.jsx)(r.code,{children:`id`}),` to the Heading in the Header and pass it to the `,(0,E.jsx)(r.code,{children:`aria-labelledby`}),` prop of the dialog.
Add an `,(0,E.jsx)(r.code,{children:`id`}),` to the content in the Body and pass it to the `,(0,E.jsx)(r.code,{children:`aria-describedby`}),` prop, so assistive technologies announce the message together with the title.
Use heading level 1: an Alert Dialog is a new layer that covers the page, so its heading hierarchy starts over.`]}),`
`,(0,E.jsxs)(r.p,{children:[`To open the dialog, use `,(0,E.jsx)(r.code,{children:`AlertDialog.open`}),` from the React package.
It takes a CSS selector, so include the `,(0,E.jsx)(r.code,{children:`#`}),` when referencing an id: `,(0,E.jsx)(r.code,{children:`AlertDialog.open('#my-dialog')`}),`.
Alternatively, keep the dialog rendered and control it with the `,(0,E.jsx)(r.code,{children:`open`}),` prop and the `,(0,E.jsx)(r.code,{children:`onClose`}),` event – see `,(0,E.jsx)(r.a,{href:`#controlling-the-dialog-with-state`,children:`the ‘Controlled’ example`}),`.`]}),`
`,(0,E.jsxs)(r.p,{children:[`To close it, call the `,(0,E.jsx)(r.code,{children:`AlertDialog.close`}),` function from a button inside the dialog, or add a `,(0,E.jsx)(r.code,{children:`<form method="dialog">`}),` as in `,(0,E.jsx)(r.a,{href:`#asking-to-confirm`,children:`the ‘Asking to confirm’ example`}),`.`]}),`
`,(0,E.jsx)(r.h4,{id:`focusing-a-specific-element`,children:`Focusing a specific element`}),`
`,(0,E.jsxs)(r.p,{children:[`When an Alert Dialog opens (and no element has `,(0,E.jsx)(r.code,{children:`autofocus`}),`), the browser places focus on the first focusable element inside it, which is the first action in the Footer.`]}),`
`,(0,E.jsxs)(r.p,{children:[`To give another element the initial focus instead, add the `,(0,E.jsx)(r.code,{children:`autofocus`}),` attribute to it, or the `,(0,E.jsx)(r.code,{children:`autoFocus`}),` prop in React.
Don’t place focus on a destructive or irreversible action: a user confirming by reflex with Enter or Space could lose data.
When asking to confirm, focus the option that keeps the user’s data safe.`]}),`
`,(0,E.jsxs)(r.p,{children:[`For more information: `,(0,E.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog#accessibility`,rel:`nofollow`,children:`MDN: the dialog element`}),`.`]}),`
`,(0,E.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(r.h3,{id:`with-a-severity`,children:`With a severity`}),`
`,(0,E.jsxs)(r.p,{children:[`Pass `,(0,E.jsx)(r.code,{children:`severity`}),` to the Header to signal the significance of the message.
The Header shows a matching icon and takes on the severity’s colour.`]}),`
`,(0,E.jsx)(a,{of:p}),`
`,(0,E.jsx)(r.h3,{id:`asking-to-confirm`,children:`Asking to confirm`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a `,(0,E.jsx)(r.code,{children:`form`}),` when asking the user to confirm an action, e.g. through ‘Delete’ and ‘Cancel’ buttons.
Add `,(0,E.jsx)(r.code,{children:`method="dialog"`}),` to make the browser close the dialog when the form is submitted.
Add an `,(0,E.jsx)(r.code,{children:`id`}),` to the form and use it in the `,(0,E.jsx)(r.code,{children:`form`}),` attribute of the buttons in the Footer.
Set a `,(0,E.jsx)(r.code,{children:`value`}),` on each button to identify which one was clicked.
Consult `,(0,E.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog`,rel:`nofollow`,children:`MDN`}),` for more information.`]}),`
`,(0,E.jsx)(a,{of:h}),`
`,(0,E.jsx)(r.h3,{id:`reminding-the-user`,children:`Reminding the user`}),`
`,(0,E.jsx)(r.p,{children:`Open an Alert Dialog to remind the user of something time-sensitive, such as a session that is about to expire.
Offer a clear way to continue alongside a way to stop.`}),`
`,(0,E.jsx)(a,{of:m}),`
`,(0,E.jsx)(r.h3,{id:`controlling-the-dialog-with-state`,children:`Controlling the dialog with state`}),`
`,(0,E.jsxs)(r.p,{children:[`Keep the dialog rendered and pass a boolean to the `,(0,E.jsx)(r.code,{children:`open`}),` prop to open and close it from your application’s state.
The component calls `,(0,E.jsx)(r.code,{children:`showModal()`}),` and `,(0,E.jsx)(r.code,{children:`close()`}),` on the dialog element for you.
Listen to the `,(0,E.jsx)(r.code,{children:`onClose`}),` event to synchronise your state when the dialog closes itself, e.g. through the Escape key.
Don’t render the dialog conditionally: unmounting it while open skips the `,(0,E.jsx)(r.code,{children:`close`}),` event and the browser’s focus restoration.`]}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,E.jsxs)(r.p,{children:[`The Alert Dialog is a `,(0,E.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` for inline size, so elements inside it can adapt their appearance to the width of the dialog.`]}),`
`,(0,E.jsx)(r.h3,{id:`scrolling`,children:`Scrolling`}),`
`,(0,E.jsx)(r.p,{children:`Both the dialog and its Body can scroll.
If the content of the Body is taller than the available space, the Body scrolls while the Header and Footer remain visible.
In vertically short windows, or with strongly enlarged text, the Body keeps a minimum height of two lines of body text and the dialog itself scrolls instead.
This keeps all content reachable, up to a text size of 400%.`}),`
`,(0,E.jsx)(r.h3,{id:`keyboard-navigation`,children:`Keyboard navigation`}),`
`,(0,E.jsxs)(r.table,{children:[(0,E.jsx)(r.thead,{children:(0,E.jsxs)(r.tr,{children:[(0,E.jsx)(r.th,{style:{textAlign:`left`},children:`Key`}),(0,E.jsx)(r.th,{style:{textAlign:`left`},children:`Behaviour`})]})}),(0,E.jsxs)(r.tbody,{children:[(0,E.jsxs)(r.tr,{children:[(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Tab`}),(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Moves focus to the next focusable element inside the Alert Dialog.`})]}),(0,E.jsxs)(r.tr,{children:[(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Shift + Tab`}),(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Moves focus to the previous focusable element inside the Alert Dialog.`})]}),(0,E.jsxs)(r.tr,{children:[(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Arrow keys`}),(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Scroll the Body when it has focus and its content overflows.`})]}),(0,E.jsxs)(r.tr,{children:[(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Escape`}),(0,E.jsx)(r.td,{style:{textAlign:`left`},children:`Closes the Alert Dialog.`})]})]})]}),`
`,(0,E.jsxs)(r.p,{children:[`The NL Design System describes an Alert Dialog as not dismissable, to emphasise that the user should make a deliberate choice.
This component still lets the Escape key close it: that behaviour is built into the browser’s `,(0,E.jsx)(r.code,{children:`dialog`}),` element and recommended by the `,(0,E.jsx)(r.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/`,rel:`nofollow`,children:`WAI-ARIA Authoring Practices`}),` for the `,(0,E.jsx)(r.code,{children:`alertdialog`}),` role.
Removing it would trap keyboard users and diverge from the platform.
Design your flow so that closing the dialog with Escape is always safe, and never rely on the dialog staying open to prevent data loss.`]}),`
`,(0,E.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(r.p,{children:`The Header has no close button: an Alert Dialog asks for a decision, so its only ways out are the actions in the Footer and the Escape key.
When a severity fills the Header, the heading and icon keep the default dark text colour, which meets the contrast requirement on every severity colour where white text would not.`}),`
`,(0,E.jsx)(r.p,{children:`The dialog is sized against the window rather than against its content, so it opens at a predictable size, and a maximum width caps it on wide screens.
The Body reserves space for its scrollbar whether or not one appears, so its text does not shift sideways as content loads.`}),`
`,(0,E.jsx)(r.p,{children:`The Header, Body, and Footer are told apart by their padding alone.
In forced colours mode that is not enough, so the Header and Footer gain hairline separators marking the edges of the part that scrolls, and the dialog’s border keeps a floor of one pixel to hold its edge against the page behind.`}),`
`,(0,E.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(r.p,{children:[`The component renders a native `,(0,E.jsx)(r.code,{children:`dialog`}),` element and opens it with `,(0,E.jsx)(r.code,{children:`showModal()`}),`.
The browser then provides the modal behaviour: the rest of the page becomes `,(0,E.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert`,rel:`nofollow`,children:`inert`}),`, Tab stays inside the dialog without a focus trap of our own, the Escape key closes it, and focus returns to the triggering element on close.
The dialog is given the `,(0,E.jsx)(r.code,{children:`alertdialog`}),` role, which tells assistive technologies to announce it immediately and treat it as a message that requires a response.`]}),`
`,(0,E.jsxs)(r.p,{children:[`The dialog does not name or describe itself: it takes its accessible name from the element that `,(0,E.jsx)(r.code,{children:`aria-labelledby`}),` references, and announces the message that `,(0,E.jsx)(r.code,{children:`aria-describedby`}),` points to along with it.
It warns in the browser console when it has no accessible name.
`,(0,E.jsx)(r.a,{href:`#how-to-use`,children:`How to use`}),` covers providing both.`]}),`
`,(0,E.jsxs)(r.p,{children:[`A `,(0,E.jsx)(r.code,{children:`severity`}),` never relies on colour alone: it is always paired with a distinct icon and the heading text, so the meaning survives when the fill drops out, for example in forced colours mode.`]}),`
`,(0,E.jsxs)(r.p,{children:[`A scrolling Body takes keyboard focus in its own right, so someone navigating by keyboard can scroll long content with the arrow keys even when nothing inside it is focusable, as `,(0,E.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#keyboard`,rel:`nofollow`,children:`WCAG 2.1.1`}),` requires.
Chromium and Firefox already make an overflowing scroll container focusable; Safari does not, so the component makes the Body focusable itself.`]}),`
`,(0,E.jsx)(r.p,{children:`Scrolling of the page behind the dialog is suppressed while it is open.
Opening a modal does not lock scrolling on its own, and iOS Safari still needs JavaScript for a guarantee, so a gesture over the backdrop there can move the page underneath.`}),`
`,(0,E.jsx)(r.p,{children:`Note that an Alert Dialog requires JavaScript: without it, the dialog stays closed and its content stays hidden.`}),`
`,(0,E.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-containers-modal-dialog--docs`,children:`Modal Dialog`}),` – for a task or message the user can dismiss without consequence.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-feedback-alert--docs`,children:`Alert`}),` – conveys a message inline, without interrupting the user.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` – lays out multiple Buttons.`]}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),r(),d(),C(),g(),b()})))()}D();export{T as default};