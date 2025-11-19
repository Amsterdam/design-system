/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, Paragraph, Row, SearchField } from '@amsterdam/design-system-react'
import {
  ArrowUpIcon,
  DocumentIcon,
  DocumentWithPencilIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
} from '@amsterdam/design-system-react-icons'

import { Layout } from './Layout'
import { TileButton } from './TileButton'

export const ChatAmsterdam = () => (
  <Layout>
    <Grid paddingVertical="large">
      <Grid.Cell
        span={{ narrow: 3, medium: 5, wide: 7 }}
        start={{ narrow: 1, medium: 2, wide: 3 }}
        style={{ display: 'flex' }}
      >
        <div>
          <Heading className="ams-mb-l" level={1}>
            Goedenavond,
            <br />
            <span className="ams-heading--2" style={{ fontWeight: 'normal' }}>
              waar kan ik je mee helpen?
            </span>
          </Heading>
          <Row className="ams-row--tile-buttons">
            <TileButton icon={DocumentIcon} label="Bevraag een tekst" />
            <TileButton icon={QuestionMarkCircleIcon} label="Maak een samenvatting" />
            <TileButton icon={DocumentWithPencilIcon} label="Verbeter een tekst" />
            <TileButton icon={LightBulbIcon} label="Herschrijf een tekst in heldere taal" />
          </Row>
        </div>
      </Grid.Cell>
      <Grid.Cell
        span={{ narrow: 4, medium: 5, wide: 7 }}
        start={{ narrow: 1, medium: 2, wide: 3 }}
        style={{ alignContent: 'end' }}
      >
        <div>
          <Paragraph className="ams-mb-xl">
            Hoewel gemeentelijke organisaties de afgelopen jaren aanzienlijke stappen hebben gezet in het digitaliseren
            van hun dienstverlening, blijft de vraag in hoeverre deze transformatie daadwerkelijk aansluit op de
            diepere, vaak impliciet aanwezige verwachtingen van burgers onderwerp van voortdurende discussie. Dit komt
            mede doordat digitale interacties niet alleen afhankelijk zijn van de technische infrastructuur of de
            toegankelijkheid van afzonderlijke systemen, maar in toenemende mate worden bepaald door de samenhang van
            processen, de begrijpelijkheid van informatie en de mate waarin gebruikers zich herkennen in de logica die
            de dienstverlenende organisatie hanteert. Hierdoor ontstaat een spanningsveld waarin enerzijds wordt
            gestreefd naar efficiencywinst, schaalbaarheid en uniforme uitvoeringsstandaarden, terwijl anderzijds de
            diversiteit aan gebruikersbehoeften en de variabiliteit van individuele gebruikssituaties een veel
            genuanceerdere benadering vereisen.
          </Paragraph>
          <SearchField className="ams-mb-m">
            <SearchField.Input placeholder="Of stel een andere vraag" />
            <SearchField.Button icon={ArrowUpIcon} />
          </SearchField>
          <Paragraph size="small" style={{ color: 'var(--ams-color-text-secondary)', textAlign: 'center' }}>
            ChatAmsterdam is een AI-systeem en kan dus fouten maken. Controleer altijd de antwoorden.
          </Paragraph>
        </div>
      </Grid.Cell>
    </Grid>
  </Layout>
)
