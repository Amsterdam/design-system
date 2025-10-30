/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldSet } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as fieldSetMeta } from './FieldSet.stories'

const meta = {
  ...fieldSetMeta,
  title: 'Components/Forms/Field Set',
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    getVariants({
      component: FieldSet,
      args,
      children: (
        <div>
          <label htmlFor="input-a1">Voornaam</label>
          <input id="input-a1" value="Yassine" />
        </div>
      ),
    }),
  tags: ['!dev', '!autodocs'],
}
