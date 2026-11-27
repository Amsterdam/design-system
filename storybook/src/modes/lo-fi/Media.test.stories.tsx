/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar, Figure, Image, ImageSlider, Logo } from '@amsterdam/design-system-react/src'
import { avatarColors } from '@amsterdam/design-system-react/src/Avatar/Avatar'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'

import examplePhoto01Square from '#storybook/_common/images/example-photo-01-128x128.jpg'
import examplePhoto02 from '#storybook/_common/images/example-photo-02.jpg'
import examplePhoto03 from '#storybook/_common/images/example-photo-03.jpg'
import examplePhoto06 from '#storybook/_common/images/example-photo-06.jpg'

import { loFiMeta } from './loFiMeta'

const meta = {
  ...loFiMeta,
  title: 'Modes/Lo-fi/Media',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const sliderImages = [
  { alt: 'Bridge', src: examplePhoto03 },
  { alt: 'Bunker', src: examplePhoto02 },
  { alt: 'Chairs', src: examplePhoto06 },
]

/**
 * The photo-hiding trick, which is the most fragile thing in the mode: Lo-fi never removes an image,
 * it shifts it out of view with `object-position: -100vw 0` (or `background-position` for the Image
 * Slider thumbnails) and lets a tokenised placeholder show through underneath. Any photo that
 * reappears here is a component painting its own image layer instead of the tokenised one.
 *
 * Each surface hides its image differently, so they all need to be on the sheet: Image draws the
 * cross placeholder, Avatar falls back to its highlight background, and the slider thumbnails shift
 * an inline `background-image` that no stylesheet can reach.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack" style={{ maxInlineSize: '44rem' }}>
      <Image alt="" src={examplePhoto03} />

      <Figure>
        <Image alt="" src={examplePhoto02} />
        <Figure.Caption>
          Een schuin geplaatste fiets tegen een lantaarnpaal, met op de achtergrond een karakteristiek houten bruggetje.
        </Figure.Caption>
      </Figure>

      <div className="_ams-tests-grid">
        <Avatar imageSrc={examplePhoto01Square} label="Iris Bakker" />
        {avatarColors.map((color) => (
          <Avatar color={color} key={color} label="Iris Bakker" />
        ))}
      </div>

      <div className="_ams-tests-grid">
        {logoBrands.map((brand) => (
          <Logo brand={brand} key={brand} />
        ))}
      </div>

      <ImageSlider images={sliderImages} />
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
