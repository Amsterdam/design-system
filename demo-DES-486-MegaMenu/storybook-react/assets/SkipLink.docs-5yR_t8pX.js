import{j as e}from"./index.esm-w-8rdViJ.js";import{M as s,d as r,P as d,e as k,f as t}from"./index-ewIS1jdG.js";import{S as l,O as p,M as m}from"./SkipLink.stories-AKKr_GZ7.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-f6nL3-v8.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const g=`# Skip Link

Gebruik een Skip Link om makkelijk met het toetsenbord naar de belangrijkste inhoud te navigeren.
Met een Skip Link kun je terugkerende navigatieblokken (zoals het hoofdmenu of het kruimelpad) overslaan.

De Skip Link staat boven de header.
De link is verborgen totdat deze met de tab-toets geactiveerd wordt.
Als de link getoond wordt, duwt deze de hele pagina omlaag.

## Richtlijnen

### Zo gebruiken

- Plaats de Skip Link als eerste element in \`<body>\`, tenzij je een cookie-banner hebt.
  Plaats de Skip Link dan direct na de cookie-banner.
- Gebruik de Skip Link om naar de belangrijkste inhoud te navigeren.
  Op een artikelpagina is dat bijvoorbeeld de titel van het artikel, op een zoekpagina is dat het zoekveld.
- Zet bijvoorbeeld \`id="main"\` op de container van dat element en zet dan \`href="#main"\` op de Skip Link.
- Voor complexe pagina's met meerdere secties kun je meer dan 1 Skip Link gebruiken.
  In de meeste gevallen is dit niet nodig.

### Dit vermijden

- Skip Links zijn niet nodig op een simpele pagina waar alleen tekst staat en weinig navigatie.
  Het doel van een Skip Link is om terugkerende navigatieblokken over te slaan.
  Als die blokken er niet zijn, is een Skip Link niet nodig.
- Plaats de Skip Link niet in een \`nav\` regio, of in de Header.

## Relevante WCAG eisen

- Voor dit component gelden dezelfde WCAG eisen als voor [het link component](https://amsterdam.github.io/design-system/?path=/docs/react_navigation-link--docs).
- [WCAG 2.4.1](https://www.w3.org/TR/WCAG22/#bypass-blocks): gebruik een Skip Link op elke pagina die begint met een terugkerend navigatieblok.
- [WCAG 3.2.3](https://www.w3.org/TR/WCAG22/#consistent-navigation): een Skip Link staat op elke pagina op dezelfde plek.
- [WCAG 3.2.4](https://www.w3.org/TR/WCAG22/#consistent-identification): een Skip Link heeft dezelfde labels op alle pagina's. Bijvoorbeeld niet: "Navigatie overslaan" op een gedeelte van de site, en "Naar de inhoud" op andere pagina's.
`;function a(i){const n=Object.assign({h2:"h2",p:"p"},o(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(r,{children:g}),`
`,e.jsx(d,{}),`
`,e.jsx(k,{}),`
`,e.jsx(n.h2,{id:"toon-bij-focus",children:"Toon bij focus"}),`
`,e.jsx(n.p,{children:"Een Skip Link wordt pas getoond als deze focus krijgt."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"meerdere-links",children:"Meerdere links"}),`
`,e.jsx(n.p,{children:`Als je een complexe pagina met meerdere secties hebt, kun je meer dan 1 Skip Link gebruiken.
In de meeste gevallen is dit niet nodig.`}),`
`,e.jsx(t,{of:m})]})}function A(i={}){const{wrapper:n}=Object.assign({},o(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(a,i)})):a(i)}export{A as default};
