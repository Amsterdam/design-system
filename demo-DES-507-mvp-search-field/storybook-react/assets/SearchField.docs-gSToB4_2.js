import{j as e}from"./index.esm-BiCjkXKg.js";import{M as a,d as s,P as d,f as t}from"./index-PT3ed5sj.js";import{S as l,W as h,C as c}from"./SearchField.stories-Z4I-GsLS.js";import{u as i}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-BFea1Y47.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const u=`# Search Field

Met een Search Field (in het Nederlands: zoekveld) kunnen gebruikers snel relevante inhoud vinden. Een gebruiker voert een (deel van een) woord of zin in om daarmee inhoud te doorzoeken.

## Richtlijnen

- Je kunt een zoekactie starten door de zoekknop of de Enter-toets te gebruiken.
- Als er geen zoekterm is ingevuld kan geen zoekactie gestart worden.

## Autofocus

Je kunt \`autofocus\` gebruiken om de focus gelijk in een zoekveld te plaatsen als de gebruiker op een pagina komt.
Wees hier wel voorzichtig mee, dit kan negatieve gevolgen hebben:

- Voor gebruikers van een schermlezer kan dit betekenen dat ze belangrijk inhoud boven het zoekveld overslaan.
- Op kleinere apparaten kan het gebruik van \`autofocus\` er voor zorgen dat de pagina automatisch naar het zoekveld scrollt, waardoor je eerdere inhoud kan missen.
- Op apparaten met touchscreen kan dit ervoor zorgen dat het toetsenbord gelijk wordt getoond, waardoor belangrijke inhoud verborgen wordt.

Gebruik \`autofocus\` alleen als het zoekveld aan het begin van een pagina staat, en er geen andere elementen op een pagina staan waar een gebruiker misschien eerst gebruik van wil maken.

Voor meer informatie: [Accessibility Tips: Be Cautious When Using Autofocus](https://www.boia.org/blog/accessibility-tips-be-cautious-when-using-autofocus)

## Relevante WCAG eisen

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships): \`role="search"\` wordt gebruikt voor de search landmark role.
- [WCAG 1.3.5](https://www.w3.org/TR/WCAG22/#identify-input-purpose): het is zowel voor een gebruiker als programmatisch duidelijk wat het doel van een formulierveld is.
- [WCAG 2.4.6](https://www.w3.org/TR/WCAG22/#headings-and-labels): er is een label dat het doel van de input beschrijft.

Search Field is een interactief element, hier gelden [de algemene eisen en richtlijnen voor interactieve elementen](https://amsterdam.github.io/design-system/?path=/docs/docs-designrichtlijnen-interactieve-elementen--docs) voor.
`;function r(o){const n=Object.assign({h3:"h3",p:"p"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(s,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h3,{id:"met-placeholder",children:"Met placeholder"}),`
`,e.jsx(n.p,{children:"Een zoekveld kan een placeholder hebben."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"beheerd-component",children:"Beheerd component"}),`
`,e.jsx(n.p,{children:`Standaard wordt het zoekveld niet beheerd door React, maar door de browser.
Het zoekveld kan wel beheerd worden door React.
Als je in dit zoekveld een waarde invult en de zoekknop of de Enter-toets gebruikt, krijg je een melding te zien.`}),`
`,e.jsx(t,{of:c})]})}function W(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{W as default};
