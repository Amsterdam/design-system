/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageSlider } from '@amsterdam/design-system-react/src'
import { expect, waitFor } from 'storybook/test'

import examplePhoto02 from '#storybook/_common/images/example-photo-02.jpg'
import examplePhoto03 from '#storybook/_common/images/example-photo-03.jpg'
import examplePhoto04 from '#storybook/_common/images/example-photo-04.jpg'
import examplePhoto06 from '#storybook/_common/images/example-photo-06.jpg'
import examplePhoto07 from '#storybook/_common/images/example-photo-07.jpg'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as imageSliderMeta } from './ImageSlider.stories'

const meta = {
  ...imageSliderMeta,
  title: 'Components/Media/Image Slider',
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

async function expectOnlySlideVisible(slides: Element[], visibleIdx: number) {
  await waitFor(() => {
    slides.forEach((slide, idx) => {
      if (idx === visibleIdx) {
        expect(slide).not.toHaveAttribute('aria-hidden')
      } else {
        expect(slide).toHaveAttribute('aria-hidden', 'true')
      }
    })
  })
}

export const Test: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        src: examplePhoto03,
      },
      {
        alt: 'Bunker',
        src: examplePhoto02,
      },
      {
        alt: 'Chairs',
        src: examplePhoto06,
      },
      {
        alt: 'Droplet',
        src: examplePhoto07,
      },
      {
        alt: 'Dew',
        src: examplePhoto04,
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
      }
      await expectOnlySlideVisible(slides, i)
    }

    // Click on previous button back to start of slides and test if aria-hidden is set correctly
    for (let i = slides.length - 1; i > 0; i--) {
      await userEvent.click(previousButton)
      await expectOnlySlideVisible(slides, i - 1)
    }

    // Click on third thumbnail button and show that slide
    const thirdThumbnailButton = canvas.getAllByRole('tab', { name: 'Afbeelding 3: Chairs' })[0]
    await userEvent.click(thirdThumbnailButton)
    await expectOnlySlideVisible(slides, 2)
  },
  render: (args, context) => (
    <>
      <ImageSlider {...args} data-testid="interaction-test" />
      {renderComponentVariants(ImageSlider, { args }, context)}
    </>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
