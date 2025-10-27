/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconButtonColor } from '@amsterdam/design-system-react/src/IconButton/IconButton'
import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons'
import { IconButton } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import { iconButtonColors } from '@amsterdam/design-system-react/src/IconButton/IconButton'

import { default as iconButtonMeta } from './IconButton.stories'

const meta = { ...iconButtonMeta, title: 'Components/Buttons/Icon Button' } satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

const variants = ['default', 'disabled', 'hovered', ...iconButtonColors]

export const Test: Story = {
  parameters: {
    pseudo: {
      hover: '.hover',
    },
  },
  render: (args) => {
    return (
      <table>
        <tbody>
          {iconSizes.map((size) => (
            <tr key={size}>
              {variants.map((variant) => {
                const isIconButtonColor = (variant: string): variant is IconButtonColor =>
                  iconButtonColors.includes(variant as IconButtonColor)

                return (
                  <td key={`${variant}-${size}`}>
                    <IconButton
                      {...args}
                      className={variant === 'hovered' ? 'hover' : undefined}
                      color={isIconButtonColor(variant) ? variant : undefined}
                      disabled={variant === 'disabled'}
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
    )
  },
  tags: ['!dev', '!autodocs'],
}
