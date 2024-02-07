import{j as n}from"./index.esm-Oi0OnaUX.js";import{M as s,d as a,f as t}from"./index-ic9AFKtU.js";import{B as c,P as d,a as h,S as l,b as u,c as m,T as y,d as p,e as b,f as x,g as f,h as j,i as w,j as g}from"./Button.stories-sk1KTZF5.js";import{useMDXComponents as i}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-iFqRDiNE.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const W=`# Button

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
`;function o(r){const e=Object.assign({h2:"h2",p:"p",h3:"h3"},i(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(a,{children:W}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(e.h3,{id:"primary-with-icon-right",children:"Primary with icon right"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(e.h3,{id:"secondary-with-icon-right",children:"Secondary with icon right"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"secondary-with-badge-and-icon",children:"Secondary with badge and icon"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(e.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,n.jsx(t,{of:y}),`
`,n.jsx(e.h3,{id:"tertiary-with-icon-right",children:"Tertiary with icon right"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h2,{id:"disabled",children:"Disabled"}),`
`,n.jsx(e.h3,{id:"primary-1",children:"Primary"}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.h3,{id:"secondary-1",children:"Secondary"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h3,{id:"tertiary-1",children:"Tertiary"}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h2,{id:"busy",children:"Busy"}),`
`,n.jsx(e.h3,{id:"primary-2",children:"Primary"}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.h3,{id:"secondary-2",children:"Secondary"}),`
`,n.jsx(t,{of:w}),`
`,n.jsx(e.h3,{id:"tertiary-2",children:"Tertiary"}),`
`,n.jsx(t,{of:g})]})}function q(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{q as default};
