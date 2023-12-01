import{j as e}from"./index.esm-i-XkbLrl.js";import{M as a,d,P as s,f as i}from"./index-lYwHvYIt.js";import{G as l,C as c,V as m,a as h,b as p}from"./Grid.stories-INo8lE-p.js";import{u as o}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-yLqkjO6z.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const g=`# Grid

Levert een tweedimensionaal raster waarop alle elementen van een pagina uitgelijnd worden.

## Gebruik

Elke pagina moet het grid gebruiken als basis voor de layout, dus direct binnen [Screen](?path=/docs/layout-screen--docs).

Een [Footer](?path=/docs/react_containers-footer--docs) en een [Highlight](?path=/docs/react_containers-highlight--docs) zijn iets breder dan het grid.
Daarom wordt in HTML vóór deze componenten een instantie van Grid afgesloten en erbinnen een nieuwe geopend.

Meerdere instanties van dit component zijn dus mogelijk op een pagina.
Visueel moeten ze wel allemaal op elkaar aansluiten.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function t(r){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",ul:"ul",li:"li"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(d,{children:g}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(n.p,{children:"De roze vlakken vertegenwoordigen de kolommen van het grid. Zoom in of verander de breedte van het venster om de breedtes en het aantal kolommen te zien veranderen. Let op: op brede schermen zijn de witruimtes tussen de kolommen soms breder dan de kolommen zelf."}),`
`,e.jsx(n.p,{children:`Voor websites is het grid behoorlijk ruimtelijk.
Zo is de huisstijl ontworpen.`}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h3,{id:"compact",children:"Compact"}),`
`,e.jsx(n.p,{children:`Voor applicaties is zo veel witruimte niet nodig, zelfs contraproductief.
Daarom bestaat er een compacte variant van het grid.`}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"verticale-marge",children:"Verticale marge"}),`
`,e.jsxs(n.p,{children:[`In tegenstelling tot de horizontale marges zijn de verticale instelbaar.
De opties `,e.jsx(n.code,{children:"paddingVertical"}),", ",e.jsx(n.code,{children:"paddingTop"})," en ",e.jsx(n.code,{children:"paddingBottom"}),` voegen witruimte boven en/of onder het grid toe.
Dit is handig in een vlak met een achtergrondkleur zoals `,e.jsx(n.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"}),` of
`,e.jsx(n.a,{href:"?path=/docs/react_containers-highlight--docs",children:"Highlight"})," of tussen twee opvolgende grids."]}),`
`,e.jsxs(n.p,{children:["Elk kan een waarde ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"small"})," of ",e.jsx(n.code,{children:"large"}),` krijgen.
De witruimtes zijn even breed als de horizontale witruimte tussen de kolommen,
respectievelijk de helft en het dubbele daarvan.
Deze krimpen en groeien dus ook met de vensterbreedte.`]}),`
`,e.jsx(i,{of:m}),`
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
`,e.jsx(n.h3,{id:"verticale-witruimte",children:"Verticale witruimte"}),`
`,e.jsx(n.p,{children:"Een grid maakt automatisch meerdere rijen als de eerstvolgende cel niet meer op de huidige rij past."}),`
`,e.jsx(n.p,{children:`Standaard zit tussen twee rijen evenveel witruimte als tussen twee kolommen.
In sommige gevallen kan daar beter meer of minder witruimte staan.`}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(n.p,{children:["Voor meer voorbeelden raadpleeg je ",e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})," zelf."]})]})}function E(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{E as default};
