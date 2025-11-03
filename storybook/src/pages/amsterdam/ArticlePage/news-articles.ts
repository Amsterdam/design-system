/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type NewsArticle = {
  heading: string
  id: number
  image: {
    alt?: string
    src: string
    srcSet?: string
  }
  lead: string
  originalUrl?: string
  published: Date
  relatedArticles?: NewsArticleLink[]
  sections: NewsArticleSection[]
}

export type NewsArticleSection = {
  body: string
  heading?: string
  id: number
}

export type NewsArticleLink = {
  heading: string
  url: string
}

export const newsArticles: NewsArticle[] = [
  {
    heading: 'Met korting van A naar B op de deelscooter of -bakfiets',
    id: 1,
    image: {
      alt: '',
      src: 'https://picsum.photos/1440/450',
      srcSet:
        'https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w',
    },
    lead: 'Woont of werkt u in Amsterdam? Dan maakt u tot en met oktober met korting gebruik van deelscooters en -bakfietsen. Zo kunt u de auto laten staan en de werkzaamheden in en rond de stad vermijden.',
    originalUrl: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/korting-deelscooter-bakfiets/',
    published: new Date('2025-07-29'),
    relatedArticles: [
      {
        heading: 'Sociale huurders op Strandeiland en Centrumeiland kunnen gratis e-bike uitproberen',
        url: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/e-bike-uitproberen/',
      },
      {
        heading: 'Amstelveenseweg ruim 5 weken dicht voor gemotoriseerd verkeer',
        url: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/amstelveenseweg-dicht/',
      },
      {
        heading: 'Groot onderhoud A4 vanaf 11 juli: houd rekening met flinke vertraging',
        url: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/groot-onderhoud-a4/',
      },
    ],
    sections: [
      {
        body: '<p>U kunt gebruikmaken van de kortingsacties via Amsterdam Bereikbaar. De actie geldt voor Amsterdammers en forenzen van en naar Amsterdam, en is te activeren tot 6 oktober. U kunt de korting gebruiken tot en met 31 oktober.</p>',
        id: 1,
      },
      {
        body: '<p>Het gebruik van deelvervoer groeit snel. Deelscooters en deelbakfietsen zijn een erg gewild vervoersalternatief. Vanwege de grote vraag en het vele gebruik is besloten om per juli dit jaar het aantal deelscooters in de stad te verhogen. Van 1.200 naar 1.500 stuks, met extra aanbod in de stadsdelen Nieuw-West, Noord en Zuidoost. Op de <a href="https://kaart.amsterdam.nl/deelvervoer?pk_vid=6b30897b3a8b78d71753106853e193da#52.3102/4.7243/52.4050/5.0539/brt/14329,14331/">Kaart deelvervoer Amsterdam</a> ziet u waar bij u in de buurt deelvervoer wordt aangeboden.</p>',
        heading: 'Meer deelvervoer',
        id: 2,
      },
      {
        body: '<p>Deelvervoer is ook handig tijdens evenementen. Geen gedoe waar de auto te parkeren of wachten in de rij. Zo werden er op 21 juni, de dag van het festival Op de Ring, bijna 12.000 ritten gemaakt met de deelscooter en deelbakfiets. Dat is meer dan ooit gemaakt op 1 dag. Deze zomer staan er nog een paar grote evenementen op de agenda, waaronder Sail 2025. Ook hier kunt u met deelvervoer naartoe komen.</p>',
        heading: 'Evenementen in de stad',
        id: 3,
      },
      {
        body: '<p>Daarnaast kunt u met deelscooters en -bakfietsen verkeershinder omzeilen. Deze zomer vinden er veel werkzaamheden plaats in en rond de stad, waaronder op grote delen van de ring A10 door Rijkswaterstaat. Door de auto te laten staan en met korting anders te reizen, heeft u hopelijk minder last van de hinder.</p>',
        heading: 'Verkeershinder ontwijken',
        id: 4,
      },
      {
        body: '<p>Gebruikmaken van de kortingsacties? Kijk dan op <a href="https://www.amsterdambereikbaar.nl/en/2025/kortingsacties">Amsterdam Bereikbaar</a>. Wilt u meer weten over deelvervoer in de stad? Ga dan naar <a href="https://www.amsterdam.nl/deelvervoer/">Deelvervoer</a>.</p>',
        heading: 'Meer weten',
        id: 5,
      },
    ],
  },
]
