/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.HeaderCell,
  argTypes: {
    align: {
      control: {
        labels: { undefined: 'start (default)' },
        type: 'radio',
      },
      options: [undefined, 'center', 'end'],
    },
    children: childrenArgType('The text for the column header.'),
  },
  decorators: [
    (Story) => (
      <Table style={{ minInlineSize: '16rem' }}>
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
