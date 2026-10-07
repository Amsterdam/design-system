/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorMessage, FieldSet, Paragraph } from '@amsterdam/design-system-react'
import { KnownDateInput } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Known Date Input',
  component: KnownDateInput,
  subcomponents: {
    'KnownDateInput.Day': KnownDateInput.Day,
    'KnownDateInput.Month': KnownDateInput.Month,
    'KnownDateInput.Year': KnownDateInput.Year,
  },
} satisfies Meta<typeof KnownDateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    autoComplete: 'birth-date',
  },
  render: (args) => (
    <KnownDateInput {...args}>
      <KnownDateInput.Day name="dag" />
      <KnownDateInput.Month name="maand" />
      <KnownDateInput.Year name="jaar" />
    </KnownDateInput>
  ),
}

export const InAFieldSet: Story = {
  args: {
    autoComplete: 'birth-date',
  },
  render: (args) => (
    <FieldSet aria-describedby="description-a" legend="Wanneer ben je geboren?">
      <Paragraph id="description-a">Bijvoorbeeld 1 1 2000.</Paragraph>
      <KnownDateInput {...args}>
        <KnownDateInput.Day name="dag" />
        <KnownDateInput.Month name="maand" />
        <KnownDateInput.Year name="jaar" />
      </KnownDateInput>
    </FieldSet>
  ),
}

export const InAFieldSetWithValidation: Story = {
  args: {
    autoComplete: 'birth-date',
  },
  render: (args) => (
    <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph id="description-b">Bijvoorbeeld 1 1 2000.</Paragraph>
      <ErrorMessage id="error-b">Vul een jaar in.</ErrorMessage>
      <KnownDateInput {...args}>
        <KnownDateInput.Day defaultValue={16} name="dag" />
        <KnownDateInput.Month defaultValue={8} name="maand" />
        <KnownDateInput.Year invalid name="jaar" />
      </KnownDateInput>
    </FieldSet>
  ),
}

export const MonthAndYear: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-c" legend="Sinds wanneer woon je op dit adres?">
      <Paragraph id="description-c">Bijvoorbeeld 3 2019 voor maart 2019.</Paragraph>
      <KnownDateInput {...args}>
        <KnownDateInput.Month name="maand" />
        <KnownDateInput.Year name="jaar" />
      </KnownDateInput>
    </FieldSet>
  ),
}

export const Translated: Story = {
  args: {
    autoComplete: 'birth-date',
  },
  parameters: {
    lang: 'en',
  },
  render: (args) => (
    <FieldSet aria-describedby="description-d" legend="What is your date of birth?">
      <Paragraph id="description-d">For example, 12 31 1980.</Paragraph>
      <KnownDateInput {...args}>
        <KnownDateInput.Month label="Month" name="month" />
        <KnownDateInput.Day label="Day" name="day" />
        <KnownDateInput.Year label="Year" name="year" />
      </KnownDateInput>
    </FieldSet>
  ),
}
