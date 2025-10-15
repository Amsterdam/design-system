/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ButtonProps } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import { Button } from '@amsterdam/design-system-react/src'
import { buttonVariants } from '@amsterdam/design-system-react/src/Button/Button'

import { default as buttonMeta } from './Button.stories'

const meta = {
  ...buttonMeta,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const states = ['default', 'disabled', 'hover', 'icon']

export const Test: Story = {
  parameters: {
    pseudo: {
      hover: ['.hover'],
    },
  },
  render: () => (
    <table>
      <tbody>
        {buttonVariants.map((variant) => (
          <tr key={variant}>
            {states.map((state) => {
              const variantState = `${variant}-${state}`

              return (
                <td key={variantState}>
                  <Button
                    className={state === 'hover' ? 'hover' : undefined}
                    disabled={state === 'disabled'}
                    icon={state === 'icon' ? <CloseIcon /> : undefined}
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
