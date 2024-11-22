/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'

const meta = {
  title: 'Utilities/CSS/Aspect Ratio',
  component: AspectRatio,
  args: {
    aspectRatio: 'x-wide',
  },
  argTypes: {
    aspectRatio: {
      control: 'radio',
      options: ['2x-wide', 'x-wide', 'wide', 'square', 'tall', 'x-tall'],
    },
  },
  render: ({ aspectRatio }) => (
    <div className="ams-docs-column ams-docs-aspect-ratio">
      <div className={`ams-docs-item ams-aspect-ratio--${aspectRatio}`}></div>
    </div>
  ),
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
