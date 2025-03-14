/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { generateAspectRatioClass } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'
import { Meta, StoryObj } from '@storybook/react'
import clsx from 'clsx'
import { AspectRatio } from './AspectRatio'

const meta = {
  title: 'Utilities/CSS/Aspect Ratio',
  component: AspectRatio,
  args: {
    aspectRatio: '16:9',
  },
  argTypes: {
    aspectRatio: {
      control: 'radio',
      options: aspectRatioOptions,
    },
  },
  render: ({ aspectRatio }) => (
    <div className="ams-docs-column ams-docs-aspect-ratio">
      <div className={clsx('ams-docs-item', generateAspectRatioClass(aspectRatio))}></div>
    </div>
  ),
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
