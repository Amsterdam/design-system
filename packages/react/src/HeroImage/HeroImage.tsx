/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react'

export interface HeroImageProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  /** A set of source sizes of the image. */
  sizes?: ImgHTMLAttributes<HTMLImageElement>['sizes']
  /** A single or candidate source of the image. */
  src: ImgHTMLAttributes<HTMLImageElement>['src']
  /** A list of candidate sources of the image. */
  srcSet?: ImgHTMLAttributes<HTMLImageElement>['srcSet']
}

export const HeroImage = forwardRef<HTMLDivElement, HeroImageProps>(
  ({ children, className, sizes, src, srcSet, ...restProps }: HeroImageProps, ref) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-hero-image', className)}>
      <div className="amsterdam-hero-image__image">
        <img alt="" sizes={sizes} src={src} srcSet={srcSet} />
      </div>
      {children}
    </div>
  ),
)

HeroImage.displayName = 'HeroImage'
