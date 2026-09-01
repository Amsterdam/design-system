/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { WarningIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { FormatCharacterCountOverLimitText, FormatCharacterCountText } from './formatCharacterCountText'

import { Icon } from '../Icon'
import { formatCharacterCountOverLimitTextNl, formatCharacterCountTextNl } from './formatCharacterCountText'

export type FormFieldStatusCharacterCountProps = {
  /**
   * Returns the text that reports how far the value exceeds the maximum length.
   * Formatters for all tested locales are available as exports.
   * @default formatCharacterCountOverLimitTextNl
   */
  readonly formatOverLimitText?: FormatCharacterCountOverLimitText
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
 * Counts the characters of a field’s value towards the maximum it allows, and says how far a longer value exceeds it.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-form-field-status--docs Form Field Status docs at Amsterdam Design System}
 */
export const FormFieldStatusCharacterCount = forwardRef(
  (
    {
      className,
      formatOverLimitText = formatCharacterCountOverLimitTextNl,
      formatText = formatCharacterCountTextNl,
      length,
      maxLength,
      ...restProps
    }: FormFieldStatusCharacterCountProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const charactersOverLimit = length - maxLength

    return (
      <div {...restProps} className={clsx('ams-form-field-status__character-count', className)} ref={ref}>
        <span>{formatText(length, maxLength)}</span>
        {charactersOverLimit > 0 && (
          <span className="ams-form-field-status__error">
            <Icon size="small" svg={WarningIcon} />
            {formatOverLimitText(charactersOverLimit)}
          </span>
        )}
      </div>
    )
  },
)

FormFieldStatusCharacterCount.displayName = 'FormFieldStatus.CharacterCount'
