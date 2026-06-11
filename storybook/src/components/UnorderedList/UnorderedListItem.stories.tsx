/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { UnorderedList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Text/Unordered List',
  component: UnorderedList.Item,
  decorators: [
    (Story) => (
      <UnorderedList>
        <Story />
      </UnorderedList>
    ),
  ],
} satisfies Meta<typeof UnorderedList.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {
  args: {
    children: "Kopie van de pagina's van het huur- of koopcontract waarop uw naam, adres en handtekeningen staan.",
  },
}
