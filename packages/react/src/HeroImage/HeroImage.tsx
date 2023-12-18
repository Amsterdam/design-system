/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, type ImgHTMLAttributes, type PropsWithChildren } from 'react'
import { Image } from '../Image/Image'

export interface HeroImageProps extends PropsWithChildren<ImgHTMLAttributes<HTMLImageElement>> {}

export const HeroImage = forwardRef<HTMLImageElement, HeroImageProps>(
  ({ children, className, ...restProps }: HeroImageProps, ref) => (
    <div className={clsx('amsterdam-hero-image', className)}>
      <div className="amsterdam-hero-image__image">
        <Image {...restProps} alt="" ref={ref} objectFit="cover" />
      </div>
      {children}
      <HeroImage src="abc.jpg" />
    </div>
  ),
)

HeroImage.displayName = 'HeroImage'
