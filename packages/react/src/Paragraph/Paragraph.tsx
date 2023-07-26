/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { GridCellProps, gridColumnClassNames } from '../Grid'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, GridCellProps {
  size?: 'small' | 'large'
  /**
   * De kleur van de paragraaf
   * Gebruik deze property om de paragraaf in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
}

export const Paragraph = forwardRef(
  (
    { children, className, gridColumns, inverseColor, size, ...otherProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'amsterdam-paragraph',
        size && `amsterdam-paragraph-${size}`,
        inverseColor && 'amsterdam-paragraph--inverse-color',
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
