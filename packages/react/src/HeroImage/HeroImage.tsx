/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, type ImgHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react'
import { Image } from '../Image/Image'

export interface HeroImageProps extends PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>> {
  /*
   * A custom image component to use instead of the one from this library.
   * Note that the image must fill the entire content box, e.g. through `object-fit: cover`.
   */
  image?: ReactNode
}

export const HeroImage = forwardRef<HTMLImageElement, HeroImageProps>(
  ({ children, className, image, ...restProps }: HeroImageProps, ref) => (
    <div className={clsx('amsterdam-hero-image', className)}>
      <div className="amsterdam-hero-image__image">
        {image ?? <Image {...restProps} alt="" objectFit="cover" ref={ref} />}
      </div>
      {children}
    </div>
  ),
)

HeroImage.displayName = 'HeroImage'
