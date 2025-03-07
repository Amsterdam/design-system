import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-1Ha5aU2j.js";import{M as r,T as i}from"./index-B5cTbhRv.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-ClvHEWnJ.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Brand/Design Tokens/Typography"}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(t.p,{children:`Our choices for the font family, font size, font weight and line height of all texts are stored in tokens.
We distinguish body text (like paragraphs, lists and input text) from headings.`}),`
`,e.jsx(t.h2,{id:"body-text",children:"Body text"}),`
`,e.jsx(t.p,{children:"All text components except headings use the ‘body text’ group of tokens."}),`
`,e.jsx(t.h3,{id:"font-size",children:"Font size"}),`
`,e.jsx(t.p,{children:"We have regular body text, one smaller and two larger variations."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-small-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(0.9643rem, calc(0.9054rem + 0.2946vw), 1.2rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-body-text-small-font-size)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(1.125rem, calc(1.0313rem + 0.4688vw), 1.5rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-body-text-font-size)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-large-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(1.3125rem, calc(1.1719rem + 0.7031vw), 1.875rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-body-text-large-font-size)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-x-large-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(1.5313rem, calc(1.3281rem + 1.0156vw), 2.3438rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-body-text-x-large-font-size)"},children:"Abc"})})]})]})]}),`
`,e.jsx(t.h3,{id:"line-height",children:"Line height"}),`
`,e.jsx(t.p,{children:`The line heights have been designed to match the corresponding font size.
Do not mix tokens from different variations of body text.`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-small-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.5152"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.6667"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-large-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.5152"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-x-large-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.3776"})})]})]})]}),`
`,e.jsx(t.h3,{id:"font-weight",children:"Font weight"}),`
`,e.jsx(t.p,{children:"The font weight can either be regular or bold."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-font-weight)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"400"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-bold-font-weight)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"800"})})]})]})]}),`
`,e.jsx(t.h2,{id:"headings",children:"Headings"}),`
`,e.jsx(t.p,{children:"Headings use a distinct group of tokens because they have distinct levels, and their line heights differ from those for body text."}),`
`,e.jsx(t.h3,{id:"font-size-1",children:"Font size"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-0-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(2.4316rem, calc(1.8951rem + 2.6826vw), 4.5776rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-0-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-1-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(2.0842rem, calc(1.6897rem + 1.9724vw), 3.6621rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-1-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-2-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"clamp(1.7865rem, calc(1.5007rem + 1.429vw), 2.9297rem)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-2-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-3-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-x-large-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-3-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-4-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-large-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-4-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-5-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text--font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-5-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-6-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-body-text-small-font-size)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--font-size",style:{fontSize:"var(--ams-typography-heading-6-font-size)",fontWeight:"var(--ams-typography-heading-font-weight)"},children:"Abc"})})]})]})]}),`
`,e.jsx(t.h3,{id:"line-height-1",children:"Line height"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-0-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.1386"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-1-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.1754"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-2-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.2133"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-3-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.2524"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-4-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.2928"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-5-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.3345"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-6-line-height)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"1.3776"})})]})]})]}),`
`,e.jsx(t.h3,{id:"font-weight-1",children:"Font weight"}),`
`,e.jsx(t.p,{children:"Headings only use the bold font weight."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-heading-font-weight)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"800"})})]})})]}),`
`,e.jsx(t.h2,{id:"font-family",children:"Font family"}),`
`,e.jsx(t.p,{children:`All text appears in our Amsterdam Sans font.
If it is not available, we use Arial or the generic sans-serif instead.`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Value"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"var(--ams-typography-font-family)"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"'Amsterdam Sans', Arial, sans-serif"})})]})})]}),`
`,e.jsx(t.h2,{id:"design",children:"Design"}),`
`,e.jsx(t.h3,{id:"responsive",children:"Responsive"}),`
`,e.jsxs(t.p,{children:[`The font size depends on the window width, ensuring pleasant reading on screens of all sizes.
This also complements the responsive `,e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),"."]}),`
`,e.jsx(t.p,{children:`Each level has a minimum font size, up to a window width of 320 pixels.
There’s also a maximum font size starting at a window width of 1600 pixels.
Between these points, the text grows linearly.`}),`
`,e.jsx(t.h3,{id:"typographic-scale",children:"Typographic scale"}),`
`,e.jsx(t.p,{children:"All font sizes are derived from four foundational values: two font sizes and two growth factors."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The minimum font size for body text at a window width of 320 pixels, and the maximum at a window width of 1600."}),`
`,e.jsx(t.li,{children:`The multiplication between text levels at either of these window widths.
They are different to let the size of headings increase slower on smaller screens.`}),`
`]}),`
`,e.jsx(t.h3,{id:"two-themes-for-websites-and-applications",children:"Two themes for websites and applications"}),`
`,e.jsx(t.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(t.p,{children:"The typography is quite spacious for websites, in line with the overall design."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Body text grows from 18 pixels to 24 pixels."}),`
`,e.jsx(t.li,{children:"Every next level is 7 ÷ 6 ≈ 1.167 larger on narrow screens, and 5 ÷ 4 = 1.25 on wide ones."}),`
`]}),`
`,e.jsx(t.p,{children:"The maximum font sizes for all levels in the spacious theme:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[73.2,58.6,46.9,37.5,30,24,19.2],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.p,{children:"And the minimum:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[38.9,33.3,28.6,24.5,21,18,15.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(t.p,{children:`For applications, text that large would be counterproductive.
That is why we have a compact theme for typography.`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Typography is not fluid in this theme. Body text is 16 pixels."}),`
`,e.jsx(t.li,{children:"Every next level is 11 ÷ 10 ≈ 1.1 larger on narrow screens, and 9 ÷ 8 = 1.125 on wide ones."}),`
`]}),`
`,e.jsx(t.p,{children:"The maximum font sizes for all levels in the compact theme:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[28.8,25.6,22.8,20.3,18,16,14.2],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.p,{children:"And the minimum:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[25.8,23.4,21.3,19.4,17.6,16,14.6],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.h3,{id:"window-widths-for-design",children:"Window widths for design"}),`
`,e.jsx(t.p,{children:`In practice, a window can have any width.
Designing for all those widths is impractical.
Therefore, we work with three reference widths in Figma: 320, 832, and 1600 pixels.
At those sizes, we develop a screen for those three classes of devices.
The font sizes at those points are as follows, rounded to 1 decimal place:`}),`
`,e.jsx(t.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Design Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"0"}),e.jsx(t.th,{style:{textAlign:"right"},children:"1"}),e.jsx(t.th,{style:{textAlign:"right"},children:"2"}),e.jsx(t.th,{style:{textAlign:"right"},children:"3"}),e.jsx(t.th,{style:{textAlign:"right"},children:"4"}),e.jsx(t.th,{style:{textAlign:"right"},children:"5"}),e.jsx(t.th,{style:{textAlign:"right"},children:"6"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Phone"}),e.jsx(t.td,{style:{textAlign:"left"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"38.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"33.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"28.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24.5"}),e.jsx(t.td,{style:{textAlign:"right"},children:"21"}),e.jsx(t.td,{style:{textAlign:"right"},children:"18"}),e.jsx(t.td,{style:{textAlign:"right"},children:"15.4"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Tablet"}),e.jsx(t.td,{style:{textAlign:"left"},children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"52.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"43.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"35.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"29.7"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"20.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16.9"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Desktop"}),e.jsx(t.td,{style:{textAlign:"left"},children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"73.2"}),e.jsx(t.td,{style:{textAlign:"right"},children:"58.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"46.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"37.5"}),e.jsx(t.td,{style:{textAlign:"right"},children:"30"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"19.2"})]})]})]}),`
`,e.jsx(t.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Design Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"0"}),e.jsx(t.th,{style:{textAlign:"right"},children:"1"}),e.jsx(t.th,{style:{textAlign:"right"},children:"2"}),e.jsx(t.th,{style:{textAlign:"right"},children:"3"}),e.jsx(t.th,{style:{textAlign:"right"},children:"4"}),e.jsx(t.th,{style:{textAlign:"right"},children:"5"}),e.jsx(t.th,{style:{textAlign:"right"},children:"6"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Phone"}),e.jsx(t.td,{style:{textAlign:"left"},children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"25.8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"23.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"21.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"19.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"17.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"14.6"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Tablet"}),e.jsx(t.td,{style:{textAlign:"left"},children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"27"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"21.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"19.7"}),e.jsx(t.td,{style:{textAlign:"right"},children:"17.8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"14.4"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Desktop"}),e.jsx(t.td,{style:{textAlign:"left"},children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"28.8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"25.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"22.8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"20.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"18"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16"}),e.jsx(t.td,{style:{textAlign:"right"},children:"14.2"})]})]})]}),`
`,e.jsx(t.h2,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(t.p,{children:`There are various ways to emphasize text.
Here are our choices.`}),`
`,e.jsx(t.h3,{id:"weight",children:"Weight"}),`
`,e.jsx(t.p,{children:`We use 2 weights online: regular and extra bold.
In CSS terms: 400 and 800.`}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.p,{children:"The text of all kinds of headings, decorative quotes, and form labels use the bold weight."}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:800,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.h3,{id:"style",children:"Style"}),`
`,e.jsx(t.p,{children:`Avoid italicized text as much as possible, as it’s not easily readable.
Use it only to format a fragment, not for entire blocks of text.
There are better ways to emphasize long texts.`}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{fontStyle:"italic"}}),`
`,e.jsx(t.h3,{id:"underlining",children:"Underlining"}),`
`,e.jsx(t.p,{children:`Avoid underlining text.
Underline only interactive links.`}),`
`,e.jsx(t.p,{children:`The line thickness is 2 pixels.
The distance between the underline and the baseline is 6 pixels –
more than we can show in the example below.
When the mouse hovers over the link, the line at the top becomes one pixel thicker.`}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],lineHeight:1.6,sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{color:"#004469",textDecorationLine:"underline",textDecorationThickness:2,textUnderlineOffset:4}}),`
`,e.jsx(t.h3,{id:"letter-spacing",children:"Letter spacing"}),`
`,e.jsx(t.p,{children:`The space between letters (kerning) has been optimized in the font file.
Adjusting kerning is not allowed.`}),`
`,e.jsx(t.h2,{id:"other-properties",children:"Other properties"}),`
`,e.jsx(t.h3,{id:"contrast",children:"Contrast"}),`
`,e.jsxs(t.p,{children:["The contrast between text and background colour must meet the latest legal accessibility requirements of ",e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG, level AA"}),"."]}),`
`,e.jsx(t.p,{children:`Most text in the corporate identity is black on white, meeting the requirement.
On an azure, lime, orange or yellow background, black text is still easy to read.
If the background is blue, green, magenta, purple or red, we make the text white to provide sufficient contrast.`}),`
`,e.jsx(t.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(t.p,{children:"Text is almost always left-aligned."}),`
`,e.jsx(t.p,{children:"Exceptions:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The label of a button is centred."}),`
`,e.jsx(t.li,{children:"In a table, it might be better to centre or right-align text."}),`
`]}),`
`,e.jsx(t.h3,{id:"line-length",children:"Line length"}),`
`,e.jsxs(t.p,{children:[`Long lines of text are challenging to read.
Around 80 characters per line is the maximum.
In the 12-column `,e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),", paragraphs meet this when they occupy 8 columns or fewer."]}),`
`,e.jsx(t.h3,{id:"word-breaking",children:"Word breaking"}),`
`,e.jsxs(t.p,{children:[`The Dutch language has many long words, such as ‘gemeenteraadsverkiezingen’ (municipal elections).
Ensure in your application that these words are hyphenated neatly and do not break out of their container or get hidden.
One way to do this is with the following CSS snippet, combining `,e.jsx(t.code,{children:"hyphens"})," and ",e.jsx(t.code,{children:"word-break"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.class {
  hyphens: auto;
  /* only hyphenate words longer than 12 chars, for browsers that support it */
  hyphenate-limit-chars: 12;
  /* break overflowing words for browsers that don’t support CSS hyphens */
  overflow-wrap: break-word;
}
`})}),`
`,e.jsxs(t.p,{children:["Further reading: ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text",rel:"nofollow",children:"Wrapping and breaking text on MDN"})]})]})}function p(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
