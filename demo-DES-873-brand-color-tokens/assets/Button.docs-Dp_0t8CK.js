import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as i}from"./index-BAvqEBP-.js";import{ae as s,aq as a,ar as c,as as h,at as t}from"./index-BYCZsreW.js";import{B as l,P as d,S as u,T as p,W as m,a as b,b as f,c as w}from"./Button.stories-S5LSsOwS.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DB_LjtVx.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-X3U7dYaT.js";import"./Button-B0rxuroA.js";import"./clsx-B-dksMZM.js";import"./Icon-BoBhPfLP.js";const x=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function r(o){const e={h2:"h2",h3:"h3",p:"p",...i(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{of:l}),`
`,n.jsx(a,{children:x}),`
`,n.jsx(c,{}),`
`,n.jsx(h,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.p,{children:`A primary button draws attention to the most important call to action.
Only one primary Button should be used per screen.`}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:"Use a secondary button for other actions."}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(e.p,{children:`Tertiary buttons can be used to distinguish their importance from secondary buttons.
They are also a good choice for buttons with an icon only.`}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"with-icon",children:"With icon"}),`
`,n.jsx(e.p,{children:`Add an icon if it makes it easier or faster to understand its purpose.
The icon will appear after the label.`}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"with-icon-before",children:"With icon before"}),`
`,n.jsx(e.p,{children:"The icon can also appear before the label."}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.h3,{id:"with-icon-only",children:"With icon only"}),`
`,n.jsx(e.p,{children:`A button can even consist of an icon only.
Do this only for icons that are universally recognized.
You must still provide a label – it will be used to make the button accessible.`}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,n.jsx(e.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.
This is fine.`}),`
`,n.jsx(t,{of:w})]})}function P(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{P as default};
