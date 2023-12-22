# Image

Toont een afbeelding.

## Richtlijnen

- Vergeet niet om een beschrijving van de afbeelding op te nemen in het `alt`-attribuut.
  Dit zorgt ervoor dat gebruikers van schermlezers deze informatie ook tot zich kunnen nemen.
  Daarnaast kan het helpen bij zoekmachineoptimalisatie.
  Alleen voor decoratieve afbeeldingen is zo’n beschrijving niet nodig. Gebruik in dit geval `alt=""`.
  Denk aan afbeeldingen die weinig toevoegen aan de nabije tekst of afbeeldingen die louter bijdragen aan het ontwerp of de sfeer van de pagina (bron: [W3C Web Accessibility Initiative](https://www.w3.org/WAI/tutorials/images/decorative/)).
- Specificeer eventueel meerdere kandidaten voor de afbeelding via het `srcSet`-attribuut.
  Bijvoorbeeld een kleine, middelgrote en grote variant voor de diverse schermformaten.
  Zo voorkom je het onnodige downloaden van grote bestanden.
  Doe dit vooral voor de hoofdafbeelding van een pagina,
  daar is het verschil tussen de formaten op een smal en breed scherm het grootst.
- Zorg ervoor dat de afbeelding een beeldverhouding heeft die ondersteund wordt door het [Aspect Ratio](?path=/docs/layout-aspect-ratio--docs) component.

## Relevante WCAG-eisen

- [WCAG 1.1.1](https://www.w3.org/TR/WCAG22/#non-text-content): niet-tekstuele content heeft een tekstueel alternatief
- [WCAG 1.4.5](https://www.w3.org/TR/WCAG22/#images-of-text): gebruik tekst in plaats van afbeeldingen van tekst
- [WCAG 1.4.9](https://www.w3.org/TR/WCAG22/#images-of-text-no-exception): gebruik afbeeldingen van tekst alleen als er geen alternatief is
