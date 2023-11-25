import{M as l,T as r}from"./index-07210703.js";import{j as e}from"./jsx-runtime-2abd473f.js";import{u as a}from"./index-a0644a7c.js";import"./iframe-2b7112c8.js";import"../sb-preview/runtime.js";import"./index-565f84a4.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function s(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",a:"a",ol:"ol",li:"li",em:"em",code:"code",pre:"pre",ul:"ul"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Docs/Designrichtlijnen/Typografie"}),`
`,e.jsx(n.h1,{id:"typografie",children:"Typografie"}),`
`,e.jsx(n.h2,{id:"lettertype",children:"Lettertype"}),`
`,e.jsx(n.p,{children:"De gemeente gebruikt de Amsterdam Sans als beeldbepalend lettertype."}),`
`,e.jsx(n.p,{children:`Dat is een letterfamilie met een helder, open tekstbeeld dat goed bij de Andreaskruisen past.
Het lettertype is zowel offline als online goed leesbaar.
Daarom wordt het in alle communicatiemiddelen ingezet.`}),`
`,e.jsx(n.p,{children:"Deze zin demonstreert alle letters van het Latijnse alfabet en cijfers in de Amsterdam Sans:"}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven 012345689"}),`
`,e.jsx(n.h2,{id:"tekstgrootte",children:"Tekstgrootte"}),`
`,e.jsx(n.p,{children:`De grootte van de tekst is afhankelijk van de breedte van het venster.
Hiermee zorgen we ervoor dat tekst op schermen van alle afmetingen prettig leesbaar is.`}),`
`,e.jsx(n.p,{children:`Er zijn 8 niveaus van tekstgrootte en bijbehorende regelhoogte.
Alle typografische componenten maken er gebruik van.
Dit overzicht toont de maximale tekstgrootte voor elk niveau.`}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[80,56,40,32,28,25,22,18],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.p,{children:`Elk tekstniveau heeft een minimale tekstgrootte (bij een vensterbreedte van 320 pixels) en een maximale (bij 1440 pixels).
Tussen beide stijgt de tekst linear, met een knik op een extra breakpoint van 854 pixels.
Eerst stijgt de grootte sneller, daarna langzamer.`}),`
`,e.jsx(n.p,{children:`Op dit moment reageert de typografie nog op 1 breakpoint bij een vensterbreedte van 854 pixels.
Nu het grid doorontwikkeld is, stemmen we de typografie daar weer op af.
Dit aparte breakpoint komt dus snel te vervallen.`}),`
`,e.jsx(n.p,{children:"In de tabel hieronder vind je deze waardes in pixels:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Niveau"}),e.jsx(n.th,{align:"right",children:"0"}),e.jsx(n.th,{align:"right",children:"1"}),e.jsx(n.th,{align:"right",children:"2"}),e.jsx(n.th,{align:"right",children:"3"}),e.jsx(n.th,{align:"right",children:"4"}),e.jsx(n.th,{align:"right",children:"5"}),e.jsx(n.th,{align:"right",children:"6"}),e.jsx(n.th,{align:"right",children:"7"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"minimale tekstgrootte"}),e.jsx(n.td,{align:"right",children:"32"}),e.jsx(n.td,{align:"right",children:"32"}),e.jsx(n.td,{align:"right",children:"28"}),e.jsx(n.td,{align:"right",children:"24"}),e.jsx(n.td,{align:"right",children:"20"}),e.jsx(n.td,{align:"right",children:"22"}),e.jsx(n.td,{align:"right",children:"18"}),e.jsx(n.td,{align:"right",children:"16"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"tekstgrootte op breakpoint"}),e.jsx(n.td,{align:"right",children:"64"}),e.jsx(n.td,{align:"right",children:"48"}),e.jsx(n.td,{align:"right",children:"36"}),e.jsx(n.td,{align:"right",children:"29"}),e.jsx(n.td,{align:"right",children:"23"}),e.jsx(n.td,{align:"right",children:"26"}),e.jsx(n.td,{align:"right",children:"21"}),e.jsx(n.td,{align:"right",children:"17"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"maximale tekstgrootte"}),e.jsx(n.td,{align:"right",children:"80"}),e.jsx(n.td,{align:"right",children:"56"}),e.jsx(n.td,{align:"right",children:"40"}),e.jsx(n.td,{align:"right",children:"32"}),e.jsx(n.td,{align:"right",children:"25"}),e.jsx(n.td,{align:"right",children:"28"}),e.jsx(n.td,{align:"right",children:"22"}),e.jsx(n.td,{align:"right",children:"18"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"relatieve regelhoogte"}),e.jsx(n.td,{align:"right",children:"1.1"}),e.jsx(n.td,{align:"right",children:"1.2"}),e.jsx(n.td,{align:"right",children:"1.3"}),e.jsx(n.td,{align:"right",children:"1.4"}),e.jsx(n.td,{align:"right",children:"1.4"}),e.jsx(n.td,{align:"right",children:"1.5"}),e.jsx(n.td,{align:"right",children:"1.6"}),e.jsx(n.td,{align:"right",children:"1.6"})]})]})]}),`
`,e.jsx(n.p,{children:`Tekst op niveau 5 is groter dan op niveau 4.
Dat is omdat titel niveau 4 kleinere letters heeft dan paragrafen met grote letters.
Het alternatief om Heading 4 tekstniveau 5 te geven leek ons nog verwarrender.`}),`
`,e.jsx(n.p,{children:"Voorbeelden van componenten en hun tekstniveaus:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{align:"left",children:"Componenten"}),e.jsx(n.th,{align:"right",children:"Niveau"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Page heading"}),e.jsx(n.td,{align:"right",children:"0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Heading 1"}),e.jsx(n.td,{align:"right",children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Heading 2"}),e.jsx(n.td,{align:"right",children:"2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Heading 3, Blockquote"}),e.jsx(n.td,{align:"right",children:"3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Heading 4, Top Task Link"}),e.jsx(n.td,{align:"right",children:"4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Large Paragraph, Alert Title"}),e.jsx(n.td,{align:"right",children:"5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Paragraph, Button, Link behalve InList"}),e.jsx(n.td,{align:"right",children:"6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{align:"left",children:"Small Paragraph, InList Link, Form Label, Breadcrumb"}),e.jsx(n.td,{align:"right",children:"7"})]})]})]}),`
`,e.jsx(n.h2,{id:"accentuering",children:"Accentuering"}),`
`,e.jsx(n.p,{children:`Er zijn verschillende manieren om tekst te accentueren.
Hierin hebben we de volgende keuzes gemaakt.`}),`
`,e.jsx(n.h3,{id:"gewicht",children:"Gewicht"}),`
`,e.jsx(n.p,{children:"Online gebruiken we 2 gewichten: ‘regular’ en ‘extra bold’."}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:400,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.p,{children:"Tekst wordt vetgedrukt in titels en decoratieve citaten."}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],fontWeight:800,sampleText:"Jouw typograaf biedt mij zulke exquise schreven"}),`
`,e.jsx(n.h3,{id:"stijl",children:"Stijl"}),`
`,e.jsx(n.p,{children:`Gebruik de cursieve weergave uitsluitend om fragmenten in tekst te accentueren.
Cursieve tekst is minder goed leesbaar dan reguliere of vetgedrukte tekst.`}),`
`,e.jsx(n.p,{children:`Pas het niet toe op hele tekstblokken.
Er zijn betere manieren om lange teksten nadruk te geven.`}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{fontStyle:"italic"}}),`
`,e.jsx(n.h3,{id:"onderstreping",children:"Onderstreping"}),`
`,e.jsx(n.p,{children:`Uitsluitend de tekst van een hyperlink wordt onderstreept.
Rond staartletters wordt de lijn onderbroken voor betere leesbaarheid.`}),`
`,e.jsx(n.p,{children:`Onderstreepte tekst zonder hyperlink geeft toch de suggestie van een link.
Dat is verwarrend en daarom niet toegestaan.
Gebruik een andere manier om te accentueren.`}),`
`,e.jsx(r,{fontFamily:"Amsterdam Sans, Arial, sans-serif",fontSizes:[24],sampleText:"Jouw typograaf biedt mij zulke exquise schreven",style:{color:"#004699",textDecoration:"underline"}}),`
`,e.jsx(n.h3,{id:"overhang",children:"Overhang"}),`
`,e.jsx(n.p,{children:`De ruimte tussen letters (kerning) is geoptimaliseerd in het lettertype.
Het is niet toegestaan om de kerning aan te passen.`}),`
`,e.jsx(n.h2,{id:"andere-eigenschappen",children:"Andere eigenschappen"}),`
`,e.jsx(n.h3,{id:"contrast",children:"Contrast"}),`
`,e.jsxs(n.p,{children:["Het contrast tussen tekst en achtergrondkleur moet voldoen aan de laatste wettelijke toegankelijkheidseisen van ",e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"de WCAG, niveau AA"}),"."]}),`
`,e.jsx(n.p,{children:`De meeste tekst in het design system is puur zwart op puur wit en dat voldoet daar ruim aan.
Op de meeste donkere achtergronden maken we tekst wit; ook dat biedt voldoende contrast.
Voor sommige achtergrondkleuren is ook zwarte tekst goed leesbaar.
Raadpleeg de betreffende componenten voor specifieke richtlijnen.`}),`
`,e.jsx(n.h3,{id:"uitlijning",children:"Uitlijning"}),`
`,e.jsx(n.p,{children:"Tekst wordt nagenoeg altijd links uitgelijnd."}),`
`,e.jsx(n.p,{children:"Uitzonderingen:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Het label van een knop wordt gecentreerd."}),`
`,e.jsx(n.li,{children:"In een tabel kan het beter zijn tekst te centreren of rechts uit te lijnen."}),`
`]}),`
`,e.jsx(n.h3,{id:"woordafbreking",children:"Woordafbreking"}),`
`,e.jsxs(n.p,{children:[`De Nederlandse taal kent veel lange woorden, zoals ‘gemeenteraadsverkiezingen’.
Zorg er in je applicatie voor dat deze woorden netjes afgebroken worden en niet uit hun container breken of verborgen worden.
Een manier om dat te doen is met de volgende `,e.jsx(n.em,{children:"css snippet"}),", waarin ",e.jsx(n.code,{children:"hyphens"})," en ",e.jsx(n.code,{children:"word-break"})," gecombineerd worden:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  hyphens: auto;
  /* only hypenate words longer than 12 chars, for browsers that support it */
  hyphenate-limit-chars: 12;
  /* break overflowing words for browsers that don't support css hyphens */
  overflow-wrap: break-word;
}
`})}),`
`,e.jsxs(n.p,{children:["Voor verdere informatie: ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text/Wrapping_breaking_text",target:"_blank",rel:"nofollow noopener noreferrer",children:"Wrapping and breaking text op MDN"})]}),`
`,e.jsx(n.h2,{id:"het-lettertype-installeren",children:"Het lettertype installeren"}),`
`,e.jsx(n.p,{children:`Als je de React-componenten gebruikt hoef je niets te doen.
Deze gebruiken allemaal het juiste lettertype.`}),`
`,e.jsxs(n.p,{children:["Werk je met andere technologie, maar wel met npm, dan installeer je ",e.jsx(n.code,{children:"@amsterdam/design-system-assets"})," en importeer je ",e.jsx(n.code,{children:"@amsterdam/design-system-assets/font/index.css"}),"."]}),`
`,e.jsxs(n.p,{children:[`Ook kun je het lettertype zelf hosten en opnemen in je applicatie, vraag het dan aan via het formulier hieronder.
Als het helemaal niet mogelijk is Amsterdam Sans te gebruiken pas je het lettertype Arial toe, of het generieke sans-serif lettertype van het apparaat.
In alle gevallen voer je die alternatieven op voor als het downloaden van het font voor de gebruiker niet lukt, of terwijl dat bezig is: `,e.jsx(n.code,{children:`font-family: "'Amsterdam Sans', Arial, sans-serif"`}),"."]}),`
`,e.jsx(n.h3,{id:"licentie-en-aanvraag",children:"Licentie en aanvraag"}),`
`,e.jsx(n.p,{children:`Het lettertype is uitdrukkelijk niet vrij beschikbaar.
Amsterdam Sans is uitsluitend te gebruiken door medewerkers van de gemeente Amsterdam en amsterdam&partners, en door leveranciers werkend voor deze organisaties.`}),`
`,e.jsxs(n.p,{children:["Vraag de lettertypebestanden aan via het formulier ",e.jsx(n.a,{href:"https://formulier.amsterdam.nl/thema/huisstijl/amsterdam-sans-aanvragen",target:"_blank",rel:"nofollow noopener noreferrer",children:"Amsterdam Sans aanvragen"}),"."]}),`
`,e.jsx(n.h2,{id:"meer-informatie",children:"Meer informatie"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Alle informatie over het lettertype vind je op de pagina ",e.jsx(n.a,{href:"https://amsterdam.nl/stijlweb/basiselementen/typografie/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Typografie op Stijlweb"}),"."]}),`
`]})]})}function d(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}const o=()=>{throw new Error("Docs-only story")};o.parameters={docsOnly:!0};const i={title:"Docs/Designrichtlijnen/Typografie",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:d};const u=["__page"];export{u as __namedExportsOrder,o as __page,i as default};
//# sourceMappingURL=typography.stories-db8abca3.js.map
