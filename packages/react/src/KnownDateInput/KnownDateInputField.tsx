/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useContext, useId } from 'react'

import type { TextInputProps } from '../TextInput/TextInput'

import { Label } from '../Label/Label'
import { TextInput } from '../TextInput/TextInput'
import { KnownDateInputContext } from './KnownDateInputContext'

const autoCompleteTokens = {
  'birth-date': 'bday',
  'credit-card-expiry-date': 'cc-exp',
} as const

/** What every field shares: the props of a Text Input, minus the ones the field sets itself. */
export type KnownDateInputFieldProps = Omit<TextInputProps, 'autoComplete' | 'inputMode' | 'size' | 'type'>

type FieldProps = {
  /** The text of the label. */
  readonly label: string
  /** The part of the date the field asks for, which sets its width and autocomplete value. */
  readonly part: 'day' | 'month' | 'year'
} & KnownDateInputFieldProps

/** The Label and Text Input that Day, Month and Year each render. */
export const KnownDateInputField = forwardRef(
  ({ className, id, label, part, ...restProps }: FieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const generatedId = useId()
    // Safari on iOS only autofills the parts of a date when their id or name contains the English word for it.
    const inputId = id || `${generatedId}-${part}`
    const { autoComplete } = useContext(KnownDateInputContext)

    return (
      <div className="ams-known-date-input__field">
        <Label htmlFor={inputId} inFieldSet>
          {label}
        </Label>
        <TextInput
          {...restProps}
          autoComplete={autoComplete && `${autoCompleteTokens[autoComplete]}-${part}`}
          className={clsx(
            'ams-known-date-input__input',
            part === 'year' && 'ams-known-date-input__input--year',
            className,
          )}
          id={inputId}
          inputMode="numeric"
          ref={ref}
          // Keeps the field narrow without CSS, and opts out of the full width a Text Input without `size` gets.
          size={part === 'year' ? 4 : 2}
        />
      </div>
    )
  },
)

KnownDateInputField.displayName = 'KnownDateInputField'
