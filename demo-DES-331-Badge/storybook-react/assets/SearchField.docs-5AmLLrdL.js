import{j as e}from"./index.esm-yb5-WSZz.js";import{M as i,d as s,P as d,e as l,f as t}from"./index-CXJuvauO.js";import{S as c,W as h,C as u}from"./SearchField.stories-cGwCNX8d.js";import{useMDXComponents as a}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-QFQ7K3nt.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const p=`# Search Field

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

## Autocomplete en spellcheck

\`autocomplete\` en \`spellcheck\` staan standaard uit. Deze functies kunnen vervelend zijn voor een gebruiker die zoekt op een deel van een woord, en \`autocomplete\` kan in de weg zitten van een Autosuggest component.

## Relevante WCAG eisen

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships): \`role="search"\` wordt gebruikt voor de search landmark role.
- [WCAG 1.3.5](https://www.w3.org/TR/WCAG22/#identify-input-purpose): het is zowel voor een gebruiker als programmatisch duidelijk wat het doel van een formulierveld is.
- [WCAG 2.4.6](https://www.w3.org/TR/WCAG22/#headings-and-labels): er is een label dat het doel van de input beschrijft.

Search Field is een interactief element, hier gelden [de algemene eisen en richtlijnen voor interactieve elementen](https://amsterdam.github.io/design-system/?path=/docs/docs-designrichtlijnen-interactieve-elementen--docs) voor.
`;function r(o){const n=Object.assign({h3:"h3",p:"p"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(s,{children:p}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"met-placeholder",children:"Met placeholder"}),`
`,e.jsx(n.p,{children:"Een zoekveld kan een placeholder hebben."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"beheerd-component",children:"Beheerd component"}),`
`,e.jsx(n.p,{children:`Standaard wordt het zoekveld niet beheerd door React, maar door de browser.
Het zoekveld kan wel beheerd worden door React.
Als je in dit zoekveld een waarde invult en de zoekknop of de Enter-toets gebruikt, krijg je een melding te zien.`}),`
`,e.jsx(t,{of:u})]})}function M(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{M as default};
