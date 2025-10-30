/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as pageHeaderMeta } from './PageHeader.stories'

const meta = {
  ...pageHeaderMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    brandName: 'Data Amsterdam',
    children: (
      <PageHeader.GridCellNarrowWindowOnly span="all">
        <ul>
          <li>English</li>
        </ul>
      </PageHeader.GridCellNarrowWindowOnly>
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
  render: (args) => renderComponentVariants(PageHeader, { args }),
  tags: ['!dev', '!autodocs'],
}
