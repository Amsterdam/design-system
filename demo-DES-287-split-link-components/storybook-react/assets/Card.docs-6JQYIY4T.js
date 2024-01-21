import{j as e}from"./index.esm-uEY-W2Hk.js";import{M as o,d as s,P as d,e as l,f as i}from"./index-vHY_NqOt.js";import{C as c,W as g,a as m}from"./Card.stories-ITBo-EMg.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-M_H0bY9H.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const h=`# Card

Gebruik een card op een overzichtspagina om te verwijzen naar een detailpagina,
zoals een nieuwsbericht, een vacature of een zoekresultaat.
De card bevat meestal de titel, introductie en afbeelding van de content.
De link is verplicht.

## Richtlijnen

- De titel van een card is een link in een heading.
  Hier gelden dezelfde richtlijnen voor als voor reguliere [links](?path=/docs/react_navigation-link--docs) en [headings](?path=/docs/react_text-heading--docs).
  De link is actief op het hele gebied van de card.
- Een card heeft meer inhoud nodig dan alleen een titel.
  Vul dit aan met tekstuele en/of visuele inhoud.
- De tekst zet je in een reguliere paragraaf.
  Alleen voor een tagline of datum gebruik je de kleinste tekstgrootte.
- Als de inhoud geen detailpagina vertegenwoordigt is dit component niet de beste optie.
  Om te verwijzen naar een thematische pagina gebruik je een [top task link](?path=/docs/react_navigation-top-task-link--docs).
  Ook kun je een [reguliere link](?path=/docs/react_navigation-link--docs) inzetten.

## Schermlezers

Met een schermlezer kun je onder andere navigeren via headings en links in een document.
De titel van een card is een link in een heading, zodat je van beide navigatiemanieren gebruik kunt maken.
Een schermlezer leest eerst de titel op, daarna de rest van de inhoud.
`;function a(t){const n=Object.assign({h2:"h2",p:"p",em:"em",code:"code",a:"a"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(s,{children:h}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"met-tagline",children:"Met tagline"}),`
`,e.jsxs(n.p,{children:["Een card kan boven de titel een ",e.jsx(n.em,{children:"tagline"}),` tonen, een korte term zoals een categorie of informatiesoort.
Gebruik een `,e.jsx(n.code,{children:"Card.HeadingGroup"}),`.
Dit zorgt er ook voor dat schermlezers eerst de titel voorlezen, dan de tagline.`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"met-afbeelding",children:"Met afbeelding"}),`
`,e.jsxs(n.p,{children:[`Een card toont vaak de afbeelding van de detailpagina.
Gebruik `,e.jsx(n.a,{href:"?path=/docs/layout-aspect-ratio--docs",children:"Aspect Ratio"})," voor de juiste beeldverhouding."]}),`
`,e.jsx(i,{of:m})]})}function w(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}export{w as default};
