import{j as e}from"./index.esm-431af643.js";import{M as i,d,P as a,f as r}from"./index-c4f3883c.js";import{G as l,S as c,M as h,F as m}from"./GridCell.stories-5f51538b.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-c541c6f2.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const p=`# Grid cell

Beslaat een aantal kolommen in een [Page Grid](?path=/docs/react_layout-page-grid--docs).

## Gebruik

Gebruik het \`GridCell\` component om een grid in cellen te verdelen.
Op de cel kun je aangeven hoeveel kolommen van het grid het element beslaat.
In elke cel plaats je vervolgens een component of element.
`;function o(t){const n=Object.assign({p:"p",code:"code",h3:"h3",h2:"h2",ul:"ul",li:"li"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(d,{children:p}),`
`,e.jsxs(n.p,{children:[`Een cel beslaat standaard 1 kolom in het grid.
Om een cel meer kolommen te laten beslaan, gebruik je de `,e.jsx(n.code,{children:"span"})," prop."]}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h3,{id:"startpositie",children:"Startpositie"}),`
`,e.jsxs(n.p,{children:[`Elke cel start automatisch in de eerstvolgende beschikbare positie in het grid.
Je kunt de startpositie van een cel aanpassen met de `,e.jsx(n.code,{children:"start"}),` prop.
In dit geval `,e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"verschillende-breedtes",children:"Verschillende breedtes"}),`
`,e.jsxs(n.p,{children:[`Je kunt het aantal kolommen dat een cel beslaat laten afhangen van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"span"})," prop met 3 waarden voor respectievelijk smalle, middelbrede en brede vensters."]}),`
`,e.jsxs(n.p,{children:["Via ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," is deze cel 4 van de 4 kolommen breed op smalle vensters, 6 van de 8 op middelbrede en 8 van de 12 op brede vensters:"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.p,{children:[`Het kan zelfs voorkomen dat ook de startpositie van een cel afhangt van de vensterbreedte.
Gebruik hiervoor de `,e.jsx(n.code,{children:"start"})," prop met 3 waarden."]}),`
`,e.jsx(n.h3,{id:"volledige-breedte",children:"Volledige breedte"}),`
`,e.jsxs(n.p,{children:["Om de cel de volledige breedte te geven – of het grid nu 4, 8, of 12 kolommen heeft – gebruik je de ",e.jsx(n.code,{children:"fullWidth"})," prop."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Zorg ervoor dat het aantal kolommen dat je aan een cel toekent past bij het aantal kolommen van het grid voor de betreffende vensterbreedte. Datzelfde geldt voor het starten van een cel in een latere kolom. Als het totaal van beide waarden is te groot is voegt de browser kolommen toe aan het grid. Dit is niet toegestaan."}),`
`,e.jsxs(n.li,{children:["Gebruik de ",e.jsx(n.code,{children:"fullWidth"})," prop niet tegelijk met de ",e.jsx(n.code,{children:"span"})," of ",e.jsx(n.code,{children:"start"})," props."]}),`
`]})]})}function D(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{D as default};
//# sourceMappingURL=GridCell.docs-a64c9af7.js.map
