/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, ErrorMessage, FieldSet, Paragraph } from '@amsterdam/design-system-react'
import { Checkbox } from '@amsterdam/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

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
    checked: {
      description: 'Whether the control is checked.',
    },
    children: {
      description: 'The text for the label.',
      table: { disable: false },
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    onChange: {
      action: 'clicked',
      table: { disable: true },
    },
  },
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleClick = (event: any) => {
      setArgs({ checked: event.target.checked })
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
      id="fieldset1"
      aria-labelledby={`fieldset1 description1${invalid ? ' error1' : ''}`}
      invalid={invalid}
      legend="Waar gaat uw melding over?"
    >
      <Paragraph id="description1" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && (
        <ErrorMessage id="error1" className="ams-mb--sm">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Checkbox name="about" invalid={invalid} value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="evenement">
          Evenement
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="anders">
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
      id="fieldset2"
      aria-labelledby={`fieldset2 description2${invalid ? ' error2' : ''}`}
      invalid={invalid}
      legend="Waar gaat uw melding over?"
    >
      <Paragraph id="description2" className="ams-mb--sm" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && (
        <ErrorMessage id="error2" className="ams-mb--sm">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="extra-small">
        <Checkbox name="about" invalid={invalid} value="horeca">
          Horecabedrijf
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="ander_bedrijf">
          Ander soort bedrijf
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="evenement">
          Evenement
        </Checkbox>
        <Checkbox name="about" invalid={invalid} value="anders">
          Iets anders
        </Checkbox>
      </Column>
    </FieldSet>
  ),
}
