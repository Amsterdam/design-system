import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as l}from"./index-CRbi4mQH.js";import{M as r,T as i}from"./index-B-cWGYsZ.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DQ9y-gTr.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Design Guidelines/Typography"}),`
`,e.jsx(t.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(t.h2,{id:"text-size",children:"Text Size"}),`
`,e.jsx(t.h3,{id:"seven-text-levels",children:"Seven Text Levels"}),`
`,e.jsx(t.p,{children:`There are 7 levels of text size and corresponding line height.
Each typographic element belongs to one of these levels: heading, paragraph, link, quote, form text, etc.
They are numbered from 0 to 6 to align them with the levels of headings.
Examples:`}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"right"},children:"Level"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Components"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"0"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Page heading"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"1"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Heading 1"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"2"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Heading 2"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"3"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Heading 3, Blockquote"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"4"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Heading 4, Large Paragraph"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"5"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Paragraph, List, Link, Button"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"right"},children:"6"}),e.jsx(t.td,{style:{textAlign:"left"},children:"Small Paragraph, Page Menu, Breadcrumb"})]})]})]}),`
`,e.jsx(t.h3,{id:"responsive",children:"Responsive"}),`
`,e.jsxs(t.p,{children:[`The text size depends on the window width, ensuring pleasant reading on screens of all sizes.
This also complements the responsive `,e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),"."]}),`
`,e.jsx(t.p,{children:`Each level has a minimum text size, up to a window width of 320 pixels.
There’s also a maximum text size starting at a window width of 1600 pixels.
Between these points, the text grows linearly.`}),`
`,e.jsx(t.h3,{id:"typographic-scale",children:"Typographic Scale"}),`
`,e.jsx(t.p,{children:`The typographic scale is based on a factor of 5 ÷ 4 = 1.25.
For each adjacent level, the text is that much larger or smaller.`}),`
`,e.jsx(t.p,{children:`The text size grows more slowly at the minimum window width, with a factor of 7 ÷ 6 ≈ 1.17.
This prevents headings from becoming too large on phones and other narrow windows and small texts from becoming too small.`}),`
`,e.jsx(t.h3,{id:"two-themes-for-websites-and-applications",children:"Two Themes for Websites and Applications"}),`
`,e.jsx(t.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(t.p,{children:`The typography is quite spacious for websites, in line with the overall design.
A standard paragraph is 18 pixels at a window width of 320 pixels.
It grows to 24 pixels up to a width of 1600 pixels.`}),`
`,e.jsx(t.p,{children:"The maximum text sizes for all levels in the spacious theme:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[73.2,58.6,46.9,37.5,30,24,19.2],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.p,{children:"And the minimum:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[38.9,33.3,28.6,24.5,21,18,15.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(t.p,{children:`For applications, such large text is not necessary, even counterproductive.
Hence, there’s a compact theme for typography.
In this theme, a paragraph is 14 pixels at the minimum window width and 18 pixels at the maximum.
Text is a quarter smaller and grows slightly more slowly.`}),`
`,e.jsx(t.p,{children:"The maximum text sizes for all levels in the compact theme:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[34.6,29.7,25.4,21.8,18.7,16,13.7],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.p,{children:"And the minimum:"}),`
`,e.jsx(i,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[25.2,22.4,19.9,17.7,15.8,14,12.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(t.h3,{id:"window-widths-for-design",children:"Window Widths for Design"}),`
`,e.jsx(t.p,{children:`In practice, a window can have any width.
Designing for all those widths is impractical.
Therefore, we work with three reference widths in Figma: 320, 832, and 1600 pixels.
At those sizes, we develop a screen for those three classes of devices.
The text sizes at those points are as follows, rounded to 1 decimal place:`}),`
`,e.jsx(t.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{children:"Design Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"0"}),e.jsx(t.th,{style:{textAlign:"right"},children:"1"}),e.jsx(t.th,{style:{textAlign:"right"},children:"2"}),e.jsx(t.th,{style:{textAlign:"right"},children:"3"}),e.jsx(t.th,{style:{textAlign:"right"},children:"4"}),e.jsx(t.th,{style:{textAlign:"right"},children:"5"}),e.jsx(t.th,{style:{textAlign:"right"},children:"6"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Phone"}),e.jsx(t.td,{children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"38.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"33.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"28.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24.5"}),e.jsx(t.td,{style:{textAlign:"right"},children:"21"}),e.jsx(t.td,{style:{textAlign:"right"},children:"18"}),e.jsx(t.td,{style:{textAlign:"right"},children:"15.4"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Tablet"}),e.jsx(t.td,{children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"52.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"43.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"35.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"29.7"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"20.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16.9"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Desktop"}),e.jsx(t.td,{children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"73.2"}),e.jsx(t.td,{style:{textAlign:"right"},children:"58.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"46.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"37.5"}),e.jsx(t.td,{style:{textAlign:"right"},children:"30"}),e.jsx(t.td,{style:{textAlign:"right"},children:"24"}),e.jsx(t.td,{style:{textAlign:"right"},children:"19.2"})]})]})]}),`
`,e.jsx(t.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Device Class"}),e.jsx(t.th,{children:"Design Width"}),e.jsx(t.th,{style:{textAlign:"right"},children:"0"}),e.jsx(t.th,{style:{textAlign:"right"},children:"1"}),e.jsx(t.th,{style:{textAlign:"right"},children:"2"}),e.jsx(t.th,{style:{textAlign:"right"},children:"3"}),e.jsx(t.th,{style:{textAlign:"right"},children:"4"}),e.jsx(t.th,{style:{textAlign:"right"},children:"5"}),e.jsx(t.th,{style:{textAlign:"right"},children:"6"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Phone"}),e.jsx(t.td,{children:"320"}),e.jsx(t.td,{style:{textAlign:"right"},children:"30.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"25.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"22.2"}),e.jsx(t.td,{style:{textAlign:"right"},children:"19.1"}),e.jsx(t.td,{style:{textAlign:"right"},children:"16.3"}),e.jsx(t.td,{style:{textAlign:"right"},children:"14"}),e.jsx(t.td,{style:{textAlign:"right"},children:"12"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Tablet"}),e.jsx(t.td,{children:"832"}),e.jsx(t.td,{style:{textAlign:"right"},children:"40.1"}),e.jsx(t.td,{style:{textAlign:"right"},children:"33.1"}),e.jsx(t.td,{style:{textAlign:"right"},children:"27.4"}),e.jsx(t.td,{style:{textAlign:"right"},children:"22.7"}),e.jsx(t.td,{style:{textAlign:"right"},children:"18.8"}),e.jsx(t.td,{style:{textAlign:"right"},children:"15.6"}),e.jsx(t.td,{style:{textAlign:"right"},children:"13"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:"Desktop"}),e.jsx(t.td,{children:"1600"}),e.jsx(t.td,{style:{textAlign:"right"},children:"54.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"43.9"}),e.jsx(t.td,{style:{textAlign:"right"},children:"35.2"}),e.jsx(t.td,{style:{textAlign:"right"},children:"28.1"}),e.jsx(t.td,{style:{textAlign:"right"},children:"22.5"}),e.jsx(t.td,{style:{textAlign:"right"},children:"18"}),e.jsx(t.td,{style:{textAlign:"right"},children:"14.4"})]})]})]}),`
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
`,e.jsx(t.p,{children:`The space between letters (kerning) has been optimized in the typeface.
Adjusting kerning is not allowed.`}),`
`,e.jsx(t.h2,{id:"other-properties",children:"Other Properties"}),`
`,e.jsx(t.h3,{id:"contrast",children:"Contrast"}),`
`,e.jsxs(t.p,{children:["The contrast between text and background colour must meet the latest legal accessibility requirements of ",e.jsx(t.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG, level AA"}),"."]}),`
`,e.jsx(t.p,{children:`Most text in the corporate identity is pure black on pure white, meeting the requirement.
We make text white on most dark backgrounds, providing sufficient contrast.
For some background colours, black text is also readable.
Consult the respective components for specific guidelines.`}),`
`,e.jsx(t.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(t.p,{children:"Text is almost always left-aligned."}),`
`,e.jsx(t.p,{children:"Exceptions:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The label of a button is centred."}),`
`,e.jsx(t.li,{children:"In a table, it might be better to centre or right-align text."}),`
`]}),`
`,e.jsx(t.h3,{id:"line-length",children:"Line Length"}),`
`,e.jsxs(t.p,{children:[`Long lines of text are challenging to read.
Around 80 characters per line is the maximum.
In the 12-column `,e.jsx(t.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),", paragraphs meet this when they occupy 8 columns or fewer."]}),`
`,e.jsx(t.h3,{id:"word-breaking",children:"Word Breaking"}),`
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
`,e.jsxs(t.p,{children:["Further reading: ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text",rel:"nofollow",children:"Wrapping and breaking text op MDN"})]})]})}function f(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
