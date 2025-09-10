import{j as e}from"./iframe-CgF_2EnM.js";import{useMDXComponents as a}from"./index-D0tnN03x.js";import{M as i,c as r,P as l,e as h,f as s}from"./blocks-CkYTNB31.js";import{H as c,L as d,a as p,b as g,c as u,S as m,I as f,W as w}from"./Heading.stories-BNmC7ptd.js";import"./index-DJ9FfJ-B.js";import"./exampleContent-B7cDFRSs.js";import"./Heading-BkLBWldb.js";import"./getHeadingTag-C4Rztoc8.js";const v=`<!-- @license CC0-1.0 -->

# Heading

Introduces a page section and describes the following content.

## Guidelines

- Headings help the user scan the structure of a page.
  They also introduce the content that follows them.
- Users of screen readers often depend on headings to navigate a page.
  If the hierarchy is wrong, it can confuse them.
  That’s why it’s crucial to arrange headings properly.
- The \`level\` prop doesn’t have a default value; determine the correct level for each instance.
  - Every page should contain one heading with level 1.
  - Do not skip levels. For example, a level 2 Heading must be followed by one with level 3.
- Use the \`size\` prop to make a Heading visually larger or smaller, but sparingly and consistently:
  - Headings in large sections have size 3 Headings by default – e.g. Accordion, Alert, Dialog and the caption of a Table.
    Most of them can be given a different size if appropriate.
  - Smaller boxes get size 4 Headings, e.g. Card, Table of Content, and ‘Link blocks’:
    a Heading followed by one or more links and maybe some text.
    This is consistent and it fits their narrower width.

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
`;/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:c}),`
`,e.jsx(r,{children:v}),`
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
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h4,{id:"level-4",children:"Level 4"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`It may be visually more suitable to display a heading in a smaller font size.
Six sizes from the set of `,e.jsx(n.a,{href:"/docs/brand-design-tokens-typography--docs",children:"Text Levels"}),` can be used for this purpose.
Ensure that you still select a level that accurately represents the section’s hierarchy.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:[`Headings with level 3 to 6 can be paired with an icon.
Use a `,e.jsx(n.a,{href:"/docs/components-layout-row--docs",children:"Row"})," and the ",e.jsx(n.code,{children:"size"})," prop of ",e.jsx(n.a,{href:"/docs/components-media-icon--docs",children:"Icon"})," to align them."]}),`
`,e.jsx(s,{of:w})]})}function H(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{H as default};
