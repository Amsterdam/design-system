# Git guidelines

Omdat we met meerdere personen in dezelfde repositories werken en omdat onze code open source is hebben we een aantal afspraken gemaakt over hoe we te werk gaan.

Het doel is dat onze code vrij eenduidig is gestructureerd en geschreven, zodat het voor iedereen herkenbaar blijft en prettig erin te werken. Ook vergt zo het nadenken over en reviewen van niet-inhoudelijke zaken minder tijd.

## Gebruik Git

We gebruiken Git voor versiebeheer.

### Repositories

De repositories staan in Azure – één voor de front-end van de app, één voor elke backend van een module, en nog een klein aantal overige.

De repository voor de modules-backend bevat momenteel ook de front-end voor het modulebeheersysteem MBS.

De repositories van de front-end van de app en die van de modules-backend hebben een fork in GitHub. Die worden momenteel niet actief bijgehouden.

### Configuratie

Stel direct na het lokaal halen van een repository in dat je je commits koppelt aan je e-mailadres van de Gemeente Amsterdam: `git config user.email "…@amsterdam.nl"`.

## Houd branches klein

We werken met kleine, kort levende branches (mik op 2 werkdagen) direct op een `main` branch. Dit helpt continuous integration en deployment, verkleint de kans op merge conflicten en beperkt de omvang van code reviews.

