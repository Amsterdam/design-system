import{j as e}from"./index.esm-Oi0OnaUX.js";import{M as s,d as a,f as t}from"./index-irE5XBgA.js";import{B as c,P as d,a as h,S as l,b as u,c as m,T as p,d as b,e as y,f as w,g as f}from"./Button.stories-CgPWTCOX.js";import{useMDXComponents as i}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-LzgjV4rW.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const x=`# Button

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
`;function r(o){const n=Object.assign({h2:"h2",p:"p",h3:"h3"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsx(n.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"primary-with-icon-right",children:"Primary with icon right"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsx(n.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"secondary-with-icon-right",children:"Secondary with icon right"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"secondary-with-badge-and-icon",children:"Secondary with badge and icon"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsx(n.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"tertiary-with-icon-right",children:"Tertiary with icon right"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.h3,{id:"primary-1",children:"Primary"}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h3,{id:"secondary-1",children:"Secondary"}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h3,{id:"tertiary-1",children:"Tertiary"}),`
`,e.jsx(t,{of:f})]})}function D(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{D as default};
