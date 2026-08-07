/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type SearchResult = {
  readonly date: string
  readonly id: string
  readonly isoDate: string
  readonly section: string
  readonly teaser: string
  readonly title: string
}

export const searchTopics: ReadonlyArray<string> = ['Nieuwsbericht', 'Beleid en regels', 'Product of dienst']

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
