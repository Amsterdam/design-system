/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { IconButtonProps, IconProps } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { IconButton } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

const meta = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  args: {
    disabled: false,
    label: 'Sluiten',
    size: undefined,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    size: {
      control: {
        labels: { undefined: 'default' },
        type: 'select',
      },
      options: [undefined, ...iconSizes],
    },
    svg: {
      control: {
        type: 'select',
      },
      mapping: Icons,
      options: Object.keys(Icons),
    },
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const ContrastColour: Story = {
  args: {
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}

const sizes: IconProps['size'][] = [
  'heading-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'large',
  'small',
]

const variants = ['default', 'disabled', 'hovered', 'contrast', 'inverse']
const colorVariants = ['contrast', 'inverse']

export const TestCases: Story = {
  args: {
    label: 'Sluiten',
    onClick: fn(),
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    pseudo: {
      hover: '.hover',
    },
  },
  play: async ({ args, canvas, userEvent }) => {
    expect(args.onClick).not.toHaveBeenCalled()

    for (const size of sizes) {
      for (const variant of variants) {
        const variantSize = `${variant}-${size}`

        if (variant === 'disabled') {
          const element = await canvas.findByTestId(variantSize)
          await expect(element).toBeDisabled()
        } else {
          await userEvent.click(await canvas.findByTestId(variantSize))
          await expect(args.onClick).toHaveBeenCalledWith({ variantSize })
        }
      }
    }
  },
  render: (args) => (
    <table>
      <tbody>
        {sizes.map((size) => (
          <tr key={size}>
            {variants.map((variant) => {
              const variantSize = `${variant}-${size}`

              return (
                <td key={`${variant}-${size}`}>
                  <IconButton
                    {...args}
                    className={variant === 'hovered' ? 'hover' : undefined}
                    color={colorVariants.includes(variant) ? (variant as IconButtonProps['color']) : undefined}
                    data-testid={variantSize}
                    disabled={variant === 'disabled'}
                    // @ts-expect-error: We can pass arguments to the fn function from storybook/test. Only the typing gets wrong as we need to pass it via the args of the story.
                    // The component onClick only accepts a MouseEventHandler without arguments.
                    onClick={() => args.onClick?.({ variantSize })}
                    size={size}
                    svg={Icons.CloseIcon}
                  />
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
