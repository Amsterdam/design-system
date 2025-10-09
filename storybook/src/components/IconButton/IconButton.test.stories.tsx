/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconButtonProps, IconProps } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons'
import { IconButton } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  args: {
    label: 'Test button',
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

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

export const Test: Story = {
  parameters: {
    pseudo: {
      hover: '.hover',
    },
  },
  render: (args) => (
    <table>
      <tbody>
        {sizes.map((size) => (
          <tr key={size}>
            {variants.map((variant) => (
              <td key={`${variant}-${size}`}>
                <IconButton
                  {...args}
                  className={variant === 'hovered' ? 'hover' : undefined}
                  color={colorVariants.includes(variant) ? (variant as IconButtonProps['color']) : undefined}
                  disabled={variant === 'disabled'}
                  size={size}
                  svg={Icons.CloseIcon}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  tags: ['!dev', '!autodocs'],
}
