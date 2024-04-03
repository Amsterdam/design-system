/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormLabel, Switch } from '@amsterdam/design-system-react/src'
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
    onChange: { action: 'clicked', table: { disable: true } },
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

export const Default: Story = {
  args: {
    'aria-label': 'Default',
  },
}

export const WithLabel: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
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
        <FormLabel htmlFor="switch-with-label">Label</FormLabel>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>
    )
  },
}
