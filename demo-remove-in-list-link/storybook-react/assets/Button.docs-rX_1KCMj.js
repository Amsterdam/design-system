import{j as t}from"./index.esm-9d7ZuBKV.js";import{M as a,d as i,P as c,e as l,f as o}from"./index-_JHVf8pu.js";import{B as u,P as d,S as h,T as m}from"./Button.stories-nEPMWaTb.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-7dJ6qt8y.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const p=`# Button

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
`;function s(n){const e=Object.assign({h2:"h2",p:"p",h3:"h3"},r(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:u}),`
`,t.jsx(i,{children:p}),`
`,t.jsx(c,{}),`
`,t.jsx(l,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.p,{children:`Primary, secondary and tertiary buttons can be used side by side.
Skipping levels is allowed.`}),`
`,t.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,t.jsx(e.p,{children:`The most important call-to-action button.
One primary button may be used per screen.`}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,t.jsx(e.p,{children:`Use the secondary button for less prominent calls to action.
It is possible to use more than 1 secondary button.`}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,t.jsx(e.p,{children:"Use tertiary buttons for unimportant calls to action – as many as necessary."}),`
`,t.jsx(o,{of:m})]})}function M(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(s,n)})):s(n)}export{M as default};
