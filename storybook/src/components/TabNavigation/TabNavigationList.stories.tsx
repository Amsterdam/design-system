/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TabNavigation } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigation.List,
  decorators: [
    (Story) => (
      <TabNavigation>
        <Story />
      </TabNavigation>
    ),
  ],
} satisfies Meta<typeof TabNavigation.List>

export default meta

type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    children: [
      <TabNavigation.Link aria-current="page" href="#" key="gegevens">
        Gegevens
      </TabNavigation.Link>,
      <TabNavigation.Link href="#" key="aanslagen">
        Aanslagen
      </TabNavigation.Link>,
      <TabNavigation.Link href="#" key="documenten">
        Documenten
      </TabNavigation.Link>,
    ],
  },
}
