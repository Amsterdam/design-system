/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Paragraph } from '../Paragraph'

export type ComponentProps = {
  /** The size of the text for this component. */
  size?: 'small' | 'large'
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const Component = forwardRef(
  ({ children, className, size, ...restProps }: ComponentProps, ref: ForwardedRef<HTMLParagraphElement>) => (
    <Paragraph {...restProps} ref={ref} size={size} className={clsx('ams-component', className)}>
      {children}
    </Paragraph>
  ),
)

Component.displayName = 'Component'
