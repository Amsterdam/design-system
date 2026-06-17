/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type EventItem = {
  /** The activity’s category, shown as the Card tagline and used by the category filter. */
  readonly category: string
  /** The human-readable date, e.g. ‘20 juni 2026’. */
  readonly dateLabel: string
  /** The city district (stadsdeel) the activity takes place in. */
  readonly district: string
  /** The link to the activity’s detail page. */
  readonly href: string
  readonly id: string
  /** A decorative image; its `alt` is intentionally empty as the title beside it conveys the same meaning. */
  readonly image: string
  /** A machine-readable date for the `time` element, e.g. ‘2026-06-20’. */
  readonly isoDate: string
  /** The venue or place name. */
  readonly location: string
  /** A one-line description, kept short so list rows stay a uniform height. */
  readonly teaser: string
  /** An optional time or time range, e.g. ‘10.00–16.00 uur’. */
  readonly timeLabel?: string
  readonly title: string
}

/** The activity categories, in the order the city publishes them (not alphabetical). */
export const categories: string[] = [
  'Raads- en commissievergaderingen',
  'Informatie- en participatiebijeenkomsten',
  'Cursussen en trainingen',
  'Duurzaam en milieu',
  'Sport en spel',
  'Ontmoeting, zorg en welzijn',
  'Kunst en cultuur',
  'Diversiteit',
  'Werk en inkomen',
  'Overig',
]

export const districts: string[] = ['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost']

export const months: string[] = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december',
]

export const years: number[] = [2026, 2027, 2028]

export const events: EventItem[] = [
  {
    title: 'Open dag Stadsarchief Amsterdam',
    category: 'Kunst en cultuur',
    dateLabel: '20 juni 2026',
    district: 'Centrum',
    href: '#',
    id: 'open-dag-stadsarchief',
    image: 'https://picsum.photos/id/1048/640/360',
    isoDate: '2026-06-20',
    location: 'Stadsarchief Amsterdam, De Bazel',
    teaser:
      'Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam en doorzoek het archief met hulp van onze medewerkers.',
    timeLabel: '10.00–16.00 uur',
  },
  {
    title: 'Inloopavond herinrichting Jan Evertsenstraat',
    category: 'Informatie- en participatiebijeenkomsten',
    dateLabel: '23 juni 2026',
    district: 'West',
    href: '#',
    id: 'inloopavond-jan-evertsenstraat',
    image: 'https://picsum.photos/id/1062/640/360',
    isoDate: '2026-06-23',
    location: 'Huis van de Wijk De Klinker',
    teaser: 'Praat mee over de nieuwe inrichting van de straat, met meer ruimte voor groen, fietsers en voetgangers.',
    timeLabel: '19.00–21.00 uur',
  },
  {
    title: 'Commissievergadering Ruimtelijke Ordening',
    category: 'Raads- en commissievergaderingen',
    dateLabel: '24 juni 2026',
    district: 'Centrum',
    href: '#',
    id: 'commissie-ruimtelijke-ordening',
    image: 'https://picsum.photos/id/1078/640/360',
    isoDate: '2026-06-24',
    location: 'Stadhuis, Raadzaal',
    teaser: 'Volg het debat van de raadscommissie over ruimtelijke plannen in de stad. De vergadering is openbaar.',
    timeLabel: '13.30 uur',
  },
  {
    title: 'Gratis zwemles voor kinderen',
    category: 'Sport en spel',
    dateLabel: '27 juni 2026',
    district: 'Nieuw-West',
    href: '#',
    id: 'gratis-zwemles-ookmeer',
    image: 'https://picsum.photos/id/1069/640/360',
    isoDate: '2026-06-27',
    location: 'Sportcentrum Ookmeer',
    teaser: 'Kinderen van 5 tot 10 jaar oefenen spelenderwijs met zwemmen onder begeleiding. Aanmelden is niet nodig.',
    timeLabel: '14.00–15.30 uur',
  },
  {
    title: 'Buurtmoestuin: samen zaaien en oogsten',
    category: 'Duurzaam en milieu',
    dateLabel: '28 juni 2026',
    district: 'Noord',
    href: '#',
    id: 'buurtmoestuin-buikslotermeer',
    image: 'https://picsum.photos/id/1080/640/360',
    isoDate: '2026-06-28',
    location: 'Tuinpark Buikslotermeer',
    teaser:
      'Steek de handen uit de mouwen in de buurtmoestuin en neem aan het eind van de ochtend verse groenten mee naar huis.',
    timeLabel: '11.00–13.00 uur',
  },
  {
    title: 'Taalcafé voor nieuwe Amsterdammers',
    category: 'Diversiteit',
    dateLabel: '1 juli 2026',
    district: 'Oost',
    href: '#',
    id: 'taalcafe-javaplein',
    image: 'https://picsum.photos/id/1084/640/360',
    isoDate: '2026-07-01',
    location: 'OBA Javaplein',
    teaser:
      'Oefen op een ontspannen manier Nederlands met vrijwilligers en andere bewoners, onder het genot van een kop koffie.',
    timeLabel: '15.00–17.00 uur',
  },
  {
    title: 'Workshop solliciteren en cv maken',
    category: 'Werk en inkomen',
    dateLabel: '3 juli 2026',
    district: 'Zuidoost',
    href: '#',
    id: 'workshop-solliciteren-zuidoost',
    image: 'https://picsum.photos/id/1074/640/360',
    isoDate: '2026-07-03',
    location: 'WerkCentrum Zuidoost, Bijlmerplein',
    teaser: 'Krijg praktische tips voor uw sollicitatiebrief en cv, en oefen het sollicitatiegesprek met een adviseur.',
    timeLabel: '10.00–12.30 uur',
  },
  {
    title: 'Zomerconcert in het Vondelpark',
    category: 'Kunst en cultuur',
    dateLabel: '5 juli 2026',
    district: 'Zuid',
    href: '#',
    id: 'zomerconcert-vondelpark',
    image: 'https://picsum.photos/id/1059/640/360',
    isoDate: '2026-07-05',
    location: 'Openluchttheater Vondelpark',
    teaser: 'Geniet van een gratis zomeravondconcert met Amsterdamse muzikanten op het podium in het Vondelpark.',
    timeLabel: '20.00–22.00 uur',
  },
  {
    title: 'Mantelzorgcafé: ontmoeting en ondersteuning',
    category: 'Ontmoeting, zorg en welzijn',
    dateLabel: '8 juli 2026',
    district: 'Weesp',
    href: '#',
    id: 'mantelzorgcafe-weesp',
    image: 'https://picsum.photos/id/1027/640/360',
    isoDate: '2026-07-08',
    location: 'Wijksteunpunt Weesp',
    teaser: 'Een ontmoetingsplek voor mantelzorgers: deel ervaringen en ontdek welke ondersteuning de gemeente biedt.',
    timeLabel: '14.00–16.00 uur',
  },
]
