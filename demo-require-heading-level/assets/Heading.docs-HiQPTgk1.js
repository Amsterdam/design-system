import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as r}from"./index-BAvqEBP-.js";import{ae as i,aq as a,ar as l,as as h,at as s}from"./index-Dr7tI-jf.js";import{H as c,L as d,a as p,b as u,c as m,S as g,I as v}from"./Heading.stories-CIsD6GiV.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D7gcLsva.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-DmznEeWj.js";import"./clsx-B-dksMZM.js";import"./index.esm-X3U7dYaT.js";import"./exampleContent-CpGgN1Hc.js";import"./Heading-BAWainIw.js";import"./getHeadingTag-CSHQp8NE.js";const x=`<!-- @license CC0-1.0 -->

# Heading

Introduces a page section and describes the following content.

## Guidelines

- All headings together represent the document’s structure. Users of screen readers may use headings to navigate the page – an incorrect hierarchy will confuse them.
- Every page should contain one heading with level 1.
  The level of subsequent headings should be appropriate: a subsection must use one level higher than the section it belongs to.
  The \`level\` prop doesn’t have a default value; the correct level should be determined for each instance.
- Search engines give more weight to text in headers.
- Don’t use a Heading only to produce its appearance.

## Relevant WCAG requirements

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
`;/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:c}),`
`,e.jsx(a,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"levels",children:"Levels"}),`
`,e.jsx(n.p,{children:`We’ve limited the number of heading levels to four.
More detailed content should probably be split into multiple pages or have some sections merged.`}),`
`,e.jsx(n.h4,{id:"level-1",children:"Level 1"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h4,{id:"level-2",children:"Level 2"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h4,{id:"level-3",children:"Level 3"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h4,{id:"level-4",children:"Level 4"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`It may be visually more suitable to display a heading in a smaller font size.
Six sizes from the set of `,e.jsx(n.a,{href:"/docs/brand-design-tokens-text--docs",children:"Text Levels"}),` can be used for this purpose.
Ensure that you still select a level that accurately represents the section’s hierarchy.`]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"inverseColor"}),` prop if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(s,{of:v})]})}function D(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};
