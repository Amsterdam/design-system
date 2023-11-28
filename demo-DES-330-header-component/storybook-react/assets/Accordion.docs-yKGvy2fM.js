import{j as e}from"./index.esm-Ok5IPpo3.js";import{M as r,d,P as s,e as c,f as t}from"./index--pomPSbe.js";import{A as l,E as h,T as m}from"./Accordion.stories-DjA6kh0e.js";import{u as a}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-3DEw8sS9.js";import"../sb-preview/runtime.js";import"./index-f2OjG03D.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";const p=`# Accordion

Het accordion component is een klikbare (verticaal gestapelde) lijst van koppen om bijbehorende inhoud te verbergen of te tonen. Met een accordion toon je inhoud op een progressieve manier aan gebruikers.

## Richtlijnen

- Gebruik een accordion op een volle pagina met zowel essentiële als niet-essentiële inhoud. Door niet-essentiële inhoud te verbergen, komen gebruikers sneller bij de essentiële inhoud.
- Gebruik een accordion niet om te veel essentiële inhoud op 1 pagina te voorkomen. Herschrijf de pagina compacter, verdeel de inhoud over meerdere pagina's of gebruik het (nog te maken) inhoudsopgave-component in plaats van een accordion voor dat doel. Verberg essentiële informatie niet in een accordion.
- Een accordion bestaat uit meerdere accordionsecties. Gebruik minimaal 3 en maximaal 10 secties onder elkaar.
- Het is belangrijk dat accordionsecties duidelijke koppen hebben, omdat de gebruiker de verborgen inhoud niet kan "scannen" om relevante informatie te vinden.
- De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert voor de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de secties die de zoekterm bevatten automatisch uitklappen.
- De inhoud van de accordeon kan opmaak bevatten (bijvoorbeeld headings, lijsten, links en knoppen).

Je kunt door een accordion navigeren met je toetsenbord:

| key                  | element                                                                                                                      |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| Enter of Space       | Open of sluit de accordionsectie die de focus heeft                                                                          |
| Tab                  | Ga naar het volgende element dat focus kan hebben                                                                            |
| Shift + Tab          | Ga naar het volgende element dat focus kan hebben                                                                            |
| Pijltje naar beneden | Als een accordionsectie focus heeft: ga naar de volgende sectie. Als de laatste sectie focus heeft, ga naar de eerste sectie |
| Pijltje omhoog       | Als een accordionsectie focus heeft: ga naar de vorige sectie. Als de eerste sectie focus heeft, ga naar de laatste sectie   |
| Home                 | Als een accordionsectie focus heeft: ga naar de eerste sectie                                                                |
| End                  | Als een accordionsectie focus heeft: ga naar de laatste sectie                                                               |

## Relevante WCAG eisen

De WCAG eisen voor het Button component en het Heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordionsecties is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik \`aria-controls\` voor de button, en gebruik een \`region\` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element \`<section>\`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: \`Down Arrow\`, \`Up Arrow\`, \`Home\` en \`End\`. \`Space\` moet de button activeren, niet de pagina scrollen (gebruik \`keypressEvt.preventDefault()\`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Referenties

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`;function i(o){const n=Object.assign({p:"p",code:"code",em:"em",h2:"h2",h3:"h3",a:"a"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(d,{children:p}),`
`,e.jsxs(n.p,{children:["Elke accordionsectie heeft een eigen, unieke naam. Geef deze naam mee via de ",e.jsx(n.code,{children:"label"})," ",e.jsx(n.em,{children:"property"})," van het ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(s,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"expanded-by-default",children:"Expanded by default"}),`
`,e.jsxs(n.p,{children:["Als je wilt dat de inhoud van een accordionsectie al getoond wordt als de gebruiker op de pagina komt, geef dan de ",e.jsx(n.code,{children:"expanded"})," ",e.jsx(n.em,{children:"property"})," mee aan het ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"too-many-landmarks",children:"Too many landmarks"}),`
`,e.jsxs(n.p,{children:["Een accordionsectie gebruikt standaard de HTML tag ",e.jsx(n.code,{children:"section"}),` om de inhoud in te renderen.
Als je veel accordionsecties op je pagina hebt (meer dan 6), dan kan dit leiden tot een teveel aan `,e.jsx(n.em,{children:"landmark"}),` regio's, wat verwarrend kan zijn voor gebruikers van schermlezers.
Gebruik in dat geval `,e.jsx(n.code,{children:"section={false}"}),". Let op: Storybook geeft deze ",e.jsx(n.em,{children:"property"})," niet goed weer in het codeblock."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"technische-toelichting",children:"Technische toelichting"}),`
`,e.jsxs(n.p,{children:["Op het moment (28-6-2023) heeft het HTML element ",e.jsx(n.code,{children:"details"}),` wat toegankelijkheidsproblemen.
`,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#summaries_as_headings",target:"_blank",rel:"nofollow noopener noreferrer",children:["Zo wordt een ",e.jsx(n.em,{children:"heading"})," in een ",e.jsx(n.code,{children:"summary"})," niet goed begrepen door schermlezers"]}),` en
leest NVDA de ingeklapte en en uitgeklapte status niet goed voor in Chrome en Edge. Daarom hebben we er voor gekozen om dit `,e.jsx(n.em,{children:"native"}),` element niet te gebruiken.
Als deze problemen zijn opgelost, zouden we dit wel kunnen doen.`]})]})}function z(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{z as default};
//# sourceMappingURL=Accordion.docs-yKGvy2fM.js.map
