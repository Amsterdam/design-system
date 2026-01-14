/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Label } from '@amsterdam/design-system-react'
import { Field } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as fieldMeta } from './Field.stories'

const meta = {
  ...fieldMeta,
  title: 'Components/Forms/Field',
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      // We use Label because `<label>` is inline and wouldn’t get the margin we want to test.
      <Label htmlFor="input-a1" key={1}>
        Wat is uw achternaam?
      </Label>,
      <input id="input-a1" key={2} value="Dijkstra" />,
    ],
  },
  render: (args) =>
    renderComponentVariants(Field, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
