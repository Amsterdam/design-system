import{j as e}from"./iframe-CXEcHPCS.js";import{useMDXComponents as o}from"./index-DKi0kqzi.js";import{M as i,f as a,P as r,h as l,i as c}from"./blocks-DRNchBCZ.js";import{a as h,W as m}from"./Switch.stories-ChjM9Cvi.js";import{D as d}from"./DesignTokensTable-iIScG0Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOSOlYin.js";const u=`<!-- @license CC0-1.0 -->

# Switch

A switch is a control element to toggle between two different states quickly.
A switch applies to a page or the entire system, such as an on/off switch.

## Guidelines

- A Switch must have a label, and in most cases, this label should be visible.
- Switch only between two different states.
  It is a binary action.
- The action takes place immediately when the user operates the switch.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html): it is both clear for a user and programmatically what the purpose of a form field is.

Switch is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.

## References

- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Role switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
`,w={switch:{"background-color":{value:"#767676"},cursor:{value:"{ams.cursor.interactive}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"inline-size":{value:"3.5rem"},thumb:{"background-color":{value:"{ams.color.background}"},"block-size":{value:"1.75rem"},"inline-size":{value:"1.75rem"},hover:{"box-shadow":{value:"0 0 0 {ams.border.width.m} {ams.switch.thumb.hover.color}"},color:{value:"{ams.color.interactive.hover}"}}},checked:{"background-color":{value:"{ams.color.interactive.default}"}},disabled:{"background-color":{value:"{ams.color.interactive.disabled}"},cursor:{value:"{ams.cursor.disabled}"}}}},p={ams:w};function s(t){const n={h2:"h2",h3:"h3",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(d,{tokens:p})]})}function A(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{A as default};
