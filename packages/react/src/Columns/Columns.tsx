/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const columnsCounts = [1, 2, 3, 4] as const
export type ColumnsCount = (typeof columnsCounts)[number]
export type ColumnsCounts = { narrow: ColumnsCount; medium: ColumnsCount; wide: ColumnsCount }

export type ColumnsProps = {
  /**
   * The number of columns.
   * A number sets it from the medium breakpoint of the Grid, and a narrow window keeps one column.
   * An object sets it for narrow, medium, and wide windows separately.
   * @default 2 from the medium breakpoint, 1 below it
   */
  readonly count?: ColumnsCount | ColumnsCounts
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

const countClasses = (count?: ColumnsCount | ColumnsCounts): string[] => {
  if (typeof count === 'number') {
    return [`ams-columns--count-${count}-medium`]
  }

  if (count) {
    return [
      `ams-columns--count-${count.narrow}`,
      `ams-columns--count-${count.medium}-medium`,
      `ams-columns--count-${count.wide}-wide`,
    ]
  }

  return []
}

/**
 * Flows its content into columns, so it uses the space it has and takes up less height.
 * The content stays in one piece, so a long list remains one list for screen readers.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-columns--docs Columns docs at Amsterdam Design System}
 */
export const Columns = forwardRef<HTMLDivElement, ColumnsProps>(({ children, className, count, ...restProps }, ref) => (
  <div {...restProps} className={clsx('ams-columns', countClasses(count), className)} ref={ref}>
    {children}
  </div>
))

Columns.displayName = 'Columns'
