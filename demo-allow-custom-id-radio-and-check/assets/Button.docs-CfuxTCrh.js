import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as a,e as r,P as c,f as h,h as e}from"./index-AmuirC05.js";import{B as l,P as d,S as u,T as p,W as m,a as f,b,c as w}from"./Button.stories-Dl3Tqp11.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DRfxJP4L.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-D3RaMjqb.js";import"./Button-BZ209Iw2.js";import"./clsx-B-dksMZM.js";import"./Icon-Pril9caF.js";const x=`<!-- @license CC0-1.0 -->

# Button

Allows the user to perform an action or operate the interface.

## Guidelines

- Do not use a Button to link to another page.
  Use a [Standalone Link](https://designsystem.amsterdam/?path=/docs/components-navigation-standalone-link--docs)
  or a [Call to Action Link](https://designsystem.amsterdam/?path=/docs/components-navigation-call-to-action-link--docs) instead,
  or an inline [Link](https://designsystem.amsterdam/?path=/docs/components-navigation-link--docs) in the running text.
- Describe the Button’s function through a short label.
- Use the verb’s infinitive form, such as “Verwijderen” or “Opslaan”, not “Verwijder” or “Sla op”.
- Use only 1 primary Button per screen.
- Wrap 2 or more consecutive buttons and/or links in an [Action Group](https://designsystem.amsterdam/?path=/docs/components-layout-action-group--docs).
- Add \`type="submit"\` to make the Button submit a form.

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
`;/*@license CC0-1.0*/function s(o){const t={a:"a",h2:"h2",h3:"h3",p:"p",...i(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{of:l}),`
`,n.jsx(r,{children:x}),`
`,n.jsx(c,{}),`
`,n.jsx(h,{}),`
`,n.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(t.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(t.p,{children:"A primary button draws attention to the most important call to action."}),`
`,n.jsx(e,{of:d}),`
`,n.jsx(t.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(t.p,{children:"Use a secondary button for other actions."}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(t.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(t.p,{children:`Tertiary buttons can be used to distinguish their importance from secondary buttons.
They are also a good choice for buttons with an icon only.`}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(t.h3,{id:"with-icon",children:"With icon"}),`
`,n.jsx(t.p,{children:`Add an icon if it makes it easier or faster to understand its purpose.
The icon will appear after the label.`}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(t.h3,{id:"with-icon-before",children:"With icon before"}),`
`,n.jsx(t.p,{children:"The icon can also appear before the label."}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(t.h3,{id:"with-icon-only",children:"With icon only"}),`
`,n.jsxs(t.p,{children:["A button can even consist of just an icon, but only one of our ",n.jsx(t.a,{href:"/docs/brand-assets-icons--docs#functional-icons",children:"functional icons"}),`.
You must still provide a label to describe the button to users of screen readers.
If the icon-only button must align with text, use an `,n.jsx(t.a,{href:"/docs/components-buttons-icon-button--docs",children:"Icon Button"})," instead."]}),`
`,n.jsx(e,{of:b}),`
`,n.jsx(t.h3,{id:"text-wrapping",children:"Text wrapping"}),`
`,n.jsx(t.p,{children:`The label may occasionally wrap over multiple lines.
This can happen if no shorter text is available, two buttons sit next to each other on a narrow screen, or the user has configured a large font on their device.`}),`
`,n.jsx(e,{of:w})]})}function I(o={}){const{wrapper:t}={...i(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(s,{...o})}):s(o)}export{I as default};
