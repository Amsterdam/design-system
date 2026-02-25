/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { ImageSliderImageProps } from './ImageSlider'

import { Figure } from '../Figure/Figure'
import { Image } from '../Image/Image'

type ImageSliderSlideProps = {
  currentSlideId: number
  index: number
} & ImageSliderImageProps

export const ImageSliderSlide = ({
  alt,
  aspectRatio,
  caption,
  currentSlideId,
  index,
  sizes,
  src,
  srcSet,
}: ImageSliderSlideProps) => {
  const isCurrentSlide = index === currentSlideId

  const slideProps = {
    'aria-hidden': isCurrentSlide ? undefined : true,
    // The `ams-image-slider__item` and `ams-image-slider__item--in-view` classes are @deprecated and will be removed in a future release.
    className: clsx(
      'ams-image-slider__slide ams-image-slider__item',
      isCurrentSlide && 'ams-image-slider__item--in-view',
    ),
  }

  const imageProps = { alt, aspectRatio, sizes, src, srcSet }

  return caption ? (
    <Figure {...slideProps} className={clsx(slideProps.className, 'ams-image-slider__figure')}>
      <Image {...imageProps} />
      <Figure.Caption className="ams-image-slider__caption">{caption}</Figure.Caption>
    </Figure>
  ) : (
    <Image {...imageProps} {...slideProps} />
  )
}

ImageSliderSlide.displayName = 'ImageSliderSlide'
