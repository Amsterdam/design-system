/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ButtonProps } from '@amsterdam/design-system-react'
import { CloseIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Button } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    icon: undefined,
    iconBefore: false,
    iconOnly: undefined,
    onClick: fn(),
    variant: 'primary',
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
    iconBefore: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
    iconOnly: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
  },
  play: async ({ args, canvas }) => {
    const button = canvas.queryByRole('button')
    button?.click()
    expect(args.onClick).toBeCalled()
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    children: 'Annuleren',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Terug',
    variant: 'tertiary',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
  },
}

export const WithIconBefore: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true,
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary',
  },
}

export const TextWrapping: Story = {
  args: {
    children: 'Vergunningsaanvraag verzenden',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '16rem' }}>
        <Story />
      </div>
    ),
  ],
}

const variants = ['primary', 'secondary', 'tertiary', 'icon']
const rowsToTest = ['default', 'disabled']

export const TestCases: Story = {
  args: {
    onClick: fn(),
  },
  parameters: {
    pseudo: {
      hover: ['.hover'],
    },
  },
  play: async ({ args, canvas, userEvent }) => {
    expect(args.onClick).not.toHaveBeenCalled()

    for (const row of rowsToTest) {
      for (let idx = 0; idx < variants.length; idx++) {
        const variant = variants[idx]
        await userEvent.click(canvas.getByTestId(row === 'default' ? variant : `${row}-${variant}`))
        expect(args.onClick).toHaveReturnedTimes(variant === 'disabled' ? 4 : idx + 1)
      }
    }
  },
  render: (args) => (
    <table>
      <tbody>
        {variants.map((variant) => (
          <tr key={variant}>
            <td>
              <Button
                data-testid={variant}
                onClick={args.onClick}
                {...(variant === 'icon' ? { icon: <CloseIcon /> } : {})}
                variant={variant === 'icon' ? 'primary' : (variant as ButtonProps['variant'])}
              >
                {variant === 'icon' ? 'With Icon' : variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            </td>
            <td>
              <Button
                data-testid={`disabled-${variant}`}
                disabled
                key={`disabled-${variant}`}
                onClick={args.onClick}
                {...(variant === 'icon' ? { icon: <CloseIcon /> } : {})}
                variant={variant === 'icon' ? 'primary' : (variant as ButtonProps['variant'])}
              >
                {variant === 'icon'
                  ? 'With Icon disabled'
                  : `${variant.charAt(0).toUpperCase() + variant.slice(1)} disabled`}
              </Button>
            </td>
            <td>
              <Button
                className="hover"
                key={`hovered-${variant}`}
                {...(variant === 'icon' ? { icon: <CloseIcon /> } : {})}
                variant={variant === 'icon' ? 'primary' : (variant as ButtonProps['variant'])}
              >
                {variant === 'icon'
                  ? 'With Icon hovered'
                  : `${variant.charAt(0).toUpperCase() + variant.slice(1)} hovered`}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  tags: ['!dev', '!autodocs'],
}
