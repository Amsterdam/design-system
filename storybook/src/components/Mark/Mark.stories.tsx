/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Column, Grid, Heading, Paragraph, SearchField } from '@amsterdam/design-system-react'
import { Mark } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Text/Mark',
  component: Mark,
} satisfies Meta<typeof Mark>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Wat vinden Amsterdammers belangrijk?',
  },
  argTypes: {
    children: {
      description: 'The text to mark.',
      table: { disable: false },
    },
  },
  render: ({ children }) => (
    <Paragraph>
      Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we
      de stad beter schoonhouden. <Mark>{children}</Mark> Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want
      elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.
    </Paragraph>
  ),
}

type SearchResult = {
  category: string
  date: Date
  fragment: string
  heading: string
}

const searchResults: SearchResult[] = [
  {
    category: 'Kansspelen',
    date: new Date('2025-10-27'),
    fragment:
      'Op dit moment zijn alle vergunning voor speelautomatenhallen verleend. Als u kansspelautomaten wilt plaatsen in uw horecabedrijf dan heeft u de …',
    heading: 'Vergunning speelautomatenhal of kansspelautomaten aanvragen',
  },
  {
    category: 'Veelgevraagd',
    date: new Date('2024-09-15'),
    fragment:
      'U heeft een ontheffing nodig als u de geldende geluidsgrenzen van uw horecagelegenheid wil overschrijden. Kijk hier hoe het werkt en hoe u de …',
    heading: 'Ontheffing geluidsvoorschriften',
  },
  {
    category: 'Vergunningen',
    date: new Date('2023-08-03'),
    fragment: `Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een vergunning aanvragen bij de gemeente. Vooraf moet u een Bibobformulier …`,
    heading: 'Vergunning vechtsportevenementen',
  },
]

const dateFormat = new Intl.DateTimeFormat('nl', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const mark = (text: string, query: string) => {
  if (!query) return text

  const words = query
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  if (words.length === 0) return text

  const regex = new RegExp(`(${words.join('|')})`, 'gi')
  const parts = text.split(regex)

  return parts.map((part, i) => (part.match(regex) ? <Mark key={i}>{part}</Mark> : part))
}

export const SearchResults = {
  render: () => {
    const query = 'horeca vergunning'

    return (
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
          <SearchField className="ams-mb-m">
            <SearchField.Input label="Zoeken" value={query} />
            <SearchField.Button />
          </SearchField>
          <Paragraph className="ams-mb-xl">
            <strong>{searchResults.length}</strong> artikelen gaan over ‘{query}’.
          </Paragraph>
          <Column gap="x-large">
            {searchResults.map(({ category, date, fragment, heading }) => (
              <Card key={heading}>
                <Card.HeadingGroup tagline={category}>
                  <Heading level={2} size="level-4">
                    <Card.Link href="#">{mark(heading, query)}</Card.Link>
                  </Heading>
                </Card.HeadingGroup>
                <Paragraph className="ams-mb-xs">{mark(fragment, query)}</Paragraph>
                <Paragraph size="small">
                  <time dateTime={date.toISOString()}>{dateFormat.format(date)}</time>
                </Paragraph>
              </Card>
            ))}
          </Column>
        </Grid.Cell>
      </Grid>
    )
  },
}
