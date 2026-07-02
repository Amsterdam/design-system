/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Accordion } from '@amsterdam/design-system-react/src'

import { exampleAccordionHeading, exampleParagraph } from '#storybook/_common/exampleContent'

const meta = {
  title: 'Components/Containers/Accordion',
  component: Accordion.Section,
  decorators: [
    (Story) => (
      <Accordion headingLevel={3}>
        <Story />
      </Accordion>
    ),
  ],
} satisfies Meta<typeof Accordion.Section>

export default meta

type Story = StoryObj<typeof meta>

export const Section: Story = {
  args: {
    children: <Paragraph>{exampleParagraph()}</Paragraph>,
    label: exampleAccordionHeading(),
  },
}
