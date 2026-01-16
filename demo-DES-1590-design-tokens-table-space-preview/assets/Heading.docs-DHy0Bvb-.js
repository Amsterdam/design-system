import{j as e}from"./iframe-DN1PsjnQ.js";import{useMDXComponents as a}from"./index-CD60o7HG.js";import{M as o,f as r,P as h,h as l,i as t}from"./blocks-sznpum4J.js";import{H as d,L as g,a as c,b as p,c as m,S as u,I as y,W as f}from"./Heading.stories-DF_Forf7.js";import{D as v}from"./DesignTokensTable-DkKJ-pcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLOFbF8t.js";import"./exampleContent-Du2yH2Fl.js";import"./Heading-BuvCcS02.js";import"./BorderSample-BF3CZ4zg.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-aW27_Hi6.js";import"./SpaceSample-DVaUbdUo.js";const x=`<!-- @license CC0-1.0 -->

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
`,w={heading:{1:{"font-size":{$value:"{ams.typography.heading.1.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.1.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},2:{"font-size":{$value:"{ams.typography.heading.2.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.2.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},3:{"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},4:{"font-size":{$value:"{ams.typography.heading.4.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.4.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},5:{"font-size":{$value:"{ams.typography.heading.5.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.5.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},6:{"font-size":{$value:"{ams.typography.heading.6.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"line-height":{$value:"{ams.typography.heading.6.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}},color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-weight":{$value:"{ams.typography.heading.font-weight}",$type:"fontWeight"},"text-wrap":{$value:"{ams.typography.heading.text-wrap}"},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},j={ams:w};function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"levels",children:"Levels"}),`
`,e.jsx(n.p,{children:`We’ve limited the number of heading levels to four.
More detailed content should probably be split into multiple pages or have some sections merged.`}),`
`,e.jsx(n.h4,{id:"level-1",children:"Level 1"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h4,{id:"level-2",children:"Level 2"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h4,{id:"level-3",children:"Level 3"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h4,{id:"level-4",children:"Level 4"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:[`Sometimes, it may be visually more suitable to make a heading appear a bit smaller.
The `,e.jsx(n.code,{children:"size"}),` prop can be used for this.
Do so sparingly; the sizes have been designed to match their semantic level.
Ensure that you still select a level that accurately represents the section’s hierarchy.
These, for example, are all Headings at level 2, but with sizes 1 to 5:`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(n.p,{children:`Use the inverse colour if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(n.p,{children:[`Headings can be paired with an icon.
Use a `,e.jsx(n.a,{href:"/docs/components-layout-row--docs",children:"Row"})," and the ",e.jsx(n.code,{children:"size"})," prop of ",e.jsx(n.a,{href:"/docs/components-media-icon--docs",children:"Icon"})," to align them."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:j})]})}function S(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
