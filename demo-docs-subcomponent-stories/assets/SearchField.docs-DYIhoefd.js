import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-vOAxTEsA.js";import{n as u,t as d}from"./DesignTokensTable-CxyzKbiG.js";import{t as f}from"./mdx-react-shim-BsCrKEji.js";import{Controlled as p,WithPlaceholder as m,n as h,t as g}from"./SearchField.stories-BmC2zMN3.js";import{Button as _,t as v}from"./SearchFieldButton.stories-CONc1Edn.js";import{Input as y,t as b}from"./SearchFieldInput.stories-y8UlQiox.js";var x,S,C=e((()=>{x={"search-field":{input:{"background-color":{$value:`{ams.inputs.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`{ams.inputs.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"border-style":{$value:`{ams.inputs.border-style}`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.inputs.border-width}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.inputs.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.inputs.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.inputs.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.inputs.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.inputs.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.inputs.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.inputs.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.inputs.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"box-shadow":{$value:`{ams.inputs.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}},invalid:{"border-color":{$value:`{ams.inputs.invalid.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.inputs.invalid.hover.border-color}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$value:`{ams.inputs.invalid.hover.box-shadow}`,$extensions:{"nl.amsterdam.type":`shadow`}}}},"cancel-button":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='M29.333 5.47 26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z'/></svg>")`,$extensions:{"nl.amsterdam.type":`backgroundImage`}},"block-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}},color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"inline-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}},placeholder:{color:{$value:`{ams.inputs.placeholder.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},S={ams:x}}));function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:g}),`
`,(0,E.jsx)(s,{}),`
`,(0,E.jsx)(l,{of:g}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(c,{}),`
`,(0,E.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsx)(t.p,{children:`A Search Field always combines an Input and a Button, as the example above shows.`}),`
`,(0,E.jsx)(t.h3,{id:`input`,children:`Input`}),`
`,(0,E.jsxs)(t.p,{children:[`The text input of the Search Field.
Its visually hidden `,(0,E.jsx)(t.code,{children:`label`}),` describes the field for screen readers.`]}),`
`,(0,E.jsx)(o,{of:y}),`
`,(0,E.jsx)(c,{of:y}),`
`,(0,E.jsx)(t.h3,{id:`button`,children:`Button`}),`
`,(0,E.jsxs)(t.p,{children:[`Submits the search.
It renders an icon-only Button whose `,(0,E.jsx)(t.code,{children:`children`}),` provide the accessible name.`]}),`
`,(0,E.jsx)(o,{of:_}),`
`,(0,E.jsx)(c,{of:_}),`
`,(0,E.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(t.p,{children:`Use a Search Field where the user needs to search through the content of the page or website.`}),`
`,(0,E.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsxs)(t.p,{children:[`You can use `,(0,E.jsx)(t.code,{children:`autofocus`}),` to place focus directly on a search field when the user arrives on a page.
However, use this feature with caution, as it can have negative consequences:`]}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsx)(t.li,{children:`For screen reader users, this may result in skipping important content above the search field.`}),`
`,(0,E.jsxs)(t.li,{children:[`On smaller devices, the use of `,(0,E.jsx)(t.code,{children:`autofocus`}),` may automatically scroll the page to the search field, potentially causing users to miss previous content.`]}),`
`,(0,E.jsx)(t.li,{children:`On touchscreen devices, this can trigger the keyboard to appear immediately, hiding important content.`}),`
`]}),`
`,(0,E.jsxs)(t.p,{children:[`Use `,(0,E.jsx)(t.code,{children:`autofocus`}),` only if the search field is at the beginning of a page and there are no other elements on a page that a user might want to interact with first.`]}),`
`,(0,E.jsxs)(t.p,{children:[`For more information: `,(0,E.jsx)(t.a,{href:`https://www.boia.org/blog/accessibility-tips-be-cautious-when-using-autofocus`,rel:`nofollow`,children:`Accessibility Tips: Be Cautious When Using Autofocus`})]}),`
`,(0,E.jsx)(t.p,{children:`Provide a label that describes the purpose of the search.`}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`with-placeholder`,children:`With placeholder`}),`
`,(0,E.jsx)(t.p,{children:`A Search Field can have a placeholder text.`}),`
`,(0,E.jsx)(o,{of:m}),`
`,(0,E.jsx)(t.h3,{id:`controlled-component`,children:`Controlled component`}),`
`,(0,E.jsx)(t.p,{children:`By default, the search field is not managed by React but by the browser.
However, it can be controlled by React.
If you enter a value in this search field and use the search Button or the Enter key, you will receive a notification.`}),`
`,(0,E.jsx)(o,{of:p}),`
`,(0,E.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,E.jsx)(t.p,{children:`Users can initiate a search by using the search button or the Enter key.`}),`
`,(0,E.jsxs)(t.p,{children:[`Both `,(0,E.jsx)(t.code,{children:`autocomplete`}),` and `,(0,E.jsx)(t.code,{children:`spellcheck`}),` are turned off by default.
These features can be disruptive for a user searching for part of a word, and `,(0,E.jsx)(t.code,{children:`autocomplete`}),` may interfere with an Autosuggest component.`]}),`
`,(0,E.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(t.p,{children:[`The component uses `,(0,E.jsx)(t.code,{children:`role="search"`}),` for the search landmark role.`]}),`
`,(0,E.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` – for free-text input that isn’t a search.`]}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(d,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),f(),a(),u(),C(),h(),v(),b()}))();export{T as default};