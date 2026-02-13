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

const SLIDE_TRANSITION_WAIT = 500
const THUMBNAIL_TRANSITION_WAIT = 1000

function expectOnlySlideVisible(slides: Element[], visibleIdx: number) {
  slides.forEach((slide, idx) => {
    if (idx === visibleIdx) {
      expect(slide).not.toHaveAttribute('aria-hidden')
    } else {
      expect(slide).toHaveAttribute('aria-hidden', 'true')
    }
  })
}

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
    const slidesContainer = canvas.queryAllByRole('group')[0]?.children
    const slides = Array.from(slidesContainer ?? [])
    const [previousButton, nextButton] = canvas.queryAllByRole('button')

    if (!nextButton || !previousButton) {
      return
    }

    // Click on next button to end of slides and test if aria-hidden is set correctly
    for (let i = 0; i < slides.length; i++) {
      if (i > 0) {
        await userEvent.click(nextButton)
        await new Promise((resolve) => setTimeout(resolve, SLIDE_TRANSITION_WAIT))
      }
      expectOnlySlideVisible(slides, i)
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (let i = slides.length - 1; i > 0; i--) {
      await userEvent.click(previousButton)
      await new Promise((resolve) => setTimeout(resolve, SLIDE_TRANSITION_WAIT))
      expectOnlySlideVisible(slides, i - 1)
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', { name: 'Afbeelding 3: Chairs' })[0]
    await userEvent.click(thirdThumbnailButton)
    await new Promise((resolve) => setTimeout(resolve, THUMBNAIL_TRANSITION_WAIT))
    expectOnlySlideVisible(slides, 2)
  },
  render: (args) => (
    <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, { args })}
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
