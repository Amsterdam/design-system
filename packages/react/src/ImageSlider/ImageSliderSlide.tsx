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
  readonly id: string
  readonly index: number
  readonly tabId: string
} & Readonly<ImageSliderImageProps>

/**
 * One image within an Image Slider.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-image-slider--docs Image Slider docs at Amsterdam Design System}
 */
export const ImageSliderSlide = ({
  alt,
  aspectRatio,
  caption,
  className,
  currentSlideId,
  id,
  index,
  sizes,
  src,
  srcSet,
  tabId,
  ...restProps
}: ImageSliderSlideProps) => {
  const isCurrentSlide = index === currentSlideId

  const slideProps = {
    'aria-hidden': isCurrentSlide ? undefined : true,
    'aria-labelledby': tabId,
    'aria-roledescription': 'slide',
    className: clsx('ams-image-slider__slide', className),
    id,
    role: 'tabpanel',
    tabIndex: isCurrentSlide ? 0 : -1,
  }

  const imageProps = { alt, aspectRatio, sizes, src, srcSet }

  return caption ? (
    <Figure {...restProps} {...slideProps} className={clsx(slideProps.className, 'ams-image-slider__figure')}>
      <Image {...imageProps} />
      <Figure.Caption className="ams-image-slider__caption">{caption}</Figure.Caption>
    </Figure>
  ) : (
    <div {...restProps} {...slideProps}>
      <Image {...imageProps} />
    </div>
  )
}

ImageSliderSlide.displayName = 'ImageSliderSlide'
