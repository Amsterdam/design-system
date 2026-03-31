/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TabNavigation } from '@amsterdam/design-system-react/src'

import { cityParts } from '../../_common/exampleContent'

const meta = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigation,
} satisfies Meta<typeof TabNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <TabNavigation.List>
        <TabNavigation.Link aria-current="page" href="#">
          Gegevens
        </TabNavigation.Link>
        <TabNavigation.Link href="#">Aanslagen</TabNavigation.Link>
        <TabNavigation.Link href="#">Documenten</TabNavigation.Link>
        <TabNavigation.Link href="#">Acties</TabNavigation.Link>
      </TabNavigation.List>
    ),
  },
}

export const WithManyLinks: Story = {
  args: {
    children: (
      <TabNavigation.List>
        {cityParts.map((name, index) => (
          <TabNavigation.Link aria-current={index === 0 ? 'page' : undefined} href="#" key={name}>
            {name}
          </TabNavigation.Link>
        ))}
      </TabNavigation.List>
    ),
  },
}
