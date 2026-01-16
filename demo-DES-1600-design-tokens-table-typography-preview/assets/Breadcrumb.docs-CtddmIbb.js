import{j as e}from"./iframe-uaZW1QRj.js";import{useMDXComponents as i}from"./index-CcoSkRW6.js";import{M as o,f as a,P as r}from"./blocks-DB728Lbc.js";import{a as l}from"./Breadcrumb.stories-DBVaNwrC.js";import{D as m}from"./DesignTokensTable-BfPc17Y0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5Z1rLbs.js";import"./BorderSample-Cn7Ls_0h.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CWG4oLre.js";import"./SpaceSample-CfJsOf7z.js";import"./TypographySample-CWwRv-Hs.js";const d=`<!-- @license CC0-1.0 -->

# Breadcrumb

The breadcrumb is a secondary navigation pattern that helps a user understand the structure between levels in the website up to the current page.
Users can use it to navigate.

## Guidelines

- Only use the breadcrumb trail if it adds something functional for the user and the structure is ‘static’.
- Do not display the breadcrumb trail on a form page.
  It distracts the user from their task, or one can accidentally interpret it as a Progress Indicator.
- This is a secondary navigation pattern.
  It can’t replace the main navigation.

### Using links with routing libraries

Check out the [developer guide](/docs/docs-developer-guide-routing-libraries--docs) on how to integrate links with external routing libraries.
`,u={breadcrumb:{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},separator:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23000000' fill-rule='evenodd' d='m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z'/></svg>")`},"block-size":{$value:"1ex",$type:"dimension"},"inline-size":{$value:"1ex",$type:"dimension"},"margin-inline":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},link:{color:{$value:"{ams.links.color}",$type:"color"},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}}}}},c={ams:u};function s(n){const t={h2:"h2",li:"li",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:l}),`
`,e.jsx(a,{children:d}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A breadcrumb should not display more than 8 items."}),`
`]}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(m,{tokens:c})]})}function M(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
