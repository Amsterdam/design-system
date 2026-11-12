/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Table } from '@amsterdam/design-system-react/src'

import { childrenArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Containers/Table',
  component: Table.SortableHeaderCell,
  argTypes: {
    align: {
      control: {
        labels: { undefined: 'start (default)' },
        type: 'radio',
      },
      options: [undefined, 'center', 'end'],
    },
    children: childrenArgType('The text for the column header.'),
    sortDirection: {
      control: { type: 'radio' },
      options: ['ascending', 'descending', 'none'],
    },
  },
  decorators: [
    // A second sortable column shows the contrast between the sorted column and the ones beside it.
    (Story) => (
      <Table style={{ minInlineSize: '24rem' }}>
        <Table.Header>
          <Table.Row>
            <Story />
            <Table.SortableHeaderCell align="end" href="?sort=inwoners-desc" scope="col">
              Inwoners
            </Table.SortableHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>West</Table.Cell>
            <Table.Cell align="end">149.000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  ],
  tags: ['!manifest'],
} satisfies Meta<typeof Table.SortableHeaderCell>

export default meta

type Story = StoryObj<typeof meta>

export const SortableHeaderCell: Story = {
  args: {
    children: 'Stadsdeel',
    href: '?sort=stadsdeel-desc',
    scope: 'col',
    sortDirection: 'ascending',
  },
}
