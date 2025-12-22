import{j as e}from"./iframe-w94ru4Ue.js";import{useMDXComponents as s}from"./index-Bq7Cfrvq.js";import{M as i,f as r,P as l,h as c,i as o}from"./blocks-BYunJLRK.js";import{a as u,W as h,C as d}from"./SearchField.stories-BDBJhblW.js";import{D as p}from"./DesignTokensTable-BQOGlbBZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDwRgOZS.js";import"./Button-BDUB3bys.js";import"./Icon-Dxk4cTZn.js";const m=`<!-- @license CC0-1.0 -->

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

Search Field is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.
`,f={"search-field":{input:{"background-color":{value:"{ams.inputs.background-color}"},"border-color":{value:"{ams.inputs.border-color}"},"border-style":{value:"{ams.inputs.border-style}"},"border-width":{value:"{ams.inputs.border-width}"},color:{value:"{ams.inputs.color}"},"font-family":{value:"{ams.inputs.font-family}"},"font-size":{value:"{ams.inputs.font-size}"},"font-weight":{value:"{ams.inputs.font-weight}"},"line-height":{value:"{ams.inputs.line-height}"},"outline-offset":{value:"{ams.inputs.outline-offset}"},"padding-block":{value:"{ams.inputs.padding-block}"},"padding-inline":{value:"{ams.inputs.padding-inline}"},hover:{"box-shadow":{value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{value:"{ams.inputs.invalid.border-color}"},hover:{"border-color":{value:"{ams.inputs.invalid.hover.border-color}"},"box-shadow":{value:"{ams.inputs.invalid.hover.box-shadow}"}}},"cancel-button":{"background-image":{value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z'/></svg>")`},"block-size":{value:"{ams.typography.body-text.font-size}"},color:{value:"{ams.color.interactive.default}"},cursor:{value:"{ams.cursor.interactive}"},"inline-size":{value:"{ams.typography.body-text.font-size}"}},placeholder:{color:{value:"{ams.inputs.placeholder.color}"}}}}},v={ams:f};function a(t){const n={h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:u}),`
`,e.jsx(r,{children:m}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-placeholder",children:"With placeholder"}),`
`,e.jsx(n.p,{children:"A Search Field can have a placeholder text."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"controlled-component",children:"Controlled component"}),`
`,e.jsx(n.p,{children:`By default, the search field is not managed by React but by the browser.
However, it can be controlled by React.
If you enter a value in this search field and use the search Button or the Enter key, you will receive a notification.`}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:v})]})}function W(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{W as default};
