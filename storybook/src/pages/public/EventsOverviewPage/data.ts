/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { exampleImageSource } from '#storybook/_common/exampleContent'

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

/** Alphabetical, so a visitor can find one by name; the catch-all sits at the end whatever its initial. */
export const categories: ReadonlyArray<string> = [
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

export const events: ReadonlyArray<EventItem> = [
  {
    title: 'Open dag Stadsarchief Amsterdam',
    category: 'Kunst en cultuur',
    dateLabel: '20 juni 2026',
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
    dateLabel: '23 juni 2026',
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
    dateLabel: '24 juni 2026',
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
    dateLabel: '27 juni 2026',
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
    dateLabel: '28 juni 2026',
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
    dateLabel: '1 juli 2026',
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
