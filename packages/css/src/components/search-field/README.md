# Search Field

Met een Search Field (in het Nederlands: zoekveld) kunnen gebruikers snel relevante inhoud vinden. Een gebruiker voert een (deel van een) woord of zin in om daarmee inhoud te doorzoeken.

## Richtlijnen

- Je kunt een zoekactie starten door de zoekknop of de Enter-toets te gebruiken.
- Als er geen zoekterm is ingevuld kan geen zoekactie gestart worden.

## Autofocus

Je kunt `autofocus` gebruiken om de focus gelijk in een zoekveld te plaatsen als de gebruiker op een pagina komt.
Wees hier wel voorzichtig mee, dit kan negatieve gevolgen hebben:

- Voor gebruikers van een schermlezer kan dit betekenen dat ze belangrijk inhoud boven het zoekveld overslaan.
- Op kleinere apparaten kan het gebruik van `autofocus` er voor zorgen dat de pagina automatisch naar het zoekveld scrollt, waardoor je eerdere inhoud kan missen.
- Op apparaten met touchscreen kan dit ervoor zorgen dat het toetsenbord gelijk wordt getoond, waardoor belangrijke inhoud verborgen wordt.

Gebruik `autofocus` alleen als het zoekveld aan het begin van een pagina staat, en er geen andere elementen op een pagina staan waar een gebruiker misschien eerst gebruik van wil maken.

Voor meer informatie: [Accessibility Tips: Be Cautious When Using Autofocus](https://www.boia.org/blog/accessibility-tips-be-cautious-when-using-autofocus)

## Relevante WCAG eisen

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG22/#info-and-relationships): `role="search"` wordt gebruikt voor de search landmark role.
- [WCAG 1.3.5](https://www.w3.org/TR/WCAG22/#identify-input-purpose): het is zowel voor een gebruiker als programmatisch duidelijk wat het doel van een formulierveld is.
- [WCAG 2.4.6](https://www.w3.org/TR/WCAG22/#headings-and-labels): er is een label dat het doel van de input beschrijft.

Search Field is een interactief element, hier gelden [de algemene eisen en richtlijnen voor interactieve elementen](https://amsterdam.github.io/design-system/?path=/docs/docs-designrichtlijnen-interactieve-elementen--docs) voor.
