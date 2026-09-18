/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column } from '@amsterdam/design-system-react'
import {
  formatCharacterCountOverLimitTextAr,
  formatCharacterCountTextAr,
  FormFieldStatus,
} from '@amsterdam/design-system-react/src'

import { default as formFieldStatusMeta } from './FormFieldStatus.stories'

const meta = {
  ...formFieldStatusMeta,
  title: 'Components/Forms/Form Field Status',
} satisfies Meta<typeof FormFieldStatus>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  // Built by hand: the parts are composed as children rather than set through props, and the only
  // props that vary are numbers, which renderComponentVariants resolves no values for.
  render: () => (
    <Column>
      <FormFieldStatus>
        <FormFieldStatus.CharacterCount length={7} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus>
        <FormFieldStatus.CharacterCount length={10} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus>
        <FormFieldStatus.CharacterCount length={11} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus>
        <FormFieldStatus.CharacterCount length={15} maxLength={10} />
      </FormFieldStatus>
      <FormFieldStatus>Je wachtwoord is sterk genoeg.</FormFieldStatus>
      <FormFieldStatus dir="rtl" lang="ar">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextAr}
          formatText={formatCharacterCountTextAr}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
    </Column>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
