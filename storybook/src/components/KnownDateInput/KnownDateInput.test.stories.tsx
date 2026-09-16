/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldSet, Label, TextInput } from '@amsterdam/design-system-react'
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
   * A generated matrix would be empty: the group takes only the fields composed inside it, and its one
   * choice sits on KnownDateInput.Field. What is worth a picture is the width of each field, the invalid
   * state of the inputs, the wrap onto a second row, and the author-set `size` the group leaves alone —
   * none of which show up until a group holds labelled Text Inputs.
   */
  render: () => (
    <div className="_ams-tests-stack">
      <FieldSet legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Field>
            <Label htmlFor="test-1" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-1" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field>
            <Label htmlFor="test-2" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-2" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field wide>
            <Label htmlFor="test-3" inFieldSet>
              Jaar
            </Label>
            <TextInput defaultValue={2000} id="test-3" inputMode="numeric" />
          </KnownDateInput.Field>
        </KnownDateInput>
      </FieldSet>
      <FieldSet invalid legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Field>
            <Label htmlFor="test-4" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-4" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field>
            <Label htmlFor="test-5" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-5" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field wide>
            <Label htmlFor="test-6" inFieldSet>
              Jaar
            </Label>
            <TextInput id="test-6" inputMode="numeric" invalid />
          </KnownDateInput.Field>
        </KnownDateInput>
      </FieldSet>
      {/* Too narrow for three fields side by side, so the year drops onto a second row. */}
      <div style={{ maxInlineSize: '14rem' }}>
        <FieldSet legend="Wanneer ben je geboren?">
          <KnownDateInput>
            <KnownDateInput.Field>
              <Label htmlFor="test-7" inFieldSet>
                Dag
              </Label>
              <TextInput defaultValue={16} id="test-7" inputMode="numeric" />
            </KnownDateInput.Field>
            <KnownDateInput.Field>
              <Label htmlFor="test-8" inFieldSet>
                Maand
              </Label>
              <TextInput defaultValue={8} id="test-8" inputMode="numeric" />
            </KnownDateInput.Field>
            <KnownDateInput.Field wide>
              <Label htmlFor="test-9" inFieldSet>
                Jaar
              </Label>
              <TextInput defaultValue={2000} id="test-9" inputMode="numeric" />
            </KnownDateInput.Field>
          </KnownDateInput>
        </FieldSet>
      </div>
      {/* The last field sets `size` itself, which the group leaves in charge of the width. */}
      <FieldSet legend="Wanneer ben je geboren?">
        <KnownDateInput>
          <KnownDateInput.Field>
            <Label htmlFor="test-10" inFieldSet>
              Dag
            </Label>
            <TextInput defaultValue={16} id="test-10" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field>
            <Label htmlFor="test-11" inFieldSet>
              Maand
            </Label>
            <TextInput defaultValue={8} id="test-11" inputMode="numeric" />
          </KnownDateInput.Field>
          <KnownDateInput.Field wide>
            <Label htmlFor="test-12" inFieldSet>
              Jaar
            </Label>
            <TextInput defaultValue={2000} id="test-12" inputMode="numeric" size={12} />
          </KnownDateInput.Field>
        </KnownDateInput>
      </FieldSet>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
