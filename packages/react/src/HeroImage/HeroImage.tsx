/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ImgHTMLAttributes } from 'react'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeroImageProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  src: ImgHTMLAttributes<HTMLImageElement>['src']
}

export const HeroImage = forwardRef<HTMLDivElement, HeroImageProps>(
  ({ as = 'div', children, className, src, ...restProps }: HeroImageProps, ref) => {
    const Component = as

    return (
      <Component
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-hero-image', className)}
        style={{ backgroundImage: `url(${src ?? 'https://picsum.photos/1280/360'})` }}
      >
        {children}
      </Component>
    )
  },
)

HeroImage.displayName = 'HeroImage'
