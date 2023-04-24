import type { ButtonProps } from '@amsterdam/design-system-react/src'
import type { Meta, StoryContext, StoryObj } from '@storybook/react'
import { HTMLButton } from './HTMLButton'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta = {
  title: 'CSS Components/Button',
  id: 'css-button',
  component: HTMLButton,
  argTypes: {},
  args: {
    disabled: false,
  },
  tags: ['autodocs'],
} as Meta<typeof HTMLButton>

export default meta

export const ButtonPrimary: StoryObj<typeof HTMLButton> = {
  name: 'Button Primary',
  args: {
    children: 'Primary',
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (_: string, storyContext: StoryContext) => {
          return reactToHtmlTransformer(storyContext)
        },
      },
    },
  },
}

export const ButtonSecondary: StoryObj<typeof HTMLButton> = {
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  parameters: {
    ...ButtonPrimary.parameters,
  },
}

export const ButtonTertiary: StoryObj<typeof HTMLButton> = {
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
  parameters: {
    ...ButtonPrimary.parameters,
  },
}

// Simple transformer for current button states
function reactToHtmlTransformer({ args: { variant, children } }: StoryContext<ButtonProps>) {
  return `<button class="amsterdam-button amsterdam-button--${variant}">${children}</button>`
}
