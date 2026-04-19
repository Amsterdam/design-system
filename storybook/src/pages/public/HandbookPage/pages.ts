/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type HandbookPage = {
  body: string
  children?: Array<HandbookPage>
  heading: string
  lead: string
  slug: string
}

export const pages: Array<HandbookPage> = [
  {
    body: 'Deze regeling vervangt eerdere afspraken en geldt voor alle medewerkers in loondienst van de gemeente Amsterdam. Afwijkingen zijn alleen mogelijk als dit expliciet is vastgelegd in een individuele arbeidsovereenkomst of cao-bijlage.',
    heading: 'Inleiding',
    lead: 'Deze regeling beschrijft hoe de gemeente Amsterdam salarissen, salaristoelagen en vergoedingen vaststelt.',
    slug: 's1',
  },
  {
    body: 'De waardering bepaalt in welke salarisschaal een functie wordt ingedeeld. De procedure volgt de methode die is overeengekomen in de cao Gemeenten.',
    children: [
      {
        body: 'Alle functies binnen de gemeente Amsterdam worden gewaardeerd volgens dezelfde methode. Zo ontstaat een samenhangend loongebouw waarin vergelijkbare functies op hetzelfde niveau zijn ingedeeld.',
        heading: 'Algemeen',
        lead: 'De gemeente waardeert alle functies met één consistente methode, zodat vergelijkbare werkzaamheden ook vergelijkbaar worden beloond.',
        slug: 's2-1',
      },
      {
        body: 'Waardering gebeurt op basis van een functiebeschrijving en een weging van kenmerken als verantwoordelijkheid, complexiteit en vereiste kennis. De uitkomst bepaalt de salarisschaal.',
        children: [
          {
            body: 'De methode kent punten toe aan gezichtspunten zoals kennis, zelfstandigheid, contacten en afbreukrisico. De som van de punten bepaalt de indeling in een salarisschaal. Deze werkwijze is landelijk afgestemd.',
            heading: 'Methode',
            lead: 'We gebruiken de HR21-systematiek om functies objectief en vergelijkbaar te waarderen.',
            slug: 's2-2-1',
          },
          {
            body: 'Een leidinggevende dient een onderbouwd voorstel in bij de afdeling HR. Een onafhankelijke adviseur toetst het voorstel en brengt advies uit aan het bevoegd gezag. Het besluit wordt schriftelijk vastgelegd.',
            heading: 'Procedure',
            lead: 'Een waardering doorloopt een vaste route van voorstel, advies en besluit.',
            slug: 's2-2-2',
          },
          {
            body: 'Bezwaar moet binnen zes weken na het besluit worden ingediend. Een bezwaarcommissie hoort de medewerker en brengt advies uit. Het bevoegd gezag neemt vervolgens een nieuw besluit.',
            heading: 'Bezwaar',
            lead: 'Bent u het oneens met een waardering? Dan kunt u bezwaar maken volgens de daarvoor geldende procedure.',
            slug: 's2-2-3',
          },
        ],
        heading: 'Waardering van functies',
        lead: 'Elke functie krijgt een waardering die past bij de zwaarte van het werk.',
        slug: 's2-2',
      },
      {
        body: 'Een herwaardering kan leiden tot een hogere of lagere indeling. De procedure is gelijk aan die van een eerste waardering.',
        children: [
          {
            body: 'Herwaardering kan worden aangevraagd door de leidinggevende of door de medewerker zelf. Daarvoor is een actuele functiebeschrijving nodig.',
            heading: 'Aanleiding',
            lead: 'Als de inhoud van een functie structureel verandert, kan een herwaardering worden aangevraagd.',
            slug: 's2-3-1',
          },
          {
            body: 'De procedure volgt dezelfde stappen als de eerste waardering: voorstel, advies en besluit. Gedurende de procedure blijft de huidige indeling van kracht.',
            heading: 'Procedure',
            lead: 'Een herwaardering doorloopt dezelfde stappen als een eerste waardering.',
            slug: 's2-3-2',
          },
        ],
        heading: 'Herwaardering',
        lead: 'Als het werk structureel verandert, kan een functie opnieuw worden gewaardeerd.',
        slug: 's2-3',
      },
    ],
    heading: 'Vaststellen en waarderen van functies',
    lead: 'Iedere functie binnen de organisatie krijgt een functiebeschrijving en een waardering.',
    slug: 's2',
  },
  {
    body: 'Een toelage is altijd tijdelijk en wordt schriftelijk toegekend door het bevoegd gezag. Toelagen tellen niet mee voor de pensioengrondslag, tenzij anders bepaald.',
    children: [
      {
        body: 'De hoogte hangt af van het beoordelingsresultaat en is maximaal tien procent van het jaarsalaris. De toelage wordt jaarlijks opnieuw beoordeeld.',
        heading: 'Functioneringstoelage',
        lead: 'Medewerkers die structureel uitzonderlijk presteren, kunnen in aanmerking komen voor een functioneringstoelage.',
        slug: 's3-1',
      },
      {
        body: 'De toelage wordt toegekend voor een periode van maximaal drie jaar. Daarna vervalt de toelage, tenzij de krapte op de markt voortduurt.',
        heading: 'Arbeidsmarkttoelage',
        lead: 'Voor functies die lastig te vervullen zijn, kan tijdelijk een arbeidsmarkttoelage worden toegekend.',
        slug: 's3-2',
      },
    ],
    heading: 'Salaristoelagen',
    lead: 'Bovenop het reguliere salaris kunnen verschillende toelagen worden toegekend.',
    slug: 's3',
  },
  {
    body: 'Denk aan reiskosten, thuiswerkvergoeding en een vergoeding voor representatiekosten. Declaraties moeten binnen drie maanden worden ingediend via het personeelssysteem.',
    heading: 'Vergoedingen',
    lead: 'Naast het salaris kent de gemeente vergoedingen toe voor kosten die met het werk samenhangen.',
    slug: 's4',
  },
]

export const findAncestors = (slug: string, list: Array<HandbookPage> = pages): Array<string> | undefined => {
  for (const page of list) {
    if (page.slug === slug) {
      return []
    }
    if (page.children) {
      const trail = findAncestors(slug, page.children)
      if (trail !== undefined) {
        return [page.slug, ...trail]
      }
    }
  }
  return undefined
}

export const findPage = (slug: string, list: Array<HandbookPage> = pages): HandbookPage | undefined => {
  for (const page of list) {
    if (page.slug === slug) {
      return page
    }
    if (page.children) {
      const found = findPage(slug, page.children)
      if (found) {
        return found
      }
    }
  }
  return undefined
}
