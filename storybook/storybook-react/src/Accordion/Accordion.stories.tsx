/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Accordion, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Containers/Accordion',
  component: Accordion,
  args: {
    headingLevel: 1,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
    section: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
    ],
  },
}

export const ExpandedByDefault: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
    ],
  },
}

export const TooManyLandmarks: Story = {
  args: {
    section: false,
    children: [
      <Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>{exampleParagraph()}</Paragraph>
      </Accordion.Section>,
    ],
  },
}
