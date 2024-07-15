import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import{ae as i,ak as r,al as h,am as c,an as s}from"./index-wrErclsg.js";import{H as d,L as l,S as p,I as g}from"./Heading.stories-BZt0mxW7.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-3wLV5nND.js";import"../sb-preview/runtime.js";import"./index-BMdlDBjA.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./decorators-DLPD6TOJ.js";import"./exampleContent-BEbrefRz.js";import"./Heading-DeQ6dQ2q.js";import"./clsx-B-dksMZM.js";import"./getHeadingElement-DiRwFEz7.js";import"./Column-Beeb86Y8.js";const u=`<!-- @license CC0-1.0 -->

# Heading

A heading conveys information about the content below it.
Use headings to allow the user to grasp the structure of the page quickly.

## Guidelines

- A heading describes the content beneath it.
- Do not use a heading for formatting and styling. Use it to represent the page’s structure.
- Use headings hierarchically, and do not skip heading levels.
  So, an \`h1\` heading should be followed by an \`h2\`, not an \`h3\`.

## Relevant WCAG Requirements

- [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/quickref/#qr-content-structure-separation-programmatic):
  Text that looks like a heading is also recognized as a heading by a computer.
  Using the correct heading level makes the page structure clear for all users.
- [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/quickref/#qr-navigation-mechanisms-skip): Headings can be used to navigate to the next section with the keyboard.
- [WCAG 2.4.6](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels): Use headings to describe the purpose or subject of the underlying content.
- [WCAG 2.4.10](https://www.w3.org/WAI/WCAG21/quickref/#qr-navigation-mechanisms-headings): Use headings to structure the content.

## References

- [W3C - Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- [A11Y project - Heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)
`;/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:d}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(h,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"levels",children:"Levels"}),`
`,e.jsx(n.p,{children:`Four levels of headings are available.
A page should contain only one Heading with level 1.
Do not skip heading levels.
User agents can use heading information to construct a table of contents for a document.`}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`It may be useful to display a heading in smaller font sizes.
We offer six sizes to match the list of `,e.jsx(n.a,{href:"?path=/docs/docs-design-guidelines-typography--docs",children:"Text Levels"}),`.
Be sure to maintain a consistent semantic hierarchy of heading levels.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"inverseColor"}),` prop if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(s,{of:g})]})}function z(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{z as default};
