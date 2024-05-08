import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as a}from"./index-DSz_1G2r.js";import{M as i,d as s,P as c,e as h,f as o}from"./index-B1BwZVaA.js";import{S as l,W as u,C as p}from"./SearchField.stories-BV13pCZ3.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CgsDC06f.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Dkj0J1ds.js";import"./index-BLcLG51Y.js";import"./index-DrFu-skq.js";import"./SearchField-b9MhPl54.js";import"./clsx-B-dksMZM.js";import"./index.esm-DjZ2yxjc.js";import"./VisuallyHidden-DSeislZq.js";import"./Icon-DW52t4nJ.js";const d=`<!-- @license CC0-1.0 -->

# Search Field

Allows users to quickly find relevant content by entering a (part of a) word or phrase to search through the content.

## Guidelines

- Users can initiate a search by using the search button or the Enter key.

## Autofocus

You can use \`autofocus\` to place focus directly on a search field when the user arrives on a page.
However, use this feature with caution, as it can have negative consequences:

- For screen reader users, this may result in skipping important content above the search field.
- On smaller devices, the use of \`autofocus\` may automatically scroll the page to the search field, potentially causing users to miss previous content.
- On touchscreen devices, this can trigger the keyboard to appear immediately, hiding important content.

Use \`autofocus\` only if the search field is at the beginning of a page and there are no other elements on a page that a user might want to interact with first.

For more information: [Accessibility Tips: Be Cautious When Using Autofocus](https://www.boia.org/blog/accessibility-tips-be-cautious-when-using-autofocus)

## \`autocomplete\` and \`spellcheck\`

Both \`autocomplete\` and \`spellcheck\` are turned off by default.
These features can be disruptive for a user searching for part of a word, and \`autocomplete\` may interfere with an Autosuggest component.

## Relevant WCAG Requirements

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships): \`role="search"\` is used for the search landmark role.
- [WCAG 1.3.5](https://www.w3.org/TR/WCAG22/#identify-input-purpose): It is clear both to the user and programmatically what the purpose of a form field is.
- [WCAG 2.4.6](https://www.w3.org/TR/WCAG22/#headings-and-labels): There is a label describing the purpose of the input.

Search Field is an interactive element; therefore, [the general requirements and guidelines for interactive elements](/docs/docs-design-guidelines-interactive-elements--docs) apply.
`;function r(n){const t={h3:"h3",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(s,{children:d}),`
`,e.jsx(c,{}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h3,{id:"with-placeholder",children:"With placeholder"}),`
`,e.jsx(t.p,{children:"A Search Field can have a placeholder text."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t.h3,{id:"controlled-component",children:"Controlled component"}),`
`,e.jsx(t.p,{children:`By default, the search field is not managed by React but by the browser.
However, it can be controlled by React.
If you enter a value in this search field and use the search button or the Enter key, you will receive a notification.`}),`
`,e.jsx(o,{of:p})]})}function S(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{S as default};
