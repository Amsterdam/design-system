/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type LinkProps = {
  /** Changes the text colour for readability on a light or dark background. */
  readonly color?: 'contrast' | 'inverse'
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to intrinsic elements, not to custom components.
   */
  readonly linkComponent?: ElementType
} & Readonly<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'>>

/**
 * Inline navigation for use within text or alongside other content.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-link--docs Link docs at Amsterdam Design System}
 */
export const Link = forwardRef(
  ({ children, className, color, linkComponent, ...restProps }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const Tag = linkComponent || 'a'

    return (
      <Tag
        {...restProps}
        className={clsx('ams-link', color && `ams-link--${color}`, className)}
        {...((!linkComponent || typeof linkComponent === 'string') && { ref })}
      >
        {children}
      </Tag>
    )
  },
)

Link.displayName = 'Link'
