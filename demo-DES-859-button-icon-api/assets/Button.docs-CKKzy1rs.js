import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as i}from"./index-BI1Biiay.js";import{ae as a,ak as s,al as c,am as l,an as t}from"./index-5dFSSweG.js";import{B as h,P as d,S as u,T as p,W as m,a as b,b as f,c as w}from"./Button.stories-BctH_02s.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BXOZkF1v.js";import"../sb-preview/runtime.js";import"./index-DJFdew98.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index.esm-DQgjFsBh.js";import"./clsx-B-dksMZM.js";import"./Icon-msbkstIT.js";const x=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function r(o){const n={h2:"h2",h3:"h3",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(s,{children:x}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsx(n.p,{children:`A primary button draws attention to the most important call to action.
Only one primary Button should be used per screen.`}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsx(n.p,{children:"Use a secondary button for other actions."}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsx(n.p,{children:`Tertiary buttons can be used to distinguish their importance from secondary buttons.
They are also a good choice for buttons with an icon only.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"with-icon",children:"With icon"}),`
`,e.jsx(n.p,{children:`Add an icon if it makes it easier or faster to understand its purpose.
The icon will appear after the label.`}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"with-icon-before",children:"With icon before"}),`
`,e.jsx(n.p,{children:"The icon can also appear before the label."}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h3,{id:"with-icon-only",children:"With icon only"}),`
`,e.jsx(n.p,{children:`A button may display an icon alone if its meaning is generally intuitive without a label:
Examples: audio and video controls, close (cross), delete (trash bin), download (downward arrow), favourite (heart), menu (hamburger), save (disk), search (magnifying glass), settings (gear or cog) and toggle (chevron).`}),`
`,e.jsx(n.p,{children:"You must still provide a label – it will be used to make the button accessible."}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,e.jsx(n.p,{children:`Keep in mind that the label may occasionally wrap over multiple lines:
a shorter text might be unavailable,
two buttons could sit next to each other on a narrow screen,
or the user has configured a large font on their device.
This is fine.`}),`
`,e.jsx(t,{of:w})]})}function B(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{B as default};
