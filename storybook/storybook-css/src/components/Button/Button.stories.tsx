/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta = {
  title: 'CSS Library/Button',
  component: Button,
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--primary-action" type="button">Primary</button>',
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--secondary-action amsterdam-button--secondary" type="button">Secondary</button>',
      },
    },
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<button class="utrecht-button utrecht-button--subtle" type="button">Tertiary</button>',
      },
    },
  },
}
