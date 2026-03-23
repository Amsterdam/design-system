import{j as e}from"./iframe-BIsp1dfx.js";import{useMDXComponents as i}from"./index-Vu6prpLT.js";import{M as a,e as r,f as l,h,i as s}from"./blocks-ChJG_Hid.js";import{L as d,G as m,a as c,M as g,S as p,b as u,V as f,A as x,C as b}from"./Logo.stories-C1TK8un_.js";import{D as j}from"./DesignTokensTable-DMgCPP5U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwQJVCjq.js";import"./ExampleLogo-9q_QlU74.js";import"./BorderSample-C_wvgtdF.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-B_qNkTby.js";import"./ColorSample-wNRZ6i0j.js";import"./SpaceSample-D6Ynrreu.js";import"./TypographySample-b1GdD1Kb.js";const w=`<!-- @license CC0-1.0 -->

# Logo

The City’s logo includes an icon (3 Saint Andrew’s crosses) and a wordmark (Gemeente Amsterdam).
The logo has a fixed colour, size, and position and is present on all our websites.

## Specifications

The design system provides the correct logo for online use.
Other logo variations exist, but they cannot be used on our websites.
The Dutch logo is for websites in the Dutch language and any language other than English.
The English logo is used for websites in the English language.

## Exception

Websites operated by one of the sub-brands use their specific logo.
They have a separate status because of their unique service provision not directly associated with the City.

The sub-brands are:

- GGD Amsterdam
- GGD Amsterdam Inspectie
- Museum Weesp
- Stadsarchief
- Stadsbank van Lening
- VGA Verzekeringen

## Requirements for all logos

- The logo is always displayed.
- The logo is left-aligned in the Page Header.
- The logo links to the homepage of the website.
- If the website is a form, application, or tool without a homepage, the logo links to the page where the form, application, or tool is referred to.

The logo is 40 pixels tall at its minimum, growing to 60 pixels in wider windows.
This also applies to sub-brand logos.

## Download

- [Logo set for websites and apps (ZIP, 10 kB)](https://assets.amsterdam.nl/publish/pages/1007650/logoset_voor_websites_en_apps.zip)
`,k={logo:{"block-size":{$value:"{ams.space.xl}",$type:"dimension"},"min-block-size":{$value:{value:2.5,unit:"rem"},$type:"dimension"},emblem:{color:{$value:"#ec0000",$type:"color"}},subsite:{color:{$value:"{ams.color.text.default}",$type:"color"}},title:{color:{$value:"#ec0000",$type:"color"}}}},v={ams:k};function t(o){const n={h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:w}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"sub-brands",children:"Sub-brands"}),`
`,e.jsx(n.h4,{id:"ggd-amsterdam",children:"GGD Amsterdam"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h4,{id:"ggd-amsterdam-inspectie",children:"GGD Amsterdam Inspectie"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h4,{id:"museum-weesp",children:"Museum Weesp"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h4,{id:"stadsarchief",children:"Stadsarchief"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h4,{id:"stadsbank-van-lening",children:"Stadsbank van Lening"}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h4,{id:"vga-verzekeringen",children:"VGA Verzekeringen"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"amsterdam-english",children:"Amsterdam English"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"custom",children:"Custom"}),`
`,e.jsxs(n.p,{children:["Websites for the City of Amsterdam ",e.jsx(n.strong,{children:"must"})," use one of our own logos."]}),`
`,e.jsx(n.p,{children:`Other organisations using this component can display their own brand by providing a label and a custom image.
The label should be ‘name of the organisation + logo’.
The image must be an svg.
Set the appropriate values for the sizing tokens.`}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(j,{tokens:v})]})}function I(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{I as default};
