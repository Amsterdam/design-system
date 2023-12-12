/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ImgHTMLAttributes } from 'react'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeroImageProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  /** The source of the image. */
  src: ImgHTMLAttributes<HTMLImageElement>['src']
}

export const HeroImage = forwardRef<HTMLDivElement, HeroImageProps>(
  ({ children, className, src, ...restProps }: HeroImageProps, ref) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-hero-image', className)}>
      <img alt="" className="amsterdam-hero-image__image" src={src} />
      {children}
    </div>
  ),
)

HeroImage.displayName = 'HeroImage'
