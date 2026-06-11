/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList.Description,
  decorators: [
    (Story) => (
      <DescriptionList>
        <DescriptionList.Term>Afdeling</DescriptionList.Term>
        <Story />
      </DescriptionList>
    ),
  ],
} satisfies Meta<typeof DescriptionList.Description>

export default meta

type Story = StoryObj<typeof meta>

export const Description: Story = {
  args: {
    children: 'Openbare ruimte en groen',
  },
}
