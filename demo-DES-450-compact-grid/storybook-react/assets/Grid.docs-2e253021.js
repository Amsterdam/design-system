import{j as e}from"./index.esm-3ad9a628.js";import{M as i,d as a,P as l,f as s}from"./index-c3a85fd6.js";import{G as d,C as c}from"./Grid.stories-a91e40b1.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-d718b017.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=`# Grid

Levert een tweedimensionaal raster waarop alle elementen van een pagina uitgelijnd worden.

## Gebruik

Elke pagina moet het grid gebruiken als basis voor de layout, dus direct binnen [Screen](?path=/docs/layout-screen--docs).

Een [Footer](?path=/docs/react_containers-footer--docs) en een [Highlight](?path=/docs/react_containers-highlight--docs) zijn iets breder dan het grid.
Daarom wordt in HTML vóór deze componenten een instantie van Grid afgesloten en erbinnen een nieuwe geopend.

Meerdere instanties van dit component zijn dus mogelijk op een pagina.
Visueel moeten ze wel allemaal op elkaar aansluiten.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function o(r){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li",a:"a"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(n.p,{children:"De roze vlakken vertegenwoordigen de kolommen van het grid. Zoom in of verander de breedte van het venster om de breedtes en het aantal kolommen te zien veranderen. Let op: op brede schermen zijn de witruimtes tussen de kolommen soms breder dan de kolommen zelf."}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"cellen",children:"Cellen"}),`
`,e.jsx(n.p,{children:`Binnen het grid maak je cellen waarin andere componenten geplaatst kunnen worden.
Per cel geef je aan hoe veel van de kolommen het beslaat.`}),`
`,e.jsxs(n.p,{children:["Dit eenvoudige voorbeeld verdeelt het grid in drie cellen van 4 kolommen: ",e.jsx(n.code,{children:"span={4}"}),`.
Elke cel biedt ruimte voor een afbeelding.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Op brede vensters heeft het grid 12 kolommen en passen de afbeeldingen naast elkaar."}),`
`,e.jsx(n.li,{children:"Op middelbrede vensters heeft het grid 8 kolommen en staan de eerste twee afbeeldingen naast elkaar en de derde onder de eerste."}),`
`,e.jsx(n.li,{children:"Op smalle schermen heeft het grid 4 kolommen en staan de afbeeldingen onder elkaar."}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsxs(n.p,{children:["Voor meer voorbeelden raadpleeg je ",e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})," zelf."]}),`
`,e.jsx(n.h2,{id:"research",children:"Research"}),`
`,e.jsx(n.p,{children:"TODO Intro"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://geary.co/clamp-calculator/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://geary.co/clamp-calculator/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://modern-fluid-typography.vercel.app/?rootFontSize=16&minSize=16&fluidSize=3.125&relativeSize=0.375&maxSize=56",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://modern-fluid-typography.vercel.app/?rootFontSize=16&minSize=16&fluidSize=3.125&relativeSize=0.375&maxSize=56"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://modern-fluid-typography.vercel.app/?rootFontSize=16&minSize=16&fluidSize=1.5625&relativeSize=-0.0625&maxSize=40",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://modern-fluid-typography.vercel.app/?rootFontSize=16&minSize=16&fluidSize=1.5625&relativeSize=-0.0625&maxSize=40"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://gs.statcounter.com/screen-resolution-stats/desktop/netherlands",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://gs.statcounter.com/screen-resolution-stats/desktop/netherlands"})}),`
`]})]})}function S(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{S as default};
//# sourceMappingURL=Grid.docs-2e253021.js.map
