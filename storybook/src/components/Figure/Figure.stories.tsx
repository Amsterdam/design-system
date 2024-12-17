/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Figure } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Figure',
  component: Figure,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof Figure>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
