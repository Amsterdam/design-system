/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Heading, Metadata, Paragraph } from '@amsterdam/design-system-react'
import { Mark } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'
import { maximiseInlineSize } from '#storybook/_common/decorators'

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
  // Only this story renders a single Mark whose text the control drives – the other story writes its highlights out.
  argTypes: {
    children: childrenArgType('The text to mark.'),
  },
  render: ({ children }) => (
    <Paragraph>
      Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we
      de stad beter schoonhouden. <Mark>{children}</Mark> Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want
      elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.
    </Paragraph>
  ),
}

export const SearchResults = {
  decorators: [maximiseInlineSize('7-of-12-columns')],
  render: () => (
    <Card>
      <Card.HeadingGroup>
        <Heading level={2} size="level-4">
          <Card.Link href="#">
            <Mark>Vergunning</Mark> vechtsportevenementen
          </Card.Link>
        </Heading>
        {/* The category is a label rather than text the search matched, so the word in it stays unmarked. */}
        <Metadata size="small">Vergunningen</Metadata>
      </Card.HeadingGroup>
      <Paragraph className="ams-mb-xs">
        Voor de organisatie van grootschalige vechtsportgala’s in Amsterdam moet u een <Mark>vergunning</Mark> aanvragen
        bij de gemeente. Vooraf moet u een Bibobformulier …
      </Paragraph>
      <Metadata size="small">
        <time dateTime="2023-08-03">3 augustus 2023</time>
      </Metadata>
    </Card>
  ),
}
