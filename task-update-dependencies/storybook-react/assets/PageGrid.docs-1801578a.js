import{j as e}from"./index.esm-431af643.js";import{M as i,d as o,P as d,f as s}from"./index-918d910c.js";import{P as l,C as m}from"./PageGrid.stories-be95d6df.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./iframe-8de26bd6.js";import"../sb-preview/runtime.js";import"./index-932496f1.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const p=`# Page grid

Onder elke pagina ligt hetzelfde grid.
Alle elementen op een pagina worden op het grid geplaatst.
Ze beslaan dan een bepaald aantal kolommen, en de witruimtes daartussen.

## Ontwerp

Het grid is volledig _responsive_: afhankelijk van de breedte van het venster verandert de breedte van het grid en het aantal kolommen.

### Er zijn 4, 8 of 12 kolommen

In vensters tot 576 pixels breed levert het grid 4 kolommen.
Tot een breedte van 1088 pixels zijn dat er 8.
Op dat punt worden en blijven het er 12.

Deze breakpoints zijn gebaseerd op stappen van 256 pixels, beginnend op een basis van 64 pixels.
Zo is 576 = 64 + 2 × 256 en 1088 = 64 + 4 × 256.

### Veel witruimte

De horizontale witruimte tussen kolommen is 16 pixels breed bij een vensterbreedte van 320 pixels.
Voor elke 256 pixels extra breedte groeit de witruimte lineair met 8 pixels.
Bij een vensterbreedte van 1600 pixels is het dus 56 pixels.
Dit past bij de ruimtelijke opzet van de huisstijl.

Op brede vensters worden de witruimtes bijna even breed als de kolommen zelf.
Dat lijkt misschien onnatuurlijk, maar is geen probleem – doorgaans worden elementen op 3 of 4 kolommen van het grid geplaatst en die krijgen dan ook de tussenliggende witruimtes mee.

### Marges links en rechts

Het grid staat horizontaal gecentreerd op de pagina.
Aan beide zijden reserveert het grid marges om afstand te houden tot de randen van het venster.
Deze ruimte is 1½ keer zo breed als die tussen de kolommen.

Sommige elementen mogen over deze marges gepositioneerd worden, zoals de Page Footer en een schermvullende afbeelding.
Die zijn dan dus breder dan de rest van de content, maar worden wel beperkt door een maximale breedte.

### Niet onbeperkt breed

Een maximale breedte voor het grid zorgt ervoor dat de elementen van een pagina niet al te ver van elkaar verwijderd raken.
Ook wordt de witruimte en typografie dan niet extreem groot.

Voor websites is de maximale breedte van het grid 1432 pixels.
In vensters van minimaal 1600 pixels breed heeft het grid deze breedte – de marges bedragen hier 84 pixels.

Voor applicaties kan de maximale breedte worden ingesteld op 1896 pixels.
Inclusief de marges van 108 pixels komt de totale breedte hier op 2112 pixels.

Er is geen minimale breedte.
Zelfs in vensters smaller dan 320 pixels, voor zover die in de praktijk voorkomen, blijft het grid zich schalen naar de beschikbare breedte.
Voor het gemak speelt de breedte van 320 wel een rol in de documentatie.

### De maatvoeringen per variant

Op het startpunt van de drie varianten van het grid hebben de kolommen, witruimtes en marges de volgende breedtes in pixels:

| Naam variant | Vanaf vensterbreedte | Aantal kolommen | Breedte kolom | Breedte witruimte | Breedte marge | Breedte grid |
| :----------- | -------------------: | --------------: | ------------: | ----------------: | ------------: | -----------: |
| smal         |                  320 |               4 |            56 |                16 |            24 |          272 |
| middelbreed  |                  576 |               8 |            42 |                24 |            36 |          504 |
| breed        |                 1088 |              12 |            44 |                40 |            60 |          968 |

Voor de maximale breedtes van het grid:

| Maximale breedte voor | Bij vensterbreedte | Aantal kolommen | Breedte kolom | Breedte witruimte | Breedte marge | Breedte grid |
| :-------------------- | -----------------: | --------------: | ------------: | ----------------: | ------------: | -----------: |
| websites              |               1600 |              12 |            68 |                56 |            84 |         1432 |
| applicaties           |               2112 |              12 |            92 |                72 |           108 |         1896 |

### Vensters of schermen

