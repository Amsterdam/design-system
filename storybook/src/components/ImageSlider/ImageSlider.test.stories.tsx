/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageSlider } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as imageSliderMeta } from './ImageSlider.stories'

const meta = {
  ...imageSliderMeta,
  title: 'Components/Media/Image Slider',
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        src: 'https://picsum.photos/id/122/1280/720',
      },
      {
        alt: 'Bunker',
        src: 'https://picsum.photos/id/101/1280/720',
      },
      {
        alt: 'Chairs',
        src: 'https://picsum.photos/id/153/1280/720',
      },
      {
        alt: 'Droplet',
        src: 'https://picsum.photos/id/159/1280/720',
      },
      {
        alt: 'Dew',
        src: 'https://picsum.photos/id/123/1280/720',
      },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const imageSlidesContainer = canvas.queryAllByRole('group')[0]?.children
    const imageSlides = Array.from(imageSlidesContainer ?? [])
    const buttons = canvas.queryAllByRole('button')
    const previousButton = buttons[0]
    const nextButton = buttons[1]

    if (!nextButton || !previousButton) {
      return
    }

    // Click on next button to end of slides and test if aria-hidden is set correctly
    for (const [idx, imageSlide] of imageSlides.entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
        // Check that all other slides have aria-hidden
        for (let i = 1; i < imageSlides.length; i++) {
          expect(imageSlides[i]).toHaveAttribute('aria-hidden', 'true')
        }
      } else {
        await userEvent.click(nextButton)
        await new Promise((resolve) => setTimeout(resolve, 500))
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
        // Check that all other slides have aria-hidden
        for (let i = 0; i < imageSlides.length; i++) {
          if (i !== idx) {
            expect(imageSlides[i]).toHaveAttribute('aria-hidden', 'true')
          }
        }
      }
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (const [idx, imageSlide] of imageSlides.reverse().entries()) {
      if (idx === 0) {
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      } else {
        await userEvent.click(previousButton)
        await new Promise((resolve) => setTimeout(resolve, 500))
        expect(imageSlide).not.toHaveAttribute('aria-hidden')
      }
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', { name: 'Afbeelding 3: Chairs' })[0]
    await userEvent.click(thirdThumbnailButton)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(imageSlides[2]).not.toHaveAttribute('aria-hidden')
  },
  render: (args) => (
    <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, { args })}
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
