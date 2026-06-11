/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.HeaderCell,
  argTypes: {
    align: {
      control: {
        labels: { undefined: 'start' },
        type: 'radio',
      },
      options: [undefined, 'center', 'end'],
    },
  },
  decorators: [
    (Story) => (
      <Table>
        <Table.Header>
          <Table.Row>
            <Story />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>West</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.HeaderCell>

export default meta

type Story = StoryObj<typeof meta>

export const HeaderCell: Story = {
  args: {
    children: 'Stadsdeel',
  },
}
