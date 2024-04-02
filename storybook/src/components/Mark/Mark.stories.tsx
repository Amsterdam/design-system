/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Mark, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Text/Mark',
  component: Mark,
  args: {
    children: 'Nieuw component',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof Mark>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Wat vinden Amsterdammers belangrijk?',
  },
  render: ({ children }) => (
    <Paragraph>
      Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe we
      de stad beter schoonhouden. <Mark>{children}</Mark> Welke oplossingen zien zij? Hier zijn we benieuwd naar. Want
      elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze afvalexperts leren.
    </Paragraph>
  ),
}
