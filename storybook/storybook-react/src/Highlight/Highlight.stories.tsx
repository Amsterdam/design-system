/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Highlight, PageGrid, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Highlight',
  component: Highlight,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: [
          { color: '#ff9100', title: 'Oranje' },
          { color: '#a00078"', title: 'Paars' },
          { color: '#00a03c', title: 'Groen' },
        ],
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'orange',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 3, span: 8 }} inverseColor>
          Het voormalige Paleis van Justitie aan de Prinsengracht wordt momenteel verbouwd tot luxehotel. De plek waar
          binnenkort de vermogende toerist logeert was eeuwenlang het domein van arme wezen en zware criminelen. In het
          gebouw speelden zich geruchtmakende rechtszaken af.
        </Paragraph>
      </PageGrid>,
    ],
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 3, span: 8 }} inverseColor>
          Het voormalige Paleis van Justitie aan de Prinsengracht wordt momenteel verbouwd tot luxehotel. De plek waar
          binnenkort de vermogende toerist logeert was eeuwenlang het domein van arme wezen en zware criminelen. In het
          gebouw speelden zich geruchtmakende rechtszaken af.
        </Paragraph>
      </PageGrid>,
    ],
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 3, span: 8 }} inverseColor>
          Het voormalige Paleis van Justitie aan de Prinsengracht wordt momenteel verbouwd tot luxehotel. De plek waar
          binnenkort de vermogende toerist logeert was eeuwenlang het domein van arme wezen en zware criminelen. In het
          gebouw speelden zich geruchtmakende rechtszaken af.
        </Paragraph>
      </PageGrid>,
    ],
  },
}
