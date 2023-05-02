import { Button, ButtonProps } from '@amsterdam/design-system-react/src'
import type { Meta, StoryContext, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta = {
  title: 'CSS Components/Button',
  id: 'css-button',
  component: Button,
  argTypes: {},
  args: {
    disabled: false,
  },
  tags: ['autodocs'],
} as Meta<typeof Button>

export default meta

export const ButtonPrimary: StoryObj<typeof Button> = {
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

export const ButtonSecondary: StoryObj<typeof Button> = {
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  parameters: {
    ...ButtonPrimary.parameters,
  },
}

export const ButtonTertiary: StoryObj<typeof Button> = {
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
