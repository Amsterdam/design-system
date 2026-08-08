/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import isChromatic from 'chromatic/isChromatic'

export const districts: ReadonlyArray<string> = [
  'Centrum',
  'Nieuw-West',
  'Noord',
  'Oost',
  'Stadsgebied Weesp',
  'West',
  'Zuid',
  'Zuidoost',
]

// Chromatic captures every Pages story, so varying content would report differences that aren’t regressions.
// It gets the first entry of each list; everywhere else keeps picking at random.
const pickRandomContent = <T>(list: Array<T>): T =>
  isChromatic() ? list[0] : list[Math.floor(Math.random() * list.length)]

export const exampleAccordionHeading = () =>
  pickRandomContent([
    'Dit grof afval halen we niet op',
    'Dit grof afval halen we op',
    'Downloads en documenten',
    'Lees de voorwaarden',
    'Publicaties en nieuwsberichten',
    'Verhuizing doorgeven bij stadsloket',
    'Verhuizing doorgeven per post',
    'Voorgaande versies van ramingen',
  ])

export const exampleCaption = () =>
  pickRandomContent<string>([
    'Een rustige Amsterdamse gracht met eeuwenoude gevels die weerspiegelen in het water, terwijl fietsen nonchalant tegen de brugleuning rusten – een alledaags tafereel vol historie en charme. Foto: Liam Dekker.',
    'Een rij geparkeerde fietsen langs een smalle gracht met klassieke Amsterdamse gevels op de achtergrond.',
    'Een klein houten bootje dobbert rustig op het water, omringd door bomen en bakstenen panden met grote ramen. Foto: Sophie van der Brugge.',
    'Een typische Amsterdamse brug met smeedijzeren leuningen, vol met fietsen en uitzicht op een grachtenpand met een klokgevel.',
    'Een stille gracht met weerspiegelende gevels, terwijl een tram in de verte over een brug rijdt. Foto: Isabel Groeneveld.',
    'Een zonovergoten terras aan de gracht, met stoelen op de kade en uitzicht op een sierlijke ophaalbrug.',
    'Een grachtenpand met vrolijke bloemenbakken op de vensterbanken en een smalle trap naar de voordeur. Foto: Joris Zandvoort.',
    'Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.',
    'Een groep Ajax-supporters in rood-witte sjaals verzamelt zich op een plein, klaar voor een wedstrijd in de Johan Cruijff ArenA. Foto: Louis Flitskamp.',
  ])

export const exampleHeading = () =>
  pickRandomContent<string>([
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
  ])

export const exampleFamilyName = () =>
  pickRandomContent<string>([
    'Bayraktar',
    'Dijkstra',
    'El Idrissi',
    'Farooq',
    'Janssen',
    'Laghmani',
    'Moussaoui',
    'Pieterse',
    'op den Akker',
    'van Harinxma thoe Slooten',
  ])

export const exampleGivenName = () =>
  pickRandomContent<string>([
    'Abdulaziz',
    'Aicha',
    'Angelique',
    'Laurens',
    'Lisette',
    'Meryam',
    'Ruben',
    'Sebastiaan',
    'William',
    'Yassine',
  ])

// Lorem Picsum serves a random photo unless you name one, and it has gaps, so these ids are known to resolve.
const exampleImageIds = [64, 101, 122, 123, 133, 153, 159, 385, 1015, 1016, 1029, 1039, 1043, 1044]

/**
 * Returns the source for a placeholder photo.
 * Give each photo on a page its own index, and reuse one index across the sizes in a `srcSet`.
 * Only Chromatic resolves those indexes to fixed photos; elsewhere every source is a fresh random one.
 */
export const exampleImageSource = (width: number, height: number, index = 0) =>
  isChromatic()
    ? `https://picsum.photos/id/${exampleImageIds[index % exampleImageIds.length]}/${width}/${height}`
    : `https://picsum.photos/${width}/${height}?random=${index}`

