import{j as e}from"./clsx.m-51e04ab1.js";import{M as i,d as s,P as d,e as c,f as t}from"./index-d0c76243.js";import{A as l,E as m,T as h}from"./Accordion.stories-f0749dd0.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-be2783c0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";/* empty css                  */import"./icon-d09674c0.js";import"./index.esm-681424b7.js";import"./Heading-8085572e.js";import"./Paragraph-28699716.js";const p=`# Accordion

Het accordion component is een klikbare (verticaal gestapelde) lijst van koppen om bijbehorende inhoud te verbergen of te vertonen. Met een accordion toon je inhoud op een progressieve manier aan gebruikers.

Een accordion bestaat uit meerdere accordionsecties. Gebruik minimaal 3 en maximaal 10 secties onder elkaar. Je kunt door een accordion navigeren met je toetsenbord:

| key                  | element                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Enter of Space       | Open of sluit de accordionsectie die de focus heeft                                                                          |
| Tab                  | Ga naar het volgende element dat focus kan hebben                                                                            |
| Shift + Tab          | Ga naar het volgende element dat focus kan hebben                                                                            |
| Pijltje naar beneden | Als een accordionsectie focus heeft: ga naar de volgende sectie. Als de laatste sectie focus heeft, ga naar de eerste sectie |
| Pijltje omhoog       | Als een accordionsectie focus heeft: ga naar de vorige sectie. Als de eerste sectie focus heeft, ga naar de laatste sectie   |
| Home                 | Als een accordionsectie focus heeft: ga naar de eerste sectie                                                                |
| End                  | Als een accordionsectie focus heeft: ga naar de laatste sectie                                                               |

## Referenties

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`;function r(o){const n=Object.assign({p:"p",code:"code",em:"em",h2:"h2",h3:"h3",a:"a"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(s,{children:p}),`
`,e.jsxs(n.p,{children:["Elke accordionsectie heeft een eigen, unieke naam. Geef deze naam mee via de ",e.jsx(n.code,{children:"label"})," ",e.jsx(n.em,{children:"property"})," van het ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"expanded-by-default",children:"Expanded by default"}),`
`,e.jsxs(n.p,{children:["Als je wilt dat de inhoud van een accordionsectie al getoond wordt als de gebruiker op de pagina komt, geef dan de ",e.jsx(n.code,{children:"expanded"})," ",e.jsx(n.em,{children:"property"})," mee aan het ",e.jsx(n.code,{children:"Accordion.Section"})," component."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"too-many-landmarks",children:"Too many landmarks"}),`
`,e.jsxs(n.p,{children:["Een accordionsectie gebruikt ",e.jsx(n.em,{children:"default"})," de HTML tag ",e.jsx(n.em,{children:"section"}),` om de inhoud in te renderen.
Als je veel accordionsecties op je pagina hebt (meer dan 6), dan kan dit leiden tot een teveel aan `,e.jsx(n.em,{children:"landmark"}),` regio's, wat verwarrend kan zijn voor gebruikers van schermlezers.
Gebruik in dat geval `,e.jsx(n.code,{children:"section={false}"}),". Let op: Storybook geeft deze ",e.jsx(n.em,{children:"property"})," niet goed weer in het codeblock."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h2,{id:"technische-toelichting",children:"Technische toelichting"}),`
`,e.jsxs(n.p,{children:["Op het moment (28-6-2023) heeft het HTML element ",e.jsx(n.code,{children:"details"}),` wat toegankelijkheidsproblemen.
`,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#summaries_as_headings",target:"_blank",rel:"nofollow noopener noreferrer",children:["Zo wordt een ",e.jsx(n.em,{children:"heading"})," in een ",e.jsx(n.code,{children:"summary"})," niet goed begrepen door schermlezers"]}),` en
leest NVDA de ingeklapte en en uitgeklapte status niet goed voor in Chrome en Edge. Daarom hebben we er voor gekozen om dit `,e.jsx(n.em,{children:"native"}),` element niet te gebruiken.
Als deze problemen zijn opgelost, zouden we dit wel kunnen doen.`]})]})}function D(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{D as default};
//# sourceMappingURL=Accordion.docs-f149cea1.js.map
