/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { MetadataSeparator } from './MetadataSeparator'

export type MetadataProps = {
  /** Changes the text colour for readability on a dark background. */
  readonly color?: 'inverse'
  /** The size of the text. */
  readonly size?: 'small'
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>>

const MetadataRoot = forwardRef(
  ({ children, className, color, size, ...restProps }: MetadataProps, ref: ForwardedRef<HTMLParagraphElement>) => (
    <p
      {...restProps}
      className={clsx('ams-metadata', color && `ams-metadata--${color}`, size && `ams-metadata--${size}`, className)}
      ref={ref}
    >
      {children}
    </p>
  ),
)

MetadataRoot.displayName = 'Metadata'

/**
 * Supporting information about a piece of content, such as the date it was published or the categories it belongs to.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-metadata--docs Metadata docs at Amsterdam Design System}
 */
export const Metadata = Object.assign(MetadataRoot, { Separator: MetadataSeparator })
