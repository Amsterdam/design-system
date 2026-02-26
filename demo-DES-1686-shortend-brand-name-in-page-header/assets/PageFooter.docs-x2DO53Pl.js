import{j as e}from"./iframe-Buv4lDkF.js";import{useMDXComponents as i}from"./index-B1WfgFde.js";import{M as a,e as r,f as l,i as s}from"./blocks-CdPv9t2M.js";import{a as d,O as m,C as p}from"./PageFooter.stories-Bb0EBQig.js";import{D as c}from"./DesignTokensTable-DoG1-Onv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dzfb00wX.js";import"./getHeadingTag-Dv1eMqvl.js";import"./BorderSample-Cd0woz3X.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-Db-AbNA-.js";import"./ColorSample-BEWLkcv_.js";import"./SpaceSample-Vc1hXuID.js";import"./TypographySample-CpGPX4Vv.js";const u=`<!-- @license CC0-1.0 -->

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
`,h={"page-footer":{menu:{"column-gap":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.grid.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"row-gap":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},medium:{"padding-inline":{$value:"{ams.grid.medium.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},wide:{"padding-inline":{$value:"{ams.grid.wide.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}}},link:{color:{$value:"{ams.links.color}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}"},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}}}},spotlight:{"background-color":{$value:"#004699",$type:"color"}}}},f={ams:h};function o(t){const n={h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"onderzoek-en-statistiek",children:"Onderzoek en Statistiek"}),`
`,e.jsx(n.p,{children:`The Page Footer for a specific website can be a bit different.
Here’s an example for the ‘Onderzoek en Statistiek’ department.`}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"custom-menu-heading",children:"Custom menu heading"}),`
`,e.jsx(n.p,{children:`For an English website, update the visually hidden heading to ‘Support links’.
If your website is in Dutch, but the default heading of ‘Over deze website’ doesn’t reflect the content of the menu, choose a different heading as well.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:f})]})}function F(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{F as default};