export const exampleLinkList = () =>
  pickRandomContent<Array<string>>([
    ['Contactformulier', 'Adressen en openingstijden', 'Bel 14 020'],
    ['Monumenten en archeologie', 'Ateliers en broedplaatsen', 'Kunstenplan', 'Subsidies'],
    [
      'Huisvesting voor kunst en cultuur',
      'Vrije ruimte in Amsterdam',
      'De nacht heeft de toekomst',
      'Kunstwerken in de stad',
      'Werelderfgoed',
      'Stadscuratorium',
      'EIT Culture & Creativity',
    ],
    [
      'Dam tot Damloop 17 september: afsluitingen',
      'De Nieuwe Noorder: omleiding',
      'Brug bij Zwarte Gouw/Weerslootpad: omleiding fietsers en voetgangers',
      'Metaalbewerkerweg en Kamperfoelieweg: omleiding voor fietsers',
      'H.M. Terwogtweg: afsluitweg',
      'Meer werkzaamheden in stadsdeel Noord',
    ],
  ])

export const exampleOrderedList = () =>
  pickRandomContent<Array<string>>([
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
  ])

export const exampleParagraph = () =>
  pickRandomContent<string>([
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
  ])

export const exampleQuote = () =>
  pickRandomContent<string>([
    'We kunnen in heel Nederland schoolpleinen creëren waar kinderen worden uitgedaagd om samen te spelen en te sporten.',
    'Ik hou zo van een Amsterdamse kroeg en van het zwijgend met gedachten spelen. Alleen het sluitingsuur, voor mij en velen, komt steeds te laat en altijd weer te vroeg.',
    'Voetballen is heel simpel, maar het moeilijkste wat er is, is simpel voetballen.',
    'Er is maar één moment dat je op tijd kunt komen. Ben je er niet, dan ben je óf te vroeg, óf te laat.',
    'Ik wilde dat ik niet in Amsterdam woonde, dan ging ik erheen met vakantie.',
    'Voor Amsterdam was de Jordaan één oproer en één fort. De Amsterdammer begreep de Jordaner niet, die zelden uit zijn buurt komt, soms niet uit zijn straat, wiens stad haar eigen plattegrond heeft, een stad in een stad.',
    'Zorg goed voor de stad en voor elkaar.',
  ])

type TopTask = {
  description: string
  heading: string
}

export const exampleStandaloneLink = () =>
  pickRandomContent<string>([
    'Vraag nu aan',
    'Doe een donatie',
    'Laat het ons weten',
    'Bekijk de voorwaarden',
    'Vraag een vergunning aan',
  ])

export const exampleTopTask = () =>
  pickRandomContent<TopTask>([
    {
      description: 'Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.',
      heading: 'Gemeentebelastingen',
    },
    {
      description: 'U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.',
      heading: 'Parkeren + Reizen (P+R)',
    },
    {
      description: 'Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.',
      heading: 'Paspoort',
    },
    {
      description:
        'Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.',
      heading: 'Onderwijs',
    },
    {
      description:
        'Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de gemeente melden.',
      heading: 'Meldingen openbare ruimte en overlast',
    },
    {
      description: 'Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.',
      heading: 'Verhuizing doorgeven',
    },
    {
      description: 'Grof afval zijn spullen die niet in een vuilniszak passen.',
      heading: 'Grof afval',
    },
    {
      description: 'Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.',
      heading: 'Kennisgevingen en bekendmakingen',
    },
  ])

export const exampleUnorderedList = () =>
  pickRandomContent<Array<string>>([
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
  ])

// The index pages — News Overview, Events Overview and Search Results — share a layout, so their example
// content lives together rather than beside each story. Every one of them filters by district, and all three
// take that list from `districts` above rather than keeping a copy of their own.

