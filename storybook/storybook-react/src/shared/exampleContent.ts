const pickRandomItem = (list: Array<string>): string => list[Math.floor(Math.random() * list.length)]

const pickRandomList = (list: Array<Array<string>>): Array<string> => list[Math.floor(Math.random() * list.length)]

const headings = [
  'Meer plekken voor kunst en cultuur, verspreid over de stad',
  'Amsterdam Light Festival maakt de stad ook deze winter een beetje mooier',
  'Opvang voor dak- en thuisloze mensen vanwege lage temperaturen',
  'Kapers aan de poort, kanonskogels op de Dam: de aanval op Amsterdam',
  'Erfgoed van de Week | Het wonderkind van de Amsterdamse School',
  '100 jaar NEMO: van nijverheid en techniek tot wetenschapsmuseum',
  '14 kades en bruggen hersteld in 2023',
  'Wat vindt u van de inzameling van grof afval in Amsterdam?',
  'Zuidoost viert 750 jaar Amsterdam: vraag subsidie aan voor uw initiatief',
  'Van bokking tot ‘quawah’: dit waren typisch Amsterdamse koopmansgoederen',
  'Mededeling verwijderen gezonken vaartuigen aan Wittenburgervaart tegenover Nieuwe Oostenburgerdwarsstraat te Amsterdam',
  'Vermakelijkhedenretributie vanaf 2023',
  'Richtlijnen vergunningverlening Koningsdag 2024',
]

export const exampleHeading = () => {
  return pickRandomItem(headings)
}

const orderedLists = [
  [
    'Voor deze actie hebben uw kinderen een persoonlijke OV-chipkaart nodig. Hebben zij die nog niet, dan kunt u die nu al aanvragen. Ieder kind heeft een eigen OV-chipkaart nodig.',
    'U kunt hem aanvragen via ov-chipkaart.nl. De kaart kost € 7,50. U krijgt hem na een dag of 5 thuisgestuurd.',
    'Op de OV-chipkaart kunt u gratis reizen voor kinderen aanvragen vanaf maandag 3 juli 9.00 uur tot uiterlijk 23 november.',
    'We helpen mensen die er zelf niet uitkomen. Daarvoor zit een speciaal belteam klaar, bereikbaar via 14 020.',
    'Het product is geldig in alle bussen, trams en metro’s van GVB. Kinderen reizen met ten minste 1 volwassen begeleider.',
  ],
  [
    'Ervaring is niet noodzakelijk.',
    'Er is veel werk in diverse functies, zoals monteur of timmerman. Er zijn ook banen op kantoor, zoals werkvoorbereider of engineer.',
    'Deze banen bieden stabiliteit en zekerheid.',
    'Er blijft altijd vraag naar werknemers in de bouw en techniek.',
    'Er zijn veel mogelijkheden in de bouw, infrastructuur, haven en groenvoorziening.',
  ],
  [
    'De trambaan verschuift iets om in beide richtingen een breder fietspad te kunnen maken.',
    'Het strengelspoor wordt vervangen door 2 sporen.',
    'De tramhaltes voegen we samen tot 1 nieuwe halte met gelijkvloerse instap, bij voorkeur rond de Cruquiusstraat.',
    'Een autoluwe inrichting, waarbij de auto in één richting over de trambaan meerijdt.',
    'Behoud van de groene bomenlaanstructuur.',
  ],
  [
    'Zorg voor een duidelijke schrijfopdracht.',
    'Verzamel, selecteer en structureer de informatie.',
    'Schrijf (in heldere taal) en zorg voor een duidelijke opmaak.',
    'Controleer de tekst en de schrijfopdracht.',
  ],
  [
    'Fase 1: voorbereiden van de werkzaamheden: 25 september tot 27 september.',
    'Fase 2: start werkzaamheden zuidelijke en half westelijke deel van de rotonde: 27 september tot 19 oktober.',
    'Fase 3: voortgang werkzaamheden zuidelijke en half westelijke deel van de rotonde: 20 oktober tot 11 november.',
    'Fase 4: start werkzaamheden van het noordelijke deel van de rotonde: 13 november tot 6 december.',
    'Fase 5: afronden van de werkzaamheden en verwijderen van tijdelijke maatregelen: 7 december tot 15 december.',
  ],
]

export const exampleOrderedList = () => {
  return pickRandomList(orderedLists)
}

const paragraphs = [
  'Het waterrijke achterland van de provincie Holland was een paradijs voor vissers. Maar terwijl de visserij floreerde in Holland, was Amsterdam eigenlijk helemaal geen visserijstad. Toch maakten Amsterdammers naam in de vishandel. Zij speelden namelijk een cruciale rol bij het klaarmaken en vervoeren van haring.',
  'De politie controleert op overtredingen met opgevoerde/illegale e-bikes en fatbikes. Er worden boetes uitgedeeld en bij grove overtredingen neemt de politie fatbikes in beslag.',
  'Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.',
  'Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen, bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’ meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo makkelijker om weer een nieuwe baan te zoeken.',
  'Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we de stad beter schoonhouden. Wat vinden Amsterdammers belangrijk? Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.',
  'De Zuidas Community Garden is 1 van de projecten van de Green Business Club Zuidas. Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt. 70 bedrijven en organisaties werken daarvoor in verschillende projecten samen. De tuin aan de Domenico Scarlattilaan is elke dag open van 9.00 tot 17.00 uur.',
  'Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u tot en met 31 oktober reageren via amsterdam.nl/oranjeloper. Daar vindt u ook een overzicht van alle werkzaamheden die op de planning staan. En u kunt zich inschrijven voor de digitale nieuwsbrief.',
  'Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.',
  'We richten de rotonde bij de Bouhuijstunnel opnieuw in en maken het veiliger. We passen ook het fiets- en voetpad aan. De rotonde bij de Bouhuijstunnel verbindt de Korte Muiderweg, de Stationsweg en de Leeuwenveldseweg met elkaar.',
  'U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad, wanneer u van daar met het openbaar vervoer (ov) naar het centrumgebied van Amsterdam reist. Anders betaalt u het duurdere standaard parkeertarief, dat per P+R-locatie verschilt.',
  'Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.',
]

