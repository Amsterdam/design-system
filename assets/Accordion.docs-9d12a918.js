import{j as e}from"./jsx-runtime-94f6e698.js";import{M as r,d as i,P as s,e as d,f as c}from"./index-f3008dd7.js";import{A as l,E as m}from"./Accordion.stories-fa85c3fb.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-8f1d24ba.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./paragraph-e63faf48.js";import"./clsx.m-1229b3e0.js";import"./icon-d1edcb32.js";import"./index.esm-d3f37b54.js";import"./Heading-25c64837.js";const h=`# Accordion

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
`;function t(o){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",em:"em",a:"a"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(i,{children:h}),`
`,e.jsx(s,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(n.h3,{id:"expanded-by-default",children:"Expanded by default"}),`
`,e.jsxs(n.p,{children:["Als je wilt dat de inhoud van een accordionsectie al getoond wordt als de gebruiker op de pagina komt, geef dan de ",e.jsx(n.code,{children:"amsterdam-accordion__panel--expanded"})," ",e.jsx(n.em,{children:"class"})," mee aan de desbetreffende ",e.jsx(n.code,{children:"section"})," en set ",e.jsx(n.code,{children:'aria-expanded="true"'})," op de bijbehorende button."]}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(n.h2,{id:"too-many-landmarks",children:"Too many landmarks"}),`
`,e.jsxs(n.p,{children:["Gebruik voor een accordionsectie de HTML tag ",e.jsx(n.code,{children:"section"}),". Als je veel accordionsecties op je pagina hebt (meer dan 6), dan kan dit leiden tot een teveel aan ",e.jsx(n.em,{children:"landmark"}),` regio's, wat verwarrend kan zijn voor gebruikers van schermlezers.
Gebruik in dit geval een `,e.jsx(n.code,{children:"div"})," tag."]}),`
`,e.jsx(n.h2,{id:"technische-toelichting",children:"Technische toelichting"}),`
`,e.jsxs(n.p,{children:["Op het moment (28-6-2023) heeft het HTML element ",e.jsx(n.code,{children:"details"}),` wat toegankelijkheidsproblemen.
`,e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#summaries_as_headings",target:"_blank",rel:"nofollow noopener noreferrer",children:["Zo wordt een ",e.jsx(n.em,{children:"heading"})," in een ",e.jsx(n.code,{children:"summary"})," niet goed begrepen door schermlezers"]}),` en
leest NVDA de ingeklapte en en uitgeklapte status niet goed voor in Chrome en Edge. Daarom hebben we er voor gekozen om dit `,e.jsx(n.em,{children:"native"}),` element niet te gebruiken.
Als deze problemen zijn opgelost, zouden we dit wel kunnen doen.`]})]})}function T(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{T as default};
//# sourceMappingURL=Accordion.docs-9d12a918.js.map
