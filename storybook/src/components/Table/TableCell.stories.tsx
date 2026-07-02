/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.Cell,
  argTypes: {
    align: {
      control: {
        labels: { undefined: 'start (default)' },
        type: 'radio',
      },
      options: [undefined, 'center', 'end'],
    },
    children: {
      control: 'text',
      description: 'The content of the cell.',
      table: { disable: false },
    },
  },
  decorators: [
    (Story) => (
      <Table style={{ minInlineSize: '16rem' }}>
        <Table.Body>
          <Table.Row>
            <Story />
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  ],
} satisfies Meta<typeof Table.Cell>

export default meta

type Story = StoryObj<typeof meta>

export const Cell: Story = {
  args: {
    children: '€ 77,85',
  },
}
