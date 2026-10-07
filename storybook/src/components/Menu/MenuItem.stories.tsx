/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FolderFillIcon } from '@amsterdam/design-system-react-icons'
import { Menu } from '@amsterdam/design-system-react/src'
import useViewportHasMinWidth from '@amsterdam/design-system-react/src/common/useViewportHasMinWidth'

import { childrenArgType, hrefArgType, linkComponentArgType } from '#storybook/_common/argTypes'
import { iconArgType } from '#storybook/_common/iconArgTypes'

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu.Item,
  argTypes: {
    href: hrefArgType,
    icon: iconArgType('FolderFillIcon'),
    label: childrenArgType('The link text for the top-level item.'),
    linkComponent: linkComponentArgType,
  },
  decorators: [
    // Follows the window like an application does: a Menu with `inWideWindow` is hidden in a narrower one.
    (Story) => {
      const inWideWindow = useViewportHasMinWidth('wide')

      return (
        <Menu collapsible inWideWindow={inWideWindow}>
          <Story />
        </Menu>
      )
    },
  ],
  parameters: {
    themes: {
      options: ['Compact', 'Compact Lo-fi'],
    },
  },
  tags: ['!manifest'],
} satisfies Meta<typeof Menu.Item>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {
  args: {
    children: [
      <Menu.Link href="#" key="Overzicht">
        Overzicht
      </Menu.Link>,
      <Menu.Link href="#" key="Planning">
        Planning
      </Menu.Link>,
      <Menu.Link href="#" key="Team">
        Team
      </Menu.Link>,
    ],
    defaultExpanded: true,
    href: '#',
    icon: <FolderFillIcon />,
    label: 'Projecten',
  },
}