export type NewsArticle = {
  /** The facets of the article, comma separated, as one Metadata line. */
  readonly category: string
  /** The human-readable date, e.g. ‘20 oktober 2023’. */
  readonly date: string
  readonly id: string
  /** A decorative image; its `alt` is intentionally empty as the title beside it conveys the same meaning. */
  readonly imageSource: string
  /** A machine-readable date for the `time` element, e.g. ‘2023-10-20’. */
  readonly isoDate: string
  readonly teaser: string
  readonly title: string
}

export type EventItem = {
  /** The activity’s category, shown in the Card Metadata and used by the category filter. */
  readonly category: string
  /** The human-readable date, e.g. ‘20 juni 2026’. */
  readonly date: string
  /** The city district (stadsdeel) the activity takes place in. */
  readonly district: string
  /** The link to the activity’s detail page. */
  readonly href: string
  readonly id: string
  /** A decorative image; its `alt` is intentionally empty as the title beside it conveys the same meaning. */
  readonly imageSource: string
  /** A machine-readable date for the `time` element, e.g. ‘2026-06-20’. */
  readonly isoDate: string
  /** A one-line description, kept short so list rows stay a uniform height. */
  readonly teaser: string
  /** An optional time or time range, e.g. ‘10.00–16.00 uur’. */
  readonly timeLabel?: string
  readonly title: string
  /** Where the activity takes place, named as a visitor would recognise it on the ground. */
  readonly venue: string
}

export type SearchResult = {
  /** The human-readable date, e.g. ‘1 juli 2023’. */
  readonly date: string
  readonly id: string
  /** A machine-readable date for the `time` element, e.g. ‘2023-07-01’. */
  readonly isoDate: string
  /** The part of the site the result was found in, which is what a Search Results Page shows instead of a category. */
  readonly section: string
  readonly teaser: string
  readonly title: string
}

export const newsCategories: ReadonlyArray<string> = ['Algemeen', 'Achtergrond', 'Live blogs']

/** Alphabetical, so a visitor can find one by name; the catch-all sits at the end whatever its initial. */
export const eventCategories: ReadonlyArray<string> = [
  'Cursussen en trainingen',
  'Diversiteit',
  'Duurzaam en milieu',
  'Informatie- en participatiebijeenkomsten',
  'Kunst en cultuur',
  'Ontmoeting, zorg en welzijn',
  'Raads- en commissievergaderingen',
  'Sport en spel',
  'Werk en inkomen',
  'Overig',
]

export const searchTopics: ReadonlyArray<string> = ['Nieuwsbericht', 'Beleid en regels', 'Product of dienst']

