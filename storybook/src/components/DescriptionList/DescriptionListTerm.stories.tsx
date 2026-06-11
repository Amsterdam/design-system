/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList.Term,
  decorators: [
    (Story) => (
      <DescriptionList>
        <Story />
        <DescriptionList.Description>Openbare ruimte en groen</DescriptionList.Description>
      </DescriptionList>
    ),
  ],
} satisfies Meta<typeof DescriptionList.Term>

export default meta

type Story = StoryObj<typeof meta>

export const Term: Story = {
  args: {
    children: 'Afdeling',
  },
}
