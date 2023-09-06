# Jira inrichting DS

## PBI voor nieuw Figma component

### Description

Uiteindelijk bevat de PBI onderstaande info, voor nu alles in het veld Description:

- Link naar Figma: direct naar juiste page of frame.
- Rationale: in 1 zin wat het bestaansrecht van dit component is. Komt in de publieke docs.
- UI beschrijving: een paar korte zinnen of een lijstje ontwerpbeslissingen, zodat die keuzes expliciet worden en we weten waar over nagedacht is. Voor zover ze nu al bepaald zijn natuurlijk. Bijv. drie varianten buttons, tekst is blauw want interactief, escape sluit de modal, blockquote toont zelf aanhalingstekens, grid is voor de hele pagina. Komt in de pubieke docs.
- Acceptatiecriteria: het lijstje dat afgevinkt moet zijn voordat deze PBI klaar is.
- Oplossingsrichting: als we al bedacht hebben welke stappen we willen doorlopen kunnen we die hier opvoeren. Ook zaken waar je aan moet denken, die in de refinement naar voren kwamen maar niet vergeten moeten zijn tegen de tijd dat je eraan begint.
- Buiten scope: benoem aspecten die verwacht zouden kunnen worden maar die we later willen oppakken. Niet te zuinig, we willen PBI’s klein houden want groter worden ze vanzelf wel. Voorkomt premature discussies.
- Actiepunten: als er nog dingen geregeld moeten worden, voorbereid, meetings ingepland. Mention degene die de actie gaat uitvoeren zodat dat duidelijk is die een notificatie krijgt.

### Workflow

Bij het aanmaken van een PBI is de state automatisch ‘New’. Alleen een titel en korte beschrijving zijn hier nodig, net voldoende om in de volgende state nog te begrijpen wat er moet gebeuren. Indien mogelijk ook al de juiste Epic en Labels koppelen.

Wat er moet gebeuren om een PBI naar de volgende state te krijgen:

- New
  - Title en korte Description zijn er dus al.
  - Leads voegen Rationale en Acceptatiecriteria toe.
  - Waar nodig eventueel Epic en Labels aanvullen.
  - Nog geen Assignee selecteren.
- Ready to refine
  - Team schrijft Oplossingsrichting, Buiten Scope, Actiepunten.
  - Verfijnt wat er eventueel al stond.
  - Leads bepalen prio op de backlog.
- Ready for sprint
  - De PBI is nu af en in principe moet de tekst niet meer bewerkt worden.
  - Wel kunnen er Comments geschreven worden met relevante info die later ontstond.
- Committed
  - Zodra de PBI op een sprint komt wordt de state ‘Committed’.
  - Dat verandert niet totdat alle Subtasks ‘Done’ zijn.
  - Degene die het werk aan de PBI begint wordt de owner (assignee) van de PBI. Die neemt verantwoordelijkheid voor voortgang en afronding.
- Completed

### Subtasks

Een Figma component story heeft in principe de volgende Subtasks:

- Research
  - Check status huidige component: Fabrique / onze Figma, onze Design System website.
  - Kijk wat er beschikbaar is vanuit NL Design System.
  - Zoek vergelijkbare ontwerpen in bijv. The Component Gallery
  - Zet op een rij wat het component allemaal kan en hoe het eruit ziet.
  - Ga na wat er aan a11y nodig is, bijv. Amsterdam TamTam, Fronteers Slack
  - Betrek het perspectief van een front-ender en wellicht andere rollen (huisstijl, redactie?).
  - Bepaal de naamgeving.
- Design (eventueel meerdere Subtaken)
  - Werk alle varianten van het component uit in Figma en zet ze overzichtelijk op een rij.
  - Let op hover, focus states.
  - Worden transities geanimeerd?
  - Besteed ook aandacht aan de niet-visuele UI: hoe wordt het voorgelezen, hoe werkt toetsenbordbediening?
  - Voeg een aantal voorbeelden toe met realistische content. Deze worden overgenomen in Storybook.
  - Houd rekening met veel en weinig content, responsive gedrag, pointer versus touch, inzoomen van tekst etc.
  - Vink de Definition of Done af die binnen Figma bestaat.
- Review
  - Geef een presentatie aan het team (30 minuten, ad hoc inplannen, kan remote)
  - Leg de ontwerpkeuzes en overwegingen uit, beantwoord vragen, verzamel feedback
  - Rond het design af (die Subtask blijft tijdens de Review op Doing staan) naar aanleiding van review
- Describe
  - Schrijf documentatie in Markdown / Platte tekst, op basis van de info in de PBI.
  - Structuur, \* = verplicht:
    - Rationale \*
    - UI Description \*
    - When (not) to use \*
    - What to consider
    - Alternatives
    - Examples \*
    - WCAG guidelines
    - Glossary
    - References
  - Dit komt letterlijk in Storybook.
  - Waar tot die tijd bewaren? Figma? OneNote?
- Publish
  - Schrijf de change log.
  - Publiceer het component naar de shared library.
  - Versienummer?
  - Waar communiceren?
- Prepare development
  - Zet een PBI klaar voor het React component.
  - Plan een losse refinement in of zet het op de agenda van de aankomende.

Het sprintbord heeft drie kolommen: To do, Doing, Done. Elke Subtask begint in To do. Publish kan pas in To do als de vier voorgaande Done zijn.

## PBI voor bijbehorend React component

### Description

In principe kunnen twee linkjes hier genoeg zijn?

- Link naar Figma
- Link naar de Figma PBI

Al zullen bijv. Acceptatiecriteria en Oplossingsrichting ook wel specifieke inhoud voor front-end kunnen hebben. Zo ja, toevoegen.

### Workflow

Zo veel mogelijk zoals bij Figma component, mutatis mutandis.

### Subtasks

- Research
  - Gebruiken we het NLDS community component?
  - Vind inspiratie online, bijv. The Component Gallery.
- Development (eventueel meerdere Subtaken)
  - Accessibility
  - React component
  - Class names
  - Design tokens
  - Unit tests
  - Documentation
- Code review
  - Maak een PR (zie Git guidelines).
  - In elk geval 1 van de maintainers geeft feedback en zorgt voor approval.
- Design review
  - Zorg ervoor dat de design lead het component in Storybook kan bekijken (acceptatie-omgeving, Teams call, samen achter een scherm op vrijdag).
  - Bevindingen worden in deze Subtask opgevoerd.
  - Bepaal of er bevindingen buiten scope zijn (vergelijk met Acceptatiecriteria) en maak daar een nieuwe PBI voor.
- Publish
  - Schrijf de change log.
  - Publiceer nieuwe npm packages (binnenkort hopelijk automatisch).
  - Versienummer?
  - Waar communiceren?

## PBI voor React bug

TODO
