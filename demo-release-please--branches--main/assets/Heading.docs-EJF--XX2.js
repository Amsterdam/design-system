import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-Dr8bxsPE.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{InverseColour as f,Level1 as p,Level2 as m,Level3 as h,Level4 as g,Sizes as _,WithIcon as v,n as y,t as b}from"./Heading.stories-cXiU-9xn.js";var x,S=e((()=>{x=`<!-- @license CC0-1.0 -->

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
`})),C,w,T=e((()=>{C={heading:{1:{"font-size":{$value:`{ams.typography.heading.1.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.1.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},2:{"font-size":{$value:`{ams.typography.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},3:{"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},4:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},5:{"font-size":{$value:`{ams.typography.heading.5.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.5.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},w={ams:C}}));function E(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,`
`,`
`,`
`,(0,O.jsx)(r,{of:b}),`
`,(0,O.jsx)(c,{children:x}),`
`,(0,O.jsx)(o,{}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,O.jsx)(t.h3,{id:`levels`,children:`Levels`}),`
`,(0,O.jsx)(t.p,{children:`We’ve limited the number of heading levels to four.
More detailed content should probably be split into multiple pages or have some sections merged.`}),`
`,(0,O.jsx)(t.h4,{id:`level-1`,children:`Level 1`}),`
`,(0,O.jsx)(s,{of:p}),`
`,(0,O.jsx)(t.h4,{id:`level-2`,children:`Level 2`}),`
`,(0,O.jsx)(s,{of:m}),`
`,(0,O.jsx)(t.h4,{id:`level-3`,children:`Level 3`}),`
`,(0,O.jsx)(s,{of:h}),`
`,(0,O.jsx)(t.h4,{id:`level-4`,children:`Level 4`}),`
`,(0,O.jsx)(s,{of:g}),`
`,(0,O.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,O.jsxs)(t.p,{children:[`Sometimes, it may be visually more suitable to make a heading appear a bit smaller.
The `,(0,O.jsx)(t.code,{children:`size`}),` prop can be used for this.
Do so sparingly; the sizes have been designed to match their semantic level.
Ensure that you still select a level that accurately represents the section’s hierarchy.
These, for example, are all Headings at level 2, but with sizes 1 to 5:`]}),`
`,(0,O.jsx)(s,{of:_}),`
`,(0,O.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,O.jsx)(t.p,{children:`Use the inverse colour if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,O.jsx)(s,{of:f}),`
`,(0,O.jsx)(t.h3,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,O.jsxs)(t.p,{children:[`Headings can be paired with an icon.
Use a `,(0,O.jsx)(t.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` and the `,(0,O.jsx)(t.code,{children:`size`}),` prop of `,(0,O.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` to align them.`]}),`
`,(0,O.jsx)(s,{of:v}),`
`,(0,O.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,O.jsx)(u,{tokens:w})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;e((()=>{O=t(),d(),i(),y(),S(),T(),l()}))();export{D as default};