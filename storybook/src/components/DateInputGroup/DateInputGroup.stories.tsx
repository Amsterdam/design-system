/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { ErrorMessage, FieldSet, Label, Paragraph, TextInput } from '@amsterdam/design-system-react'
import { DateInputGroup } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Forms/Date Input Group',
  component: DateInputGroup,
  subcomponents: {
    'DateInputGroup.Field': DateInputGroup.Field,
  },
} satisfies Meta<typeof DateInputGroup>

export default meta

type DefaultProps = {
  description: string
  legend: string
} & Readonly<ComponentProps<typeof DateInputGroup>>

type DefaultStory = StoryObj<DefaultProps>

type Story = StoryObj<typeof meta>

export const Default: DefaultStory = {
  args: {
    description: 'Bijvoorbeeld 1 1 2000.',
    legend: 'Wanneer ben je geboren?',
  },
  // These args are specific to this composed story, so they have no JSDoc to describe them: the meta
  // provides the props of the group, not those of the Field Set around it. Hence the descriptions below.
  argTypes: {
    description: {
      control: 'text',
      description: 'The description of the Field Set in this example.',
    },
    legend: {
      control: 'text',
      description: 'The legend of the Field Set in this example.',
    },
  },
  render: ({ description, legend, ...args }) => (
    <FieldSet aria-describedby="description-a" legend={legend}>
      <Paragraph id="description-a">{description}</Paragraph>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-a1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" id="input-a1" inputMode="numeric" name="dag" />
        </DateInputGroup.Field>
        <DateInputGroup.Field>
          <Label htmlFor="input-a2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" id="input-a2" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-a3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-a3" inputMode="numeric" name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
  ),
}

export const WithValidation: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-b error-b" invalid legend="Wanneer ben je geboren?">
      <Paragraph id="description-b">Bijvoorbeeld 1 1 2000.</Paragraph>
      <ErrorMessage id="error-b">Vul een jaar in.</ErrorMessage>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-b1" inFieldSet>
            Dag
          </Label>
          <TextInput autoComplete="bday-day" defaultValue={16} id="input-b1" inputMode="numeric" name="dag" />
        </DateInputGroup.Field>
        <DateInputGroup.Field>
          <Label htmlFor="input-b2" inFieldSet>
            Maand
          </Label>
          <TextInput autoComplete="bday-month" defaultValue={8} id="input-b2" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-b3" inFieldSet>
            Jaar
          </Label>
          <TextInput autoComplete="bday-year" id="input-b3" inputMode="numeric" invalid name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
  ),
}

export const MonthAndYear: Story = {
  render: (args) => (
    <FieldSet aria-describedby="description-c" legend="Sinds wanneer woon je op dit adres?">
      <Paragraph id="description-c">Bijvoorbeeld 3 2019.</Paragraph>
      <DateInputGroup {...args}>
        <DateInputGroup.Field>
          <Label htmlFor="input-c1" inFieldSet>
            Maand
          </Label>
          <TextInput id="input-c1" inputMode="numeric" name="maand" />
        </DateInputGroup.Field>
        <DateInputGroup.Field wide>
          <Label htmlFor="input-c2" inFieldSet>
            Jaar
          </Label>
          <TextInput id="input-c2" inputMode="numeric" name="jaar" />
        </DateInputGroup.Field>
      </DateInputGroup>
    </FieldSet>
  ),
}
