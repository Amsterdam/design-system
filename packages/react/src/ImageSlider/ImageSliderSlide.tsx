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
  const image = (
    <Image
      alt={alt}
      aria-hidden={index !== currentSlideId ? true : undefined}
      aspectRatio={aspectRatio}
      // The `ams-image-slider__item` and `ams-image-slider__item--in-view` classes are @deprecated and will be removed in a future release.
      className={clsx(
        'ams-image-slider__slide ams-image-slider__item',
        index === currentSlideId && 'ams-image-slider__item--in-view',
      )}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
    />
  )

  return caption ? (
    <Figure className="ams-image-slider__slide ams-image-slider__figure">
      {image}
      <Figure.Caption className="ams-image-slider__caption">{caption}</Figure.Caption>
    </Figure>
  ) : (
    image
  )
}

ImageSliderSlide.displayName = 'ImageSliderSlide'
