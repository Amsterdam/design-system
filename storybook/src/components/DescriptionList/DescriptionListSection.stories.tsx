/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList.Section,
  decorators: [
    (Story) => (
      <DescriptionList>
        <Story />
      </DescriptionList>
    ),
  ],
} satisfies Meta<typeof DescriptionList.Section>

export default meta

type Story = StoryObj<typeof meta>

export const Section: Story = {
  args: {
    children: [
      <DescriptionList.Term key="term">Afdeling</DescriptionList.Term>,
      <DescriptionList.Description key="description">Openbare ruimte en groen</DescriptionList.Description>,
    ],
  },
}
