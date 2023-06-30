/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Accordion, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/accordion/accordion.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Accordion',
  component: Accordion.Section,
  args: {
    expanded: false,
    headingLevel: 1,
    label: 'Enkele accordionsectie',
    section: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    expanded: {
      control: { type: 'boolean' },
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
    label: {
      control: { type: 'text' },
    },
    section: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Accordion.Section>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}

export const ComposedAccordion: Story = {
  render: () => (
    <Accordion>
      <Accordion.Section label="Eerste sectie" headingLevel={1}>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Tweede sectie" headingLevel={1}>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Derde sectie" headingLevel={1}>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>
    </Accordion>
  ),
}

export const ExpandedByDefault: Story = {
  args: {
    label: 'Enkele accordionsectie',
    expanded: true,
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}

export const TooManyLandmarks: Story = {
  args: {
    label: 'Enkele accordionsectie',
    section: false,
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}
