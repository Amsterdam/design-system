import{n as e}from"./chunk-DnJy8xQt.js";import{Bt as t}from"./iframe-FQHjEkmN.js";import{r as n}from"./react-DSEp7hqw.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-CgP5W09g.js";import{n as l,t as u}from"./DesignTokensTable-BpD1KQH3.js";import{t as d}from"./mdx-react-shim-1tTK2K0S.js";import{Controlled as f,WithPlaceholder as p,n as m,t as h}from"./SearchField.stories-JldJRaPz.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

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
`})),v,y,b=e((()=>{v={"search-field":{input:{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},"cancel-button":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},"block-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}},color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"inline-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},y={ams:v}}));function x(e){let t={h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`with-placeholder`,children:`With placeholder`}),`
`,(0,C.jsx)(t.p,{children:`A Search Field can have a placeholder text.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`controlled-component`,children:`Controlled component`}),`
`,(0,C.jsx)(t.p,{children:`By default, the search field is not managed by React but by the browser.
However, it can be controlled by React.
If you enter a value in this search field and use the search Button or the Enter key, you will receive a notification.`}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};