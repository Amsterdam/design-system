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

const variants = ['primary', 'secondary', 'tertiary']
const states = ['default', 'disabled', 'hover', 'icon']

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

    for (const variant of variants) {
      for (const state of states) {
        const variantState = `${variant}-${state}`

        if (state === 'disabled') {
          const element = await canvas.findByTestId(variantState)
          await expect(element).toBeDisabled()
        } else {
          await userEvent.click(await canvas.findByTestId(variantState))
          await expect(args.onClick).toHaveBeenCalledWith({ variantState })
        }
      }
    }
  },
  render: (args) => (
    <table>
      <tbody>
        {variants.map((variant) => (
          <tr key={variant}>
            {states.map((state) => {
              const variantState = `${variant}-${state}`

              return (
                <td key={variantState}>
                  <Button
                    className={state === 'hover' ? 'hover' : undefined}
                    data-testid={variantState}
                    disabled={state === 'disabled'}
                    icon={state === 'icon' ? <CloseIcon /> : undefined}
                    // @ts-expect-error: We can pass arguments to the fn function from storybook/test. Only the typing gets wrong as we need to pass it via the args of the story.
                    // The component onClick only accepts a MouseEventHandler without arguments.
                    onClick={() => args.onClick({ variantState })}
                    variant={variant as ButtonProps['variant']}
                  >
                    {variantState}
                  </Button>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  tags: ['!dev', '!autodocs'],
}
