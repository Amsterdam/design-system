/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ColumnsProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Flows its content into columns, so it uses the space it has and takes up less height.
 * The content stays in one piece, so a long list remains one list for screen readers.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-columns--docs Columns docs at Amsterdam Design System}
 */
export const Columns = forwardRef<HTMLDivElement, ColumnsProps>(({ children, className, ...restProps }, ref) => (
  <div {...restProps} className={clsx('ams-columns', className)} ref={ref}>
    {children}
  </div>
))

Columns.displayName = 'Columns'
