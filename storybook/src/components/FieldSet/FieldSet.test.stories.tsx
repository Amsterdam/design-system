/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldSet } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as fieldSetMeta } from './FieldSet.stories'

const meta = {
  ...fieldSetMeta,
  title: 'Components/Forms/Field Set',
} satisfies Meta<typeof FieldSet>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: (
      // The label names the input, which Chromatic needs, and wraps it so that no id repeats across the variants.
      <div>
        <label>
          Voornaam
          <input readOnly value="Yassine" />
        </label>
      </div>
    ),
  },
  render: (args, context) => renderComponentVariants(FieldSet, { args, variants: ['disabled'] }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
