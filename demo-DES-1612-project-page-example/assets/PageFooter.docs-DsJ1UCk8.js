import{j as e}from"./iframe-CFdPz9sb.js";import{useMDXComponents as i}from"./index-Bdr21LJN.js";import{M as r,f as a,P as d,i as o}from"./blocks-CcO1dO42.js";import{a as h,O as c,C as l}from"./PageFooter.stories-yMURA2w1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGKAULwl.js";import"./getHeadingTag-Dv1eMqvl.js";const u=`<!-- @license CC0-1.0 -->

# Page Footer

Provides service information at the bottom of every page.

## Guidelines

- The Page Footer must be used on all websites for the City of Amsterdam.
- It must be the same on every page of the website.

### Content

- This section is required for public websites, but not for internal ones.
  It offers space for various practical links:
  - The first column focuses on contact information.
    Make it specific and tailor it to the website or page.
  - The second column contains links to other relevant sources.
  - The third column refers to newsletters, events, social media, etc.
- Set [the inverse colour](?path=/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours) on all text and links in this area.
- If the Page Footer contains [Headings](https://designsystem.amsterdam/?path=/docs/components-text-heading--docs), give them level 2 and a size of ‘level-3’.
  A visually hidden heading to group them is not necessary – the footer’s landmark provides enough guidance.

### Menu

- The menu is for links to privacy policies, cookie statements, and other information about the website itself.
- It includes a visually hidden heading to provide structural context for screen reader users.
  The default heading text is ‘Over deze website’.
  Customize it when the menu serves a different purpose, or the interface language is not Dutch.
`;function s(t){const n={h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"onderzoek-en-statistiek",children:"Onderzoek en Statistiek"}),`
`,e.jsx(n.p,{children:`The Page Footer for a specific website can be a bit different.
Here’s an example for the ‘Onderzoek en Statistiek’ department.`}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"custom-menu-heading",children:"Custom menu heading"}),`
`,e.jsx(n.p,{children:`For an English website, update the visually hidden heading to ‘Support links’.
If your website is in Dutch, but the default heading of ‘Over deze website’ doesn’t reflect the content of the menu, choose a different heading as well.`}),`
`,e.jsx(o,{of:l})]})}function k(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{k as default};
