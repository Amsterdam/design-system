import{j as e}from"./iframe-CQQRxFAJ.js";import{useMDXComponents as s}from"./index-C60GPTyu.js";import{M as a,f as r,P as l,h as d,i as t}from"./blocks-CPYuMd3t.js";import{a as c,I as h,b as m,W as u}from"./Radio.stories-h_Gy_lQ-.js";import{D as v}from"./DesignTokensTable-BEgzEPgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BN6hoeRE.js";import"./ColorSample-DSM2JDal.js";const p=`<!-- @license CC0-1.0 -->

# Radio

Allows users to select one option from a list.

## Guidelines

- Do not assume that users will know how many options they can select based on the visual difference between Radios and Checkboxes alone.
  If needed, add a hint explaining this, for example, ‘Select one option’.
- Order Radios alphabetically by default.
  In some cases, it can be helpful to order them from most-to-least common options.
  For example, you could order options for ‘Where do you live?’ based on population size.
  However you should do this with extreme caution as it can reinforce bias.
  If in doubt, order alphabetically.
- Labels should be concise. Try to keep labels shorter than 4 words.
- Do not check a radio button initially.
  This prevents users from leaving the question unanswered.
  It also increases the chance of submitting a wrong answer.
- Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`,f={radio:{color:{$value:"{ams.color.text.default}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension"},"checked-indicator":{fill:{$value:"{ams.color.interactive.default}",$type:"color"},disabled:{fill:{$value:"{ams.color.interactive.disabled}",$type:"color"}},"disabled-invalid":{fill:{$value:"{ams.color.interactive.disabled}",$type:"color"},hover:{fill:{$value:"{ams.color.interactive.disabled}",$type:"color"}}},hover:{fill:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{fill:{$value:"{ams.color.interactive.invalid.default}",$type:"color"},hover:{fill:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},"hover-indicator":{hover:{stroke:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{hover:{stroke:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},circle:{fill:{$value:"{ams.color.background}",$type:"color"},stroke:{$value:"{ams.color.interactive.default}",$type:"color"},disabled:{stroke:{$value:"{ams.color.interactive.disabled}",$type:"color"}},"disabled-invalid":{stroke:{$value:"{ams.color.interactive.disabled}",$type:"color"},hover:{stroke:{$value:"{ams.color.interactive.disabled}",$type:"color"}}},hover:{stroke:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{stroke:{$value:"{ams.color.interactive.invalid.default}",$type:"color"},hover:{stroke:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},disabled:{color:{$value:"{ams.color.interactive.disabled}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},hover:{color:{$value:"{ams.color.interactive.hover}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},"icon-container":{"block-size":{$value:"calc({ams.radio.font-size} * {ams.radio.line-height})",$type:"dimension"},"inline-size":{$value:"{ams.radio.font-size}",$type:"dimension"}}}},y={ams:f};function n(i){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:p}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(o.p,{children:"Use a Field Set to group several Radios with a legend, description and / or an Error Message."}),`
`,e.jsxs(o.p,{children:["Add ",e.jsx(o.code,{children:'role="radiogroup"'}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,e.jsx(o.code,{children:"aria-required"}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,e.jsx(o.code,{children:"aria-required"})," on the individual Radios as well to ensure that screen readers can read it."]}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Field Set."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(o.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(o.p,{children:[`A Field Set with a Radio group can become invalid.
In this case, connect an Error Message to the Field Set.
Add an `,e.jsx(o.code,{children:"aria-describedby"})," attribute to the Field Set and provide the ",e.jsx(o.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(o.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(o.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(o.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,e.jsx(o.code,{children:"ams-radio__circle"}),", ",e.jsx(o.code,{children:"ams-radio__hover-indicator"})," and ",e.jsx(o.code,{children:"ams-radio__checked-indicator"}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:y})]})}function S(i={}){const{wrapper:o}={...s(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(n,{...i})}):n(i)}export{S as default};