export const exampleParagraph = () => {
  return pickRandomItem(paragraphs)
}

const quotes = [
  'We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te sporten.',
  'Ik hou zo van een Amsterdamse kroeg en van het zwijgend met gedachten spelen. Alleen het sluitingsuur, voor mij en velen, komt steeds te laat en altijd weer te vroeg.',
  'Voetballen is heel simpel, maar het moeilijkste wat er is, is simpel voetballen.',
  'Er is maar één moment dat je op tijd kunt komen. Ben je er niet, dan ben je óf te vroeg, óf te laat.',
  'Ik wilde dat ik niet in Amsterdam woonde, dan ging ik erheen met vakantie.',
  'Voor Amsterdam was de Jordaan één oproer en één fort. De Amsterdammer begreep de Jordaner niet, die zelden uit zijn buurt komt, soms niet uit zijn straat, wiens stad haar eigen plattegrond heeft, een stad in een stad.',
  'Zorg goed voor de stad en voor elkaar.',
]

export const exampleQuote = () => {
  return pickRandomItem(quotes)
}

const unorderedLists = [
  [
    'Kopie van de pagina’s van het huur- of koopcontract waarop uw naam, adres en handtekeningen staan.',
    'Als u bij iemand woont: een toestemmingsverklaring van de bewoner en een kopie van het paspoort, rijbewijs of ID-kaart van de bewoner.',
    'Bij antikraak: kopie gebruikersovereenkomst.',
  ],
  [
    'Er zijn afspraken gemaakt over de doorsnede en de inhoud van de brandstapel.',
    'Er moet meer aandacht zijn voor de veiligheid. Daarom helpt een professionele evenementenorganisatie dit jaar bij het maken van het veiligheidsplan.',
    'De taken rondom de organisatie zijn duidelijker verdeeld: Stichting Flora4Life heeft de vergunning aangevraagd en organiseert het evenement. De gemeente geeft advies, maar houdt vooral toezicht en zal handhaven. Flora4life huurt zelf alle externe diensten in zoals aannemers, beveiliging en EHBO. Zij zijn ook tijdens het oudejaarsvuur aanwezig.',
  ],
  [
    'In mei en juni stuurden bewoners, ondernemers en organisaties 296 plannen in voor een schonere, groenere, socialere, mooiere en/of gezondere buurt.',
    'Hiervan haalden 147 plannen de drempel van 40 likes of handtekeningen. Deze plannen gingen door naar de haalbaarheidscheck.',
    'Op de 110 plannen die haalbaar bleken, konden bewoners uit Nieuw-West stemmen van 24 oktober tot en met 27 november. Alle bewoners van 12 jaar en ouder kregen een brief met persoonlijke stemcode voor plannen in hun eigen gebied (Geuzenveld, Slotermeer, Osdorp, Slotervaart, De Aker, Sloten, Nieuw-Sloten en Sloterdijk Nieuw-West).',
    'Stemmen kon online via de website Buurtbudget Nieuw-West, maar ook op veel verschillende stemlocaties in Nieuw-West, via een telefoonnummer én via de mail.',
    'De plannen die dit jaar zijn gekozen worden volgend jaar uitgevoerd.',
  ],
  [
    'Woensdag 26 april, 13.00 tot 15.00 uur: thema Verkeer (verkeersveiligheid, parkeren, et cetera.)',
    'Woensdag 10 mei, 13.00 tot 15.00 uur: thema Groen (vragen/ideeën over het groen in uw buurt)',
    'Woensdag 24 mei, 13.00 tot 15.00 uur: thema Veiligheid (over veiligheidskwesties in uw buurt)',
    'Woensdag 7 juni, 13.00 tot 15.00 uur: thema Verkeer',
    'Woensdag 21 juni, 13.00 tot 15.00 uur: thema Groen',
    'Woensdag 5 juli, 13.00 tot 15.00 uur: thema Veiligheid',
  ],
  [
    'Reinigen van wanden, ventilatiekanalen, kolken en goten.',
    'Onderhoud aan veiligheidsvoorzieningen, zoals de hulppostkasten met brandblussers en telefoon voor direct contact met de verkeerscentrale.',
    'Inspecties van de tunnelbuis.',
    'Live-test van de veiligheidsvoorzieningen bij stroomuitval.',
  ],
  [
    'De Clercqstraat en Jan Evertsenstraat',
    'Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat',
    'Raadhuisstraat, Westermarkt en Rozengracht',
    'Kruispunt Marnixstraat-Rozengracht',
    'Nieuwezijds Voorburgwal',
    'Molenslootbrug',
    'Ritsaert ten Catebrug',
  ],
  [
    'Afval dat naast de container ligt en erin past, gooit u in de container.',
    'Zwerfafval bij de container veegt u op en gooit u in de container voor restafval.',
    'Afval dat klem zit in de container duwt u erin via de klep of via de zijkant. U krijgt een sleutel waarmee u de zijkant van de container kunt openen. Lukt dit niet, dan meldt u dat bij de gemeente.',
    'Als u wilt, kunt u buren die hun afval verkeerd weggooien uitleggen hoe het wel moet.',
  ],
]

export const exampleUnorderedList = () => {
  return pickRandomList(unorderedLists)
}
