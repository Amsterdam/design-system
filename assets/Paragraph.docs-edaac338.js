import{j as e}from"./jsx-runtime-94f6e698.js";import{M as s,d as r,P as d,e as l,f as a}from"./index-8ae2bae2.js";import{P as p,D as g,L as m,S as h}from"./Paragraph.stories-7f22405c.js";import{u as o}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-f2529064.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./paragraph-e63faf48.js";import"./clsx.m-1229b3e0.js";const w=`# Paragraph

De \`Paragraph\` component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.

## Richtlijnen

- Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft.
- Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's. Teksten met niet al te lange alinea's zijn makkelijker te begrijpen als je pauze neemt, en door het groeperen is informatie sneller terug te vinden.

## Relevante WCAG eisen

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): Blokken die er uit zien als een alinea worden ook door een computer herkend als alinea
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): Het contrast van zwarte tekst op een witte achtergrond is hoog genoeg
- [WCAG 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text): Tekst kan met zoomen en het aanpassen van de standaard tekstgrootte twee keer zo groot gemaakt worden
- [WCAG 1.4.10](https://www.w3.org/TR/WCAG21/#reflow): Als de tekst breder is dan de viewport is scrollen niet nodig om alle tekst te kunnen zien
- [WCAG 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing): De genoemde style properties kunnen worden aangepast zonder dat de tekst onleesbaar wordt
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): Het is aan te geven in welke taal de tekst is
- [WCAG 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced): Het contrast van zwarte tekst op een witte achtergrond is hoger dan 7:1
- [WCAG 1.4.8](https://www.w3.org/TR/WCAG21/#visual-presentation): We voldoen niet aan al deze eisen

## Referenties

- [MDN: \`<p>\`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net](https://taaladvies.net/lengte-van-alineas/)
`,c=`# HTML

Gebruik altijd het \`<p>\` HTML-element, die heeft automatisch de goede paragraph role in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Ook is zo de tekst nog steeds goed leesbaar als de CSS niet geladen kan worden.
`;function i(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(r,{children:w}),`
`,e.jsx(r,{children:c}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsx(n.p,{children:"Gebruik dit formaat alleen voor de introductietekst van een pagina. Het is niet verplicht om een introductietekst te gebruiken. Gebruik er maximaal 1 per pagina."}),`
`,e.jsx(n.p,{children:"Een introductietekst is een bondige beschrijving van de inhoud van een pagina. Gebruik deze tekst om de lezer te verleiden om verder te lezen."}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsx(n.p,{children:"Gebruik dit formaat voor hulpteksten, bijschriften, metadata e.d. Hou deze teksten kort."}),`
`,e.jsx(a,{of:h})]})}function M(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{M as default};
//# sourceMappingURL=Paragraph.docs-edaac338.js.map
