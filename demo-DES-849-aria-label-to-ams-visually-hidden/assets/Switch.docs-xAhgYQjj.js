import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as i,ak as a,al as r,am as c,an as l}from"./index-DZiMU9hz.js";import{S as h,W as m}from"./Switch.stories-B578q8_s.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BJS_ve27.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-DIJ7EKf7.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Label-DNXaCjsW.js";const d=`<!-- @license CC0-1.0 -->

# Switch

A switch is a control element to toggle between two different states quickly.
A switch applies to a page or the entire system, such as an on/off switch.

## Guidelines

- Switch only between two different states.
  It is a binary action.
- Use labels with a switch to make the action clear.
- The action takes place immediately when the user operates the switch.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html): it is both clear for a user and programmatically what the purpose of a form field is.

The Switch is an interactive element; general requirements and guidelines for interactive elements apply [here](/docs/docs-design-guidelines-interactive-elements--docs).

## References

- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Role switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
`;/*@license CC0-1.0*/function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(a,{children:d}),`
`,e.jsxs(n.p,{children:[`It can be used as a standalone component or as a form control element.
When used as a standalone component provide an `,e.jsx(n.code,{children:"aria-labelledby"})," property or a descriptive label in an ",e.jsx(n.code,{children:"ams-visually-hidden"}),` element to keep it accessible.
When used as a formcontrol, make sure to add the associated `,e.jsx(n.code,{children:"<Label>"})," component."]}),`
`,e.jsx(r,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(l,{of:m})]})}function S(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{S as default};
