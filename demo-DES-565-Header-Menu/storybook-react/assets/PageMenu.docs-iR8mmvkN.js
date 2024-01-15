import{j as e}from"./index.esm-l-0H3Gt2.js";import{M as s,d as a,P as r,f as d}from"./index-dcRu730s.js";import{P as l,A as m}from"./PageMenu.stories-u7o0BEYM.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-AIr0dcby.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const u=`# Page Menu

Het Page Menu wordt alleen gebruikt in het Header en Footer component en is uitsluitend bedoeld voor horizontale navigatie. Het uiterlijk van de links en buttons zijn gelijk getrokken en kunnen beide gebruikt worden. Een link voor navigatie acties en een button voor het afvuren van een javascript event voor bijvoorbeeld het openen van het hoofdmenu of het tonen van een modal.

## Richtlijnen

- Als hoofdnavigatie in de header heeft het Page Menu maximaal 5 items inclusief Zoeken en Menu, staan op 1 regel en is rechts uitgelijnd. Houd minimaal 1 kolom afstand tussen de sitetitel en het eerste menu-item.
- Als footer menu in het Page Menu links uitgelijnd.
- Submenu's zijn niet toegestaan.
  - Gebruik het standaard Menu-item als er meer informatie in het hoofdmenu nodig is. Dit item toont een schermbreed uitklapmenu (overlay) met koppelingen. De indeling van de koppelingen is vrij.
  - Bij gebruik van het Menu-item zijn de overige items (bijvoorbeeld Zoeken, Contact) in de koptekst functioneel. Deze items kunnen herhaald worden binnen het uitgeklapte Menu-item.

## Relevante WCAG eisen

- [Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

PageMenu is een interactief element, hier gelden [de algemene eisen en richtlijnen voor interactieve elementen](https://amsterdam.github.io/design-system/?path=/docs/docs-designrichtlijnen-interactieve-elementen--docs) voor.
`;function i(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"rechts-uitlijnen",children:"Rechts uitlijnen"}),`
`,e.jsx(n.p,{children:`Het kan gebeuren dat alle menu-items niet op 1 regel passen.
Bijvoorbeeld op een middelbreed venster of met ingezoomde tekst.
Als het menu zelf rechts uitgelijnd staat, zoals bijvoorbeeld in de header, dan moet je de items daarbinnen ook rechts uitlijnen.`}),`
`,e.jsx(d,{of:m})]})}function P(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{P as default};
