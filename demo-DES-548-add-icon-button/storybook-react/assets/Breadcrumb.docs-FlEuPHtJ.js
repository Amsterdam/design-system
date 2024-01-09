import{j as e}from"./index.esm-mRy7zm5p.js";import{M as o,d as a,P as d}from"./index-zkbP8rgH.js";import{B as s}from"./Breadcrumb.stories-3cTrVR1l.js";import{useMDXComponents as i}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./iframe-khNMOCTO.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";const c=`# Breadcrumb

De breadcrumb (in het Nederlands: kruimelpad) is een secundair navigatiepatroon dat een gebruiker helpt de structuur tussen niveaus in de website tot de huidige pagina te begrijpen. Gebruikers kunnen het gebruiken om door de structuur te navigeren.

## Richtlijnen

### Zo gebruiken

Gebruik het kruimelpad alleen als het functioneel iets toevoegt voor de gebruiker en als de structuur ‘statisch’ is.

### Dit vermijden

Het kruimelpad wordt niet ingezet op een formulierpagina. Het leidt af van de taak van de gebruiker of kan per ongeluk als Progress Indicator gezien worden.

Het is een secundair navigatiepatroon. Het mag nooit de hoofdnavigatie vervangen.
`;function t(r){const n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s}),`
`,e.jsx(a,{children:c}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"gebruik",children:"Gebruik"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"<Breadcrumb />"})," accepteert een lijst van ",e.jsx(n.code,{children:"<Breadcrumb.Item />"})," componenten als kinderen. Andere types worden er uitgefilterd en dus niet getoond."]}),`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"<Breadcrumb.Item />"})," accepteert een ",e.jsx(n.code,{children:"href"})," prop, die de link bepaalt. Deze is verplicht om mee te geven."]}),`
`,e.jsxs(n.li,{children:["Het ",e.jsx(n.code,{children:"<Breadcrumb.Item />"})," gaat maximaal tot 8 levels diep. Items die dieper zijn worden niet getoond."]}),`
`]})]})}function w(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{w as default};
