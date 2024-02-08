import{j as e}from"./index.esm-jvAqEAqV.js";import{M as i,d as r,P as c,e as l,f as s}from"./index-NJKYI2pn.js";import{S as h,D as m,W as d}from"./Switch.stories-0YH3xLhy.js";import{useMDXComponents as a}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-es2riYqe.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const p=`# Switch

A switch is a control element to toggle between two different states quickly.
A switch applies to a page or the entire system, such as an on/off switch.

## Guidelines

- Switch only between two different states.
  It is a binary action.
- Use labels with a switch to make the action clear.
- The action takes place immediately when the user operates the switch.

## Relevant WCAG Requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html): it is both clear for a user and programmatically what the purpose of a form field is.

The Switch is an interactive element; general requirements and guidelines for interactive elements apply [here](https://amsterdam.github.io/design-system/?path=/docs/docs-designrichtlijnen-interactieve-elementen--docs).

## References

- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Role switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
`;function o(n){const t=Object.assign({p:"p",code:"code",h2:"h2",h3:"h3"},a(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h}),`
`,e.jsx(r,{children:p}),`
`,e.jsxs(t.p,{children:[`It can be used as a standalone component or as a form control element.
When used as a standalone component provide an `,e.jsx(t.code,{children:"aria-label"})," or ",e.jsx(t.code,{children:"aria-labelledby"}),` prop to keep it accessible.
When used as a formcontrol, make sure to add the associated `,e.jsx(t.code,{children:"<FormLabel>"})," component."]}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(s,{of:d})]})}function S(n={}){const{wrapper:t}=Object.assign({},a(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{S as default};
