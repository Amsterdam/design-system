/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { generateAspectRatioClass } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'
import { clsx } from 'clsx'

import type { AspectRatio } from './AspectRatio'

import { default as aspectRatioMeta } from './AspectRatio.stories'

const meta = {
  ...aspectRatioMeta,
  title: 'Utilities/CSS/Aspect Ratio',
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-grid" style={{ alignItems: 'flex-start' }}>
      {/* A fixed inline size keeps the ratios comparable: the block size comes from the class alone.
          Aligning to the start stops the row from stretching every container to the tallest ratio. */}
      {aspectRatioOptions.map((aspectRatio) => (
        <div className="_ams-container" key={aspectRatio} style={{ inlineSize: '10rem' }}>
          <div className={clsx('_ams-item', generateAspectRatioClass(aspectRatio))} />
        </div>
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
