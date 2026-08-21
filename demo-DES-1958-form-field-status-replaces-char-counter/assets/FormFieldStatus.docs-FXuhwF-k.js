import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-msKSRvUz.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Bd9DOtn1.js";import{a as p,i as m,n as h,r as g,t as _}from"./FormFieldStatus.stories-BwxxnvJH.js";import{r as v,t as y}from"./FormFieldStatusCharacterCount.stories-C8IMPFCz.js";var b,x;function S(){return(S=e((()=>{b={"form-field-status":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},error:{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.xs}`,$description:`The space around the error state: between a status and the line reporting the error, and between that line’s icon and its text.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.xs}`,$description:`The space between the parts composed inside a Form Field Status, e.g. a character count and a checklist.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:_}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:_}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.p,{children:`NL Design System groups several statuses under this name, and lists Character Count as a synonym for it.
That is the part implemented here.`}),`
`,(0,T.jsx)(r.p,{children:`The container itself has no props to configure; the controls above set the props of the character count in this example.`}),`
`,(0,T.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsx)(r.p,{children:`Compose a Form Field Status from its parts.
FormFieldStatus.CharacterCount is the first of them, and counts the characters of a value towards the limit the field allows.`}),`
`,(0,T.jsx)(r.h3,{id:`charactercount`,children:`CharacterCount`}),`
`,(0,T.jsx)(r.p,{children:`Give it the current length of the value and the maximum the field allows.
It counts up towards that maximum, and reports the excess once the value passes it.`}),`
`,(0,T.jsx)(a,{of:y}),`
`,(0,T.jsx)(i,{of:y}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Only use a character count when there is a good reason for limiting the number of characters users can enter.
For example, if there is an indication that users are likely to enter more information than they need to.
Or when there is a legal or technical reason that means an entry must be no more than a certain number of characters.`}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsx)(r.p,{children:`If your users keep hitting the character limit imposed by the backend of your service then try to increase the limit rather than use a Form Field Status.`}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Place a Form Field Status below the field it reports on, never above it.
On a phone, the on-screen keyboard covers the bottom of the screen, and a status above the field is the one the user cannot see while typing.`}),`
`,(0,T.jsxs)(r.p,{children:[`Point the field at the status with `,(0,T.jsx)(r.code,{children:`aria-describedby`}),`, so its limit is known before the first character is typed rather than only after it.
NL Design System reports that JAWS can repeat the field's label each time the count is announced.
If you hear that, split the limit into a static description the field points at, and leave only the changing count in the Form Field Status.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Do not set `,(0,T.jsx)(r.code,{children:`maxlength`}),` on the field itself.
The status reports an excess rather than preventing it, which lets someone paste a full answer and then edit it down.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Pass a formatter to `,(0,T.jsx)(r.code,{children:`formatText`}),` and `,(0,T.jsx)(r.code,{children:`formatOverLimitText`}),` to render the text in another language, as 'Translated text' below shows.
Set `,(0,T.jsx)(r.code,{children:`lang`}),` on the component, or on an element containing it, when that language differs from the language of the page around it.`]}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`over-the-limit`,children:`Over the limit`}),`
`,(0,T.jsx)(r.p,{children:`Past the limit the count carries on, and a second line reports how far the value exceeds it.`}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`status-text`,children:`Status text`}),`
`,(0,T.jsx)(r.p,{children:`Anything passed as children is announced as it stands, for a status that counts nothing.`}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h3,{id:`translated-text`,children:`Translated text`}),`
`,(0,T.jsxs)(r.p,{children:[`The component displays its text in Dutch by default.
Pass one of the exported formatters – or a custom function – to `,(0,T.jsx)(r.code,{children:`formatText`}),` and `,(0,T.jsx)(r.code,{children:`formatOverLimitText`}),` to display it in another language.
The Arabic formatters apply Arabic number–noun agreement.
See the `,(0,T.jsx)(r.a,{href:`/docs/docs-guidelines-localisation--docs`,children:`Localisation guide`}),` for the tested locales.`]}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(r.p,{children:`Users will get updates at a pace that works best for the way they interact with the field.
This means:`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsx)(r.li,{children:`sighted users will see a count that updates as they type;`}),`
`,(0,T.jsx)(r.li,{children:`screen reader users will hear it when they stop typing.`}),`
`]}),`
`,(0,T.jsx)(r.p,{children:`This component does not restrict the user from entering information.
The user can enter more than the character limit, and is told in words how much of it is too much.`}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`A Form Field Status is small text below the field, in the ordinary text colour instead of greyed down, so a reader who needs to check it is not asked to read weaker text than the rest of the form.`}),`
`,(0,T.jsx)(r.p,{children:`Counting up towards the limit rather than down from it means the count says the same thing before and after the limit is passed.
The wording never has to switch from characters remaining to characters too many.`}),`
`,(0,T.jsx)(r.p,{children:`Past the limit the count stays where it is and a second line appears under it, so the running total remains available to write back towards.
Only that second line takes the error colour.
The count keeps the ordinary colour, which keeps it as readable past the limit as it is under it.`}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsx)(r.p,{children:`A Form Field Status is a status region, so screen readers announce a change without moving focus and without interrupting what is being read.
Someone typing hears it between words rather than after every keystroke, which is what 'Features' above describes.`}),`
`,(0,T.jsx)(r.p,{children:`The root is the only live region, however many parts are composed inside it.
A part carries no region of its own, so composing a second one adds to the announcement rather than competing with it.`}),`
`,(0,T.jsx)(r.p,{children:`Passing the limit is reported in words, next to a warning icon, rather than by the colour of the text alone.
The error is complete to a reader who cannot tell the red from the black, and to one who would otherwise have to weigh two numbers against each other to notice it.
The icon is decorative and adds nothing to the announcement.`}),`
`,(0,T.jsx)(r.p,{children:`The count is text the component writes itself rather than content passed in, so it inherits the page language whether or not that is the language it is written in.
'How to use' above says when to override that.`}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-text-area--docs`,children:`Text Area`}),` – the field a character count most often reports on.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` – for a validation error on the field itself, rather than a running status.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a field with its Label, description, and Error Message.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),p(),v()})))()}E();export{w as default};