/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Column, ErrorMessage, FieldSet, Paragraph } from '@amsterdam/design-system-react'
import { Checkbox } from '@amsterdam/design-system-react/src'
import { useArgs } from 'storybook/preview-api'

import { checkedArgType, childrenArgType, disabledArgType, idArgType } from '#storybook/_common/argTypes'

import CustomIcon from './CustomIcon'

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  args: {
    checked: false,
    children: 'Checkbox label',
    disabled: false,
    indeterminate: false,
    invalid: false,
  },
  argTypes: {
    checked: checkedArgType,
    children: childrenArgType('The text for the label.'),
    disabled: disabledArgType,
    id: idArgType,
    onChange: {
      action: 'changed',
      table: { disable: false },
    },
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleClick = (event: MouseEvent<HTMLInputElement>) => {
      setArgs({ checked: event.currentTarget.checked })
    }

    return <Checkbox onClick={handleClick} {...args} />
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongLabel: Story = {
  args: {
    children:
      'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.',
  },
}

export const InAFieldSet: Story = {
  argTypes: {
    checked: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
    indeterminate: {
      table: { disable: true },
    },
  },
  render: ({ invalid }) => (
    <FieldSet
      aria-labelledby={`fieldset1 description1${invalid ? ' error1' : ''}`}
      id="fieldset1"
      invalid={invalid}
      legend="Waar gaat uw melding over?"
      optional
    >
      <Paragraph id="description1">De laatstgenoemde melding.</Paragraph>
      {invalid && <ErrorMessage id="error1">Geef aan waar uw laatstgenoemde melding over gaat.</ErrorMessage>}
      <Column gap="x-small">
        <Checkbox invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox invalid={invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}

export const InAFieldSetWithValidation: Story = {
  args: {
    invalid: true,
  },
  argTypes: {
    checked: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
    indeterminate: {
      table: { disable: true },
    },
  },
  render: ({ invalid }) => (
    <FieldSet
      aria-labelledby={`fieldset2 description2${invalid ? ' error2' : ''}`}
      id="fieldset2"
      invalid={invalid}
      legend="Waar gaat uw melding over?"
    >
      <Paragraph id="description2">De laatstgenoemde melding.</Paragraph>
      {invalid && <ErrorMessage id="error2">Geef aan waar uw laatstgenoemde melding over gaat.</ErrorMessage>}
      <Column gap="x-small">
        <Checkbox aria-required="true" invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox aria-required="true" invalid={invalid} name="about" value="evenement">
          Evenement
        </Checkbox>
        <Checkbox aria-required="true" invalid={invalid} name="about" value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}

export const WithCustomIcon: Story = {
  args: {
    icon: <CustomIcon />,
  },
}
