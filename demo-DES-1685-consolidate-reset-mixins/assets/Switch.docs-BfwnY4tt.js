import{j as e}from"./iframe-BG8h5dDG.js";import{useMDXComponents as s}from"./index-fy_DqW2C.js";import{M as i,e as a,f as r,h as l,i as c}from"./blocks-CWwZ2wrD.js";import{a as m,W as h}from"./Switch.stories-jHuPY8wY.js";import{D as u}from"./DesignTokensTable-BKw71cSq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CflPTsRz.js";import"./BorderSample-Onq_290G.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-DZJKdDT6.js";import"./ColorSample-NXVSk_tz.js";import"./SpaceSample-8uJ0t7D6.js";import"./TypographySample-BncQwNzk.js";const d=`<!-- @license CC0-1.0 -->

# Switch

A switch is a control element to toggle between two different states quickly.
A switch applies to a page or the entire system, such as an on/off switch.

## Guidelines

- A Switch must have a label, and in most cases, this label should be visible.
- Switch only between two different states.
  It is a binary action.
- The action takes place immediately when the user operates the switch.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html): it is both clear for a user and programmatically what the purpose of a form field is.

Switch is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.

## References

- [Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Role switch](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role)
`,p={switch:{"background-color":{$value:"#767676",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"inline-size":{$value:{value:3.5,unit:"rem"},$type:"dimension"},thumb:{"background-color":{$value:"{ams.color.background}",$type:"color"},"block-size":{$value:{value:1.75,unit:"rem"},$type:"dimension"},"inline-size":{$value:{value:1.75,unit:"rem"},$type:"dimension"},hover:{"box-shadow":{$value:"0 0 0 {ams.border.width.m} {ams.switch.thumb.hover.color}"},color:{$value:"{ams.color.interactive.hover}",$type:"color"}}},checked:{"background-color":{$value:"{ams.color.interactive.default}",$type:"color"}},disabled:{"background-color":{$value:"{ams.color.interactive.disabled}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}}}},w={ams:p};function o(t){const n={h2:"h2",h3:"h3",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:m}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(u,{tokens:w})]})}function R(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{R as default};
