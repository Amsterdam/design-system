import{j as t}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import{ae as r,ak as i,al as c,am as l,an as e}from"./index-CLXq2edX.js";import{B as h,P as u,S as d,T as p,a as m,E as b,O as w,b as x}from"./Button.stories--UTUl39u.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-COiMH1rj.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-Bsc2owIZ.js";import"./clsx-B-dksMZM.js";import"./Icon-msbkstIT.js";const f=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(o){const n={h2:"h2",h3:"h3",p:"p",...a(),...o.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(r,{of:h}),`
`,t.jsx(i,{children:f}),`
`,t.jsx(c,{}),`
`,t.jsx(l,{}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,t.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(n.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,t.jsx(e,{of:u}),`
`,t.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,t.jsx(n.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,t.jsx(e,{of:d}),`
`,t.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,t.jsx(n.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,t.jsx(e,{of:p}),`
`,t.jsx(n.h3,{id:"button-with-a-start-icon",children:"Button with a start icon"}),`
`,t.jsx(e,{of:m}),`
`,t.jsx(n.h3,{id:"button-with-a-end-icon",children:"Button with a end icon"}),`
`,t.jsx(e,{of:b}),`
`,t.jsx(n.h3,{id:"button-with-an-icon-only",children:"Button with an icon only"}),`
`,t.jsx(e,{of:w}),`
`,t.jsx(n.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,t.jsx(n.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.
This is fine.`}),`
`,t.jsx(e,{of:x})]})}function B(o={}){const{wrapper:n}={...a(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(s,{...o})}):s(o)}export{B as default};