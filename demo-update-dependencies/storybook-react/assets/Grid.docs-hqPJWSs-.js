import{j as e}from"./index.esm-lZV_uP-H.js";import{M as a,d,P as s,f as r}from"./index-UKuk-cY9.js";import{G as l,C as c,V as m,a as h,S as p,b as j,F as v,c as g}from"./Grid.stories-DUmOOcI8.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-zkupQIKD.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const u=`# Grid

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
Een cel beslaat vaak meerdere kolommen van het grid.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function i(t){const n=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",a:"a"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(d,{children:u}),`
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
`,e.jsx(n.p,{children:`Voor applicaties is zo veel witruimte niet nodig, zelfs contraproductief.
Daarom bestaat er een compacte variant van het grid.`}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"verticale-marge",children:"Verticale marge"}),`
`,e.jsxs(n.p,{children:[`In tegenstelling tot de horizontale marges tussen de kolommen zijn de verticale erboven en eronder instelbaar.
De opties `,e.jsx(n.code,{children:"paddingVertical"}),", ",e.jsx(n.code,{children:"paddingTop"})," en ",e.jsx(n.code,{children:"paddingBottom"}),` voegen daar witruimte toe.
Dit is handig in een gekleurd vlak zoals `,e.jsx(n.a,{href:"?path=/docs/react_containers-footer--docs",children:"Footer"})," of ",e.jsx(n.a,{href:"?path=/docs/react_containers-spotlight--docs",children:"Spotlight"})," of tussen twee opvolgende grids."]}),`
`,e.jsxs(n.p,{children:["Geef een waarde ",e.jsx(n.code,{children:"medium"}),` voor verticale witruimte die even breed is als de horizontale.
Gebruik `,e.jsx(n.code,{children:"small"})," voor de helft van die breedte en ",e.jsx(n.code,{children:"large"})," voor het dubbele."]}),`
`,e.jsx(n.p,{children:"Deze witruimtes krimpen en groeien dus ook met de vensterbreedte."}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"verticale-witruimte",children:"Verticale witruimte"}),`
`,e.jsx(n.p,{children:"Een grid maakt automatisch meerdere rijen als de eerstvolgende cel niet meer op de huidige rij past."}),`
`,e.jsx(n.p,{children:`Standaard zit tussen twee rijen evenveel witruimte als tussen twee kolommen.
In sommige gevallen kan daar beter meer of minder witruimte staan.`}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"cellen-beslaan-kolommen",children:"Cellen beslaan kolommen"}),`
`,e.jsxs(n.p,{children:[`Een cel beslaat standaard 1 kolom in het grid.
Om een cel meer kolommen te laten beslaan, gebruik je de `,e.jsx(n.code,{children:"span"})," prop."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"verschillende-breedtes",children:"Verschillende breedtes"}),`
`,e.jsxs(n.p,{children:[`Je kunt het aantal kolommen dat een cel beslaat laten afhangen van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"span"})," prop met 3 waarden voor respectievelijk smalle, middelbrede en brede vensters."]}),`
`,e.jsxs(n.p,{children:["Via ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," is deze cel 4 van de 4 kolommen breed op smalle vensters, 6 van de 8 op middelbrede en 8 van de 12 op brede vensters:"]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsxs(n.p,{children:["Om de cel de volledige breedte te geven – of het grid nu 4, 8, of 12 kolommen heeft – gebruik je de ",e.jsx(n.code,{children:"fullWidth"})," prop."]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(n.h3,{id:"startpositie",children:"Startpositie"}),`
`,e.jsxs(n.p,{children:[`Elke cel start automatisch in de eerstvolgende beschikbare positie in het grid.
Een waarde van 1 hoef je dus meestal niet expliciet op te geven.
Je kunt de startpositie van een cel aanpassen met de `,e.jsx(n.code,{children:"start"}),` prop.
Zo kun je bijvoorbeeld cellen in meerdere rijen met elkaar uitlijnen.
Of een cel in het midden van een breed grid plaatsen.
Ook kan zo een kolom worden overgeslagen voor meer witruimte tussen cellen.`]}),`
`,e.jsxs(n.p,{children:[`Het kan ook voorkomen dat ook de startpositie van een cel afhangt van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"start"})," prop met 3 waarden, precies zoals bij ",e.jsx(n.code,{children:"span"}),"."]}),`
`,e.jsxs(n.p,{children:["Een voorbeeld met ",e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsx(n.p,{children:`Zorg ervoor dat het aantal kolommen dat je aan een cel toekent past bij het aantal kolommen van het grid voor de betreffende vensterbreedte.
Datzelfde geldt voor het starten van een cel in een latere kolom.
Als het totaal van beide waarden te groot is voegt de browser kolommen toe aan het grid.
Dit is niet toegestaan.`})]})}function S(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{S as default};
