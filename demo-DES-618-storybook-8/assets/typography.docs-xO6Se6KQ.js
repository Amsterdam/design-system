import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as r}from"./index-DSz_1G2r.js";import{M as a,T as t}from"./index-Dbwvp2eO.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bajgp1zh.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-k_s-dmML.js";import"./index-DrFu-skq.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Design Guidelines/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(n.h2,{id:"text-size",children:"Text Size"}),`
`,e.jsx(n.h3,{id:"seven-text-levels",children:"Seven Text Levels"}),`
`,e.jsx(n.p,{children:`There are 7 levels of text size and corresponding line height.
Each typographic element belongs to one of these levels: title, paragraph, link, quote, form text, etc.
They are numbered from 0 to 6 to align them with the levels of headings.
Examples:`}),`
`,e.jsx(n.p,{children:`| Level | Components                             |
| ----: | :------------------------------------- |
|     0 | Page heading                           |
|     1 | Heading 1                              |
|     2 | Heading 2                              |
|     3 | Heading 3, Blockquote                  |
|     4 | Heading 4, Large Paragraph             |
|     5 | Paragraph, List, Link, Button          |
|     6 | Small Paragraph, Page Menu, Breadcrumb |`}),`
`,e.jsx(n.h3,{id:"responsive",children:"Responsive"}),`
`,e.jsxs(n.p,{children:[`The text size depends on the window width, ensuring pleasant reading on screens of all sizes.
This also complements the responsive `,e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),"."]}),`
`,e.jsx(n.p,{children:`Each level has a minimum text size, up to a window width of 320 pixels.
There’s also a maximum text size starting at a window width of 1600 pixels.
Between these points, the text grows linearly.`}),`
`,e.jsx(n.h3,{id:"typographic-scale",children:"Typographic Scale"}),`
`,e.jsx(n.p,{children:`The typographic scale is based on a factor of 5 ÷ 4 = 1.25.
For each adjacent level, the text is that much larger or smaller.`}),`
`,e.jsx(n.p,{children:`The text size grows more slowly at the minimum window width, with a factor of 7 ÷ 6 ≈ 1.17.
This prevents titles from becoming too large on phones and other narrow windows and small texts from becoming too small.`}),`
`,e.jsx(n.h3,{id:"two-themes-for-websites-and-applications",children:"Two Themes for Websites and Applications"}),`
`,e.jsx(n.h4,{id:"spacious",children:"Spacious"}),`
`,e.jsx(n.p,{children:`The typography is quite spacious for websites, in line with the overall design.
A standard paragraph is 18 pixels at a window width of 320 pixels.
It grows to 24 pixels up to a width of 1600 pixels.`}),`
`,e.jsx(n.p,{children:"The maximum text sizes for all levels in the spacious theme:"}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[73.2,58.6,46.9,37.5,30,24,19.2],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.p,{children:"And the minimum:"}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[38.9,33.3,28.6,24.5,21,18,15.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(n.p,{children:`For applications, such large text is not necessary, even counterproductive.
Hence, there’s a compact theme for typography.
In this theme, a paragraph is 14 pixels at the minimum window width and 18 pixels at the maximum.
Text is a quarter smaller and grows slightly more slowly.`}),`
`,e.jsx(n.p,{children:"The maximum text sizes for all levels in the compact theme:"}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[54.9,43.9,35.2,28.1,22.5,18,14.4],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.p,{children:"And the minimum:"}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[30.3,25.9,22.2,19.1,16.3,14,12],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.h3,{id:"window-widths-for-design",children:"Window Widths for Design"}),`
`,e.jsx(n.p,{children:`In practice, a window can have any width.
Designing for all those widths is impractical.
Therefore, we work with three reference widths in Figma: 320, 832, and 1600 pixels.
At those sizes, we develop a screen for those three classes of devices.
The text sizes at those points are as follows, rounded to 1 decimal place:`}),`
`,e.jsx(n.h4,{id:"spacious-1",children:"Spacious"}),`
`,e.jsx(n.p,{children:`| Device Class | Design Width |    0 |    1 |    2 |    3 |    4 |    5 |    6 |
| :----------- | ------------ | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Phone        | 320          | 38.9 | 33.3 | 28.6 | 24.5 |   21 |   18 | 15.4 |
| Tablet       | 832          | 52.6 | 43.4 | 35.9 | 29.7 | 24.6 | 20.4 | 16.9 |
| Desktop      | 1600         | 73.2 | 58.6 | 46.9 | 37.5 |   30 |   24 | 19.2 |`}),`
`,e.jsx(n.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsx(n.p,{children:`| Device Class | Design Width |    0 |    1 |    2 |    3 |    4 |    5 |    6 |
| :----------- | ------------ | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Phone        | 320          | 30.3 | 25.9 | 22.2 | 19.1 | 16.3 |   14 |   12 |
| Tablet       | 832          | 40.1 | 33.1 | 27.4 | 22.7 | 18.8 | 15.6 |   13 |
| Desktop      | 1600         | 54.9 | 43.9 | 35.2 | 28.1 | 22.5 |   18 | 14.4 |`}),`
`,e.jsx(n.h2,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(n.p,{children:`There are various ways to emphasize text.
Here are our choices.`}),`
`,e.jsx(n.h3,{id:"weight",children:"Weight"}),`
`,e.jsx(n.p,{children:`We use 2 weights online: regular and extra bold.
In CSS terms: 400 and 800.`}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.p,{children:"The text of all kinds of titles, decorative quotes, and form labels use the bold weight."}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:800,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsx(n.p,{children:`Avoid italicized text as much as possible, as it’s not easily readable.
Use it only to format a fragment, not for entire blocks of text.
There are better ways to emphasize long texts.`}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{fontStyle:"italic"}}),`
`,e.jsx(n.h3,{id:"underlining",children:"Underlining"}),`
`,e.jsx(n.p,{children:`Avoid underlining text.
Underline only interactive links.`}),`
`,e.jsx(n.p,{children:`The line thickness is 2 pixels.
The distance between the underline and the baseline is 6 pixels –
more than we can show in the example below.
When the mouse hovers over the link, the line at the top becomes one pixel thicker.`}),`
`,e.jsx(t,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],lineHeight:1.6,sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{color:"#004469",textDecorationLine:"underline",textDecorationThickness:2,textUnderlineOffset:4}}),`
`,e.jsx(n.h3,{id:"letter-spacing",children:"Letter spacing"}),`
`,e.jsx(n.p,{children:`The space between letters (kerning) has been optimized in the typeface.
Adjusting kerning is not allowed.`}),`
`,e.jsx(n.h2,{id:"other-properties",children:"Other Properties"}),`
`,e.jsx(n.h3,{id:"contrast",children:"Contrast"}),`
`,e.jsxs(n.p,{children:["The contrast between text and background colour must meet the latest legal accessibility requirements of ",e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG, level AA"}),"."]}),`
`,e.jsx(n.p,{children:`Most text in the corporate identity is pure black on pure white, meeting the requirement.
We make text white on most dark backgrounds, providing sufficient contrast.
For some background colours, black text is also readable.
Consult the respective components for specific guidelines.`}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(n.p,{children:"Text is almost always left-aligned."}),`
`,e.jsx(n.p,{children:"Exceptions:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The label of a button is centred."}),`
`,e.jsx(n.li,{children:"In a table, it might be better to centre or right-align text."}),`
`]}),`
`,e.jsx(n.h3,{id:"line-length",children:"Line Length"}),`
`,e.jsxs(n.p,{children:[`Long lines of text are challenging to read.
Around 80 characters per line is the maximum.
In the 12-column `,e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"grid"}),", paragraphs meet this when they occupy 8 columns or fewer."]}),`
`,e.jsx(n.h3,{id:"word-breaking",children:"Word Breaking"}),`
`,e.jsxs(n.p,{children:[`The Dutch language has many long words, such as ‘gemeenteraadsverkiezingen’ (municipal elections).
Ensure in your application that these words are hyphenated neatly and do not break out of their container or get hidden.
One way to do this is with the following CSS snippet, combining `,e.jsx(n.code,{children:"hyphens"})," and ",e.jsx(n.code,{children:"word-break"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  hyphens: auto;
  /* only hyphenate words longer than 12 chars, for browsers that support it */
  hyphenate-limit-chars: 12;
  /* break overflowing words for browsers that don’t support CSS hyphens */
  overflow-wrap: break-word;
}
`})}),`
`,e.jsxs(n.p,{children:["Further reading: ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text",rel:"nofollow",children:"Wrapping and breaking text op MDN"})]})]})}function w(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{w as default};
