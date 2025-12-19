import{j as e}from"./iframe-BgKmTSVr.js";import{useMDXComponents as o}from"./index-C6a_R4xJ.js";import{M as i,f as r,P as a,i as l}from"./blocks-ByTl3jwH.js";import{a as c,O as d}from"./PageFooter.stories-ydx15St6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWke1jzl.js";import"./getHeadingTag-Dv1eMqvl.js";const h=`<!-- @license CC0-1.0 -->

# Page Footer

Provides service information at the bottom of every page.

## Guidelines

- The Page Footer must be used on all websites for the City of Amsterdam.
- It must be the same on every page of the website.
`;function s(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:c}),`
`,e.jsx(r,{children:h}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.p,{children:"The Page Footer usually consists of two sections: a full-width blue content section and a horizontal menu."}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`This section is required for public websites, but not for internal ones.
It offers space for various practical links:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`The first column focuses on contact information.
Make it specific and tailor it to the website or page.`}),`
`,e.jsx(n.li,{children:"The second column contains links to other relevant sources."}),`
`,e.jsx(n.li,{children:"The third column refers to newsletters, events, social media, etc."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.a,{href:"?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours",children:"the inverse colour"})," on all text and links in this area."]}),`
`,e.jsxs(n.li,{children:["If the Page Footer contains ",e.jsx(n.a,{href:"https://designsystem.amsterdam/?path=/docs/components-text-heading--docs",rel:"nofollow",children:"Headings"}),`, give them level 2 and a size of ‘level-3’.
A visually hidden heading to group them is not necessary – the footer’s landmark provides enough guidance.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"menu",children:"Menu"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The menu is for links to privacy policies, cookie statements, and other information about the website itself."}),`
`,e.jsxs(n.li,{children:[`It includes a visually hidden heading to provide structural context for screen reader users.
The default heading text is ‘Over deze website.’
Use the `,e.jsx(n.code,{children:"header"})," prop to override this value when the menu serves a different purpose, or the interface language is not Dutch."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"onderzoek-en-statistiek",children:"Onderzoek en Statistiek"}),`
`,e.jsx(n.p,{children:`The Page Footer for a specific website can be a bit different.
Here’s an example for the ‘Onderzoek en Statistiek’ department.`}),`
`,e.jsx(l,{of:d})]})}function v(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{v as default};
