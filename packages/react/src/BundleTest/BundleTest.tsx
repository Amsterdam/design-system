/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type BundleTestProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-bundle-test--docs BundleTest docs at Amsterdam Design System}
 */
export const BundleTest = forwardRef(
  ({ children, className, ...restProps }: BundleTestProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} className={clsx('ams-bundle-test', className)} ref={ref}>
      {children}
    </span>
  ),
)

BundleTest.displayName = 'BundleTest'
