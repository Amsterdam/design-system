import{j as e}from"./iframe-BiErRGvs.js";import{useMDXComponents as r}from"./index-BVfInj7M.js";import{M as s,f as i,P as l,h as c,i as n}from"./blocks-BzC5Qy9m.js";import{B as d,P as u,S as h,T as m,W as p,a as b,b as v,c as f}from"./Button.stories-39g_6Eu4.js";import{D as g}from"./DesignTokensTable-6Gsg3hI7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdsl2Juj.js";import"./Button-BFosOkP-.js";import"./Icon-Db5Tg61B.js";const w=`<!-- @license CC0-1.0 -->

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
`,x={button:{"border-style":{value:"solid"},"border-width":{value:"{ams.border.width.m}"},cursor:{value:"{ams.cursor.interactive}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.inputs.line-height}"},gap:{value:"{ams.space.s}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"padding-block":{value:"{ams.space.s}"},"padding-inline":{value:"{ams.space.m}"},disabled:{cursor:{value:"{ams.cursor.disabled}"}},"icon-only":{"padding-block":{value:"{ams.space.s}"},"padding-inline":{value:"{ams.space.s}"}},primary:{"background-color":{value:"{ams.color.interactive.default}"},"border-color":{value:"{ams.color.interactive.default}"},color:{value:"{ams.color.text.inverse}"},disabled:{"background-color":{value:"{ams.color.interactive.disabled}"},"border-color":{value:"{ams.color.interactive.disabled}"}},hover:{"background-color":{value:"{ams.color.interactive.hover}"},"border-color":{value:"{ams.color.interactive.hover}"}}},secondary:{"background-color":{value:"{ams.color.background}"},"border-color":{value:"currentColor"},color:{value:"{ams.color.interactive.default}"},disabled:{"border-color":{value:"{ams.color.interactive.disabled}"},color:{value:"{ams.color.interactive.disabled}"}},hover:{"box-shadow":{value:"inset 0 0 0 {ams.border.width.s}"},color:{value:"{ams.color.interactive.hover}"}}},tertiary:{"background-color":{value:"transparent"},"border-color":{value:"transparent"},color:{value:"{ams.color.interactive.default}"},disabled:{color:{value:"{ams.color.interactive.disabled}"}},hover:{"border-color":{value:"currentColor"},color:{value:"{ams.color.interactive.hover}"}}}}},y={ams:x};function a(t){const o={a:"a",h2:"h2",h3:"h3",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:d}),`
`,e.jsx(i,{children:w}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"primary",children:"Primary"}),`
`,e.jsx(o.p,{children:"A primary button draws attention to the most important call to action."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(o.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsx(o.p,{children:"Use a secondary button for other actions."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(o.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsx(o.p,{children:`Tertiary buttons can be used to distinguish their importance from secondary buttons.
They are also a good choice for buttons with an icon only.`}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h3,{id:"with-icon",children:"With icon"}),`
`,e.jsx(o.p,{children:`Add an icon if it makes it easier or faster to understand its purpose.
The icon will appear after the label.`}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h3,{id:"with-icon-before",children:"With icon before"}),`
`,e.jsx(o.p,{children:"The icon can also appear before the label."}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(o.h3,{id:"with-icon-only",children:"With icon only"}),`
`,e.jsxs(o.p,{children:["A button can even consist of just an icon, but only one of our ",e.jsx(o.a,{href:"/docs/brand-assets-icons--docs#functional-icons",children:"functional icons"}),`.
You must still provide a label to describe the button to users of screen readers.
If the icon-only button must align with text, use an `,e.jsx(o.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"})," instead."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(o.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,e.jsx(o.p,{children:`The label may occasionally wrap over multiple lines.
This can happen if no shorter text is available, two buttons sit next to each other on a narrow screen, or the user has configured a large font on their device.`}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:y})]})}function D(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{D as default};