We hebben het met opzet over vensters terwijl er bij _responsive design_ vaak over schermbreedtes wordt gesproken.
Meestal komt het op hetzelfde neer, maar niet altijd.
Het is goed hier bewust van te zijn.

Op een beeldscherm is het venster van een browser niet per se gemaximaliseerd; dan is het dus smaller dan het scherm.
En _responsive design_ gaat logischerwijs uit van de breedte van het venster van de browser.

Op telefoons en tablets komen beide wel vaak overeen, al is het op tablets wel degelijk mogelijk om twee (vensters van) apps naast elkaar op het scherm te zetten.

### Niet gebonden aan apparaten

Alle afmetingen van het grid zijn rekenkundig gebaseerd op veelvouden van 16; uitdrukkelijk niet op maten van specifieke schermen of apparaten.

We willen onze ontwerpen niet richten op de precieze afmetingen van de nieuwste iPhone of Galaxy, maar juist ontvankelijk laten zijn voor de variatie aan schermen waarop ze zullen voorkomen.
Vanzelfsprekend hebben we geëxperimenteerd en getest en uiteindelijk waarden gekozen die in de praktijk visueel goed werken.

Om dezelfde reden noemen we de drie varianten van het grid (4, 8 en 12 kolommen) niet “mobiel, tablet en desktop” maar “voor smalle, middelbrede en brede” schermen of vensters.

Wil je toch wat meer houvast, ga er dan vanuit dat telefoons in staande modus en vensters op tablets het 4-koloms grid gebruiken, telefoons in liggende modus en tablets in staande het 8-koloms, en tablets in liggende modus, laptops en grotere beeldschermen het 12-koloms.
Om hoeveel pixels het dan precies gaat is niet van belang.

### Inzoomen of vergrote tekst

Mensen kunnen de weergave van een webpagina vergroten door in te zoomen of door een grotere tekstgrootte in te stellen.
De maatvoering van het grid houdt daar rekening mee: door de breakpoints mee te laten schalen verandert het aantal kolommen eerder zodat de inhoud goed blijft passen.

### Schalende typografie

In het grid zijn dus zowel de breedte van de kolommen, de witruimtes als de marges flexibel.
Ook de [tekstgroottes](?path=/docs/docs-designrichtlijnen-typografie--docs) reageren op de vensterbreedte.
Dat zorgt ervoor dat content op zo veel mogelijk vensterbreedtes en met diverse persoonlijke instellingen goed tot zijn recht komt.

Op dit moment reageert de typografie nog op één breakpoint bij een vensterbreedte van 854 pixels.
Nu het grid doorontwikkeld is, stemmen we de typografie daar weer op af.
Dit aparte breakpoint komt dus snel te vervallen.
`;function r(t){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li",a:"a"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(o,{children:p}),`
`,e.jsx(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),`
`,e.jsx(n.h3,{id:"basis",children:"Basis"}),`
`,e.jsx(n.p,{children:"De roze vlakken vertegenwoordigen de kolommen van het grid. Zoom in of verander de breedte van het venster om de breedtes en het aantal kolommen te zien veranderen. Let op: op brede schermen zijn de witruimtes tussen de kolommen soms breder dan de kolommen zelf."}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h3,{id:"cellen",children:"Cellen"}),`
`,e.jsx(n.p,{children:`Binnen het grid maak je cellen waarin andere componenten geplaatst kunnen worden.
Per cel geef je aan hoe veel van de kolommen het beslaat.`}),`
`,e.jsxs(n.p,{children:["Dit eenvoudige voorbeeld verdeelt het grid in drie cellen van 4 kolommen: ",e.jsx(n.code,{children:"span={4}"}),`.
Elke cel biedt ruimte voor een afbeelding.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Op brede vensters heeft het grid 12 kolommen en passen de afbeeldingen naast elkaar."}),`
`,e.jsx(n.li,{children:"Op middelbrede vensters heeft het grid 8 kolommen en staan de eerste twee afbeeldingen naast elkaar en de derde onder de eerste."}),`
`,e.jsx(n.li,{children:"Op smalle schermen heeft het grid 4 kolommen en staan de afbeeldingen onder elkaar."}),`
`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsxs(n.p,{children:["Voor meer voorbeelden raadpleeg je ",e.jsx(n.a,{href:"?path=/docs/react_layout-grid-cell--docs",children:"Grid Cell"})," zelf."]})]})}function O(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{O as default};
//# sourceMappingURL=PageGrid.docs-1801578a.js.map
