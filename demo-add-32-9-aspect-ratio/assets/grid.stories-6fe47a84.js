import{M as s}from"./index-9d2f386c.js";import{j as e}from"./jsx-runtime-2abd473f.js";import{u as d}from"./index-a0644a7c.js";import"./iframe-71d3373a.js";import"../sb-preview/runtime.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",em:"em",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Designrichtlijnen/Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(n.p,{children:`Onder elke pagina ligt hetzelfde grid.
Alle elementen op een pagina worden op het grid geplaatst.
Ze beslaan dan een bepaald aantal kolommen, en de witruimtes daartussen.`}),`
`,e.jsx(n.h2,{id:"ontwerp",children:"Ontwerp"}),`
`,e.jsxs(n.p,{children:["Het grid is volledig ",e.jsx(n.em,{children:"responsive"}),": afhankelijk van de breedte van het venster verandert de breedte van het grid en het aantal kolommen."]}),`
`,e.jsx(n.h3,{id:"er-zijn-4-8-of-12-kolommen",children:"Er zijn 4, 8 of 12 kolommen"}),`
`,e.jsx(n.p,{children:`In vensters tot 576 pixels breed levert het grid 4 kolommen.
Tot een breedte van 1088 pixels zijn dat er 8.
Op dat punt worden en blijven het er 12.`}),`
`,e.jsx(n.p,{children:`Deze breakpoints zijn gebaseerd op stappen van 256 pixels, beginnend op een basis van 64 pixels.
Zo is 576 = 64 + 2 × 256 en 1088 = 64 + 4 × 256.`}),`
`,e.jsx(n.h3,{id:"veel-witruimte",children:"Veel witruimte"}),`
`,e.jsx(n.p,{children:`De horizontale witruimte tussen kolommen is 16 pixels breed bij een vensterbreedte van 320 pixels.
Voor elke 256 pixels extra breedte groeit de witruimte lineair met 8 pixels.
Bij een vensterbreedte van 1600 pixels is het dus 56 pixels.
Dit past bij de ruimtelijke opzet van de huisstijl.`}),`
`,e.jsx(n.p,{children:`Op brede vensters worden de witruimtes bijna even breed als de kolommen zelf.
Dat lijkt misschien onnatuurlijk, maar is geen probleem – doorgaans worden elementen op 3 of 4 kolommen van het grid geplaatst en die krijgen dan ook de tussenliggende witruimtes mee.`}),`
`,e.jsx(n.h3,{id:"marges-links-en-rechts",children:"Marges links en rechts"}),`
`,e.jsx(n.p,{children:`Het grid staat horizontaal gecentreerd op de pagina.
Aan beide zijden reserveert het grid marges om afstand te houden tot de randen van het venster.
Deze ruimte is 1½ keer zo breed als die tussen de kolommen.`}),`
`,e.jsx(n.p,{children:`Sommige elementen mogen over deze marges gepositioneerd worden, zoals de Page Footer en een schermvullende afbeelding.
Die zijn dan dus breder dan de rest van de content, maar worden wel beperkt door een maximale breedte.`}),`
`,e.jsx(n.h3,{id:"niet-onbeperkt-breed",children:"Niet onbeperkt breed"}),`
`,e.jsx(n.p,{children:`Een maximale breedte voor het grid zorgt ervoor dat de elementen van een pagina niet al te ver van elkaar verwijderd raken.
Ook wordt de witruimte en typografie dan niet extreem groot.`}),`
`,e.jsx(n.p,{children:`Voor websites is de maximale breedte van het grid 1432 pixels.
In vensters van minimaal 1600 pixels breed heeft het grid deze breedte – de marges bedragen hier 84 pixels.`}),`
`,e.jsx(n.p,{children:`Voor applicaties kan de maximale breedte worden ingesteld op 1896 pixels.
Inclusief de marges van 108 pixels komt de totale breedte hier op 2112 pixels.`}),`
`,e.jsx(n.p,{children:`Er is geen minimale breedte.
Zelfs in vensters smaller dan 320 pixels, voor zover die in de praktijk voorkomen, blijft het grid zich schalen naar de beschikbare breedte.
Voor het gemak speelt de breedte van 320 wel een rol in de documentatie.`}),`
`,e.jsx(n.h3,{id:"de-maatvoeringen-per-variant",children:"De maatvoeringen per variant"}),`
`,e.jsx(n.p,{children:"Op het startpunt van de drie varianten van het grid hebben de kolommen, witruimtes en marges de volgende breedtes in pixels:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Naam variant"}),e.jsx(n.th,{align:"right",children:"Vanaf vensterbreedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"smal"}),e.jsx(n.td,{align:"right",children:"320"}),e.jsx(n.td,{align:"right",children:"4"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"272"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"middelbreed"}),e.jsx(n.td,{align:"right",children:"576"}),e.jsx(n.td,{align:"right",children:"8"}),e.jsx(n.td,{align:"right",children:"42"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"36"}),e.jsx(n.td,{align:"right",children:"504"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"breed"}),e.jsx(n.td,{align:"right",children:"1088"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"44"}),e.jsx(n.td,{align:"right",children:"40"}),e.jsx(n.td,{align:"right",children:"60"}),e.jsx(n.td,{align:"right",children:"968"})]})]})]}),`
`,e.jsx(n.p,{children:"Voor de maximale breedtes van het grid:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Maximale breedte voor"}),e.jsx(n.th,{align:"right",children:"Bij vensterbreedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"websites"}),e.jsx(n.td,{align:"right",children:"1600"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"68"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"84"}),e.jsx(n.td,{align:"right",children:"1432"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"applicaties"}),e.jsx(n.td,{align:"right",children:"2112"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"92"}),e.jsx(n.td,{align:"right",children:"72"}),e.jsx(n.td,{align:"right",children:"108"}),e.jsx(n.td,{align:"right",children:"1896"})]})]})]}),`
`,e.jsx(n.h3,{id:"vensters-of-schermen",children:"Vensters of schermen"}),`
`,e.jsxs(n.p,{children:["We hebben het met opzet over vensters terwijl er bij ",e.jsx(n.em,{children:"responsive design"}),` vaak over schermbreedtes wordt gesproken.
Meestal komt het op hetzelfde neer, maar niet altijd.
Het is goed hier bewust van te zijn.`]}),`
`,e.jsxs(n.p,{children:[`Op een beeldscherm is het venster van een browser niet per se gemaximaliseerd; dan is het dus smaller dan het scherm.
En `,e.jsx(n.em,{children:"responsive design"})," gaat logischerwijs uit van de breedte van het venster van de browser."]}),`
`,e.jsx(n.p,{children:"Op telefoons en tablets komen beide wel vaak overeen, al is het op tablets wel degelijk mogelijk om twee (vensters van) apps naast elkaar op het scherm te zetten."}),`
`,e.jsx(n.h3,{id:"niet-gebonden-aan-apparaten",children:"Niet gebonden aan apparaten"}),`
`,e.jsx(n.p,{children:"Alle afmetingen van het grid zijn rekenkundig gebaseerd op veelvouden van 16; uitdrukkelijk niet op maten van specifieke schermen of apparaten."}),`
`,e.jsx(n.p,{children:`We willen onze ontwerpen niet richten op de precieze afmetingen van de nieuwste iPhone of Galaxy, maar juist ontvankelijk laten zijn voor de variatie aan schermen waarop ze zullen voorkomen.
Vanzelfsprekend hebben we geëxperimenteerd en getest en uiteindelijk waarden gekozen die in de praktijk visueel goed werken.`}),`
`,e.jsx(n.p,{children:"Om dezelfde reden noemen we de drie varianten van het grid (4, 8 en 12 kolommen) niet “mobiel, tablet en desktop” maar “voor smalle, middelbrede en brede” schermen of vensters."}),`
`,e.jsx(n.p,{children:`Wil je toch wat meer houvast, ga er dan vanuit dat telefoons in staande modus en vensters op tablets het 4-koloms grid gebruiken, telefoons in liggende modus en tablets in staande het 8-koloms, en tablets in liggende modus, laptops en grotere beeldschermen het 12-koloms.
Om hoeveel pixels het dan precies gaat is niet van belang.`}),`
`,e.jsx(n.h3,{id:"inzoomen-of-vergrote-tekst",children:"Inzoomen of vergrote tekst"}),`
`,e.jsx(n.p,{children:`Mensen kunnen de weergave van een webpagina vergroten door in te zoomen of door een grotere tekstgrootte in te stellen.
De maatvoering van het grid houdt daar rekening mee: door de breakpoints mee te laten schalen verandert het aantal kolommen eerder zodat de inhoud goed blijft passen.`}),`
`,e.jsx(n.h3,{id:"schalende-typografie",children:"Schalende typografie"}),`
`,e.jsxs(n.p,{children:[`In het grid zijn dus zowel de breedte van de kolommen, de witruimtes als de marges flexibel.
Ook de `,e.jsx(n.a,{href:"?path=/docs/docs-designrichtlijnen-typografie--docs",children:"tekstgroottes"}),` reageren op de vensterbreedte.
Dat zorgt ervoor dat content op zo veel mogelijk vensterbreedtes en met diverse persoonlijke instellingen goed tot zijn recht komt.`]}),`
`,e.jsx(n.p,{children:`Op dit moment reageert de typografie nog op één breakpoint bij een vensterbreedte van 854 pixels.
Nu het grid doorontwikkeld is, stemmen we de typografie daar weer op af.
Dit aparte breakpoint komt dus snel te vervallen.`}),`
`,e.jsx(n.h2,{id:"componenten",children:"Componenten"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/react_layout-grid--docs",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})}),`
`]})]})}function a(t={}){const{wrapper:n}=Object.assign({},d(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const r={title:"Docs/Designrichtlijnen/Grid",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const b=["__page"];export{b as __namedExportsOrder,l as __page,r as default};
//# sourceMappingURL=grid.stories-6fe47a84.js.map
