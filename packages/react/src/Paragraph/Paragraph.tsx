/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { GridCellProps, gridColumnClassNames } from '../grid'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, GridCellProps {
  size?: 'small' | 'large'
}

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
        gridColumnClassNames(gridColumns),
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
