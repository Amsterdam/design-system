# Skip Link

Gebruik een Skip link om makkelijk met het toetsenbord naar de belangrijkste inhoud te navigeren.
Met een Skip link kun je terugkerende navigatieblokken (zoals het hoofdmenu of het kruimelpad) overslaan.
Een Skip link is verborgen totdat deze met het toetsenbord geactiveerd wordt.

## Richtlijnen

### Zo gebruiken

- Plaats de Skip link als eerste element in `<body`, tenzij je een cookie-banner hebt.
  Plaats de Skip link dan direct na de cookie-banner.
- Gebruik de Skip link om naar de belangrijkste inhoud te navigeren.
  Op een artikelpagina is dat bijvoorbeeld de titel van het artikel, op een zoekpagina is dat het zoekveld.
- Voor complexe pagina's met meerdere secties kun je meer dan 1 Skip link gebruiken.
  In de meeste gevallen is dit niet nodig.

### Dit vermijden

- Skip links zijn niet nodig op een simpele pagina waar alleen tekst staat en weinig navigatie.
  Het doel van een Skip link is om terugkerende navigatieblokken over te slaan.
  Als die blokken er niet zijn, is een Skip link niet nodig.
- Plaats de Skip link niet in een `nav` regio, of in de Header.

## Relevante WCAG eisen

- Voor dit component gelden dezelfde WCAG eisen als voor [het link component](https://amsterdam.github.io/design-system/?path=/docs/react_navigation-link--docs).
- [WCAG 2.4.1](https://www.w3.org/TR/WCAG22/#bypass-blocks): gebruik een Skip link op elke pagina die begint met een terugkerend navigatieblok.
- [WCAG 3.2.3](https://www.w3.org/TR/WCAG22/#consistent-navigation): een Skip link staat op elke pagina op dezelfde plek.
- [WCAG 3.2.4](https://www.w3.org/TR/WCAG22/#consistent-identification): een Skip link heeft dezelfde labels op alle pagina's. Bijvoorbeeld niet: "Navigatie overslaan" op een gedeelte van de site, en "Naar de inhoud" op andere pagina's.
