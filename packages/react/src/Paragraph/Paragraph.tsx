/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { gridCellClassNames, GridCellProps } from '../grid'

export type ParagraphProps = {
  size?: 'small' | 'large'
} & GridCellProps &
  HTMLAttributes<HTMLParagraphElement>

export const Paragraph = forwardRef(
  (
    { children, className, gridColumns, size, ...otherProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'amsterdam-paragraph',
        size && `amsterdam-paragraph-${size}`,
        gridCellClassNames(gridColumns),
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
