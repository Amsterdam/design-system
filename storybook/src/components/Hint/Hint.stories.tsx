/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, FieldSet, Heading, Label, Paragraph } from '@amsterdam/design-system-react'
import { Hint } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Text/Hint',
  component: Hint,
} satisfies Meta<typeof Hint>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    hint: 'hint',
  },
  render: ({ hint }) => (
    <Column>
      <Label>
        Label <Hint hint={hint} />
      </Label>

      <Label hint={hint}>Labels have a hint prop</Label>

      <FieldSet legend="Field Sets also have a hint prop" hint={hint}></FieldSet>
    </Column>
  ),
}

export const InCopy: Story = {
  args: {
    hint: 'hints inherit styling',
  },
  render: ({ hint }) => (
    <>
      <Heading level={2}>
        Level 2 heading <Hint hint={hint} />
      </Heading>

      <Paragraph>
        It is not recommended to insert a Hint in a Paragraph, but it is possible and it will then also inherit the
        style <Hint hint="hint in a paragraph" />.
      </Paragraph>
    </>
  ),
}
