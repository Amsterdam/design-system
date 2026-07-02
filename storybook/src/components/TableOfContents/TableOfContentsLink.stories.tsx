/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TableOfContents } from '@amsterdam/design-system-react/src'

import { hrefArgType, linkComponentArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Navigation/Table of Contents',
  component: TableOfContents.Link,
  argTypes: {
    href: hrefArgType,
    linkComponent: linkComponentArgType,
  },
  decorators: [
    (Story) => (
      <TableOfContents heading="Op deze pagina">
        <TableOfContents.List>
          <Story />
        </TableOfContents.List>
      </TableOfContents>
    ),
  ],
  render: ({ ...args }) => <TableOfContents.Link {...args} />,
} satisfies Meta<typeof TableOfContents.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    href: '#wanneer-toepassen',
    label: 'Wanneer toepassen',
  },
}
