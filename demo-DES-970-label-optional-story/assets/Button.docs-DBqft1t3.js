import{j as n}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as i,al as c,am as l,an as o}from"./index-BOKpCNQp.js";import{B as h,P as u,S as p,T as d,W as m,a as b}from"./Button.stories-ClAfwA9B.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DRIyz6ZT.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-BCCXlrck.js";import"./clsx-B-dksMZM.js";import"./index.esm-BBV4ZYo5.js";const w=`<!-- @license CC0-1.0 -->

# Button

Allows the user to perform actions and operate the user interface.

## Guidelines

- Choose a short label that describes the function of the button.
- Use the correct type of button for the corresponding application, e.g. \`type="submit"\` for the primary form button.
- Make sure one can operate a button through a keyboard.
- Wrap 2 or more consecutive buttons and/or links in an [Action Group](?path=/docs/components-buttons-action-group--docs).
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
`;/*@license CC0-1.0*/function r(e){const t={h2:"h2",h3:"h3",p:"p",...s(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{of:h}),`
`,n.jsx(i,{children:w}),`
`,n.jsx(c,{}),`
`,n.jsx(l,{}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(t.p,{children:`The most important call-to-action.
One primary Button may be used per screen.`}),`
`,n.jsx(o,{of:u}),`
`,n.jsx(t.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(t.p,{children:`Use the secondary Button for less prominent calls to action.
It is possible to use more than 1 secondary Button.`}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(t.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(t.p,{children:"Use tertiary Buttons for unimportant calls to action – as many as necessary."}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(t.h3,{id:"with-icon",children:"With icon"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(t.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,n.jsx(t.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.
This is fine.`}),`
`,n.jsx(o,{of:b})]})}function S(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{S as default};
