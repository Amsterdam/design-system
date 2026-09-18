/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Column } from '@amsterdam/design-system-react'
import {
  formatCharacterCountOverLimitTextAr,
  formatCharacterCountOverLimitTextDe,
  formatCharacterCountOverLimitTextEn,
  formatCharacterCountOverLimitTextFr,
  formatCharacterCountOverLimitTextNl,
  formatCharacterCountOverLimitTextTr,
  formatCharacterCountTextAr,
  formatCharacterCountTextDe,
  formatCharacterCountTextEn,
  formatCharacterCountTextFr,
  formatCharacterCountTextNl,
  formatCharacterCountTextTr,
  FormFieldStatus,
} from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Form Field Status',
  component: FormFieldStatus,
  subcomponents: {
    'FormFieldStatus.CharacterCount': FormFieldStatus.CharacterCount,
  },
} satisfies Meta<typeof FormFieldStatus>

export default meta

type Story = StoryObj<typeof meta>

type ComposedProps = {
  length: number
  maxLength: number
} & Readonly<ComponentProps<typeof FormFieldStatus>>

type ComposedStory = StoryObj<ComposedProps>

export const Default: ComposedStory = {
  args: {
    length: 7,
    maxLength: 10,
  },
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the container, not those of the parts. Hence the descriptions below.
  argTypes: {
    length: {
      control: { min: 0, type: 'number' },
      description: 'The current length of the field’s value in this example.',
    },
    maxLength: {
      control: { min: 0, type: 'number' },
      description: 'The maximum length of the field’s value in this example.',
    },
  },
  render: ({ length, maxLength, ...args }) => (
    <FormFieldStatus {...args}>
      <FormFieldStatus.CharacterCount length={length} maxLength={maxLength} />
    </FormFieldStatus>
  ),
}

export const OverLimit: ComposedStory = {
  ...Default,
  args: {
    length: 1005,
    maxLength: 1000,
  },
}

export const StatusText: Story = {
  render: (args) => <FormFieldStatus {...args}>Je wachtwoord is sterk genoeg.</FormFieldStatus>,
}

export const Translated: Story = {
  render: (args) => (
    <Column>
      <FormFieldStatus {...args} dir="rtl" lang="ar">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextAr}
          formatText={formatCharacterCountTextAr}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="de">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextDe}
          formatText={formatCharacterCountTextDe}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="en">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextEn}
          formatText={formatCharacterCountTextEn}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="fr">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextFr}
          formatText={formatCharacterCountTextFr}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="nl">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextNl}
          formatText={formatCharacterCountTextNl}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
      <FormFieldStatus {...args} lang="tr">
        <FormFieldStatus.CharacterCount
          formatOverLimitText={formatCharacterCountOverLimitTextTr}
          formatText={formatCharacterCountTextTr}
          length={15}
          maxLength={10}
        />
      </FormFieldStatus>
    </Column>
  ),
}
