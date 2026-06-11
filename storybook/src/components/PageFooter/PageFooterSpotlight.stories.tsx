/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { PageFooter } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter.Spotlight,
  decorators: [
    (Story) => (
      <PageFooter>
        <Story />
      </PageFooter>
    ),
  ],
} satisfies Meta<typeof PageFooter.Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Spotlight: Story = {
  args: {
    children: (
      <>
        <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
          Contact
        </Heading>
        <Paragraph color="inverse">Neem contact op via het contactformulier of bel 14 020.</Paragraph>
      </>
    ),
  },
}
