/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.Footer,
  decorators: [
    (Story) => (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
            <Table.HeaderCell>Inwoners</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>West</Table.Cell>
            <Table.Cell>166.000</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Story />
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Footer: Story = {
  args: {
    children: (
      <Table.Row>
        <Table.Cell>Totaal</Table.Cell>
        <Table.Cell>934.000</Table.Cell>
      </Table.Row>
    ),
  },
}
