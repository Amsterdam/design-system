import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as r}from"./index-DSz_1G2r.js";import{M as i,d as a,P as d,e as l,f as n}from"./index-BqJ7K_sv.js";import{S as c,M as h,G as p,I as m,D as u}from"./Select.stories-By2CPlxI.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Q_byoBHc.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";import"./index.esm-D3Qr1elF.js";const x="<!-- @license CC0-1.0 -->\n\n# Select\n\nThe `Select` component is a form control that allows users to select one or more options from a list of options.\n\n## Keyboard navigation\n\nThis component supports the following keyboard navigation:\n\n- `Enter` or `Space` key to toggle the dropdown\n- `ArrowDown` or `ArrowUp` key to navigate through the options\n- `Home` or `End` key to navigate to the first or last option\n- `PageUp` or `PageDown` key to navigate to the previous or next group of options\n- `Escape` key to close the dropdown\n- `Tab` key to close the dropdown and move focus to the next focusable element\n- `Shift + Tab` key to close the dropdown and move focus to the previous focusable element\n- Select the item that starts with the typed character(s) when the dropdown is open\n\n## References\n\n- [Combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)\n- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)\n";function s(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(o.h1,{id:"default",children:"Default"}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(o.h2,{id:"multiple",children:"Multiple"}),`
`,e.jsxs(o.p,{children:["With ",e.jsx(o.code,{children:"multiple"})," enabled the attribute ",e.jsx(o.code,{children:"size"}),` is allowed to set the number of rows. Multi select is harder to use
on desktop as they require the user to hold down the `,e.jsx(o.code,{children:"Ctrl"})," or ",e.jsx(o.code,{children:"Cmd"}),` key while clicking on the options.
You might need to describe this behavior to the user. It is recommended to use checkboxes instead.
On the other hand, it is a good choice for mobile devices.`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(o.h2,{id:"grouped",children:"Grouped"}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.code,{children:"Select.Group"})," component to group options, the component requires a ",e.jsx(o.code,{children:"label"})," attribute."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(o.h2,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:u})]})}function A(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{A as default};