export const newsArticles: ReadonlyArray<NewsArticle> = [
  {
    title: 'Berlagebrug een aantal nachten dicht',
    category: 'Algemeen, Centrum, Werkzaamheden',
    date: '20 oktober 2023',
    id: 'berlagebrug',
    imageSource: exampleImageSource(640, 360, 0),
    isoDate: '2023-10-20',
    teaser:
      'Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12 nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.',
  },
  {
    title: 'Het allereerste beroepsbrandweerkorps van Nederland bestaat 150 jaar',
    category: 'Achtergrond',
    date: '18 oktober 2023',
    id: 'brandweerkorps',
    imageSource: exampleImageSource(640, 360, 1),
    isoDate: '2023-10-18',
    teaser:
      'In de zomer van 1874 werd het allereerste beroepsbrandweerkorps van Nederland opgericht: de huidige Brandweer Amsterdam-Amstelland.',
  },
  {
    title: 'Noorderpark wordt groener en beter toegankelijk',
    category: 'Algemeen, Noord',
    date: '16 oktober 2023',
    id: 'noorderpark',
    imageSource: exampleImageSource(640, 360, 2),
    isoDate: '2023-10-16',
    teaser:
      'Het Noorderpark krijgt meer schaduw, ruimere wandelpaden en een speelveld dat ook bij regen bruikbaar blijft. De werkzaamheden beginnen na de zomer.',
  },
  {
    title: 'Zuidoost viert 750 jaar Amsterdam: vraag subsidie aan voor uw initiatief',
    category: 'Algemeen, Zuidoost',
    date: '13 oktober 2023',
    id: 'zuidoost-subsidie',
    imageSource: exampleImageSource(640, 360, 3),
    isoDate: '2023-10-13',
    teaser:
      'Bewoners en organisaties in Zuidoost kunnen tot 1 december subsidie aanvragen voor een buurtinitiatief dat bijdraagt aan de viering van 750 jaar Amsterdam.',
  },
  {
    title: 'Live blog: werkzaamheden aan kades en bruggen',
    category: 'Live blogs',
    date: '11 oktober 2023',
    id: 'kades-bruggen',
    imageSource: exampleImageSource(640, 360, 4),
    isoDate: '2023-10-11',
    teaser:
      'We vernieuwen de komende jaren honderden kilometers kade en honderden bruggen. In dit live blog houden we bij welke werkzaamheden er deze week starten.',
  },
  {
    title: 'Erfgoed van de week: het wonderkind van de Amsterdamse School',
    category: 'Achtergrond, West',
    date: '9 oktober 2023',
    id: 'amsterdamse-school',
    imageSource: exampleImageSource(640, 360, 5),
    isoDate: '2023-10-09',
    teaser:
      'De woningblokken in de Spaarndammerbuurt gelden als het hoogtepunt van de Amsterdamse School. Honderd jaar later wonen er nog steeds Amsterdammers.',
  },
]

export const eventItems: ReadonlyArray<EventItem> = [
  {
    title: 'Open dag Stadsarchief Amsterdam',
    category: 'Kunst en cultuur',
    date: '20 juni 2026',
    district: 'Centrum',
    href: '#',
    id: 'open-dag-stadsarchief',
    imageSource: exampleImageSource(640, 360, 0),
    isoDate: '2026-06-20',
    teaser:
      'Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam en doorzoek het archief met hulp van onze medewerkers.',
    timeLabel: '10.00–16.00 uur',
    venue: 'Stadsarchief Amsterdam',
  },
  {
    title: 'Inloopavond herinrichting Jan Evertsenstraat',
    category: 'Informatie- en participatiebijeenkomsten',
    date: '23 juni 2026',
    district: 'West',
    href: '#',
    id: 'inloopavond-jan-evertsenstraat',
    imageSource: exampleImageSource(640, 360, 1),
    isoDate: '2026-06-23',
    teaser: 'Praat mee over de nieuwe inrichting van de straat, met meer ruimte voor groen, fietsers en voetgangers.',
    timeLabel: '19.00–21.00 uur',
    venue: 'Huis van de Wijk De Klinker',
  },
  {
    title: 'Commissievergadering Ruimtelijke Ordening',
    category: 'Raads- en commissievergaderingen',
    date: '24 juni 2026',
    district: 'Centrum',
    href: '#',
    id: 'commissie-ruimtelijke-ordening',
    imageSource: exampleImageSource(640, 360, 2),
    isoDate: '2026-06-24',
    teaser: 'Volg het debat van de raadscommissie over ruimtelijke plannen in de stad. De vergadering is openbaar.',
    timeLabel: '13.30 uur',
    venue: 'Stadhuis, Rooseveltzaal',
  },
  {
    title: 'Gratis zwemles voor kinderen',
    category: 'Sport en spel',
    date: '27 juni 2026',
    district: 'Nieuw-West',
    href: '#',
    id: 'gratis-zwemles-ookmeer',
    imageSource: exampleImageSource(640, 360, 3),
    isoDate: '2026-06-27',
    teaser: 'Kinderen van 5 tot 10 jaar oefenen spelenderwijs met zwemmen onder begeleiding. Aanmelden is niet nodig.',
    timeLabel: '14.00–15.30 uur',
    venue: 'Sportcentrum Ookmeer',
  },
  {
    title: 'Buurtmoestuin: samen zaaien en oogsten',
    category: 'Duurzaam en milieu',
    date: '28 juni 2026',
    district: 'Noord',
    href: '#',
    id: 'buurtmoestuin-buikslotermeer',
    imageSource: exampleImageSource(640, 360, 4),
    isoDate: '2026-06-28',
    teaser:
      'Steek de handen uit de mouwen in de buurtmoestuin en neem aan het eind van de ochtend verse groenten mee naar huis.',
    timeLabel: '11.00–13.00 uur',
    venue: 'Buurtmoestuin Buikslotermeer',
  },
  {
    title: 'Taalcafé voor nieuwe Amsterdammers',
    category: 'Diversiteit',
    date: '1 juli 2026',
    district: 'Oost',
    href: '#',
    id: 'taalcafe-javaplein',
    imageSource: exampleImageSource(640, 360, 5),
    isoDate: '2026-07-01',
    teaser:
      'Oefen op een ontspannen manier Nederlands met vrijwilligers en andere bewoners, onder het genot van een kop koffie.',
    timeLabel: '15.00–17.00 uur',
    venue: 'OBA Javaplein',
  },
]

