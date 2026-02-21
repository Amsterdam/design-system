import{j as e}from"./iframe-CZuGp6po.js";import{useMDXComponents as a}from"./index-CVImsRn9.js";import{M as i,e as r,f as d,h as m,i as o}from"./blocks-BBEX3FAp.js";import{L as l,G as h,M as c,S as p,a as u,V as g,C as x}from"./Logo.stories-qpUaj2vn.js";import{D as b}from"./DesignTokensTable-qDLB9SxX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Kfn7y-lm.js";import"./ExampleLogo-D-On6L6U.js";import"./BorderSample-xF5_rtqO.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-DfTc-2HM.js";import"./ColorSample-C8bmQnvh.js";import"./SpaceSample-DJ8DBceY.js";import"./TypographySample-DdfzPR2J.js";const f=`<!-- @license CC0-1.0 -->

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
- Use the appropriate variation of the logo for websites operated by one of the 5 sub-brands:
  GGD Amsterdam, Museum Weesp, Stadsarchief, Stadsbank van Lening, and VGA Verzekeringen.
`,j={logo:{"block-size":{$value:"{ams.space.xl}",$type:"dimension"},"min-block-size":{$value:{value:2.5,unit:"rem"},$type:"dimension"},emblem:{color:{$value:"#ec0000",$type:"color"}},subsite:{color:{$value:"{ams.color.text.default}",$type:"color"}},title:{color:{$value:"#ec0000",$type:"color"}}}},w={ams:j};function t(s){const n={h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(m,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"sub-brands",children:"Sub-brands"}),`
`,e.jsx(n.h4,{id:"ggd-amsterdam",children:"GGD Amsterdam"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h4,{id:"museum-weesp",children:"Museum Weesp"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"stadsarchief",children:"Stadsarchief"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h4,{id:"stadsbank-van-lening",children:"Stadsbank van Lening"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h4,{id:"vga-verzekeringen",children:"VGA Verzekeringen"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(n.p,{children:["Websites for the City of Amsterdam ",e.jsx(n.strong,{children:"must"})," use one of our own logos."]}),`
`,e.jsx(n.p,{children:`Other organisations using this component can display their own brand by providing a label and a custom image.
The label should be ‘name of the organisation + logo’.
The image must be an svg.
Set the appropriate values for the sizing tokens.`}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(b,{tokens:w})]})}function E(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{E as default};
