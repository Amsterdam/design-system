import{j as e}from"./index.esm-vjjWA7af.js";import{M as o,d as a,P as s,f as r}from"./index-OXWXA1lg.js";import{G as l,C as c,V as h,a as m}from"./Grid.stories-ft-uxoXY.js";import{u as d}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-Cl_Y66AY.js";import"../sb-preview/runtime.js";import"./index-f2OjG03D.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const j=`# Grid

Verdeelt de breedte van het scherm in kolommen waarop de elementen van een pagina worden uitgelijnd.

## Gebruik

Elke pagina moet het grid gebruiken als basis voor de layout.
Het staat dus direct binnen [Screen](?path=/docs/layout-screen--docs).

Een [Footer](?path=/docs/react_containers-footer--docs) en een [Highlight](?path=/docs/react_containers-highlight--docs) zijn iets breder dan het grid.
Vóór deze componenten sluit je een instantie van het grid af.
Erbinnen en eventueel erna start je een nieuwe.

Meerdere instanties van het grid component zijn dus mogelijk op een pagina.
De kolommen van alle grids moeten wel precies op elkaar aansluiten.

Binnen het grid maak je cellen die de gewenste inhoud bevatten.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function t(i){const n=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",a:"a",ul:"ul",li:"li"},d(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.p,{children:`De roze vlakken hieronder vertegenwoordigen de kolommen van het grid.
De tussenruimtes zijn wit.
Op brede schermen kunnen de tussenruimtes breder zijn dan de kolommen.
Zoom in, verander de breedte van het venster of kantel je toestel om de breedtes en het aantal kolommen te zien veranderen.`}),`
`,e.jsx(n.h3,{id:"ruimtelijk",children:"Ruimtelijk"}),`
`,e.jsx(n.p,{children:`Voor websites is het grid behoorlijk ruimtelijk.
Zo is de huisstijl ontworpen.`}),`
`,e.jsx(n.p,{children:`Op brede schermen heeft het grid 12 kolommen en staan alle 12 cellen in dit voorbeeld dus op een rij.
Op smalle of middelbrede schermen zie je drie rijen van vier kolommen, of een rij van acht en een rij van vier.`}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h3,{id:"compact",children:"Compact"}),`
`,e.jsxs(n.p,{children:[`Voor applicaties is zo veel witruimte niet nodig, zelfs contraproductief.
Daarom bestaat er een compacte variant van het grid.
Deze zet je aan via `,e.jsx(n.code,{children:'density="high"'}),"."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"verticale-marge",children:"Verticale marge"}),`
`,e.jsxs(n.p,{children:[`In tegenstelling tot de horizontale marges tussen de kolommen zijn de verticale erboven en eronder instelbaar.
De opties `,e.jsx(n.code,{children:"paddingVertical"}),", ",e.jsx(n.code,{children:"paddingTop"})," en ",e.jsx(n.code,{children:"paddingBottom"}),` voegen daar witruimte toe.
Dit is handig in een gekleurd vlak zoals `,e.jsx(n.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"})," of ",e.jsx(n.a,{href:"?path=/docs/react_containers-highlight--docs",children:"Highlight"})," of tussen twee opvolgende grids."]}),`
`,e.jsxs(n.p,{children:["Geef een waarde ",e.jsx(n.code,{children:"medium"}),` voor verticale witruimte die even breed is als de horizontale.
Gebruik `,e.jsx(n.code,{children:"small"})," voor de helft van die breedte en ",e.jsx(n.code,{children:"large"})," voor het dubbele."]}),`
`,e.jsx(n.p,{children:"Deze witruimtes krimpen en groeien dus ook met de vensterbreedte."}),`
`,e.jsx(r,{of:h}),`
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
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"cel",children:"Cel"}),`
`,e.jsxs(n.p,{children:[`Een cel beslaat standaard 1 kolom in het grid.
Om een cel meer kolommen te laten beslaan, gebruik je de `,e.jsx(n.code,{children:"span"})," prop."]}),`
`,e.jsx(r,{of:void 0}),`
`,e.jsx(n.h3,{id:"verschillende-breedtes",children:"Verschillende breedtes"}),`
`,e.jsxs(n.p,{children:[`Je kunt het aantal kolommen dat een cel beslaat laten afhangen van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"span"})," prop met 3 waarden voor respectievelijk smalle, middelbrede en brede vensters."]}),`
`,e.jsxs(n.p,{children:["Via ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," is deze cel 4 van de 4 kolommen breed op smalle vensters, 6 van de 8 op middelbrede en 8 van de 12 op brede vensters:"]}),`
`,e.jsx(r,{of:void 0}),`
`,e.jsxs(n.p,{children:[`Het kan ook voorkomen dat ook de startpositie van een cel afhangt van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"start"})," prop met 3 waarden."]}),`
`,e.jsx(n.h3,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsxs(n.p,{children:["Om de cel de volledige breedte te geven – of het grid nu 4, 8, of 12 kolommen heeft – gebruik je de ",e.jsx(n.code,{children:"fullWidth"})," prop."]}),`
`,e.jsx(r,{of:void 0}),`
`,e.jsx(n.h3,{id:"startpositie",children:"Startpositie"}),`
`,e.jsxs(n.p,{children:[`Elke cel start automatisch in de eerstvolgende beschikbare positie in het grid.
Een waarde van 1 hoef je dus meestal niet expliciet op te geven.
Je kunt de startpositie van een cel aanpassen met de `,e.jsx(n.code,{children:"start"}),` prop.
Zo kun je bijvoorbeeld cellen in meerdere rijen met elkaar uitlijnen.
Of een cel in het midden van een breed grid plaatsen.
Ook komt dit voor als een kolom als extra witruimte wilt gebruiken.`]}),`
`,e.jsxs(n.p,{children:["Een voorbeeld met ",e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(r,{of:void 0}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Zorg ervoor dat het aantal kolommen dat je aan een cel toekent
past bij het aantal kolommen van het grid voor de betreffende vensterbreedte.
Datzelfde geldt voor het starten van een cel in een latere kolom.
Als het totaal van beide waarden is te groot is voegt de browser kolommen toe aan het grid.
Dit is niet toegestaan.`}),`
`]})]})}function V(i={}){const{wrapper:n}=Object.assign({},d(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(t,i)})):t(i)}export{V as default};
//# sourceMappingURL=Grid.docs-4OQ6DwD9.js.map
