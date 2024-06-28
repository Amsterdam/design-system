import{j as e}from"./index.esm-cNgDosLW.js";import{M as s,d as o,P as d,e as l,f as i}from"./index-G7kOvCSZ.js";import{C as c,a as m,I as h}from"./Card.stories-zzzTdxmf.js";import{u as r}from"./index-Dbo06S9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-xoTGBHFo.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const g=`# Card

Gebruik een card op een overzichtspagina om te verwijzen naar een detailpagina, zoals een nieuwsbericht, een vacature of een zoekresultaat. De card bevat meestal de titel, introductie en afbeelding van de content. De link is verplicht.

## Schermlezers

Met een schermlezer kun je onder andere navigeren via headings en links in een document. De titel van een card is een link in een heading, zodat je van beide navigatiemanieren gebruik kunt maken. Een schermlezer leest eerst de titel op, daarna de rest van de inhoud.

## Richtlijnen

- De titel van een card is een link in een heading. Hier gelden dezelfde richtlijnen voor als voor reguliere [links](https://amsterdam.github.io/design-system/?path=/docs/react_navigation-link--docs) en [headings](https://amsterdam.github.io/design-system/?path=/docs/react_text-heading--docs).
- Een card heeft meer inhoud nodig dan alleen een titel. Vul dit aan met tekstuele en/of visuele inhoud. Als dit lastig is, kijk dan of een [top task link](https://amsterdam.github.io/design-system/?path=/docs/react_navigation-top-task-link--docs) of [reguliere link](https://amsterdam.github.io/design-system/?path=/docs/react_navigation-link--docs) beter past.
`;function a(t){const n=Object.assign({h2:"h2",p:"p",em:"em",code:"code"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(o,{children:g}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"card-with-tagline",children:"Card with tagline"}),`
`,e.jsxs(n.p,{children:["Een card kan een ",e.jsx(n.em,{children:"tagline"}),` hebben, tekst voor de titel.
Om de volgorde voor schermlezers logisch te houden,
wordt eerst de titel gedefinieerd, en dan de `,e.jsx(n.em,{children:"tagline"}),". Visueel wordt dit omgedraaid door ",e.jsx(n.code,{children:"Card.HeadingGroup"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h2,{id:"image-card",children:"Image card"}),`
`,e.jsx(n.p,{children:"Een card kan ook een plaatje bevatten. Gebruik het Aspect Ratio component voor de juiste beeldverhoudingen."}),`
`,e.jsx(i,{of:h})]})}function E(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}export{E as default};