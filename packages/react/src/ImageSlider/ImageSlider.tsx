/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronLeftIcon, ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { ImageSliderItem } from './ImageSliderItem'
import { IconButton } from '../IconButton'

export type ImageSliderProps = {
  controls?: boolean
  scrollbar?: boolean
  snapstop?: boolean
  thumbnails?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const ImageSliderRoot = forwardRef(
  (
    { children, className, controls, scrollbar, snapstop, thumbnails, ...restProps }: ImageSliderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-image-slider',
        controls && 'ams-image-slider--controls',
        scrollbar && 'ams-image-slider--scrollbar',
        snapstop && 'ams-image-slider--snapstop',
        thumbnails && 'ams-image-slider--thumbnails',
        className,
      )}
    >
      {controls && (
        <div className="ams-image-slider__controls">
          <IconButton
            svg={ChevronLeftIcon}
            label="Vorige"
            onBackground="dark"
            className="ams-image-slider__control ams-image-slider__control--previous"
          />
          <IconButton
            svg={ChevronRightIcon}
            label="Volgende"
            onBackground="dark"
            className="ams-image-slider__control ams-image-slider__control--next"
          />
        </div>
      )}
      <div className="ams-image-slider__scroller">{children}</div>
    </div>
  ),
)

ImageSliderRoot.displayName = 'ImageSlider'

export const ImageSlider = Object.assign(ImageSliderRoot, { Item: ImageSliderItem })
