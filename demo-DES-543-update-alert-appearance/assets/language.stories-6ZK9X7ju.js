import{M as s}from"./index-qWT9tetx.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{useMDXComponents as r}from"./index-_VGcpBFS.js";import"./iframe-mw70qxr3.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function i(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",em:"em",blockquote:"blockquote",a:"a",ul:"ul",li:"li"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Designrichtlijnen/Taal"}),`
`,e.jsx(n.h1,{id:"taal",children:"Taal"}),`
`,e.jsx(n.h2,{id:"geef-de-taal-op-voor-het-hele-document",children:"Geef de taal op voor het hele document"}),`
`,e.jsx(n.p,{children:`Het is verplicht om expliciet aan te geven in welke taal de inhoud van je pagina is.
Met de juiste taal ingesteld werkt je applicatie beter.
Schermlezers kunnen hiermee tekst in de juiste taal uitspreken.
Ook voor zoekmachineoptimalisatie (SEO) is het nuttig.`}),`
`,e.jsxs(n.p,{children:["Geef de taal aan op het ",e.jsx(n.code,{children:"<html>"}),`-element van je applicatie.
Immers, ook de inhoud van elementen in de `,e.jsx(n.code,{children:"<head>"}),", zoals ",e.jsx(n.code,{children:"title"})," en ",e.jsx(n.code,{children:"meta"}),`, bevatten inhoud in dezelfde taal.
Dat is buiten de scope van de componenten van het design system.
Vandaar dat je er zelf aan moet denken dit goed te doen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="nl">
  …
</html>
`})}),`
`,e.jsx(n.h2,{id:"markeer-elementen-in-een-andere-taal",children:"Markeer elementen in een andere taal"}),`
`,e.jsx(n.p,{children:"Als een specifiek element in een andere taal is geschreven geef je dat daar aan."}),`
`,e.jsx(n.p,{children:"Bijvoorbeeld voor een link naar een Engelse site of pagina in een menu:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<nav>
  <ul>
    <li><a href="https://mijn.amsterdam.nl/">Mijn Amsterdam</a></li>
    <li><a href="https://www.amsterdam.nl/en/" lang="en">English site</a></li>
  </ul>
</nav>
`})}),`
`,e.jsx(n.h2,{id:"specificeer-de-regio-niet",children:"Specificeer de regio niet"}),`
`,e.jsxs(n.p,{children:["De ",e.jsx(n.em,{children:"language tag"})," ",e.jsx(n.code,{children:"nl"}),` is voldoende.
Die uitbreiden met de `,e.jsx(n.em,{children:"region subtag"})," ",e.jsx(n.code,{children:"nl-NL"})," is niet nodig:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`The golden rule when creating language tags is to keep the tag as short as possible.
Avoid region, script or other subtags except where they add useful distinguishing information.
For instance, use `,e.jsx(n.code,{children:"ja"})," for Japanese and not ",e.jsx(n.code,{children:"ja-JP"}),`, unless there is a particular reason that you need to say that this is Japanese as spoken in Japan, rather than elsewhere.
– `,e.jsx(n.a,{href:"https://www.w3.org/International/articles/language-tags/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Internationalization Activity"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"relevante-wcag-eisen",children:"Relevante WCAG-eisen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#language-of-parts",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 3.1.2"}),": geef aan in welke taal tekst in een afwijkende taal is"]}),`
`]})]})}function l(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}const o=()=>{throw new Error("Docs-only story")};o.parameters={docsOnly:!0};const a={title:"Docs/Designrichtlijnen/Taal",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:l};const k=["__page"];export{k as __namedExportsOrder,o as __page,a as default};
