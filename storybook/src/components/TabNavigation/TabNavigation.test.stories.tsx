/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocumentsIcon } from '@amsterdam/design-system-react-icons'
import { TabNavigation } from '@amsterdam/design-system-react/src'

import { default as tabNavigationMeta } from './TabNavigation.stories'

const meta = {
  ...tabNavigationMeta,
  title: 'Components/Navigation/Tab Navigation',
} satisfies Meta<typeof TabNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-grid">
      <TabNavigation>
        <TabNavigation.List>
          <TabNavigation.Link aria-current="page" href="#">
            Gegevens
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Aanslagen</TabNavigation.Link>
          <TabNavigation.Link href="#" icon={DocumentsIcon}>
            Documenten
          </TabNavigation.Link>
          <TabNavigation.Link className="hover" href="#">
            Acties
          </TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
      <TabNavigation orientation="vertical">
        <TabNavigation.List>
          <TabNavigation.Link aria-current="page" href="#">
            Gegevens
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Aanslagen</TabNavigation.Link>
          <TabNavigation.Link href="#" icon={DocumentsIcon}>
            Documenten
          </TabNavigation.Link>
          <TabNavigation.Link className="hover" href="#">
            Acties
          </TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
