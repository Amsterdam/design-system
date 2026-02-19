import{j as e}from"./iframe-DmeOKBdP.js";import{useMDXComponents as a}from"./index-C6mZ_Z2e.js";import{M as i,e as r,f as l,h as d,i as o}from"./blocks-ChaqLZDe.js";import{L as m,G as h,M as c,S as g,a as u,V as p,C as b}from"./Logo.stories-Cbc823Qf.js";import{D as x}from"./DesignTokensTable-D-g1iozh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGPM8DfM.js";import"./ExampleLogo-C1X3ndS_.js";import"./BorderSample-CJTiOmVw.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-Bsi5y6z8.js";import"./ColorSample-CEKo808o.js";import"./SpaceSample-B8kbWlsV.js";import"./TypographySample-9Z7iCUxf.js";const f=`<!-- @license CC0-1.0 -->

# Logo

The City’s logo includes an icon (3 Saint Andrew’s crosses) and a wordmark (Gemeente Amsterdam).
The logo has a fixed colour, size, and position and is present on all our websites.

## Design

- The design system provides the correct logo for online use.
  Other logo variations exist, but they cannot be used on our websites.
- Each logo is 40 pixels tall at its minimum and grows to 60 pixels in wider windows.
- On websites that accompany the main logo with a brand name, the wordmark gets hidden to save space on narrow windows.

## Guidelines

- All our websites must include the [Page Header](/docs/components-containers-page-header--docs), which ensures the Logo is always present and links to the homepage of the same website.
- Use the appropriate variation of the logo for websites operated by one of the 6 sub-brands:
  GGD Amsterdam, Inspectie, Museum Weesp, Stadsarchief, Stadsbank van Lening, and VGA Verzekeringen.
- The main logo in Dutch is for websites in that language and any language other than English.
  The English logo is for websites in the English language only.
  (We will add this logo soon; download it from [Stijlweb](https://amsterdam.nl/stijlweb/basiselementen/logo-gemeente-amsterdam/#hba498e5c-2388-464f-b769-7622a5d32bd1) until then.)
`,j={logo:{"block-size":{$value:"{ams.space.xl}",$type:"dimension"},"min-block-size":{$value:{value:2.5,unit:"rem"},$type:"dimension"},emblem:{color:{$value:"#ec0000",$type:"color"}},subsite:{color:{$value:"{ams.color.text.default}",$type:"color"}},title:{color:{$value:"#ec0000",$type:"color"}}}},w={ams:j};function t(s){const n={h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:m}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"sub-brands",children:"Sub-brands"}),`
`,e.jsx(n.h4,{id:"ggd-amsterdam",children:"GGD Amsterdam"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h4,{id:"museum-weesp",children:"Museum Weesp"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"stadsarchief",children:"Stadsarchief"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h4,{id:"stadsbank-van-lening",children:"Stadsbank van Lening"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h4,{id:"vga-verzekeringen",children:"VGA Verzekeringen"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(n.p,{children:["Websites for the City of Amsterdam ",e.jsx(n.strong,{children:"must"})," use one of our own logos."]}),`
`,e.jsx(n.p,{children:`Other organisations using this component can display their own brand by providing a label and a custom image.
The label should be ‘name of the organisation + logo’.
The image must be an svg.
Set the appropriate values for the sizing tokens.`}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:w})]})}function V(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{V as default};
