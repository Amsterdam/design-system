/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.Body,
  decorators: [
    (Story) => (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
            <Table.HeaderCell>Inwoners</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Story />
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.Body>

export default meta

type Story = StoryObj<typeof meta>

export const Body: Story = {
  args: {
    children: [
      <Table.Row key="west">
        <Table.Cell>West</Table.Cell>
        <Table.Cell>166.000</Table.Cell>
      </Table.Row>,
      <Table.Row key="oost">
        <Table.Cell>Oost</Table.Cell>
        <Table.Cell>143.000</Table.Cell>
      </Table.Row>,
    ],
  },
}
