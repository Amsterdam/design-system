import{j as e}from"./index.esm-OPLxA6uh.js";import{M as a,d,P as i,e as l,f as r}from"./index-M5mr9s6k.js";import{G as c,M as h,F as m,S as p}from"./GridCell.stories-rSeVIy7E.js";import{u as s}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-YyKZvlK_.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const j=`# Grid cell

Beslaat een aantal kolommen in een [Grid](?path=/docs/react_layout-grid--docs).

## Gebruik

Verdeel hiermee een grid in cellen.
Geef aan hoeveel kolommen van het grid de cel beslaat.
Dat aantal kan variëren voor smalle, middelbrede of brede schermen.
In elke cel plaats je vervolgens de gewenste inhoud.

## Ontwerp

De [ontwerpkeuzes](?path=/docs/docs-designrichtlijnen-grid--docs) staan beschreven onder de designrichtlijnen.
`;function o(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(d,{children:j}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsxs(n.p,{children:[`Een cel beslaat standaard 1 kolom in het grid.
Om een cel meer kolommen te laten beslaan, gebruik je de `,e.jsx(n.code,{children:"span"})," prop."]}),`
`,e.jsx(i,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"verschillende-breedtes",children:"Verschillende breedtes"}),`
`,e.jsxs(n.p,{children:[`Je kunt het aantal kolommen dat een cel beslaat laten afhangen van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"span"})," prop met 3 waarden voor respectievelijk smalle, middelbrede en brede vensters."]}),`
`,e.jsxs(n.p,{children:["Via ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," is deze cel 4 van de 4 kolommen breed op smalle vensters, 6 van de 8 op middelbrede en 8 van de 12 op brede vensters:"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.p,{children:[`Het kan ook voorkomen dat ook de startpositie van een cel afhangt van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"start"})," prop met 3 waarden."]}),`
`,e.jsx(n.h3,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsxs(n.p,{children:["Om de cel de volledige breedte te geven – of het grid nu 4, 8, of 12 kolommen heeft – gebruik je de ",e.jsx(n.code,{children:"fullWidth"})," prop."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"startpositie",children:"Startpositie"}),`
`,e.jsxs(n.p,{children:[`Elke cel start automatisch in de eerstvolgende beschikbare positie in het grid.
Een waarde van 1 hoef je dus meestal niet expliciet op te geven.
Je kunt de startpositie van een cel aanpassen met de `,e.jsx(n.code,{children:"start"}),` prop.
Op brede schermen kan het zijn dat een cel een aantal van de middelste kolommen beslaat.
Ook komt dit voor als je halverwege de rij een kolom leeg wil laten.`]}),`
`,e.jsxs(n.p,{children:["Een voorbeeld met ",e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Zorg ervoor dat het aantal kolommen dat je aan een cel toekent past bij het aantal kolommen van het grid voor de betreffende vensterbreedte. Datzelfde geldt voor het starten van een cel in een latere kolom. Als het totaal van beide waarden is te groot is voegt de browser kolommen toe aan het grid. Dit is niet toegestaan."}),`
`]})]})}function C(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{C as default};
