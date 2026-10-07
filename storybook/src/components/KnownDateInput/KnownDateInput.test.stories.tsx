/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldSet } from '@amsterdam/design-system-react'
import { KnownDateInput } from '@amsterdam/design-system-react/src'

import { default as knownDateInputMeta } from './KnownDateInput.stories'

const meta = {
  ...knownDateInputMeta,
  title: 'Components/Forms/Known Date Input',
} satisfies Meta<typeof KnownDateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  /*
   * A generated matrix would show only the container: the fields that carry the widths and the invalid
   * state are composed inside it. What is worth a picture is the width of each field, an invalid input,
   * and the wrap onto a second row.
   */
  render: () => (
    <div className="_ams-tests-stack">
      <FieldSet legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year defaultValue={2000} />
        </KnownDateInput>
      </FieldSet>
      <FieldSet invalid legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year invalid />
        </KnownDateInput>
      </FieldSet>
      {/* Room for a day and a month side by side, but not the year, which drops onto a second row. */}
      <FieldSet
        legend="Wanneer ben je geboren?"
        style={{
          maxInlineSize:
            'calc(2 * var(--ams-known-date-input-input-inline-size) + 2 * var(--ams-known-date-input-column-gap))',
        }}
      >
        <KnownDateInput>
          <KnownDateInput.Day defaultValue={16} />
          <KnownDateInput.Month defaultValue={8} />
          <KnownDateInput.Year defaultValue={2000} />
        </KnownDateInput>
      </FieldSet>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
