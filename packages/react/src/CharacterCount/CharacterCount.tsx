/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export type CharacterCountProps = HTMLAttributes<HTMLDivElement> & {
  /** The current length of the field’s value. */
  length: number
  /** The maximum length of the field’s value. */
  maxLength: number
}

export const CharacterCount = forwardRef(
  ({ className, length, maxLength, ...restProps }: CharacterCountProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('ams-character-count', length > maxLength && 'ams-character-count--error', className)}
      role="status"
    >
      {`${length} van ${maxLength} tekens`}
    </div>
  ),
)

CharacterCount.displayName = 'CharacterCount'
