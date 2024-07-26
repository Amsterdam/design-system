/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { ImageSliderContext } from './ImageSliderContext'

export type ImageSliderThumbnailsProps = {
  thumbnails: ReactNode[]
} & HTMLAttributes<HTMLDivElement>

export const ImageSliderThumbnails = forwardRef(
  ({ thumbnails, className, ...restProps }: ImageSliderThumbnailsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { goToSlideId } = useContext(ImageSliderContext)
    return (
      <div {...restProps} ref={ref} className={clsx('ams-image-slider__thumbnails', className)}>
        {thumbnails &&
          thumbnails.map((thumbnail, index) => (
            <button key={index} className="ams-image-slider__thumbnail" onClick={() => goToSlideId(index)}>
              {thumbnail}
            </button>
          ))}
      </div>
    )
  },
)

ImageSliderThumbnails.displayName = 'ImageSlider.Thumbnails'
