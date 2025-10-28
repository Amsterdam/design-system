/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ImageSlider } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect } from 'storybook/test'

import { default as imageSliderMeta } from './ImageSlider.stories'

const meta = {
  ...imageSliderMeta,
  title: 'Components/Media/Image Slider',
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvas, userEvent }) => {
    const imageSlidesContainer = canvas.queryAllByRole('group')?.at(0)?.children
    const imageSlides = Array.from(imageSlidesContainer ?? [])
    const buttons = canvas.queryAllByRole('button')
    const previousButton = buttons?.at(0)
    const nextButton = buttons?.at(1)

    if (!nextButton || !previousButton) {
      return
    }

    for (const [idx, imageSlide] of imageSlides.entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      } else {
        await userEvent.click(nextButton)
        await new Promise((resolve) => setTimeout(resolve, 500))
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      }
    }

    for (const [idx, imageSlide] of imageSlides.reverse().entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      } else {
        await userEvent.click(previousButton)
        await new Promise((resolve) => setTimeout(resolve, 500))
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      }
    }
  },
  tags: ['!dev', '!autodocs'],
}
