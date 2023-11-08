import{j as e}from"./index.esm-a86226ae.js";import{M as r,d as s,P as l,e as d,f as t}from"./index-6b21d1e1.js";import{L as c,S as g,I as p,a as h,b as k,o as m,c as u}from"./Link.stories-e1642379.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-6afae9de.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const b=`# Link

Een link (in het Nederlands: koppeling) wordt gebruikt als navigatie-element en kan op zichzelf of inline met tekst worden gebruikt. Het is de lichtgewicht variant voor navigatie.

## Richtlijnen

Gebruik een link in de volgende gevallen:

- Navigatie naar een andere pagina binnen de website of applicatie
- Navigatie naar een andere website (zie [Externe links](#externe-links))
- Navigatie naar een element op dezelfde pagina
- Koppeling naar e-mails of telefoonnummers (begin de link met \`mailto:\` of \`tel:\`)

Een link is een navigatie component. Gebruik een knop in plaats van een link als er een actie gewenst is.

<!--
  TODO: According to the spec, you should use a link for downloads as well. Last time I checked, different browsers handled this differently,
  which led to unexpected results. Maybe that changed in the meantime. Do we want to figure this out and describe this in the docs as well?
-->

### Externe links

Geef een externe link altijd \`rel="external"\` mee. Vermijd \`target="_blank"\`, maar gebruik in ieder geval \`rel="external noopener"\` als het moet. Voor meer informatie: [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/)

### Bezochte stijl

Bezochte koppelingen geven aan dat een gebruiker de koppeling al heeft geopend. Gebruikte stijlen raden we af bij koppelingen, omdat ze de pagina vaak onoverzichtelijk maken. Het maakt navigeren door een pagina moeilijker. De inline koppeling heeft wel een bezochte stijl. Het vormt geen onderdeel van navigatie elementen die veel gescand worden.

## Relevante WCAG eisen

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)

## Referenties

- [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/): Vermijd \`target="_blank"\` of gebruik \`rel="external noopener"\` als het moet.
- [_A comprehensive guide to designing perfect links in UX_, op Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): best practices rondom links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ door Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): hoe schrijf je goede links? Een uitgebreid artikel over links.
- [_Hover, focus, active_, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): goede uitleg over de states die elementen zoals de link en button hebben in browsers.
- [MDN: \`<a>\`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): uitgebreid overzicht van alle mogelijkheden van links in HTML.
`;function o(i){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},a(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s,{children:b}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"standalone",children:"Standalone"}),`
`,e.jsx(n.p,{children:"Op zichzelf staande koppelingen staan direct na inhoud. Ze mogen niet in zinnen of alinea's worden gebruikt. Ze hebben nooit een icoon."}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h3,{id:"inline",children:"Inline"}),`
`,e.jsx(n.p,{children:`Inline koppelingen worden gebruikt in zinnen of alinea's met tekst.
Aan inline koppelingen mag een 16 px icoon toegevoegd worden. Die staat achter de koppeling.
Gebruik geen overdaad aan inline-links op dezelfde pagina. Het verwart de gebruiker.`}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h3,{id:"in-list",children:"In List"}),`
`,e.jsx(n.p,{children:`Voor lijsten van koppelingen staan chevrons. De chevrons kunnen vervangen worden door andere iconen binnen een categorie.
Een combinatie van chevrons en iconen binnen een categorie is niet toegestaan.`}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(n.h3,{id:"on-dark-background",children:"On Dark Background"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"on-light-background",children:"On Light Background"}),`
`,e.jsx(t,{of:u})]})}function M(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e.jsx(n,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{M as default};
//# sourceMappingURL=Link.docs-fb2a4531.js.map
