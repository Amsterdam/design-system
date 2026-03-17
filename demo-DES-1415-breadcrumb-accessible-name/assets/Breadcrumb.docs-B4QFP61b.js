import{j as e}from"./iframe-VF1ypXKz.js";import{useMDXComponents as i}from"./index-1wUx1e1-.js";import{M as s,e as a,f as r}from"./blocks-B_FrUEPA.js";import{a as l}from"./Breadcrumb.stories-BlMjLRCq.js";import{D as m}from"./DesignTokensTable-CACGKEwl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-OSZ0Tb3W.js";import"./BorderSample-CUfU7rKD.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-2ExY497W.js";import"./ColorSample-pBpkhOqk.js";import"./SpaceSample-CqzUMGrt.js";import"./TypographySample-D129P9R0.js";const d=`<!-- @license CC0-1.0 -->

# Breadcrumb

Shows the location of the page within the hierarchy of a website and allows navigating between levels.

## Guidelines

- Avoid it on pages with forms – it may distract users from their task or be mistaken for a progress indicator.
- A breadcrumb must not contain a link to the home page. It should not display more than 5 items.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
`,p={breadcrumb:{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},separator:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23000000' fill-rule='evenodd' d='m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z'/></svg>")`},"block-size":{$value:"1ex",$type:"dimension"},"inline-size":{$value:"1ex",$type:"dimension"},"margin-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},link:{color:{$value:"{ams.links.color}",$type:"color"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}}}}},u={ams:p};function o(t){const n={h2:"h2",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(s,{of:l}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(m,{tokens:u})]})}function D(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{D as default};
