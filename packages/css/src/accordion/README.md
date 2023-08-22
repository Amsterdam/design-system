# Accordion

Het accordion component is een klikbare (verticaal gestapelde) lijst van koppen om bijbehorende inhoud te verbergen of te tonen. Met een accordion toon je inhoud op een progressieve manier aan gebruikers.

## Richtlijnen

- Gebruik een accordion op een volle pagina met zowel essentiële als niet-essentiële inhoud. Door niet-essentiële inhoud te verbergen, komen gebruikers sneller bij de essentiële inhoud.
- Gebruik een accordion niet om te veel essentiële inhoud op 1 pagina te voorkomen. Herschrijf de pagina compacter, verdeel de inhoud over meerdere pagina's of gebruik het (nog te maken) inhoudsopgave-component in plaats van een accordion voor dat doel. Verberg essentiële informatie niet in een accordion.
- Een accordion bestaat uit meerdere accordionsecties. Gebruik minimaal 3 en maximaal 10 secties onder elkaar.
- Het is belangrijk dat accordionsecties duidelijke koppen hebben, omdat de gebruiker de verborgen inhoud niet kan "scannen" om relevante informatie te vinden.
- De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert voor de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de secties die de zoekterm bevatten automatisch uitklappen.
- De inhoud van de accordeon kan opmaak bevatten (bijvoorbeeld headings, lijsten, links en knoppen).

Je kunt door een accordion navigeren met je toetsenbord:

| key                  | element                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Enter of Space       | Open of sluit de accordionsectie die de focus heeft                                                                          |
| Tab                  | Ga naar het volgende element dat focus kan hebben                                                                            |
| Shift + Tab          | Ga naar het volgende element dat focus kan hebben                                                                            |
| Pijltje naar beneden | Als een accordionsectie focus heeft: ga naar de volgende sectie. Als de laatste sectie focus heeft, ga naar de eerste sectie |
| Pijltje omhoog       | Als een accordionsectie focus heeft: ga naar de vorige sectie. Als de eerste sectie focus heeft, ga naar de laatste sectie   |
| Home                 | Als een accordionsectie focus heeft: ga naar de eerste sectie                                                                |
| End                  | Als een accordionsectie focus heeft: ga naar de laatste sectie                                                               |

## Relevante WCAG eisen

De WCAG eisen voor het Button component en het Heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordionsecties is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik `aria-controls` voor de button, en gebruik een `region` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element `<section>`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: `Down Arrow`, `Up Arrow`, `Home` en `End`. `Space` moet de button activeren, niet de pagina scrollen (gebruik `keypressEvt.preventDefault()`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Referenties

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
