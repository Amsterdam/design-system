/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { exampleImageSource } from '#storybook/_common/exampleContent'

export type NewsArticle = {
  readonly category: string
  readonly date: string
  readonly id: string
  readonly imageSource: string
  readonly isoDate: string
  readonly teaser: string
  readonly title: string
}

export const newsCategories: ReadonlyArray<string> = ['Algemeen', 'Achtergrond', 'Live blogs']

export const newsDistricts: ReadonlyArray<string> = [
  'Centrum',
  'Noord',
  'Oost',
  'Zuid',
  'Zuidoost',
  'West',
  'Nieuw-West',
  'Weesp',
]

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
  {
    title: 'Wat vindt u van de inzameling van grof afval in Amsterdam?',
    category: 'Algemeen, Oost',
    date: '6 oktober 2023',
    id: 'grof-afval',
    imageSource: exampleImageSource(640, 360, 6),
    isoDate: '2023-10-06',
    teaser:
      'We willen weten hoe Amsterdammers de inzameling van grof afval ervaren. Vul de vragenlijst in en vertel wat er volgens u beter kan.',
  },
]
