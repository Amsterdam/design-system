/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TableOfContents } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Table of Contents',
  component: TableOfContents.List,
  decorators: [
    (Story) => (
      <TableOfContents heading="Op deze pagina">
        <Story />
      </TableOfContents>
    ),
  ],
} satisfies Meta<typeof TableOfContents.List>

export default meta

type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    children: [
      <TableOfContents.Link href="#wanneer-toepassen" key="1" label="Wanneer toepassen" />,
      <TableOfContents.Link href="#hoe-toepassen" key="2" label="Hoe toepassen" />,
      <TableOfContents.Link href="#voorbeelden" key="3" label="Voorbeelden" />,
    ],
  },
}