export const searchResults: ReadonlyArray<SearchResult> = [
  {
    title: 'Top 400/600',
    date: '1 juli 2023',
    id: 'top400-600',
    isoDate: '2023-07-01',
    section: 'Actiecentrum Veiligheid en Zorg',
    teaser:
      'Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners, vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid, zorg en het sociaal domein.',
  },
  {
    title: 'Treiteraanpak bij ernstige overlast in de buurt',
    date: '24 juni 2023',
    id: 'treiteraanpak',
    isoDate: '2023-06-24',
    section: 'Actiecentrum Veiligheid en Zorg',
    teaser:
      'Bewoners die stelselmatig worden lastiggevallen door buurtgenoten kunnen een melding doen. De gemeente, de politie en de woningcorporatie bekijken samen welke maatregelen nodig zijn om de veiligheid te herstellen.',
  },
  {
    title: 'Keurmerk Veilig Ondernemen aanvragen',
    date: '19 juni 2023',
    id: 'veilig-ondernemen',
    isoDate: '2023-06-19',
    section: 'Ondernemen',
    teaser:
      'Ondernemers in winkelgebieden kunnen meedoen aan het Keurmerk Veilig Ondernemen. Deelnemers maken samen met de politie en de brandweer afspraken over veiligheid op straat.',
  },
  {
    title: 'Veiligheid in de straat met een buurtpreventieteam',
    date: '12 juni 2023',
    id: 'buurtpreventie',
    isoDate: '2023-06-12',
    section: 'Wonen en leefomgeving',
    teaser:
      'Een buurtpreventieteam bestaat uit bewoners die samen met de wijkagent letten op de veiligheid in hun straat. De gemeente ondersteunt nieuwe teams met training en materiaal.',
  },
  {
    title: 'Cameratoezicht en veiligheid in de openbare ruimte',
    date: '5 juni 2023',
    id: 'cameratoezicht',
    isoDate: '2023-06-05',
    section: 'Beleid en regels',
    teaser:
      'Veiligheid en openbare orde staan op sommige plekken structureel onder druk. Daar kan de burgemeester cameratoezicht instellen. De beelden worden na 28 dagen verwijderd.',
  },
  {
    title: 'Meldpunt Zorg en Woonoverlast',
    date: '30 mei 2023',
    id: 'meldpunt-zorg',
    isoDate: '2023-05-30',
    section: 'Zorg en ondersteuning',
    teaser:
      'Maakt u zich zorgen over een buurtgenoot die verward gedrag vertoont? Bij Meldpunt Zorg en Woonoverlast kunt u dat melden, ook anoniem.',
  },
]
