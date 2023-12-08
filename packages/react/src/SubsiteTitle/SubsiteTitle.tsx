/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Heading } from '../Heading'

export interface SubsiteTitleProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const SubsiteTitle = forwardRef(
  ({ children, className, ...restProps }: SubsiteTitleProps, ref: ForwardedRef<HTMLHeadingElement>) => (
    <Heading level={2} size="level-2" {...restProps} ref={ref} className={clsx('amsterdam-subsite-title', className)}>
      {children}
    </Heading>
  ),
)

SubsiteTitle.displayName = 'SubsiteTitle'
