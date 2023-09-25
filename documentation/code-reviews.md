# Werkwijze code reviews

## Schrijf een pull request

Als je denkt dat de code in de branch de toepasselijke acceptatiecriteria vervult en voldoet aan de definition of done maak je een pull request (PR). Als je net gepusht hebt verschijnt er op de pagina ‘Pull requests’ van Azure een handig linkje om direct een PR van die branch naar `main` te maken, anders moet je dat zelf even doen.

### Titel

Schrijf een Nederlandse titel met weinig jargon. Deze gebruiken we voor de release notes – het lijstje titels van alle pull requests sinds de vorige release (oftewel de messages van alle merge commits naar de `main` branch) is daarvoor een handige kapstok.

### Beschrijving

Ook de beschrijving van de PR doen we voorlopig in het Nederlands. Leg kort maar duidelijk uit wat je hebt gedaan – het uitgebreide verhaal is normaal gesproken in de bijbehorende PBI te vinden.

Als er bijzondere omstandigheden zijn, originele manieren om iets aan te pakken, zaken die je met opzet buiten scope hebt gelaten, noem dat dan ook. Ook test instructies, zoals hoe je een bug kan reproduceren of welke testdata je kan gebruiken om bij de wijzigingen te komen, besparen de reviewer vaak veel tijd.

### Reviewers

Zorg dat de juiste personen staan aangemerkt als reviewer, liever nog: stel in dat Azure dat automatisch voor je doet.

Normaal gesproken willen we dat elke PR wordt goedgekeurd door twee andere personen. Als je een reviewer als ‘required’ aanmerkt moet die ook goedkeuren, ook als twee anderen dat al hebben gedaan.

Triviale PR’s mag je als auteur al zelf goedkeuren, zodat één andere reviewer voldoende is. Als de reviewer denkt dat het goed is als er toch een derde meekijkt kan die een verplichte reviewer toevoegen (alvorens zelf goedkeuring te geven) of de auteur vragen diens goedkeuring in te trekken.

### Eigen commentaar

Als auteur kun je een discussie over een stukje code opstarten door er zelf een commentaar over te plaatsen. Je kunt bijvoorbeeld alvast aangeven dat je twijfelt over je eigen implementatie.

### Check de tests

Bij het opslaan van de PR worden automatisch een aantal tests uitgevoerd. Als daarvan één of meer falen kan de PR niet gemerged worden. Na een paar minuten zijn ze klaar en is het goed om te controleren of alles klopt – anders is de eerste reviewer direct geblokkeerd. De tests lokaal draaien is nog iets sneller, bijvoorbeeld zo:

- front-end van de app: `npm run typescript && npm run lint:fix && npm test`.
  -een backend module: `python3 manage.py test && pylint $(find . -name '*.py' | grep -v -e venv -e migrations)`

### Een PR is een tussenstap

Dat je een PR hebt gemaakt betekent niet “mijn werk is af, wil je er nog even naar kijken”. Zie het meer als: “Dit is mijn voorstel voor de implementatie van de taak. Laten we nu onze gezamenlijke kennis gebruiken en het werk samen zo goed mogelijk afronden.”

Eventueel kun je de PR al eerder klaar zetten, bijvoorbeeld om een duidelijke diff te zien, iemand anders mee te laten kijken of alvast commentaren te plaatsen of vragen. Zet de PR dan in ‘draft’ mode zodat niemand notificaties krijgt of denkt dat het al tijd is voor de review.

## Geef feedback op code

Probeer een code review op een PR zo snel mogelijk te doen. We willen branches immers zo kort mogelijk laten leven. Ook is het werk dan nog ‘top of mind’ voor de auteur. Zorg dat je notificaties krijgt van nieuwe PR’s op je naam.

Investeer de tijd om de wijziging van de PR goed te begrijpen. Lees de titel en beschrijving goed. Meestal zul je de branch lokaal uitchecken en de functionaliteit expliciet testen. Maak jezelf de nieuwe code eigen als had je het zelf geschreven.

Op welke aspecten je kan letten bij een code review is een onderwerp voor een andere keer.

### Commentariëren

Het is belangrijk je te realiseren dat je schriftelijke feedback kritischer kan overkomen dan je bedoelde.

Je collega heeft naar eer en geweten gewerkt, zorg ervoor dat je open communiceert. Stel vragen, doe voorstellen. “Zou het goed zijn om…?” “Heb je er rekening mee gehouden dat…?” “Ik zou verwachten dat zus en zo.”

Bel elkaar als dat handiger is. En schrijf een complimentje als je iets tofs tegenkomt.

### Commits toevoegen

In plaats van een commentaar te schrijven is het soms handig de wijzigingen die je voorstelt zelf al te committen. Zeker als je eerst zelf even wilt uitproberen of je idee ook echt werkt en slimmer is, en de code er dan toch al staat.

Overleg wel met de auteur of het oké is om die commit te pushen. Configureer de ‘branch policy’ voor `main` zó dat de goedkeuring van de laatste committer niet meetelt – die code moet immers ook door twee anderen gereviewd worden.

Voor kleine wijzigingen is het efficiënter om in een commentaar een suggestie op te nemen, die kan de auteur met een druk op de knop accepteren en toepassen, of weigeren.

### Goedkeuren

Als je geen feedback hebt, of alleen commentaren waarvan je verwacht dat verdere uitwisseling niet nodig is, keur je de PR goed (‘Approve’).

Een PR wordt pas gemerged als automatische tests geen fouten aan het licht brachten, alle commentaren opgelost zijn en genoeg reviewers de PR goedgekeurd hebben. Zorg ervoor dat er niet onnodig gewacht hoeft te worden.

Als auteur mag je commentaren van een reviewer sluiten (‘Resolve’) als jullie het duidelijk eens zijn. Heb je een andere mening dan de reviewer, of wil je dat je aanpassingen nog eens bekeken worden, laat het commentaar dan open staan.
