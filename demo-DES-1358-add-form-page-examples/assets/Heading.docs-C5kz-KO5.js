import{j as e}from"./iframe-DZMt9dHt.js";import{useMDXComponents as a}from"./index-DE1K49iT.js";import{M as i,c as r,P as l,e as h,f as s}from"./blocks-Bra8KMg2.js";import{H as c,L as d,a as p,b as g,c as u,S as m,I as f,W as v}from"./Heading.stories-CCedPYHY.js";import"./index-6NTHo8Gb.js";import"./exampleContent-DRope23M.js";import"./Heading-BTnxqOKj.js";const w=`<!-- @license CC0-1.0 -->

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
- Use the \`size\` prop to make a Heading visually larger or smaller, but sparingly and consistently.
  - Content pages, e.g. for articles, products, events etc. must not use the size prop on their Headings.
  - Most Headings on overview pages, e.g. Card, Table of Content, and ‘Link Blocks’, use a size of ‘level-3’.
  - The same applies to large sections – e.g. Accordion, Alert, Dialog and the caption of a Table.
    Most of them can be given a different size if appropriate.

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
`,e.jsx(r,{children:w}),`
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
`,e.jsxs(n.p,{children:[`Sometimes, it may be visually more suitable to make a heading appear a bit smaller.
The `,e.jsx(n.code,{children:"size"}),` prop can be used for this.
Do so sparingly; the sizes have been designed to match their semantic level.
Ensure that you still select a level that accurately represents the section’s hierarchy.
These, for example, are all Headings at level 2, but with sizes 1 to 5:`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:[`Headings can be paired with an icon.
Use a `,e.jsx(n.a,{href:"/docs/components-layout-row--docs",children:"Row"})," and the ",e.jsx(n.code,{children:"size"})," prop of ",e.jsx(n.a,{href:"/docs/components-media-icon--docs",children:"Icon"})," to align them."]}),`
`,e.jsx(s,{of:v})]})}function k(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{k as default};
