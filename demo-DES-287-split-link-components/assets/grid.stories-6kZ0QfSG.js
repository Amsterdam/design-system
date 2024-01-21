import{M as l}from"./index-Y-IP9i5A.js";import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./iframe-6C8L1z4e.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function r(i){const n=Object.assign({h1:"h1",p:"p",em:"em",h2:"h2",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},d(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Designrichtlijnen/Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:["Onder elke pagina ligt een ",e.jsx(n.em,{children:"responsive"}),` grid.
Alle elementen op een pagina worden op dat grid geplaatst.`]}),`
`,e.jsx(n.h2,{id:"ontwerp",children:"Ontwerp"}),`
`,e.jsx(n.h3,{id:"vier-acht-of-twaalf-kolommen",children:"Vier, acht of twaalf kolommen"}),`
`,e.jsx(n.p,{children:`Het grid verdeelt het scherm in kolommen van gelijke breedte.
Hoe breder het venster, des te meer kolommen.`}),`
`,e.jsx(n.p,{children:`In vensters tot 576 pixels breed levert het grid 4 kolommen.
Tot een breedte van 1088 pixels zijn dat er 8.
Op dat punt worden en blijven het er 12.`}),`
`,e.jsx(n.p,{children:"We noemen deze drie varianten het smalle, het middelbrede en het brede grid."}),`
`,e.jsx(n.p,{children:`De breakpoints zijn gebaseerd op stappen van 256 pixels, beginnend op een basis van 64 pixels.
Zo is 576 = 64 + 2 × 256 en 1088 = 64 + 4 × 256.`}),`
`,e.jsx(n.p,{children:`Op deze breakpoints verandert alleen het aantal kolommen.
Die worden daardoor smaller of breder en de elementen erop dus ook.
De witruimtes tussen en naast de kolommen groeien over het hele spectrum steeds in hetzelfde tempo.`}),`
`,e.jsx(n.h3,{id:"twee-themas-voor-witruimte",children:"Twee thema’s voor witruimte"}),`
`,e.jsx(n.p,{children:`Het design system ondersteunt zowel websites als webapplicaties.
De gewenste layout verschilt nogal tussen beide.`}),`
`,e.jsx(n.h4,{id:"ruimtelijk",children:"Ruimtelijk"}),`
`,e.jsx(n.p,{children:`De online huisstijl is ontworpen op eenvoud.
Er zijn weinig opties voor achtergrondkleur of belijning.
Typografie en witruimte blijven over als middelen om schermen overzichtelijk te maken.
Voor websites is het grid daarom behoorlijk ruimtelijk.`}),`
`,e.jsx(n.p,{children:`De horizontale witruimte tussen kolommen is 16 pixels breed bij een vensterbreedte van 320 pixels of minder.
Voor elke 256 pixels extra breedte groeit de witruimte lineair met 8 pixels.
(Dit komt neer op 3 en 3/8 procent van de schermbreedte plus 6 pixels.)
Bij een vensterbreedte van 1600 pixels is het dus 56 pixels.
Daarna groeit de witruimte niet verder.`}),`
`,e.jsx(n.p,{children:`In brede vensters worden de witruimtes bijna even breed als de kolommen zelf.
Dat lijkt misschien onnatuurlijk, maar is geen probleem.
Elementen bezetten vaak meerdere kolommen van het grid en krijgen dan ook de tussenliggende witruimtes mee.`}),`
`,e.jsx(n.h4,{id:"compact",children:"Compact"}),`
`,e.jsx(n.p,{children:`Voor applicaties is zo veel witruimte niet nodig, zelfs contraproductief.
Daarom is er ook een compact thema voor het grid.`}),`
`,e.jsx(n.p,{children:`De minimale witruimte tussen kolommen is ook hier 16 pixels.
Maar deze begint pas vanaf een vensterbreedte van 1088 pixels te groeien.
De toename gaat ook langzamer: 4 pixels per 256 pixels extra breedte.
(Dit komt neer op 1 en 9/16 procent van de schermbreedte min 1 pixel.)
Het maximum is hier 40 pixels en dat wordt pas bereikt bij een vensterbreedte van 2624 pixels.`}),`
`,e.jsx(n.h3,{id:"marges-links-en-rechts",children:"Marges links en rechts"}),`
`,e.jsx(n.p,{children:"Aan beide zijden reserveert het grid marges van witruimte."}),`
`,e.jsx(n.h4,{id:"ruimtelijk-1",children:"Ruimtelijk"}),`
`,e.jsx(n.p,{children:`In het ruimtelijke thema is deze ruimte 1½ keer zo breed als die tussen de kolommen.
Zo is er genoeg ruimte tussen het grid en de randen van het scherm of venster.`}),`
`,e.jsx(n.p,{children:`Sommige elementen mogen over deze marges gepositioneerd worden, zoals schermvullende afbeeldingen en de voettekst van de pagina.
Die zijn dan dus iets breder dan de rest van de content.`}),`
`,e.jsx(n.h4,{id:"compact-1",children:"Compact"}),`
`,e.jsx(n.p,{children:`In het compacte thema zijn de marges buiten het grid even breed als de witruimtes erbinnen.
Hier worden geen elementen over de marges heen geplaatst.`}),`
`,e.jsx(n.h3,{id:"menubalk",children:"Menubalk"}),`
`,e.jsx(n.p,{children:`Applicaties hebben in het brede grid een verticale menubalk aan de linkerzijde.
Deze staat naast het grid, niet erin, en heeft een vaste breedte van 112 pixels.`}),`
`,e.jsx(n.p,{children:`In het middelbrede en smalle grid wordt het menu horizontaal onder de header.
In deze context neemt het grid wel de hele breedte van het venster in.`}),`
`,e.jsx(n.h3,{id:"maximale-breedte",children:"Maximale breedte"}),`
`,e.jsx(n.p,{children:`Een maximale breedte voor het grid zorgt ervoor dat witruimte en typografie niet onbeperkt doorgroeien.
Zo raken de elementen van een pagina niet te ver van elkaar verwijderd en blijft tekst prettig leesbaar.`}),`
`,e.jsx(n.p,{children:`Voor websites is de maximale breedte van het grid 1432 pixels.
In vensters van minimaal 1600 pixels breed heeft het grid deze breedte – de marges bedragen hier 84 pixels.`}),`
`,e.jsx(n.p,{children:"Applicaties, die het compacte thema gebruiken, nemen de volledige breedte van het venster in."}),`
`,e.jsx(n.p,{children:`Er is geen expliciete minimale breedte.
Zelfs in vensters smaller dan 320 pixels, voor zover die in de praktijk voorkomen,
blijft het grid zich schalen naar de beschikbare breedte.
Voor het gemak speelt de breedte van 320 wel een rol in de documentatie.`}),`
`,e.jsx(n.h2,{id:"maatvoering",children:"Maatvoering"}),`
`,e.jsx(n.p,{children:"Deze ontwerpkeuzes leveren in de praktijk het volgende resultaat in pixels."}),`
`,e.jsx(n.h3,{id:"breedtes-per-breakpoint",children:"Breedtes per breakpoint"}),`
`,e.jsx(n.p,{children:`Op de drie breakpoints hebben de kolommen, witruimtes en marges de volgende breedtes.
Nogmaals: daartussen groeien de breedtes continu.`}),`
`,e.jsx(n.h4,{id:"ruimtelijk-2",children:"Ruimtelijk"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Breakpoint"}),e.jsx(n.th,{align:"right",children:"Vanaf vensterbreedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"smal"}),e.jsx(n.td,{align:"right",children:"320"}),e.jsx(n.td,{align:"right",children:"4"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"272"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"middelbreed"}),e.jsx(n.td,{align:"right",children:"576"}),e.jsx(n.td,{align:"right",children:"8"}),e.jsx(n.td,{align:"right",children:"42"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"36"}),e.jsx(n.td,{align:"right",children:"504"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"breed"}),e.jsx(n.td,{align:"right",children:"1088"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"44"}),e.jsx(n.td,{align:"right",children:"40"}),e.jsx(n.td,{align:"right",children:"60"}),e.jsx(n.td,{align:"right",children:"968"})]})]})]}),`
`,e.jsx(n.h4,{id:"compact-2",children:"Compact"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Breakpoint"}),e.jsx(n.th,{align:"right",children:"Vanaf vensterbreedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte menubalk"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"smal"}),e.jsx(n.td,{align:"right",children:"320"}),e.jsx(n.td,{align:"right",children:"4"}),e.jsx(n.td,{align:"right",children:"0"}),e.jsx(n.td,{align:"right",children:"60"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"288"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"middelbreed"}),e.jsx(n.td,{align:"right",children:"576"}),e.jsx(n.td,{align:"right",children:"8"}),e.jsx(n.td,{align:"right",children:"0"}),e.jsx(n.td,{align:"right",children:"54"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"544"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"breed"}),e.jsx(n.td,{align:"right",children:"1088"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"112"}),e.jsx(n.td,{align:"right",children:"64"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"944"})]})]})]}),`
`,e.jsx(n.h3,{id:"niet-gebonden-aan-apparaten",children:"Niet gebonden aan apparaten"}),`
`,e.jsx(n.p,{children:`Alle afmetingen van het grid zijn rekenkundig gebaseerd op veelvouden van 16;
uitdrukkelijk niet op maten van specifieke schermen of apparaten.`}),`
`,e.jsx(n.p,{children:`We willen onze ontwerpen niet richten op de precieze afmetingen van de nieuwste iPhone of Galaxy,
maar juist ontvankelijk laten zijn voor de variatie aan schermen waarop ze zullen voorkomen.
Vanzelfsprekend hebben we geëxperimenteerd en getest en uiteindelijk waarden gekozen die in de praktijk visueel goed werken.`}),`
`,e.jsx(n.p,{children:`Om dezelfde reden noemen we de drie breakpoints van het grid niet “mobiel, tablet en desktop”,
maar “voor smalle, middelbrede en brede” schermen of vensters.`}),`
`,e.jsx(n.p,{children:`Wil je toch wat meer houvast,
ga er dan vanuit dat telefoons in staande modus en ‘split screen’ vensters op tablets het 4-koloms grid gebruiken,
telefoons in liggende modus en tablets in staande het 8-koloms,
en tablets in liggende modus,
laptops en grotere beeldschermen het 12-koloms.
Om hoeveel pixels het dan precies gaat is niet zo van belang.`}),`
`,e.jsx(n.h3,{id:"referentie-breedtes-voor-ontwerpers",children:"Referentie-breedtes voor ontwerpers"}),`
`,e.jsx(n.p,{children:`Leuk, al die flexibiliteit.
Maar bij het ontwerpen van een scherm is het toch nodig een bepaald canvas te kiezen.
En voor elk ontwerp wil je bepalen hoe het zich op ‘een desktop’, ‘een tablet’ of ‘mobiel’ houdt.`}),`
`,e.jsx(n.p,{children:`Daarom werken we in Figma we met drie referentie-breedtes.
Op die breedtes werken we het ontwerp van een scherm uit voor die drie klassen van apparaten.
We weten dat er in de werkelijkheid veel meer variatie bestaat, maar we moeten toch ergens op mikken.
Deze grids vind je in Figma Library onder de ‘Grid styles’.`}),`
`,e.jsx(n.p,{children:"In deze drie situaties is de maatvoering als volgt."}),`
`,e.jsx(n.h4,{id:"ruimtelijk-3",children:"Ruimtelijk"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Klasse apparaat"}),e.jsx(n.th,{align:"right",children:"Referentie-breedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"telefoon"}),e.jsx(n.td,{align:"right",children:"320"}),e.jsx(n.td,{align:"right",children:"4"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"272"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"tablet"}),e.jsx(n.td,{align:"right",children:"832"}),e.jsx(n.td,{align:"right",children:"8"}),e.jsx(n.td,{align:"right",children:"64"}),e.jsx(n.td,{align:"right",children:"32"}),e.jsx(n.td,{align:"right",children:"48"}),e.jsx(n.td,{align:"right",children:"736"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"desktop"}),e.jsx(n.td,{align:"right",children:"1600"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"68"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"84"}),e.jsx(n.td,{align:"right",children:"1432"})]})]})]}),`
`,e.jsx(n.h4,{id:"compact-3",children:"Compact"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Klasse apparaat"}),e.jsx(n.th,{align:"right",children:"Referentie-breedte"}),e.jsx(n.th,{align:"right",children:"Aantal kolommen"}),e.jsx(n.th,{align:"right",children:"Breedte menubalk"}),e.jsx(n.th,{align:"right",children:"Breedte kolom"}),e.jsx(n.th,{align:"right",children:"Breedte witruimte"}),e.jsx(n.th,{align:"right",children:"Breedte marge"}),e.jsx(n.th,{align:"right",children:"Breedte grid"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"telefoon"}),e.jsx(n.td,{align:"right",children:"320"}),e.jsx(n.td,{align:"right",children:"4"}),e.jsx(n.td,{align:"right",children:"0"}),e.jsx(n.td,{align:"right",children:"60"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"288"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"tablet"}),e.jsx(n.td,{align:"right",children:"832"}),e.jsx(n.td,{align:"right",children:"8"}),e.jsx(n.td,{align:"right",children:"0"}),e.jsx(n.td,{align:"right",children:"86"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"16"}),e.jsx(n.td,{align:"right",children:"800"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"desktop"}),e.jsx(n.td,{align:"right",children:"1600"}),e.jsx(n.td,{align:"right",children:"12"}),e.jsx(n.td,{align:"right",children:"112"}),e.jsx(n.td,{align:"right",children:"98"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"1440"})]})]})]}),`
`,e.jsx(n.h3,{id:"vensters-of-schermen",children:"Vensters of schermen"}),`
`,e.jsxs(n.p,{children:["We hebben het met opzet over vensters terwijl er bij ",e.jsx(n.em,{children:"responsive design"}),` vaak over schermbreedtes wordt gesproken.
Meestal komt het op hetzelfde neer, maar niet altijd.
Het is goed hier bewust van te zijn.`]}),`
`,e.jsxs(n.p,{children:[`Op een beeldscherm is het venster van een browser niet per se gemaximaliseerd; dan is het dus smaller dan het scherm.
En `,e.jsx(n.em,{children:"responsive design"})," gaat logischerwijs uit van de breedte van het venster van de browser."]}),`
`,e.jsx(n.p,{children:`Op telefoons en tablets komen beide wel vaak overeen,
al is het op tablets wel degelijk mogelijk om twee (vensters van) apps naast elkaar op het scherm te zetten.`}),`
`,e.jsx(n.h2,{id:"relatie-met-tekst",children:"Relatie met tekst"}),`
`,e.jsx(n.p,{children:"Layout en tekst hebben op verschillende manieren met elkaar te maken."}),`
`,e.jsx(n.h3,{id:"schalende-typografie",children:"Schalende typografie"}),`
`,e.jsxs(n.p,{children:["Net als het grid reageren ook de ",e.jsx(n.a,{href:"?path=/docs/docs-designrichtlijnen-typografie--docs",children:"tekstgroottes"}),` reageren op de vensterbreedte.
Dat zorgt ervoor dat content op zo veel mogelijk vensterbreedtes en met diverse persoonlijke instellingen goed tot zijn recht komt.`]}),`
`,e.jsx(n.h3,{id:"inzoomen-of-vergrote-tekst",children:"Inzoomen of vergrote tekst"}),`
`,e.jsx(n.p,{children:`Mensen kunnen de weergave van een webpagina vergroten door in te zoomen of door een grotere tekstgrootte in te stellen.
De maatvoering van het grid houdt daar rekening mee.
De breakpoints schalen mee met de effectieve tekstgrootte.
Zo verandert het aantal kolommen eerder en blijft grotere inhoud goed passen.`}),`
`,e.jsx(n.h2,{id:"gerelateerde-componenten",children:"Gerelateerde componenten"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/react_layout-grid--docs",children:"Grid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})}),`
`]})]})}function s(i={}){const{wrapper:n}=Object.assign({},d(),i.components);return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const t={title:"Docs/Designrichtlijnen/Grid",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:s};const u=["__page"];export{u as __namedExportsOrder,a as __page,t as default};
