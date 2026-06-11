/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.Header,
  decorators: [
    (Story) => (
      <Table>
        <Story />
        <Table.Body>
          <Table.Row>
            <Table.Cell>West</Table.Cell>
            <Table.Cell>166.000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.Header>

export default meta

type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: (
      <Table.Row>
        <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
        <Table.HeaderCell>Inwoners</Table.HeaderCell>
      </Table.Row>
    ),
  },
}
