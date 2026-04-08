import{n as e}from"./chunk-zsgVPwQN.js";import{Vt as t}from"./iframe-C1K9Nvqi.js";import{r as n}from"./react-C9HMM2xV.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DSwiD7AL.js";import{n as l,t as u}from"./DesignTokensTable-DNnELNAw.js";import{t as d}from"./mdx-react-shim-C_9LJs5Y.js";import{Primary as f,Secondary as p,Tertiary as m,TextWrapping as h,WithIcon as g,WithIconBefore as _,WithIconOnly as v,n as y,t as b}from"./Button.stories-A1I1nO7L.js";var x,S=e((()=>{x=`<!-- @license CC0-1.0 -->

# Button

Allows the user to perform an action or operate the interface.

## Guidelines

- Do not use a Button to link to another page.
  Use a [Standalone Link](https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs)
  or a [Call to Action Link](https://designsystem.amsterdam/?path=/docs/components-navigation-call-to-action-link--docs) instead,
  or an inline [Link](https://designsystem.amsterdam/?path=/docs/components-navigation-link--docs) in the running text.
- Describe the Button’s function through a short label.
- Use the verb’s infinitive form, such as “Verwijderen” or “Opslaan”, not “Verwijder” or “Sla op”.
- Use only 1 primary Button per screen.
- Wrap 2 or more consecutive buttons and/or links in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- Add \`type="submit"\` to make the Button submit a form.

## Relevant WCAG requirements

- [WCAG requirement 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception):
  You can activate the button with \`Enter\` or \`Space\`, and it is possible with ‘Tab’ the button to focus.
  Using \`Space\` does not result in scrolling the page.
- [WCAG requirement 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): the label of the button must be clear
- [WCAG requirement 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - do not use the \`mousedown\` event to activate the button, instead use the \`click\` event
  - \`mousedown\` may only be used if \`mouseup\` undoes the effect, for example, a “fast forward” button to fast-forward audio or video.
- [WCAG requirement 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): The button must be large enough to click, and small buttons should not be too close to another button.

## References

- [W3C - Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
`})),C,w,T=e((()=>{C={button:{"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{cursor:{$value:`{ams.cursor.disabled}`}},"icon-only":{"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}}},primary:{"background-color":{$value:`{ams.color.interactive.default}`,$type:`color`},"border-color":{$value:`{ams.color.interactive.default}`,$type:`color`},color:{$value:`{ams.color.text.inverse}`,$type:`color`},disabled:{"background-color":{$value:`{ams.color.interactive.disabled}`,$type:`color`},"border-color":{$value:`{ams.color.interactive.disabled}`,$type:`color`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$type:`color`},"border-color":{$value:`{ams.color.interactive.hover}`,$type:`color`}}},secondary:{"background-color":{$value:`{ams.color.background.default}`,$type:`color`},"border-color":{$value:`currentColor`,$type:`color`},color:{$value:`{ams.color.interactive.default}`,$type:`color`},disabled:{"border-color":{$value:`{ams.color.interactive.disabled}`,$type:`color`},color:{$value:`{ams.color.interactive.disabled}`,$type:`color`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:`{ams.border.width.s}`,color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}}},tertiary:{"background-color":{$value:`transparent`,$type:`color`},"border-color":{$value:`transparent`,$type:`color`},color:{$value:`{ams.color.interactive.default}`,$type:`color`},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`}},hover:{"border-color":{$value:`currentColor`,$type:`color`},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}}}}},w={ams:C}}));function E(e){let t={a:`a`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,`
`,`
`,`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(c,{children:x}),`
`,(0,O.jsx)(o,{}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,O.jsx)(t.h3,{id:`primary`,children:`Primary`}),`
`,(0,O.jsx)(t.p,{children:`A primary button draws attention to the most important call to action.`}),`
`,(0,O.jsx)(s,{of:f}),`
`,(0,O.jsx)(t.h3,{id:`secondary`,children:`Secondary`}),`
`,(0,O.jsx)(t.p,{children:`Use a secondary button for other actions.`}),`
`,(0,O.jsx)(s,{of:p}),`
`,(0,O.jsx)(t.h3,{id:`tertiary`,children:`Tertiary`}),`
`,(0,O.jsx)(t.p,{children:`Tertiary buttons can be used to distinguish their importance from secondary buttons.
They are also a good choice for buttons with an icon only.`}),`
`,(0,O.jsx)(s,{of:m}),`
`,(0,O.jsx)(t.h3,{id:`with-icon`,children:`With icon`}),`
`,(0,O.jsx)(t.p,{children:`Add an icon if it makes it easier or faster to understand its purpose.
The icon will appear after the label.`}),`
`,(0,O.jsx)(s,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`with-icon-before`,children:`With icon before`}),`
`,(0,O.jsx)(t.p,{children:`The icon can also appear before the label.`}),`
`,(0,O.jsx)(s,{of:_}),`
`,(0,O.jsx)(t.h3,{id:`with-icon-only`,children:`With icon only`}),`
`,(0,O.jsxs)(t.p,{children:[`A button can even consist of just an icon, but only one of our `,(0,O.jsx)(t.a,{href:`/docs/brand-assets-icons--docs#functional-icons`,children:`functional icons`}),`.
You must still provide a label to describe the button to users of screen readers.
If the icon-only button must align with text, use an `,(0,O.jsx)(t.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),` instead.`]}),`
`,(0,O.jsx)(s,{of:v}),`
`,(0,O.jsx)(t.h3,{id:`text-wrapping`,children:`Text wrapping`}),`
`,(0,O.jsx)(t.p,{children:`The label may occasionally wrap over multiple lines.
This can happen if no shorter text is available, two buttons sit next to each other on a narrow screen, or the user has configured a large font on their device.`}),`
`,(0,O.jsx)(s,{of:h}),`
`,(0,O.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,O.jsx)(u,{tokens:w})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),d(),i(),y(),S(),T(),l()}))();export{D as default};