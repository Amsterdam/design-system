import{j as e}from"./index.esm-286MnZVs.js";import{M as s,d as a,P as d,e as c,f as t}from"./index-p3OPrIG1.js";import{I as l,W as m,S as j,L as h,a as g,b as u,c as p}from"./Icon.stories-v1wWH_Jd.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-kOwNgmj1.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const v=`# Icon

Iconen zijn visuele symbolen die worden gebruikt om ideeën, thema’s of acties weer te geven. Ze communiceren in één oogopslag de boodschap en vestigen de aandacht op belangrijke (interactieve) informatie. Gebruik altijd een \`Icon\` component om een SVG icoon heen voor de juiste vormgeving en maatvoering.

## Interactieve elementen

Ter ondersteuning van tekstuele interactie-elementen, zoals knoppen en links, kunnen iconen gebruikt worden. Probeer altijd een icoon te voorzien van begeleidende tekst. Iconen zonder begeleidende tekst mogen alleen gebruikt worden als ze aan internationale standaarden voldoen, zoals menu (hamburger icoon), zoek (vergrootglas), volgende, vorige, play, pauze, enz.

## Kleur

Iconen zijn zwart of wit. Bij interactie zijn ze donkerblauw. Uitgeschakeld zijn ze grijs. En ze moeten voldoen aan dezelfde contrastverhouding voor toegankelijkheid als typografie bij een achtergrondkleur. Het icoon neemt standaard de kleur van de _container_ waar deze in zit over.

## Uitlijning

Iconen staan standaard links van de tekst en zijn verticaal in het midden van de eerste regel tekst uitgelijnd.

## Grootte

De iconen gebruiken dezelfde tekstniveaus als alle typografische componenten om hun grootte te bepalen. Hierdoor zijn icoon en tekst makkelijk op elkaar af te stemmen. [Bekijk de documentatie over typografie voor meer informatie](/docs/docs-designrichtlijnen-typografie--docs#tekstniveaus).
`;function i(o){const n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",a:"a"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(a,{children:v}),`
`,e.jsx(n.h1,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:["Het React Icon component gebruik je samen met een React SVG component uit ",e.jsx(n.code,{children:"@amsterdam/design-system-react-icons"}),". Importeer deze SVG als volgt:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { EmailIcon } from "@amsterdam/design-system-react-icons";
`})}),`
`,e.jsx(n.p,{children:"Daarna kun je deze in het component gebruiken op deze manier:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<Icon svg={EmailIcon} />
`})}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"with-text",children:"With text"}),`
`,e.jsxs(n.p,{children:[`Iconen kunnen naast tekst gebruikt worden. Door dezelfde tekstniveaus te gebruiken voor icoon en tekst lijnen ze perfect uit.
`,e.jsx(n.a,{href:"/docs/docs-designrichtlijnen-typografie--docs#tekstniveaus",children:"Bekijk de documentatie over typografie voor meer informatie"}),"."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"square",children:"Square"}),`
`,e.jsxs(n.p,{children:["Soms is het handig als het icoon vierkante ruimte inneemt, bijvoorbeeld bij de ",e.jsx(n.a,{href:"https://amsterdam.github.io/design-system/?path=/docs/react_buttons-icon-button--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Icon Button"}),"."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"level-3",children:"Level 3"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"level-4",children:"Level 4"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h3,{id:"level-5",children:"Level 5"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h3,{id:"level-6",children:"Level 6"}),`
`,e.jsx(t,{of:p})]})}function G(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{G as default};
