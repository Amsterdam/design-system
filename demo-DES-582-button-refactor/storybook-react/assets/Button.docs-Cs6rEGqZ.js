import{j as t}from"./index.esm-JtMe0HO0.js";import{M as s,d as a,f as n}from"./index-zveacI6K.js";import{B as c,P as h,a as l,b as d,S as u,c as m,T as p,d as b}from"./Button.stories-3cQdwdQt.js";import{useMDXComponents as i}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-OXZ6E_Vx.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const w=`# Button

Allows the user to perform actions and operate the user interface.

## Guidelines

- A label text that describes the function of the button.
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
`;function r(o){const e=Object.assign({h2:"h2",p:"p",h3:"h3"},i(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(a,{children:w}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,t.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(e.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h3,{id:"primary-with-icon-right",children:"Primary with icon right"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(e.h3,{id:"primary-with-icon-left",children:"Primary with icon left"}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,t.jsx(e.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,t.jsx(n,{of:u}),`
`,t.jsx(e.h3,{id:"secondary-with-icon-right",children:"Secondary with icon right"}),`
`,t.jsx(n,{of:m}),`
`,t.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,t.jsx(e.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h3,{id:"tertiary-with-icon-right",children:"Tertiary with icon right"}),`
`,t.jsx(n,{of:b})]})}function R(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?t.jsx(e,Object.assign({},o,{children:t.jsx(r,o)})):r(o)}export{R as default};
