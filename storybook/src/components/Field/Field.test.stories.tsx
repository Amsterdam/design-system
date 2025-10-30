/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as fieldMeta } from './Field.stories'

const meta = {
  ...fieldMeta,
  title: 'Components/Forms/Field',
} satisfies Meta<typeof Field>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants({
      component: Field,
      args,
      children: [
        <label htmlFor="input2" key={1}>
          Wat is uw achternaam?
        </label>,
        <input id="input2" key={2} value="Dijkstra" />,
      ],
    }),
  tags: ['!dev', '!autodocs'],
}
