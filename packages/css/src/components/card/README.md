# Card

Gebruik een card op een overzichtspagina om te verwijzen naar een detailpagina,
zoals een nieuwsbericht, een vacature of een zoekresultaat.
De card bevat meestal de titel, introductie en afbeelding van de content.
De link is verplicht.

## Richtlijnen

- De titel van een card is een link in een heading.
  Hier gelden dezelfde richtlijnen voor als voor reguliere [links](?path=/docs/react_navigation-link--docs) en [headings](?path=/docs/react_text-heading--docs).
  De link is actief op het hele gebied van de card.
- Een card heeft meer inhoud nodig dan alleen een titel.
  Vul dit aan met tekstuele en/of visuele inhoud.
- De tekst zet je in een reguliere paragraaf.
  Alleen voor een tagline of datum gebruik je de kleinste tekstgrootte.
- Als de inhoud geen detailpagina vertegenwoordigt is dit component niet de beste optie.
  Om te verwijzen naar een thematische pagina gebruik je een [top task link](?path=/docs/react_navigation-top-task-link--docs).
  Ook kun je een [reguliere link](?path=/docs/react_navigation-link--docs) inzetten.

## Schermlezers

Met een schermlezer kun je onder andere navigeren via headings en links in een document.
De titel van een card is een link in een heading, zodat je van beide navigatiemanieren gebruik kunt maken.
Een schermlezer leest eerst de titel op, daarna de rest van de inhoud.
