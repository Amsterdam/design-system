/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, ErrorMessage, FieldSet, Paragraph } from '@aram-limpens/design-system-react'
import { Radio } from '@aram-limpens/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'
import CustomIcon from './CustomIcon'

const meta = {
  title: 'Components/Forms/Radio',
  component: Radio,
  args: {
    checked: false,
    children: 'Radio label',
    disabled: false,
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
    icon: {
      table: { disable: true },
    },
    invalid: {
      description: 'Whether the value fails a validation rule.',
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

    return <Radio onClick={handleClick} {...args} />
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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
  },
  render: ({ invalid }) => (
    <FieldSet
      aria-describedby={`description1${invalid ? ' error1' : ''}`}
      invalid={invalid}
      legend="Waar gaat uw melding over?"
      role="radiogroup"
    >
      <Paragraph className="ams-mb-s" id="description1" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && (
        <ErrorMessage className="ams-mb-s" id="error1">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Radio invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={invalid} name="about" value="anders">
          Iets anders
        </Radio>
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
  },
  render: ({ invalid }) => (
    <FieldSet
      aria-describedby={`description2${invalid ? ' error2' : ''}`}
      invalid={invalid}
      legend="Waar gaat uw melding over?"
      role="radiogroup"
    >
      <Paragraph className="ams-mb-s" id="description2" size="small">
        De laatstgenoemde melding.
      </Paragraph>
      {invalid && (
        <ErrorMessage className="ams-mb-s" id="error2">
          Geef aan waar uw laatstgenoemde melding over gaat.
        </ErrorMessage>
      )}
      <Column gap="x-small">
        <Radio invalid={invalid} name="about" value="horeca">
          Horecabedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="ander_bedrijf">
          Ander soort bedrijf
        </Radio>
        <Radio invalid={invalid} name="about" value="evenement">
          Evenement
        </Radio>
        <Radio invalid={invalid} name="about" value="anders">
          Iets anders
        </Radio>
      </Column>
    </FieldSet>
  ),
}

export const WithCustomIcon: Story = {
  args: {
    icon: <CustomIcon />,
  },
}
