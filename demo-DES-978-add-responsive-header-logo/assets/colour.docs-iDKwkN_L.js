import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as n}from"./index-1Ha5aU2j.js";import{M as h}from"./index-BIea2Bte.js";import{c}from"./clsx-B-dksMZM.js";import{r as j}from"./index-C0MU9AHG.js";import"./index-yBjzXJbu.js";import"./iframe-D9TbWH05.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const i=j.forwardRef(({children:s,...l},x)=>e.jsx("div",{...l,className:"ams-docs-color-palette",ref:x,children:s}));i.displayName="ColorPalette";const a=({children:s,name:l})=>e.jsxs("div",{className:c("ams-docs-color-swatch",`ams-docs-color-swatch--${l}`),children:[e.jsx("span",{className:"ams-docs-color-name",children:l}),s]});a.displayName="ColorPalette.Swatch";const d=({color:s,level:l})=>s&&e.jsxs("div",{className:c("ams-docs-color-tile",`ams-docs-color-tile--${l}`),children:[e.jsx("span",{className:"ams-docs-color-level",children:l}),e.jsx("div",{className:"ams-docs-color-sample",style:{backgroundColor:s},title:s})]});d.displayName="ColorPalette.Tile";const t=Object.assign(i,{Swatch:a,Tile:d});try{t.displayName="ColorPalette",t.__docgenInfo={description:"",displayName:"ColorPalette",props:{}}}catch{}/*@license CC0-1.0*/function o(s){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...n(),...s.components};return t||r("ColorPalette",!1),t.Swatch||r("ColorPalette.Swatch",!0),t.Tile||r("ColorPalette.Tile",!0),e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(h,{title:"Brand/Design Tokens/Colour"}),`
`,e.jsx(l.h1,{id:"colour",children:"Colour"}),`
`,e.jsx(l.p,{children:`Our colour palette is vibrant and crisp.
The main colours are red, blue, black, and white.
They are complemented by two greys and seven supplemental colours.`}),`
`,e.jsx(l.h2,{id:"palette",children:"Palette"}),`
`,e.jsx(l.p,{children:`The primary appearance of each colour has been called level 60.
Some colours offer a darker shade at level 80 for hover effects.
A light neutral colour is at level 20, white is at level 0, and black is at level 100.`}),`
`,e.jsxs(t,{children:[e.jsxs(t.Swatch,{name:"red",children:[e.jsx(t.Tile,{color:"#ec0000",level:"60"}),e.jsx(t.Tile,{color:"#b70000",level:"80"})]}),e.jsxs(t.Swatch,{name:"blue",children:[e.jsx(t.Tile,{color:"#004699",level:"60"}),e.jsx(t.Tile,{color:"#003677",level:"80"})]}),e.jsxs(t.Swatch,{name:"neutral",children:[e.jsx(t.Tile,{color:"#ffffff",level:"0"}),e.jsx(t.Tile,{color:"#d1d1d1",level:"20"}),e.jsx(t.Tile,{color:"#767676",level:"60"}),e.jsx(t.Tile,{color:"#181818",level:"100"})]}),e.jsx(t.Swatch,{name:"lime",children:e.jsx(t.Tile,{color:"#bed200",level:"60"})}),e.jsx(t.Swatch,{name:"green",children:e.jsx(t.Tile,{color:"#00a03c",level:"60"})}),e.jsx(t.Swatch,{name:"orange",children:e.jsx(t.Tile,{color:"#ff9100",level:"60"})}),e.jsx(t.Swatch,{name:"azure",children:e.jsx(t.Tile,{color:"#009de6",level:"60"})}),e.jsx(t.Swatch,{name:"yellow",children:e.jsx(t.Tile,{color:"#ffe600",level:"60"})}),e.jsx(t.Swatch,{name:"magenta",children:e.jsx(t.Tile,{color:"#e50082",level:"60"})}),e.jsx(t.Swatch,{name:"purple",children:e.jsx(t.Tile,{color:"#a00078",level:"60"})})]}),`
`,e.jsx(l.h2,{id:"brand-tokens",children:"Brand tokens"}),`
`,e.jsxs(l.p,{children:["The term 'Brand' represents the highest level in the three-tier token structure of the ",e.jsx(l.a,{href:"https://nldesignsystem.nl/handboek/design-tokens/",rel:"nofollow",children:"NL Design System"}),"."]}),`
`,e.jsx(l.p,{children:`Our brand colour tokens have meaningful (semantic) names instead of generic labels like 'blue-60' or 'red-100' that other design systems may use.
This approach ensures that the correct colour is used in the appropriate context.
Always use a token for its intended purpose based on its name.
Please reach out to us if you require a different colour token.`}),`
`,e.jsx(l.h3,{id:"text",children:"Text"}),`
`,e.jsx(l.p,{children:"These are the potential foreground colours for text."}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(l.tbody,{children:[e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-text)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-100"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-text)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-text-secondary)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-text-secondary)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-text-inverse)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-0"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color ams-docs-token-example--color-border",style:{backgroundColor:"var(--ams-color-text-inverse)"}})})]})]})]}),`
`,e.jsx(l.h3,{id:"background",children:"Background"}),`
`,e.jsx(l.p,{children:"We have one background colour for the page and various components."}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsx(l.tbody,{children:e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-background)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-0"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color ams-docs-token-example--color-border",style:{backgroundColor:"var(--ams-color-background)"}})})]})})]}),`
`,e.jsx(l.h3,{id:"feedback",children:"Feedback"}),`
`,e.jsx(l.p,{children:`Use these colours for positive and negative feedback, warnings, and messages that need attention.
Interactive elements in an invalid state use the 'invalid interactive' token, not the 'error feedback' token.`}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(l.tbody,{children:[e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-feedback-error)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"red-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-feedback-error)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-feedback-info)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"azure-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-feedback-info)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-feedback-success)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"green-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-feedback-success)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-feedback-warning)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"orange-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-feedback-warning)"}})})]})]})]}),`
`,e.jsx(l.h3,{id:"interactive",children:"Interactive"}),`
`,e.jsx(l.p,{children:"These colours show elements that the user can interact with, like links, buttons, and form controls."}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(l.tbody,{children:[e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"blue-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-hover)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"blue-80"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-hover)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-contrast)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-100"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-contrast)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-disabled)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-disabled)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-invalid)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"red-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-invalid)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-invalid-hover)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"red-80"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-invalid-hover)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-inverse)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-0"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color ams-docs-token-example--color-border",style:{backgroundColor:"var(--ams-color-interactive-inverse)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-interactive-secondary)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-100"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-interactive-secondary)"}})})]})]})]}),`
`,e.jsx(l.h3,{id:"highlight",children:"Highlight"}),`
`,e.jsx(l.p,{children:"Components can use these colours to stand out."}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsxs(l.tbody,{children:[e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-azure)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"azure-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-azure)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-green)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"green-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-green)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-lime)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"lime-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-lime)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-magenta)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"magenta-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-magenta)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-orange)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"orange-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-orange)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-purple)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"purple-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-purple)"}})})]}),e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-highlight-yellow)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"yellow-60"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-highlight-yellow)"}})})]})]})]}),`
`,e.jsx(l.h3,{id:"separator",children:"Separator"}),`
`,e.jsx(l.p,{children:"This colour is used to separate components or space."}),`
`,e.jsxs(l.table,{children:[e.jsx(l.thead,{children:e.jsxs(l.tr,{children:[e.jsx(l.th,{style:{textAlign:"left"},children:"CSS variable"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Colour"}),e.jsx(l.th,{style:{textAlign:"left"},children:"Example"})]})}),e.jsx(l.tbody,{children:e.jsxs(l.tr,{children:[e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx(l.code,{children:"var(--ams-color-separator)"})}),e.jsx(l.td,{style:{textAlign:"left"},children:"neutral-20"}),e.jsx(l.td,{style:{textAlign:"left"},children:e.jsx("div",{className:"ams-docs-token-example--color",style:{backgroundColor:"var(--ams-color-separator)"}})})]})})]})]})}function w(s={}){const{wrapper:l}={...n(),...s.components};return l?e.jsx(l,{...s,children:e.jsx(o,{...s})}):o(s)}function r(s,l){throw new Error("Expected "+(l?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
