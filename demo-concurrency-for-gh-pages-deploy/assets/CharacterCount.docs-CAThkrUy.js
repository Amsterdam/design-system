import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-C8qI43rQ.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable--_vIT3wR.js";import{n as f,t as p}from"./StatusBadge-Dye32mSf.js";import{n as m,t as h}from"./CharacterCount.stories-D1_bTiW6.js";var g,_;function v(){return(v=e((()=>{g={"character-count":{color:{$deprecated:"Use `ams.form-field-status.color` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.color}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$deprecated:"Use `ams.form-field-status.font-family` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$deprecated:"Use `ams.form-field-status.font-size` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$deprecated:"Use `ams.form-field-status.font-weight` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$deprecated:"Use `ams.form-field-status.line-height` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},error:{color:{$deprecated:"Use `ams.form-field-status.error.color` instead. Will be removed on or after 2027-05-01.",$value:`{ams.form-field-status.error.color}`,$extensions:{"nl.amsterdam.type":`color`}}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...c(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(p,{description:`Use Form Field Status instead. This component will be removed on or after 2027-05-01.`,status:`deprecated`}),`
`,(0,x.jsx)(o,{of:h}),`
`,(0,x.jsx)(a,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsxs)(r.p,{children:[`Compose a `,(0,x.jsx)(r.code,{children:`FormFieldStatus.CharacterCount`}),` inside a `,(0,x.jsx)(r.a,{href:`/docs/components-forms-form-field-status--docs`,children:`Form Field Status`}),` instead.
It keeps the running count, and reports going over the limit in words next to an icon rather than by colour alone.
Pass a formatter to `,(0,x.jsx)(r.code,{children:`formatOverLimitText`}),` as well as to `,(0,x.jsx)(r.code,{children:`formatText`}),` when the text is not in Dutch.`]}),`
`,(0,x.jsx)(r.pre,{children:(0,x.jsx)(r.code,{className:`language-diff`,children:`- <CharacterCount length={length} maxLength={maxLength} />
+ <FormFieldStatus>
+   <FormFieldStatus.CharacterCount length={length} maxLength={maxLength} />
+ </FormFieldStatus>
`})}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(r.p,{children:`Only use a Character Count when there is a good reason for limiting the number of characters users can enter.
For example, if there is an indication that users are likely to enter more information than they need to.
Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.`}),`
`,(0,x.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsx)(r.p,{children:`If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a Character Count.`}),`
`,(0,x.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,x.jsx)(r.p,{children:`Users will get updates at a pace that works best for the way they interact with the textarea.
This means:`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsx)(r.li,{children:`sighted users will see a count message that updates as they type;`}),`
`,(0,x.jsx)(r.li,{children:`screen reader users will hear the count announcement when they stop typing.`}),`
`]}),`
`,(0,x.jsx)(r.p,{children:`This component does not restrict the user from entering information.
The user can enter more than the character limit; the count keeps going, so it reads ‘12 van 10 tekens’.
This lets them type or copy and paste their full answer, then edit it down.`}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`A Character Count is one line of small text below the field.
It keeps the ordinary text colour instead of being greyed down, so a reader who needs to check the count is not asked to read weaker text than the rest of the form.`}),`
`,(0,x.jsx)(r.p,{children:`Going over the limit turns it red, and that is the whole of the change: no icon, no border, and nothing about the field itself.`}),`
`,(0,x.jsx)(r.p,{children:`Counting up towards the limit rather than down from it means the message says the same thing before and after the limit is passed.
The wording never has to switch from characters remaining to characters too many.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsx)(r.p,{children:`A Character Count is a status region, so screen readers announce the new count without moving focus and without interrupting what is being read.
Someone typing hears the count between words rather than after every keystroke, which is what ‘Features’ above describes.`}),`
`,(0,x.jsx)(r.p,{children:`Going over the limit is signalled by colour alone, so the count itself has to be read for the change to register.
The text says the same thing either way, which is what keeps the message complete without the colour.`}),`
`,(0,x.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-forms-form-field-status--docs`,children:`Form Field Status`}),` – replaces this component, and reports going over the limit in words.`]}),`
`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(d,{tokens:_})]})}function b(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=s(),l(),r(),u(),f(),v(),m()})))()}S();export{b as default};