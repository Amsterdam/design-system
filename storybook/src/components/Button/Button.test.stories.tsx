/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ButtonProps } from '@amsterdam/design-system-react'
import { CloseIcon } from '@amsterdam/design-system-react-icons'
import { Button } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const variants = ['primary', 'secondary', 'tertiary']
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
        {variants.map((variant) => (
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
