/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

import { exampleParagraph, exampleUnorderedList } from '../shared/exampleContent'

const paragraphs = Array.from({ length: 5 }, () => exampleParagraph())

const unorderedList1 = exampleUnorderedList()
  .slice(0, 3)
  .map((text) => <UnorderedList.Item key={text}>{text}</UnorderedList.Item>)
const unorderedList2 = exampleUnorderedList()
  .slice(0, 2)
  .map((text) => <UnorderedList.Item key={text}>{text}</UnorderedList.Item>)

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList,
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0} status="completed">
        <UnorderedList>{unorderedList1}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1} status="current">
        <Paragraph className="ams-mb-m">{paragraphs[0]}</Paragraph>
        <UnorderedList>{unorderedList2}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[1]}</Paragraph>
      </ProgressList.Step>,
    ],
    headingLevel: 3,
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSubSteps: Story = {
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0} status="completed">
        <UnorderedList>{unorderedList1}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step hasSubSteps heading="2026" key={1} status="current">
        <Paragraph>{paragraphs[0]}</Paragraph>
        <ProgressList.SubSteps>
          <ProgressList.SubStep status="completed">
            <Paragraph>{paragraphs[1]}</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep status="current">
            <Paragraph>{paragraphs[2]}</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>{paragraphs[3]}</Paragraph>
          </ProgressList.SubStep>
        </ProgressList.SubSteps>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[4]}</Paragraph>
      </ProgressList.Step>,
    ],
  },
}

// Source: https://www.amsterdam.nl/projecten/oranje-loper/#PagCls_17572563
export const ConstructionProject: Story = {
  args: {
    children: [
      <ProgressList.Step heading="2020" key={0} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start participatie inrichting</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2021" key={1} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Start herinrichting Nieuwezijds Voorburgwal Zuid</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerp en geld Nieuwezijds Voorburgwal Noord</UnorderedList.Item>
          <UnorderedList.Item>Besluitvorming over ontwerpen en geld bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>
            Voorbereidend werk bruggen Raadhuisstraat – Mercatorplein (hulpbruggen en kabels en leidingen)
          </UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2022" key={2} status="completed">
        <UnorderedList>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Zuid klaar</UnorderedList.Item>
          <UnorderedList.Item>Herinrichting Nieuwezijds Voorburgwal Noord begint</UnorderedList.Item>
          <UnorderedList.Item>Raadhuisstraat – Rozengracht: werk aan kabels en leidingen</UnorderedList.Item>
          <UnorderedList.Item>De Clercqstraat: start vernieuwing brug 108, Da Costagracht</UnorderedList.Item>
          <UnorderedList.Item>Bevestiging kunst en afbouw hulpbruggen</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2023 – april 2024" key={3} status="completed">
        <UnorderedList>
          <UnorderedList.Item>
            Uitwerken aangepaste opgave door hoge inflatie en stijgende kosten. Ook blijkt uit nieuw onderzoek dat het
            vernieuwen van 7 bruggen niet nodig is. Deze bruggen gaan we herstellen
          </UnorderedList.Item>
          <UnorderedList.Item>Maken van nieuwe ontwerpen bruggen en straten</UnorderedList.Item>
          <UnorderedList.Item>Participatie over de inrichting van de servicestroken op de stoep</UnorderedList.Item>
          <UnorderedList.Item>December 2023: herinrichting Nieuwezijds Voorburgwal Noord klaar</UnorderedList.Item>
          <UnorderedList.Item>24 april 2024: gemeenteraad akkoord met aangepaste opgave</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step hasSubSteps heading="Mei 2024 – 2028" key={4} status="current">
        <ProgressList.SubSteps>
          <ProgressList.SubStep status="current">
            <Paragraph>
              Mei 2024 – zomer 2025: herinrichting kruispunt Admiraal de Ruijterweg/Jan Evertsenstraat
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Mei 2024 – oktober 2025: herinrichting kruispunt Marnixstraat/ Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>September 2024 – februari 2025: aanbrengen verbeteringen de De Clercqstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              September 2024 – eind 2025: herstellen brug 135 over de Bilderdijkgracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>September 2024 – zomer 2026: herstellen brug 167 over de Singelgracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Oktober 2024 – in 2028: vernieuwen brug over de Lijnbaansgracht en stukje Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Begin 2025 – voorjaar 2026: aanbrengen verbeteringen Jan Evertsenstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              Begin 2025 – eind 2025: herstellen brug over de Admiralengracht (met verwijderen hulpbrug)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              Februari 2025 – zomer 2026: herstellen bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Februari 2025 – najaar 2026: aanbrengen verbeteringen Raadhuisstraat</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Februari 2025 – voorjaar 2026: aanbrengen verbeteringen Rozengracht</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>Oktober 2025 – voorjaar 2027: herinrichting Westermarkt</Paragraph>
          </ProgressList.SubStep>
          <ProgressList.SubStep>
            <Paragraph>
              In 2027: verwijderen hulpbruggen naast de bruggen over het Singel (brug 8), de Herengracht (brug 22),
              Keizersgracht (brug 106) en Prinsengracht (brug 63)
            </Paragraph>
          </ProgressList.SubStep>
        </ProgressList.SubSteps>
      </ProgressList.Step>,
    ],
  },
  decorators: [
    (Story) => (
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading className="ams-mb-s" level={2}>
            Wanneer
          </Heading>
          <Paragraph className="ams-mb-xl">We verwachten het hele project in 2029 af te ronden.</Paragraph>
          <Story />
        </Grid.Cell>
      </Grid>
    ),
  ],
}
