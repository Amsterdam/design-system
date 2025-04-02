type Article = {
  description: string
  enclosure: {
    type: string
    url: string
  }
  guid: string
  link: string
  pubDate: string
  title: string
}

type ArticlesRss = {
  rss: {
    channel: {
      'atom:link': {
        href: string
        rel: string
        type: string
      }
      description: string
      docs: string
      generator: string
      image: {
        link: string
        title: string
        url: string
      }
      items: Article[]
      language: string
      lastBuildDate: string
      link: string
      pubDate: string
      title: string
      ttl: number
      webMaster: string
    }
    version: string
    'xmlns:atom': string
  }
}

const articlesRss: ArticlesRss = {
  rss: {
    channel: {
      title: 'Nieuws',
      'atom:link': {
        href: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/?rss=true',
        rel: 'self',
        type: 'application/rss+xml',
      },
      description: 'Nieuwsoverzicht.',
      docs: 'http://blogs.law.harvard.edu/tech/rss',
      generator: 'IPROX site/content management system (http://www.iprox.nl/)',
      image: {
        title: 'Gemeente Amsterdam',
        link: 'https://www.amsterdam.nl',
        url: 'https://www.amsterdam.nl/views/core/images/logos/google_news_logo.png',
      },
      items: [
        {
          title: 'Ruim 1.300 woningen weer beschikbaar voor woningzoekers',
          description:
            'Vorig jaar zijn 1.312 woningen vrijgemaakt voor mensen die een huis zoeken. Het gaat om huizen die leegstonden of illegaal werden gebruikt.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1067180/basis_h-woning-82603-15-uitzicht-nwekerk-27mrt2025-e-v-eis.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/woningen-weer-beschikbaar/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/woningen-weer-beschikbaar/',
          pubDate: 'Wed, 02 Apr 2025 14:27:00 GMT',
        },
        {
          title: 'Erfgoed van de week | Mien Ruys en het groen in Amsterdam',
          description:
            "Mien Ruys is van onschatbare waarde geweest voor de ontwikkeling van de tuin- en landschapsarchitectuur in Nederland. Vanaf de jaren '30 ontwerpt Ruys verschillende gemeenschapstuinen voor woningbouwprojecten in Amsterdam.",
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066672/dikninge_mrt_2025.jpg',
          },
          guid: 'https://www.amsterdam.nl/kunst-cultuur/monumenten/erfgoed-week/erfgoed-week-mien-ruys-groen-amsterdam/',
          link: 'https://www.amsterdam.nl/kunst-cultuur/monumenten/erfgoed-week/erfgoed-week-mien-ruys-groen-amsterdam/',
          pubDate: 'Wed, 02 Apr 2025 12:00:00 GMT',
        },
        {
          title: 'Ontdek bruisend Zuidoost tijdens 24 uur Zuidoost',
          description:
            'Op zaterdag 12 april vindt 24 uur Zuidoost plaats. Beleef, proef en voel de energie van dit stadsdeel 24 uur lang. Er zijn meer dan 50 gratis activiteiten.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066916/basis_54378708897_c7108eedda_k940.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/24-uur-zuidoost/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/24-uur-zuidoost/',
          pubDate: 'Wed, 02 Apr 2025 07:18:00 GMT',
        },
        {
          title: 'Gratis zonnepanelen voor Amsterdammers met weinig geld',
          description:
            'We gaan gratis tweedehands zonnepanelen plaatsen op daken van Amsterdammers die weinig te besteden hebben.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066625/basis_51588-mijehof-06-23mrt2020-e-v-eis940.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/gratis-zonnepanelen/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/gratis-zonnepanelen/',
          pubDate: 'Tue, 01 Apr 2025 14:26:00 GMT',
        },
        {
          title: 'Help mee tijdens het festival Op de Ring',
          description:
            'We zoeken vrijwilligers die op 21 juni willen helpen tijdens het festival Op de Ring. Het wordt een écht Amsterdams feestje. Dat wilt u toch niet missen?',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066670/basis_vrijwilligers_op_de_ring.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/vrijwilliger-op-de-ring/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/vrijwilliger-op-de-ring/',
          pubDate: 'Tue, 01 Apr 2025 14:00:00 GMT',
        },
        {
          title: 'Deze Amsterdammer boorde een gat in zijn hoofd',
          description:
            'Op 6 januari 1965 klonk in een woning aan de Herenstraat in Amsterdam het geluid van een boor. De Amsterdamse medicijnstudent Bart Huges voerde een gevaarlijk experiment uit.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066867/basis_osim00006003750940.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/achtergrond/gat-hoofd/',
          link: 'https://www.amsterdam.nl/nieuws/achtergrond/gat-hoofd/',
          pubDate: 'Tue, 01 Apr 2025 10:31:00 GMT',
        },
        {
          title: 'Mooie nieuwe fietsroute door de geschiedenis van Amsterdam',
          description:
            'De fietsroute is 38 kilometer lang en laat de rijke geschiedenis van de stad zien. Pomp uw banden maar vast op!',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066501/basis_nieuwendammerdijkslinger940.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/nieuwe-fietsroute/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/nieuwe-fietsroute/',
          pubDate: 'Tue, 01 Apr 2025 07:00:00 GMT',
        },
        {
          title: 'Een groenere Singelgrachtzone met meer ruimte voor fietsers en voetgangers',
          description:
            "De Singelgrachtzone wordt groener en rustiger. Op termijn komt er meer ruimte voor voetgangers, fietsers en openbaar vervoer, terwijl de hoeveelheid auto's afneemt.",
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066124/basis_singelgracht_940_x_415_.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/groenere-singelgrachtzone/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/groenere-singelgrachtzone/',
          pubDate: 'Fri, 28 Mar 2025 09:34:00 GMT',
        },
        {
          title: 'Subsidie voor Noord: 13,5 miljoen voor onderhoud en isolatie woningen',
          description:
            'Heeft u een woning in Noord? Dan kunt u straks mogelijk subsidie krijgen voor onderhoud en isolatie.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066541/basis_woningisolatie_meeuwenlaan_amsterdam-noord_940_x_415_.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/subsidie-noord/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/subsidie-noord/',
          pubDate: 'Fri, 28 Mar 2025 07:15:00 GMT',
        },
        {
          title: 'Rijd elektrisch en bespaar laadkosten: doe mee met de proef voor slim laden',
          description:
            'We starten een proef met slim laden. Heeft u een elektrische auto en ANWB Laadpas? Dan kunt u meedoen én geld terugkrijgen.',
          enclosure: {
            type: 'image/jpeg',
            url: 'https://www.amsterdam.nl/publish/pages/1066475/42461-190227-elektrisch-opladen_an-6665_1.jpg',
          },
          guid: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/proef-slim-laden/',
          link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/proef-slim-laden/',
          pubDate: 'Thu, 27 Mar 2025 13:00:00 GMT',
        },
      ],
      language: 'nl',
      lastBuildDate: 'Thu, 20 Feb 2025 22:46:00 GMT',
      link: 'https://www.amsterdam.nl/nieuws/nieuwsoverzicht/',
      pubDate: 'Wed, 02 Apr 2025 07:00:00 GMT',
      ttl: 60,
      webMaster: 'noreply@amsterdam.nl (Amsterdam.nl)',
    },
    version: '2.0',
    'xmlns:atom': 'http://www.w3.org/2005/Atom',
  },
}

export const articles = articlesRss.rss.channel.items
export const topArticles = articles.sort(() => 0.5 - Math.random()).slice(0, 3)

const categories = [
  'Achtergrond',
  'Afval',
  'Algemeen',
  'Blog',
  'Centrum',
  'Duurzaamheid',
  'Geschiedenis',
  'Nieuw-West',
  'Parkeren',
  'Stadsloketten',
  'Tagline',
  'Weesp',
  'Werkzaamheden',
  'Zuidoost',
]

export const randomCategories = () => {
  return categories
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 2) + 1)
    .join(', ')
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('nl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