Dit heet ‘[trunk based development](https://trunkbaseddevelopment.com/)’ en is een duidelijk andere benadering dan het bekende ‘Git Flow’.

## Maak een branch aan

Je maakt een nieuwe branch via het kaartje van een taak (‘task’) in Azure Boards. Zo zijn de branch en de taak direct gekoppeld en wordt de taak vanzelf gesloten bij het mergen van de branch.

Ook zet dit het volgnummer van de taak in beeld zodat je die gemakkelijk kunt opnemen in de naam van de branch. Dat doen we om later de specificatie gemakkelijk terug te vinden vanuit de implementatie en vice versa.

Let op dat je de branch in de juiste repository aanmaakt.

## Geef de branch een naam

De namen van onze branches volgen een vast formaat:

### Groep

We groeperen branches om snel te zien welk soort werk het bevat en hoe urgent het kan zijn.

De namen van de groepen zijn:

- `feature` voor nieuwe functies en uitbreidingen op bestaande
- `bug` voor de oplossing van een fout
- `refactor` voor een technische wijziging zonder functionele impact
- `task` voor eventuele andere (kleine) klusjes

Direct na de groep volgt een forward slash ‘/‘. Git applicaties gebruiken die conventie om branches visueel te groeperen.

### Volgnummer

Neem vervolgens het volgnummer van de taak (‘task id’) over in de naam van de branch.

Vanaf hier is een liggend streepje ‘-‘ het scheidingsteken.

### Omschrijving

Beschrijf in een paar woorden de inhoud van de branch. Leid deze af van de naam van de PBI waartoe de taak behoort, of bij grotere PBI’s van de taak zelf. Dit doen we in het Engels.

### Voorbeelden

Dat ziet er dan ongeveer zo uit:

- `feature/68178-replace-illustrations`
- `bug/70447-wasteguide-screen-sometimes-empty`
- `refactor/70368-rename-test-ids`
- `task/eslint-jsx-sort-props`

In dit laatste voorbeeld zie je een stiekeme branch zonder task id, dus zonder taak op het bord. Doe dit alleen als de (extra) tijd voor het schrijven én reviewen van deze wijziging opweegt tegen het nut ervan.

## Beschrijf elke commit

Neem even tijd om een goede beschrijving voor je commit te bepalen. Beschrijf niet te letterlijk wát je in die commit aanpast, want dat kan iedereen afleiden uit de diff van die commit met de vorige.

Geef een korte samenvatting, in het Engels, gebruik de gebiedende wijs. Lees verder in [deze leuke klassieker](https://cbea.ms/git-commit/).

Het doel is dat iedereen het verloop van een branch gemakkelijk kan scannen aan de hand van de commit messages.

## Maak je branch netjes

Het is fijn als de commits in je branch in conceptuele stappen is onderverdeeld. Zo hoeven de reviewers niet alle nieuwe code ineens te interpreteren, maar stukje bij beetje.

Als je regelmatig commit gaat dat vaak vanzelf, maar het kan ook zijn dat je juist wat té vaak commit, of dat je na een paar commits toch een andere oplossingsrichting kiest.

Met een ‘interactive rebase’ kun je lokaal je eigen branch netter maken – dat wil zeggen: commits samenvoegen, splitsen of in een andere volgorde zetten.

Meer uitleg bijvoorbeeld [hier bij SourceTree](https://www.atlassian.com/blog/sourcetree/interactive-rebase-sourcetree).

## Integreer andere branches

Voordat je een pull request maakt zorg je dat je branch zo dicht mogelijk bij `main` zit om onnodige merge conflicten te voorkomen.

### Rebase

Dat kun je doen via een rebase: `git rebase main`.

Dat zet alle commits van je branch één voor één bovenop `main`. Vaak lukt dat ineens en zie je je hele branch vervolgens bovenop ‘main’ staan, alsof je er pas daarna aan begonnen was.

Er kunnen ook merge conflicten zijn. Die krijg je dan voor elke commit na de eerste commit waarin het conflict ontstond. Na het oplossen van een conflict doe je `git rebase --continue`. Als het toch niet lukt draai je alles terug met `git rebase --abort`.

Als deze branch al bestaat op de remote moet je de rebase ‘force-pushen’, dat wil zeggen dat je de remote branch overschrijft met je lokale. Dat kan via `git push origin --force-with-lease`.

Als anderen deze branch lokaal hebben moet je eerst met ze overleggen, want zij kunnen eventueel werk verliezen als je dit doet en zij de remote branch willen pullen.

### Merge

Een alternatief is om `main` in je branch te mergen: `git merge main`.

Dat zet alle wijzigingen op `main` sinds de commit waarop je `branch` aftakt in één commit in je branch. Ook dit kan natuurlijk merge conflicten geven. Deze kunnen complexer zijn dan bij een rebase, maar je hoeft ze wel maar één keer op te lossen.

### Check `main`

Zowel bij mergen als rebasen is het aan te raden eerst zeker te stellen dat je lokale `main` branch actueel is: `git checkout main && git pull && git checkout -`. Anders ben je alsnog niet klaar.

### Afweging

Zo komt mergen wat eenvoudiger over dan rebasen. Ook laat je de geschiedenis meer intact.

Na rebasen is de historie in Git gemakkelijker te bevatten vanwege de meer lineaire vorm. Bij veel mergen gaat je historie eruit zien als een rangeerterrein met verbindingen stroomopwaarts én stroomafwaarts.

Mergen geeft je ook meer merge commits, die per definitie geen code bevatten die niet ook al in een andere commit zit en dus weinig waarde toevoegen.

Geen van beide aanpakken is verplicht of verboden. Wel is het goed om met collega’s die binnen dezelfde repository werken te blijven evalueren.

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

## Git CLI shortcuts

Voor gebruikers van git via de CLI kan het handig zijn om voor sommige veelgebruikte git commando’s aliassen te maken. Die kun je opslaan in een configuratiebestand van je shell. Bijvoorbeeld:

```bash
alias gcm="git checkout main"
alias gcp="git checkout -"
alias gh="git push"
alias ghf="git push origin --force-with-lease"
alias gl="git log -3"
alias gp="git fetch --prune; git pull"
alias gpb="git branch --merged | grep -v "\*" | grep -Ev "(\*|master|develop)" | xargs -n 1 git branch -d"
alias gpr="git pull --rebase"
alias gra="git rebase --abort"
alias grc="git rebase --continue"
alias grm="git rebase main"
alias gs="git status"
```

Zo’n lijst hoef je niet per se zelf op te bouwen: je kunt bijvoorbeeld ook [deze plugin op OhMyZsh](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) adopteren.
