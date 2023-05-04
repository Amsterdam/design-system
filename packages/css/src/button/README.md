# Button

De button gebruik je zodat de gebruiker acties kan uit te voeren en de user interface kan bedienen.

## Richtlijnen

- Een label tekst die beschrijft wat de functie van de button is.
- Een duidelijke constrasterende kleurstelling zodat deze goed te herkennen is en snel te lokaliseren valt.
- Gebruik het juiste type button voor de daarbijhorende toepassing. Bijvoorbeeld een button binnen een formulier moet altijd het het type `sumbit` zijn.
- Zorg dat een button ook met een keyboard te bedienen is.

## Relevante WCAG eisen

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met `Enter` of `Space`, en het is mogelijk met `Tab` de button te focussen. `Space` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event
  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.

## Referenties

- [W3C - Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
- [W3C - Headings & labels](https://www.w3.org/TR/WCAG21/#headings-and-labels)
