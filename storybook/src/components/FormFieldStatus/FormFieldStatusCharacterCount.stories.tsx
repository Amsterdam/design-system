/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FormFieldStatus } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Form Field Status',
  component: FormFieldStatus.CharacterCount,
  argTypes: {
    formatOverLimitText: { control: false },
    formatText: { control: false },
    length: { control: { min: 0, type: 'number' } },
    maxLength: { control: { min: 0, type: 'number' } },
  },
  render: (args) => (
    <FormFieldStatus>
      <FormFieldStatus.CharacterCount {...args} />
    </FormFieldStatus>
  ),
  tags: ['!manifest'],
} satisfies Meta<typeof FormFieldStatus.CharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const CharacterCount: Story = {
  args: { length: 7, maxLength: 10 },
}
