/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type LinkGroup = {
  heading: string
  links: string[]
}

export const burgerzakenLinks: [LinkGroup[], LinkGroup[]] = [
  [
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
      heading: 'Trouwen en Partnerschap',
      links: ['Gratis, budget en standaard ceremonie', 'Kosten', 'Meer'],
    },
    {
      heading: 'Akten, uittreksels en verklaringen',
      links: ['Uittreksel BRP aanvragen', 'Geboorteakte aanvragen', 'Meer'],
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
      heading: 'Immigratie en naturalisatie',
      links: [
        'Verhuizen naar Amsterdam vanuit het buitenland',
        'Naturalisatie – Wat u moet doen om Nederlander te worden',
      ],
    },
  ],
  [
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
      heading: 'Verhuizen',
      links: ['Verhuizing doorgeven'],
    },
    {
      heading: 'Geboorte en erkenning kinderen',
      links: ['Geboorteaangifte doen', 'Kind erkennen', 'Meer'],
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
      heading: 'Overlijden',
      links: [
        'Aangifte van overlijden',
        'Aangifte van overlijden door uitvaartondernemers',
        'Aangifte van overlijden in het buitenland',
        'Begraafplaatsen en crematoria',
        'Uitvaarten door de gemeente',
      ],
    },
  ],
]

export const parkerenLinks: [LinkGroup[], LinkGroup[]] = [
  [
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
      heading: 'Bedrijven',
      links: [
        'Paspoort of identiteitskaart aanvragen',
        'Zakenpaspoort aanvragen',
        'Tweede paspoort aanvragen',
        'Paspoort kwijt of gestolen',
      ],
    },
  ],
  [
    {
      heading: 'Waar u kunt parkeren',
      links: ['Rijbewijs aanvragen', 'Rijbewijs verlengen of categorie toevoegen', 'Rijbewijs kwijt of gestolen'],
    },
    {
      heading: 'Parkeerboetes',
      links: ['Rijbewijs aanvragen'],
    },
  ],
]
