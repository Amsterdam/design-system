import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CsQBCrpc.js";import{n as p,r as m,t as h}from"./Switch.stories-Cz40RJ60.js";var g,_;function v(){return(v=e((()=>{g={switch:{"background-color":{$value:`#767676`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"inline-size":{$value:{value:3.5,unit:`rem`},$type:`dimension`},label:{"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`borderWidth`}}},thumb:{"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"block-size":{$value:{value:1.75,unit:`rem`},$type:`dimension`},"inline-size":{$value:{value:1.75,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`}},hover:{"box-shadow":{$type:`shadow`,$value:{offsetX:{value:0,unit:`rem`},offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:`{ams.border.width.m}`,color:`{ams.switch.thumb.hover.color}`}},color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}},checked:{"background-color":{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}}},disabled:{"background-color":{$value:`#d1d1d1`,$description:`A lighter grey than the default track, so a disabled switch reads as distinct from an enabled one.`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(r.p,{children:`Use a Switch to toggle between two different states.
It is a binary action.
The action takes place immediately when the user operates the switch.`}),`
`,(0,x.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsx)(r.p,{children:`A Switch must have a label, and in most cases, this label should be visible.`}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`with-label`,children:`With Label`}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`The track and the thumb are the whole of a Switch: a rounded bar with a circle that slides from one end to the other, and a colour change behind it.
There is no text inside it, so it needs no room for words in either state and stays the same width whichever way it is set.`}),`
`,(0,x.jsx)(r.p,{children:`The thumb moves by exactly the width of the track minus its borders, so it comes to rest flush against the end rather than at a distance measured separately for each size.`}),`
`,(0,x.jsx)(r.p,{children:`The slide and the colour change behind the thumb are animated only for users who have not asked for reduced motion.
Everyone else sees the new state at once, with no travel across the track.`}),`
`,(0,x.jsx)(r.p,{children:`The track carries a transparent border rather than none at all.
In forced colours mode a background is replaced by the system’s own, and the border is what remains to give the Switch an outline; a floor of one pixel keeps a theme from removing it by setting the token to zero.`}),`
`,(0,x.jsx)(r.p,{children:`Hovering puts a shadow around the thumb rather than moving or resizing it.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsx)(r.p,{children:`A Switch renders a checkbox marked as a switch, so it is announced as on or off rather than as checked or unchecked, and it is operated with Space like any other checkbox.`}),`
`,(0,x.jsxs)(r.p,{children:[`The visible track is an empty `,(0,x.jsx)(r.code,{children:`label`}),` that supplies no name.
A Switch therefore takes its name from a `,(0,x.jsx)(r.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` tied to it with `,(0,x.jsx)(r.code,{children:`htmlFor`}),`, which is what ‘How to use’ asks for; without one it is announced as an unnamed switch.`]}),`
`,(0,x.jsx)(r.p,{children:`The input is not hidden away: it is reduced to no width, which keeps it focusable, announced, and submitted with the form.
Its focus ring is moved onto the track so the ring surrounds the switch rather than a control with no size.`}),`
`,(0,x.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – when the choice is part of a form rather than an instant setting.`]}),`
`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};