import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as l,T as n}from"./index-CMKzkGYi.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DuX8CP_M.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";function s(t){const i=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h4:"h4",ol:"ol",li:"li",code:"code",pre:"pre"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Design Guidelines/Typography"}),`
`,e.jsx(i.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(i.h2,{id:"text-size",children:"Text Size"}),`
`,e.jsx(i.h3,{id:"seven-text-levels",children:"Seven Text Levels"}),`
`,e.jsx(i.p,{children:`There are 7 levels of text size and corresponding line height.
Each typographic element belongs to one of these levels: title, paragraph, link, quote, form text, etc.
They are numbered from 0 to 6 to align them with the levels of headings.
Examples:`}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"right",children:"Level"}),e.jsx(i.th,{align:"left",children:"Components"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"0"}),e.jsx(i.td,{align:"left",children:"Page heading"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"1"}),e.jsx(i.td,{align:"left",children:"Heading 1"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"2"}),e.jsx(i.td,{align:"left",children:"Heading 2"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"3"}),e.jsx(i.td,{align:"left",children:"Heading 3, Blockquote"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"4"}),e.jsx(i.td,{align:"left",children:"Heading 4, Large Paragraph"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"5"}),e.jsx(i.td,{align:"left",children:"Paragraph, List, Link, Button"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"right",children:"6"}),e.jsx(i.td,{align:"left",children:"Small Paragraph, Page Menu, Breadcrumb"})]})]})]}),`
`,e.jsx(i.h3,{id:"responsive",children:"Responsive"}),`
`,e.jsxs(i.p,{children:[`The text size depends on the window width, ensuring pleasant reading on screens of all sizes.
This also complements the responsive `,e.jsx(i.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),"."]}),`
`,e.jsx(i.p,{children:`Each level has a minimum text size, up to a window width of 320 pixels.
There’s also a maximum text size starting at a window width of 1600 pixels.
Between these points, the text grows linearly.`}),`
`,e.jsx(i.h3,{id:"typographic-scale",children:"Typographic Scale"}),`
`,e.jsx(i.p,{children:`The typographic scale is based on a factor of 5 ÷ 4 = 1.25.
For each adjacent level, the text is that much larger or smaller.`}),`
`,e.jsx(i.p,{children:`The text size grows more slowly at the minimum window width, with a factor of 7 ÷ 6 ≈ 1.17.
This prevents titles from becoming too large on phones and other narrow windows and small texts from becoming too small.`}),`
`,e.jsx(i.h3,{id:"two-themes-for-websites-and-applications",children:"Two Themes for Websites and Applications"}),`
`,e.jsx(i.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(i.p,{children:`The typography is quite spacious for websites, in line with the overall design.
A standard paragraph is 18 pixels at a window width of 320 pixels.
It grows to 24 pixels up to a width of 1600 pixels.`}),`
`,e.jsx(i.p,{children:"The maximum text sizes for all levels in the spacious theme:"}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[73.2,58.6,46.9,37.5,30,24,19.2],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.p,{children:"And the minimum:"}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[38.9,33.3,28.6,24.5,21,18,15.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(i.p,{children:`For applications, such large text is not necessary, even counterproductive.
Hence, there’s a compact theme for typography.
In this theme, a paragraph is 14 pixels at the minimum window width and 18 pixels at the maximum.
Text is a quarter smaller and grows slightly more slowly.`}),`
`,e.jsx(i.p,{children:"The maximum text sizes for all levels in the compact theme:"}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[54.9,43.9,35.2,28.1,22.5,18,14.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.p,{children:"And the minimum:"}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[30.3,25.9,22.2,19.1,16.3,14,12],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.h3,{id:"window-widths-for-design",children:"Window Widths for Design"}),`
`,e.jsx(i.p,{children:`In practice, a window can have any width.
Designing for all those widths is impractical.
Therefore, we work with three reference widths in Figma: 320, 832, and 1600 pixels.
At those sizes, we develop a screen for those three classes of devices.
The text sizes at those points are as follows, rounded to 1 decimal place:`}),`
`,e.jsx(i.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"left",children:"Device Class"}),e.jsx(i.th,{children:"Design Width"}),e.jsx(i.th,{align:"right",children:"0"}),e.jsx(i.th,{align:"right",children:"1"}),e.jsx(i.th,{align:"right",children:"2"}),e.jsx(i.th,{align:"right",children:"3"}),e.jsx(i.th,{align:"right",children:"4"}),e.jsx(i.th,{align:"right",children:"5"}),e.jsx(i.th,{align:"right",children:"6"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Phone"}),e.jsx(i.td,{children:"320"}),e.jsx(i.td,{align:"right",children:"38.9"}),e.jsx(i.td,{align:"right",children:"33.3"}),e.jsx(i.td,{align:"right",children:"28.6"}),e.jsx(i.td,{align:"right",children:"24.5"}),e.jsx(i.td,{align:"right",children:"21"}),e.jsx(i.td,{align:"right",children:"18"}),e.jsx(i.td,{align:"right",children:"15.4"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Tablet"}),e.jsx(i.td,{children:"832"}),e.jsx(i.td,{align:"right",children:"52.6"}),e.jsx(i.td,{align:"right",children:"43.4"}),e.jsx(i.td,{align:"right",children:"35.9"}),e.jsx(i.td,{align:"right",children:"29.7"}),e.jsx(i.td,{align:"right",children:"24.6"}),e.jsx(i.td,{align:"right",children:"20.4"}),e.jsx(i.td,{align:"right",children:"16.9"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Desktop"}),e.jsx(i.td,{children:"1600"}),e.jsx(i.td,{align:"right",children:"73.2"}),e.jsx(i.td,{align:"right",children:"58.6"}),e.jsx(i.td,{align:"right",children:"46.9"}),e.jsx(i.td,{align:"right",children:"37.5"}),e.jsx(i.td,{align:"right",children:"30"}),e.jsx(i.td,{align:"right",children:"24"}),e.jsx(i.td,{align:"right",children:"19.2"})]})]})]}),`
`,e.jsx(i.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{align:"left",children:"Device Class"}),e.jsx(i.th,{children:"Design Width"}),e.jsx(i.th,{align:"right",children:"0"}),e.jsx(i.th,{align:"right",children:"1"}),e.jsx(i.th,{align:"right",children:"2"}),e.jsx(i.th,{align:"right",children:"3"}),e.jsx(i.th,{align:"right",children:"4"}),e.jsx(i.th,{align:"right",children:"5"}),e.jsx(i.th,{align:"right",children:"6"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Phone"}),e.jsx(i.td,{children:"320"}),e.jsx(i.td,{align:"right",children:"30.3"}),e.jsx(i.td,{align:"right",children:"25.9"}),e.jsx(i.td,{align:"right",children:"22.2"}),e.jsx(i.td,{align:"right",children:"19.1"}),e.jsx(i.td,{align:"right",children:"16.3"}),e.jsx(i.td,{align:"right",children:"14"}),e.jsx(i.td,{align:"right",children:"12"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Tablet"}),e.jsx(i.td,{children:"832"}),e.jsx(i.td,{align:"right",children:"40.1"}),e.jsx(i.td,{align:"right",children:"33.1"}),e.jsx(i.td,{align:"right",children:"27.4"}),e.jsx(i.td,{align:"right",children:"22.7"}),e.jsx(i.td,{align:"right",children:"18.8"}),e.jsx(i.td,{align:"right",children:"15.6"}),e.jsx(i.td,{align:"right",children:"13"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{align:"left",children:"Desktop"}),e.jsx(i.td,{children:"1600"}),e.jsx(i.td,{align:"right",children:"54.9"}),e.jsx(i.td,{align:"right",children:"43.9"}),e.jsx(i.td,{align:"right",children:"35.2"}),e.jsx(i.td,{align:"right",children:"28.1"}),e.jsx(i.td,{align:"right",children:"22.5"}),e.jsx(i.td,{align:"right",children:"18"}),e.jsx(i.td,{align:"right",children:"14.4"})]})]})]}),`
`,e.jsx(i.h2,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(i.p,{children:`There are various ways to emphasize text.
Here are our choices.`}),`
`,e.jsx(i.h3,{id:"weight",children:"Weight"}),`
`,e.jsx(i.p,{children:`We use 2 weights online: regular and extra bold.
In CSS terms: 400 and 800.`}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.p,{children:"The text of all kinds of titles, decorative quotes, and form labels use the bold weight."}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:800,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(i.h3,{id:"style",children:"Style"}),`
`,e.jsx(i.p,{children:`Avoid italicized text as much as possible, as it’s not easily readable.
Use it only to format a fragment, not for entire blocks of text.
There are better ways to emphasize long texts.`}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{fontStyle:"italic"}}),`
`,e.jsx(i.h3,{id:"underlining",children:"Underlining"}),`
`,e.jsx(i.p,{children:`Avoid underlining text.
Underline only interactive links.`}),`
`,e.jsx(i.p,{children:`The line thickness is 2 pixels.
The distance between the underline and the baseline is 6 pixels –
more than we can show in the example below.
When the mouse hovers over the link, the line at the top becomes one pixel thicker.`}),`
`,e.jsx(n,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],lineHeight:1.6,sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{color:"#004469",textDecorationLine:"underline",textDecorationThickness:2,textUnderlineOffset:4}}),`
`,e.jsx(i.h3,{id:"letter-spacing",children:"Letter spacing"}),`
`,e.jsx(i.p,{children:`The space between letters (kerning) has been optimized in the typeface.
Adjusting kerning is not allowed.`}),`
`,e.jsx(i.h2,{id:"other-properties",children:"Other Properties"}),`
`,e.jsx(i.h3,{id:"contrast",children:"Contrast"}),`
`,e.jsxs(i.p,{children:["The contrast between text and background colour must meet the latest legal accessibility requirements of ",e.jsx(i.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG, level AA"}),"."]}),`
`,e.jsx(i.p,{children:`Most text in the corporate identity is pure black on pure white, meeting the requirement.
We make text white on most dark backgrounds, providing sufficient contrast.
For some background colours, black text is also readable.
Consult the respective components for specific guidelines.`}),`
`,e.jsx(i.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(i.p,{children:"Text is almost always left-aligned."}),`
`,e.jsx(i.p,{children:"Exceptions:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"The label of a button is centred."}),`
`,e.jsx(i.li,{children:"In a table, it might be better to centre or right-align text."}),`
`]}),`
`,e.jsx(i.h3,{id:"line-length",children:"Line Length"}),`
`,e.jsxs(i.p,{children:[`Long lines of text are challenging to read.
Around 80 characters per line is the maximum.
In the 12-column `,e.jsx(i.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),", paragraphs meet this when they occupy 8 columns or fewer."]}),`
`,e.jsx(i.h3,{id:"word-breaking",children:"Word Breaking"}),`
`,e.jsxs(i.p,{children:[`The Dutch language has many long words, such as ‘gemeenteraadsverkiezingen’ (municipal elections).
Ensure in your application that these words are hyphenated neatly and do not break out of their container or get hidden.
One way to do this is with the following CSS snippet, combining `,e.jsx(i.code,{children:"hyphens"})," and ",e.jsx(i.code,{children:"word-break"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`.class {
  hyphens: auto;
  /* only hyphenate words longer than 12 chars, for browsers that support it */
  hyphenate-limit-chars: 12;
  /* break overflowing words for browsers that don’t support CSS hyphens */
  overflow-wrap: break-word;
}
`})}),`
`,e.jsxs(i.p,{children:["Further reading: ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text",target:"_blank",rel:"nofollow noopener noreferrer",children:"Wrapping and breaking text op MDN"})]})]})}function u(t={}){const{wrapper:i}=Object.assign({},r(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(s,t)})):s(t)}export{u as default};
