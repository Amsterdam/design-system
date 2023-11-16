import{j as e}from"./index.esm-35a5296b.js";import{M as d,d as s,P as a,f as i}from"./index-b3c14502.js";import{G as l,V as c,C as h}from"./Grid.stories-7eb7ef64.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-709fe102.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const m=`# Grid

Levert een tweedimensionaal raster waarop alle elementen van een pagina uitgelijnd worden.

## Gebruik

Elke pagina moet het grid gebruiken als basis voor de layout, dus direct binnen [Screen](?path=/docs/layout-screen--docs).

Een [Footer](?path=/docs/react_containers-footer--docs) en een [Highlight](?path=/docs/react_containers-highlight--docs) zijn iets breder dan het grid.
Daarom wordt in HTML vóór deze componenten een instantie van Grid afgesloten en erbinnen een nieuwe geopend.

Meerdere instanties van dit component zijn dus mogelijk op een pagina.
Visueel moeten ze wel allemaal op elkaar aansluiten.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function o(r){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",ul:"ul",li:"li"},t(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(s,{children:m}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(n.p,{children:"De roze vlakken vertegenwoordigen de kolommen van het grid. Zoom in of verander de breedte van het venster om de breedtes en het aantal kolommen te zien veranderen. Let op: op brede schermen zijn de witruimtes tussen de kolommen soms breder dan de kolommen zelf."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h3,{id:"verticale-marges",children:"Verticale marges"}),`
`,e.jsxs(n.p,{children:[`In tegenstelling tot de horizontale marges zijn de verticale instelbaar.
De opties `,e.jsx(n.code,{children:"marginVertical"}),", ",e.jsx(n.code,{children:"marginTop"})," en ",e.jsx(n.code,{children:"marginBottom"}),` voegen witruimte boven en/of onder het grid toe.
Dit is handig in een vlak met een achtergrondkleur zoals `,e.jsx(n.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"}),` of
`,e.jsx(n.a,{href:"?path=/docs/react_containers-highlight--docs",children:"Highlight"})," of tussen twee opvolgende grids."]}),`
`,e.jsxs(n.p,{children:["Elk kan een waarde ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"small"})," of ",e.jsx(n.code,{children:"large"}),` krijgen.
De witruimtes zijn even breed als de horizontale witruimte tussen de kolommen,
respectievelijk de helft en het dubbele daarvan.
Deze krimpen en groeien dus ook met de vensterbreedte.`]}),`
`,e.jsx(i,{of:c}),`
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
`,e.jsx(i,{of:h}),`
`,e.jsxs(n.p,{children:["Voor meer voorbeelden raadpleeg je ",e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})," zelf."]}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gebruik de ",e.jsx(n.code,{children:"spaceVertical"})," prop niet tegelijk met de ",e.jsx(n.code,{children:"spaceTop"})," of ",e.jsx(n.code,{children:"spaceBottom"})," props."]}),`
`]})]})}function M(r={}){const{wrapper:n}=Object.assign({},t(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{M as default};
//# sourceMappingURL=Grid.docs-a33d43aa.js.map
