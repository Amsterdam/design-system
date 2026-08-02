import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-w9lt6Sc1.js";import{i as p,n as m,r as h,t as g}from"./IconButton.stories-DKVB3IcN.js";var _,v;function y(){return(y=e((()=>{_={"icon-button":{color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},hover:{"background-color":{$value:`rgb(0 70 153 / 12.5%)`,$type:`color`},color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},contrast:{color:{$value:`{ams.color.interactive.contrast}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"background-color":{$value:`rgb(0 0 0 / 12.5%)`,$type:`color`},color:{$value:`{ams.color.interactive.contrast}`,$extensions:{"nl.amsterdam.type":`color`}}},disabled:{"background-color":{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}},inverse:{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"background-color":{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},disabled:{color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},"background-color":{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:m}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Choose an Icon Button instead of a regular Button when it must align with text.
Match the size of the Icon Button to the surrounding text.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Only `,(0,S.jsx)(r.a,{href:`/docs/brand-assets-icons--docs#functional-icons`,children:`functional icons`}),` belong in an Icon Button.
For other icons, use a `,(0,S.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` so that the user can read its label.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Do not use an Icon Button to submit a form; that is a `,(0,S.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),`’s job.
Even the one icon-only submit in the system — the search button — is a Button, not an Icon Button.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`An Icon Button still needs a label for screen reader users.
Provide it through the `,(0,S.jsx)(r.code,{children:`label`}),` prop; it is read aloud even though it is not shown.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`on-a-coloured-background`,children:`On a coloured background`}),`
`,(0,S.jsxs)(r.p,{children:[`An Icon Button on a coloured background must set `,(0,S.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours`,children:`the correct text colour`}),` to provide enough contrast.
We have light and dark background colours, and Icon Buttons behave differently on each.`]}),`
`,(0,S.jsx)(r.h4,{id:`contrast-colour`,children:`Contrast colour`}),`
`,(0,S.jsx)(r.p,{children:`Use the contrast colour on a lime, orange or yellow background.
It will make the icon black.`}),`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(r.h4,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,S.jsx)(r.p,{children:`Use the inverse colour on an azure, blue, green, magenta or purple background.
It will make the icon white.`}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`An Icon Button has no shape of its own: no border, no background, and no padding.
It takes up no more room than the icon it holds, which is what lets it sit inside a line of text without disturbing the line.`}),`
`,(0,S.jsx)(r.p,{children:`The icon is given a square box, so the area that responds to the pointer is a square centred on the icon rather than a shape that follows its outline.
Hovering tints that square with the icon’s own colour at one-eighth opacity instead of filling it, so the affordance appears without the icon shifting or changing weight.`}),`
`,(0,S.jsx)(r.p,{children:`The focus outline is offset from the icon rather than drawn against it, which keeps a thin glyph readable inside the ring.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`An Icon Button renders a `,(0,S.jsx)(r.code,{children:`button`}),` element and always writes its label into the markup, hidden visually.
Screen readers announce that label, so the button is never announced as unlabelled, and the icon contributes nothing to the name.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Its `,(0,S.jsx)(r.code,{children:`type`}),` defaults to `,(0,S.jsx)(r.code,{children:`button`}),` rather than `,(0,S.jsx)(r.code,{children:`submit`}),`, so it never submits a form by accident: a close button dismisses a Dialog through its click handler, not by submitting a form the Dialog may contain.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` – for actions that show a text label.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` – a non-interactive icon.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};