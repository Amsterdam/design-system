import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as i,al as c,am as l,an as o}from"./index-q0uQtRKA.js";import{B as h,P as u,S as d,T as p,W as m,a as w}from"./Button.stories-Ba1d1UX3.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-kdf7TQoG.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./index.esm-CE_10-MW.js";import"./clsx-B-dksMZM.js";import"./index.esm-7Qb7CtET.js";const b=`<!-- @license CC0-1.0 -->

# Button

Allows the user to perform actions and operate the user interface.

## Guidelines

- A short label text that describes the function of the button.
- A clear contrasting colour scheme so that it is easy to recognize and quickly locate.
- Use the correct type of button for the corresponding application.
  For example, a button within a form must always be of the type \`submit\`.
- Make sure one can operate a button through a keyboard.
- Primary, secondary and tertiary buttons can be used side by side.
  Skipping levels is allowed.

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
`;/*@license CC0-1.0*/function r(n){const t={h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(i,{children:b}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"primary",children:"Primary"}),`
`,e.jsx(t.p,{children:`The most important call-to-action.
One primary Button may be used per screen.`}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsx(t.p,{children:`Use the secondary Button for less prominent calls to action.
It is possible to use more than 1 secondary Button.`}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsx(t.p,{children:"Use tertiary Buttons for unimportant calls to action – as many as necessary."}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"with-icon",children:"With icon"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,e.jsx(t.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.
This is fine.`}),`
`,e.jsx(o,{of:w})]})}function S(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{S as default};
