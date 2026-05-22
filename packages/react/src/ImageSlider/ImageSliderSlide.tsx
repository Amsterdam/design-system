/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { ImageSliderImageProps } from './ImageSlider'

import { Figure } from '../Figure/Figure'
import { Image } from '../Image/Image'

type ImageSliderSlideProps = {
  readonly currentSlideId: number
  readonly index: number
} & ImageSliderImageProps

export const ImageSliderSlide = ({
  alt,
  aspectRatio,
  caption,
  className,
  currentSlideId,
  index,
  sizes,
  src,
  srcSet,
  ...restProps
}: ImageSliderSlideProps) => {
  const isCurrentSlide = index === currentSlideId

  const slideProps = {
    'aria-hidden': isCurrentSlide ? undefined : true,
    className: clsx('ams-image-slider__slide', className),
  }

  const imageProps = { alt, aspectRatio, sizes, src, srcSet }

  return caption ? (
    <Figure {...restProps} {...slideProps} className={clsx(slideProps.className, 'ams-image-slider__figure')}>
      <Image {...imageProps} />
      <Figure.Caption className="ams-image-slider__caption">{caption}</Figure.Caption>
    </Figure>
  ) : (
    <Image {...restProps} {...imageProps} {...slideProps} />
  )
}

ImageSliderSlide.displayName = 'ImageSliderSlide'
