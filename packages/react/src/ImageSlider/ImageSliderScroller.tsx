/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { ImageSliderImageProps } from './ImageSlider'
import { ImageSliderItem } from './ImageSliderItem'
import { Image } from '../Image/Image'

export type ImageSliderScrollerProps = {
  images: ImageSliderImageProps[]
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderScroller = forwardRef(
  ({ images, className, ...restProps }: ImageSliderScrollerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div {...restProps} ref={ref} className={clsx('ams-image-slider__scroller', className)}>
        {images.map((image, index) => (
          <ImageSliderItem key={index} slideId={index}>
            <Image
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt={image.alt}
              className={`ams-aspect-ratio--${image.ratio}`}
            />
          </ImageSliderItem>
        ))}
      </div>
    )
  },
)

ImageSliderScroller.displayName = 'ImageSlider.Scroller'
