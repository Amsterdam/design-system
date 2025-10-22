/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from '@amsterdam/design-system-react/src'

import { default as buttonMeta } from './PageHeader.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    brandName: 'Design System',
    menuItems: [
      <PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
  render: (args) => (
    <div>
      <PageHeader {...args} />
      <PageHeader {...args} logoBrand="ggd-amsterdam">
        <div />
      </PageHeader>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
