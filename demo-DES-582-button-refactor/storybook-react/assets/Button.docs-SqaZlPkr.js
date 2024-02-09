import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{M as i,d as a,P as c,e as d,f as t}from"./index-0ouwGFBb.js";import{B as h,P as l,a as u,S as m,b as y,c as p,T as b,d as x,e as j,f,g as w,h as g,i as C,j as W}from"./Button.stories-kxXKDTIh.js";import{useMDXComponents as s}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-LTKdsC-5.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-gJiLc1M5.js";const A=`# Button

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
`;function o(r){const e=Object.assign({h2:"h2",p:"p",h3:"h3"},s(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:h}),`
`,n.jsx(a,{children:A}),`
`,n.jsx(c,{}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,n.jsx(t,{of:l}),`
`,n.jsx(e.h3,{id:"primary-with-icon-right",children:"Primary with icon right"}),`
`,n.jsx(t,{of:u}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"secondary-with-icon-right",children:"Secondary with icon right"}),`
`,n.jsx(t,{of:y}),`
`,n.jsx(e.h3,{id:"secondary-with-badge-and-icon",children:"Secondary with badge and icon"}),`
`,n.jsx(t,{of:p}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(e.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,n.jsx(t,{of:b}),`
`,n.jsx(e.h3,{id:"tertiary-with-icon-right",children:"Tertiary with icon right"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"disabled",children:"Disabled"}),`
`,n.jsx(e.h3,{id:"primary-1",children:"Primary"}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.h3,{id:"secondary-1",children:"Secondary"}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h3,{id:"tertiary-1",children:"Tertiary"}),`
`,n.jsx(t,{of:w}),`
`,n.jsx(e.h2,{id:"busy",children:"Busy"}),`
`,n.jsx(e.h3,{id:"primary-2",children:"Primary"}),`
`,n.jsx(t,{of:g}),`
`,n.jsx(e.h3,{id:"secondary-2",children:"Secondary"}),`
`,n.jsx(t,{of:C}),`
`,n.jsx(e.h3,{id:"tertiary-2",children:"Tertiary"}),`
`,n.jsx(t,{of:W})]})}function U(r={}){const{wrapper:e}=Object.assign({},s(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{U as default};
