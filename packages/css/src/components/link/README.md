# Link

Een link (in het Nederlands: koppeling) wordt gebruikt als navigatie-element en kan op zichzelf of inline met tekst worden gebruikt. Het is de lichtgewicht variant voor navigatie.

## Richtlijnen

Gebruik een link in de volgende gevallen:

- Navigatie naar een andere pagina binnen de website of applicatie
- Navigatie naar een andere website (zie [Externe links](#externe-links))
- Navigatie naar een element op dezelfde pagina
- Koppeling naar e-mails of telefoonnummers (begin de link met `mailto:` of `tel:`)

Een link is een navigatie component. Gebruik een knop in plaats van een link als er een actie gewenst is.

<!--
  TODO: According to the spec, you should use a link for downloads as well. Last time I checked, different browsers handled this differently,
  which led to unexpected results. Maybe that changed in the meantime. Do we want to figure this out and describe this in the docs as well?
-->

### Externe links

Geef een externe link altijd `rel="external"` mee. Vermijd `target="_blank"`, maar gebruik in ieder geval `rel="external noopener"` als het moet. Voor meer informatie: [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/)

### Bezochte stijl

Bezochte koppelingen geven aan dat een gebruiker de koppeling al heeft geopend. Gebruikte stijlen raden we af bij koppelingen, omdat ze de pagina vaak onoverzichtelijk maken. Het maakt navigeren door een pagina moeilijker. De inline koppeling heeft wel een bezochte stijl. Het vormt geen onderdeel van navigatie-elementen die veel gescand worden.

## Relevante WCAG eisen

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)

## Referenties

- [Links to cross-origin destinations are unsafe](https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/): Vermijd `target="_blank"` of gebruik `rel="external noopener"` als het moet.
- [_A comprehensive guide to designing perfect links in UX_, op Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): best practices rondom links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ door Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): hoe schrijf je goede links? Een uitgebreid artikel over links.
- [_Hover, focus, active_, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): goede uitleg over de states die elementen zoals de link en button hebben in browsers.
- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): uitgebreid overzicht van alle mogelijkheden van links in HTML.
