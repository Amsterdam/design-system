/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { FormatCharacterCountText } from '../FormFieldStatus/formatCharacterCountText'

import { formatCharacterCountTextNl } from '../FormFieldStatus/formatCharacterCountText'

export type CharacterCountProps = {
  /**
   * Returns the text that displays the count, based on the current and maximum length.
   * Formatters for all tested locales are available as exports.
   * @default formatCharacterCountTextNl
   */
  readonly formatText?: FormatCharacterCountText
  /** The current length of the field’s value. */
  readonly length: number
  /** The maximum length of the field’s value. */
  readonly maxLength: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Shows how many characters remain within a specified limit as the user types.
 *
 * @deprecated Compose a `FormFieldStatus.CharacterCount` inside a `FormFieldStatus` instead.
 * The ‘CharacterCount’ component will be removed on or after 2027-03-01.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-form-field-status--docs Form Field Status docs at Amsterdam Design System}
 */
export const CharacterCount = forwardRef(
  (
    { className, formatText = formatCharacterCountTextNl, length, maxLength, ...restProps }: CharacterCountProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      className={clsx('ams-character-count', length > maxLength && 'ams-character-count--error', className)}
      ref={ref}
      role="status"
    >
      {formatText(length, maxLength)}
    </div>
  ),
)

CharacterCount.displayName = 'CharacterCount'
