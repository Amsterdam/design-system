import{M as l}from"./index-47c_5_Y8.js";import{j as e}from"./jsx-runtime-0GPuVWNr.js";import{u as o}from"./index-MVO-xk_1.js";import"./iframe-pPhSZgKn.js";import"../sb-preview/runtime.js";import"./index-7RSFs7Cb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-aKxH7ZY0.js";import"./index-PPLHz8o0.js";function i(r){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a",code:"code"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Designrichtlijnen/Interactieve elementen"}),`
`,e.jsx(n.h1,{id:"interactieve-elementen",children:"Interactieve elementen"}),`
`,e.jsx(n.p,{children:"Hiermee bedoelen we elementen waarmee de gebruiker kan interacteren, zoals links, knoppen en formuliervelden. Ze moeten duidelijk herkenbaar zijn en gemakkelijk te onderscheiden van niet-interactieve elementen. Je moet ze op alle gangbare manieren kunnen bedienen, zoals met een muis, toetsenbord en touchscreen."}),`
`,e.jsx(n.h2,{id:"tekst",children:"Tekst"}),`
`,e.jsx(n.p,{children:"Gebruikers moeten kunnen voorspellen wat er gebeurt als je een interactief element activeert. Ook zonder de zinnen er omheen te lezen."}),`
`,e.jsx(n.p,{children:"Gebruik geen algemene fragmenten voor links, zoals “klik hier” of “lees meer”. Dit is vervelend voor gebruikers van schermlezers die tussen links navigeren. Ook is het niet optimaal voor zoekmachines."}),`
`,e.jsx(n.h3,{id:"relevante-wcag-eisen",children:"Relevante WCAG eisen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#link-purpose-in-context",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.4"}),": het is voor gebruikers duidelijk wat het betekent om op een link te klikken"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#headings-and-labels",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.6"}),": gebruik een label om interactieve elementen te beschrijven"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#label-in-name",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.5.3"}),": de toegankelijke naam van een element moet in ieder geval de zichtbare tekst van het element bevatten"]}),`
`]}),`
`,e.jsx(n.h2,{id:"kleur",children:"Kleur"}),`
`,e.jsx(n.p,{children:"Om aan te geven dat een element interactief is gebruiken we de kleur blauw. Zo zijn inline links blauw en de primaire knop ook. Bij hover wordt dit donkerblauw."}),`
`,e.jsx(n.p,{children:"Als door de context al duidelijk is dat een element interactief is, gebruiken we in sommige gevallen de standaard tekstkleur zwart. Een voorbeeld hiervan is een menu."}),`
`,e.jsx(n.p,{children:"Voor interactieve elementen die onderdeel zijn van een foutmelding gebruiken we rood, en donkerrood voor hover."}),`
`,e.jsx(n.p,{children:"Kleur mag niet de enige indicator van interactiviteit zijn, zodat mensen die moeite hebben met het waarnemen van verschillen in kleur toch kunnen zien dat een element interactief is."}),`
`,e.jsx(n.h3,{id:"relevante-wcag-eisen-1",children:"Relevante WCAG eisen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#use-of-color",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 1.4.1"}),": kleur mag niet de enige manier zijn waarop je aangeeft dat iets interactief is"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 1.4.3"}),": tekst heeft voldoende contrast met de achtergrond"]}),`
`]}),`
`,e.jsx(n.h2,{id:"formaat",children:"Formaat"}),`
`,e.jsx(n.p,{children:"Interactieve elementen zijn minstens 24 bij 24 pixels groot, zodat ze makkelijk te gebruiken zijn voor een grote groep gebruikers."}),`
`,e.jsx(n.h3,{id:"relevante-wcag-eisen-2",children:"Relevante WCAG eisen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://w3c.github.io/wcag/guidelines/22/#target-size-minimum",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.5.8"}),": interactieve elementen zijn minstens 24 bij 24 pixels groot"]}),`
`]}),`
`,e.jsx(n.h2,{id:"focus-indicator",children:"Focus indicator"}),`
`,e.jsxs(n.p,{children:["Wij gebruiken grotendeels de standaard focus indicator van de webbrowsers. De enige aanpassing die we doen is de focus ",e.jsx(n.code,{children:"outline"})," een ",e.jsx(n.code,{children:"offset"})," geven van 2 pixels, zodat er ruimte zit tussen het element en de focus indicator. Hierdoor heeft de focus indicator ook voldoende contrast met donkere elementen."]}),`
`,e.jsx(n.p,{children:"Let op bij het inrichten van een pagina dat de interactieve elementen in een logische volgorde staan, meestal van boven naar beneden en van links naar rechts. Hierdoor krijg je een logische focus / tabbing order."}),`
`,e.jsx(n.h3,{id:"relevante-wcag-eisen-3",children:"Relevante WCAG eisen"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#focus-order",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.3"}),": interactieve elementen hebben een logische focus / tabbing order"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#focus-visible",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.7"}),": de focus indicator is zichtbaar"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.11"}),": de focus indicator wordt niet volledig verborgen door content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.12"}),": de focus indicator wordt niet deels verborgen door content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#focus-appearance",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.4.13"}),": de focus indicator is minimaal 2 pixels breed en heeft voldoende contrast met het element dat focus heeft"]}),`
`]}),`
`,e.jsx(n.h2,{id:"hover",children:"Hover"}),`
`,e.jsx(n.p,{children:"Hover en focus hebben verschillende, niet overlappende stijlen. Als toetsenbordgebruiker is het belangrijk dat je weet welk element je activeert. Als de hover-variant (bijna) hetzelfde is als de focus-variant, dan weet je niet zeker welk element je zult activeren."}),`
`,e.jsxs(n.p,{children:["We gebruiken de cursor hand ",e.jsx(n.code,{children:"pointer"})," bij hover op alle interactieve elementen die geen eigen cursor stijl hebben (zoals tekstvakken). Oorspronkelijk was ",e.jsx(n.code,{children:"pointer"})," alleen bedoeld voor links, maar wij vinden dat de associatie van ",e.jsx(n.code,{children:"pointer"})," met interactiviteit zo sterk is dat we deze cursor vaker gebruiken."]}),`
`,e.jsxs(n.p,{children:["Gebruik het ",e.jsx(n.code,{children:"title"})," attribuut niet. Interactieve elementen met het ",e.jsx(n.code,{children:"title"})," attribuut kunnen een tooltip tonen die over de tekst heen staat, waardoor het minder leesbaar is."]}),`
`,e.jsx(n.h3,{id:"referenties",children:"Referenties"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-link--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie van Utrecht over focus en hover"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/TR/css-ui-4/#valdef-cursor-pointer",target:"_blank",rel:"nofollow noopener noreferrer",children:"Specificatie van cursor pointer."})," Hierin staat dat je pointer moet gebruiken voor links, en mag gebruiken voor andere interactieve elementen"]}),`
`]}),`
`,e.jsx(n.h2,{id:"dubbelklikken",children:"Dubbelklikken"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://design-system.service.gov.uk/components/button/#stop-users-from-accidentally-sending-information-more-than-once",target:"_blank",rel:"nofollow noopener noreferrer",children:"Sommige gebruikers zijn gewend om te dubbelklikken op interactieve elementen."})," Zorg ervoor dat dit niet tot problemen leidt, bijvoorbeeld door een loading state te gebruiken en / of op de server te controleren of data niet vaker is verzonden."]}),`
`,e.jsxs(n.p,{children:["Om ervoor te zorgen dat je niet per ongeluk inzoomt op apparaten die double tap zoom ondersteunen, gebruiken we de CSS regel ",e.jsx(n.code,{children:" touch-action: manipulation"})," op alle interactieve elementen."]})]})}function s(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const t={title:"Docs/Designrichtlijnen/Interactieve elementen",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:s};const b=["__page"];export{b as __namedExportsOrder,a as __page,t as default};
//# sourceMappingURL=interactive-elements.stories-e0sRESi1.js.map
