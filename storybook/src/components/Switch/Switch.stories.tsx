/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Label } from '@aram-limpens/design-system-react'
import { Switch } from '@aram-limpens/design-system-react/src'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: {
      description: 'Whether the control is initially checked.',
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

    return <Switch onClick={handleClick} {...args} />
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  decorators: [
    (Story) => (
      <div style={{ alignItems: 'center', display: 'flex', gap: '5rem' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [, setArgs] = useArgs()

    const handleClick = (event: any) => {
      setArgs({ checked: event.target.checked })
    }

    return (
      <>
        <Label htmlFor="switch-with-label">Label</Label>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>
    )
  },
}
