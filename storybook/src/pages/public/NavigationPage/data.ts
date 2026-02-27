/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type LinkGroup = {
  heading: string
  links: string[]
}

export const burgerzakenLinks: LinkGroup[] = [
  {
    heading: 'Paspoort en identiteitskaart',
    links: [
      'Paspoort of identiteitskaart aanvragen',
      'Zakenpaspoort aanvragen',
      'Tweede paspoort aanvragen',
      'Paspoort kwijt of gestolen',
    ],
  },
  {
    heading: 'Rijbewijs',
    links: [
      'Rijbewijs aanvragen',
      'Rijbewijs verlengen of categorie toevoegen',
      'Rijbewijs kwijt of gestolen',
      'Buitenlands rijbewijs omwisselen',
    ],
  },
  {
    heading: 'Trouwen en Partnerschap',
    links: ['Gratis, budget en standaard ceremonie', 'Kosten', 'Meer'],
  },
  {
    heading: 'Verhuizen',
    links: ['Verhuizing doorgeven'],
  },
  {
    heading: 'Akten, uittreksels en verklaringen',
    links: ['Uittreksel BRP aanvragen', 'Geboorteakte aanvragen', 'Meer'],
  },
  {
    heading: 'Geboorte en erkenning kinderen',
    links: ['Geboorteaangifte doen', 'Kind erkennen', 'Meer'],
  },
  {
    heading: 'Adres en inschrijving',
    links: [
      'Opnieuw inschrijven bij de gemeente',
      'Onjuiste inschrijving melden',
      'Onderzoek naar inschrijving Basisregistratie Personen (BRP)',
      'Briefadres aanvragen en wijzigen',
    ],
  },
  {
    heading: 'Persoonsgegevens',
    links: [
      'Inzien of wijzigen van uw gegevens',
      'Wie mogen mijn persoonlijke gegevens opvragen?',
      'Geheimhouding persoonsgegevens',
      'Voor- of achternaam wijzigen',
      'Wat te doen bij identiteitsfraude',
    ],
  },
  {
    heading: 'Immigratie en naturalisatie',
    links: [
      'Verhuizen naar Amsterdam vanuit het buitenland',
      'Naturalisatie – Wat u moet doen om Nederlander te worden',
    ],
  },
  {
    heading: 'Overlijden',
    links: [
      'Aangifte van overlijden',
      'Aangifte van overlijden door uitvaartondernemers',
      'Aangifte van overlijden in het buitenland',
      'Begraafplaatsen en crematoria',
      'Uitvaarten door de gemeente',
    ],
  },
]

export const parkerenLinks: LinkGroup[] = [
  {
    heading: 'Bewoners',
    links: [
      'Paspoort of identiteitskaart aanvragen',
      'Zakenpaspoort aanvragen',
      'Tweede paspoort aanvragen',
      'Paspoort kwijt of gestolen',
    ],
  },
  {
    heading: 'Waar u kunt parkeren',
    links: ['Rijbewijs aanvragen', 'Rijbewijs verlengen of categorie toevoegen', 'Rijbewijs kwijt of gestolen'],
  },
  {
    heading: 'Bedrijven',
    links: [
      'Paspoort of identiteitskaart aanvragen',
      'Zakenpaspoort aanvragen',
      'Tweede paspoort aanvragen',
      'Paspoort kwijt of gestolen',
    ],
  },
  {
    heading: 'Parkeerboetes',
    links: ['Rijbewijs aanvragen'],
  },
]

export const topTaskLinks: LinkGroup[] = [
  {
    heading: 'Schoon en opgeruimd',
    links: [
      'Leen een afvalgrijper en afvalring',
      'Afval op straat melden',
      'Fietsnietje aanvragen',
      'Openbare toiletten op de kaart',
      'Rookvrije zone aanvragen',
    ],
  },
  {
    heading: 'Spelen en bewegen',
    links: [
      'Peuterbadjes en zwemwater op de kaart',
      'Speeltuinen op de kaart',
      'Kinderboerderijen en stadsboerderijen op de kaart',
      'Openbare sportplekken op de kaart',
      'Denk mee over speelplekken',
    ],
  },
  {
    heading: 'Dieren en groen',
    links: ['Dieren en groen'],
  },
  {
    heading: 'Parken en volkstuinen',
    links: ['Parken en recreatiegebieden', 'Volkstuinparken'],
  },
]

type Person = {
  imageSource: string
  name: string
  role: string
  suffix?: string
}

export const persons: Person[] = [
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Femke Halsema',
    role: 'Burgemeester',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Marjolein Moorman',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Rutger Groot Wassink',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Hester van Buren',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Sofyan Mbarki',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Touria Meliani',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Melanie van der Horst',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Alexander Scholtes',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Zita Pels',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Steven van Weyenberg',
    role: 'Wethouder',
  },
  {
    imageSource: 'https://picsum.photos/480/270',
    name: 'Thea de Vries',
    role: 'Gemeentesecretaris',
    suffix: 'waarnemend',
  },
]
