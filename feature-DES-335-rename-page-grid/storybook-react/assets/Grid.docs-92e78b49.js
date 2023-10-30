import{j as e}from"./index.esm-475179b1.js";import{M as i,d as a,P as s,f as d}from"./index-92bafe40.js";import{G as l,C as c}from"./Grid.stories-f093219e.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-01cec7ea.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const h=`# Grid

Levert een tweedimensionaal raster waarop alle elementen van een pagina uitgelijnd worden.

## Gebruik

Elke pagina moet het grid gebruiken als basis voor de layout.
Een [Footer](?path=/docs/react_containers-footer--docs) en een [Highlight](?path=/docs/react_containers-highlight--docs) zijn iets breder dan het grid.
Daarom wordt in HTML vóór deze componenten een instantie van Grid afgesloten en erbinnen een nieuwe geopend.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function o(r){const n=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",code:"code",ul:"ul",li:"li"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.p,{children:[`Plaats een grid in een
`,e.jsx(n.a,{href:"?path=/docs/react_layout-screen--docs",children:"Screen"}),`,
`,e.jsx(n.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"}),`
of `,e.jsx(n.a,{href:"?path=/docs/react_containers-highlight--docs",children:"Highlight"}),`.
Meerdere instanties van dit component zijn dus mogelijk op een pagina.
Visueel moeten ze wel allemaal op elkaar aansluiten.`]}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(n.p,{children:"De roze vlakken vertegenwoordigen de kolommen van het grid. Zoom in of verander de breedte van het venster om de breedtes en het aantal kolommen te zien veranderen. Let op: op brede schermen zijn de witruimtes tussen de kolommen soms breder dan de kolommen zelf."}),`
`,e.jsx(s,{}),`
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
`,e.jsx(d,{of:c}),`
`,e.jsxs(n.p,{children:["Voor meer voorbeelden raadpleeg je ",e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})," zelf."]})]})}function M(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{M as default};
//# sourceMappingURL=Grid.docs-92e78b49.js.map
