import type { ButtonProps } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'

import '@amsterdam/design-system-css/src/button/button.scss'

const HTMLButton = ({ children, disabled, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'amsterdam-button',
        variant === 'primary' && 'amsterdam-button--primary',
        variant === 'secondary' && 'amsterdam-button--secondary',
        variant === 'tertiary' && 'amsterdam-button--tertiary',
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const meta = {
  title: 'CSS Components/Button',
  id: 'css-button',
  component: HTMLButton,
  argTypes: {},
  args: {
    children: 'Click Me!',
    disabled: false,
  },
  tags: ['autodocs'],
} as Meta<typeof HTMLButton>

export default meta

export const ButtonPrimary: StoryObj<typeof HTMLButton> = {
  name: 'Button Primary',
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button>KLIK ME</button>',
      },
    },
  },
}

export const ButtonSecondary: StoryObj<typeof HTMLButton> = {
  name: 'Button Secondary',
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button>KLIK ME</button>',
      },
    },
  },
}

export const ButtonTertiary: StoryObj<typeof HTMLButton> = {
  name: 'Button Tertiary',
  args: {
    variant: 'tertiary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button>KLIK ME</button>',
      },
    },
  },
}
