/**
 * @license EUPL-1.2
 * Copyright (c) Gemeente Amsterdam
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface GridItemProps extends HTMLAttributes<HTMLElement> {
  spanSmall: 1 | 2 | 3 | 4
  startSmall?: 1 | 2 | 3 | 4
  spanLarge: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  startLarge?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export const GridItem = ({
  spanSmall = 4,
  startSmall,
  spanLarge = 12,
  startLarge,
  children,
  className,
  ...restProps
}: PropsWithChildren<GridItemProps>) => {
  const maxSpanSmall = startSmall && 5 - startSmall
  const actualSpanSmall = maxSpanSmall && spanSmall > maxSpanSmall ? maxSpanSmall : spanSmall
  const maxSpanLarge = startLarge && 13 - startLarge
  const actualSpanLarge = maxSpanLarge && spanLarge > maxSpanLarge ? maxSpanLarge : spanLarge

  return (
    <div
      className={clsx(
        `amsterdam-col-span-${actualSpanSmall}`,
        `amsterdam-col-span-${actualSpanLarge}--large`,
        startSmall && `amsterdam-col-start-${startSmall}`,
        startLarge && `amsterdam-col-start-${startLarge}--large`,
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
