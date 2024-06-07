import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as s}from"./index-CRbi4mQH.js";import{M as a,d as i,P as c,e as l,f as o}from"./index-BxoyavLT.js";import{B as h,P as u,S as d,T as p,W as m,a as b}from"./Button.stories-BmedJuFr.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-HvzHI3wP.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index.esm-DTv5ro-2.js";import"./Button-B8AXuJtG.js";import"./clsx-B-dksMZM.js";import"./Icon-j44OzEOs.js";const w=`<!-- @license CC0-1.0 -->

# Button

Allows the user to perform actions and operate the user interface.

## Guidelines

- A short label text that describes the function of the button.
- A clear contrasting colour scheme so that it is easy to recognize and quickly locate.
- Use the correct type of button for the corresponding application.
  For example, a button within a form must always be of the type \`submit\`.
- Make sure one can operate a button through a keyboard.

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
`;function r(n){const e={h2:"h2",h3:"h3",p:"p",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:h}),`
`,t.jsx(i,{children:w}),`
`,t.jsx(c,{}),`
`,t.jsx(l,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,t.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(e.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,t.jsx(o,{of:u}),`
`,t.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,t.jsx(e.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,t.jsx(e.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,t.jsx(o,{of:p}),`
`,t.jsx(e.h3,{id:"button-with-an-icon",children:"Button with an icon"}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(e.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,t.jsx(e.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.`}),`
`,t.jsx(o,{of:b})]})}function P(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{P as default};
