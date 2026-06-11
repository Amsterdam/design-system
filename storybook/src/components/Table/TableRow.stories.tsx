/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.Row,
  decorators: [
    (Story) => (
      <Table>
        <Table.Body>
          <Story />
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.Row>

export default meta

type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    children: [<Table.Cell key="stadsdeel">West</Table.Cell>, <Table.Cell key="inwoners">166.000</Table.Cell>],
  },
}
