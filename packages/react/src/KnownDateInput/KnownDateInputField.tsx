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

/** What every field shares: the props of a Text Input, minus the ones the field sets itself. */
export type KnownDateInputFieldProps = Omit<TextInputProps, 'autoComplete' | 'inputMode' | 'size' | 'type'>

type FieldProps = {
  readonly label: string
  readonly part: 'day' | 'month' | 'year'
} & KnownDateInputFieldProps

/** The Label and Text Input that Day, Month and Year each render. */
export const KnownDateInputField = forwardRef(
  ({ className, id, label, part, ...restProps }: FieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const { autoComplete } = useContext(KnownDateInputContext)

    // A payment card has no day to fill in.
    const hasAutoComplete = autoComplete && !(autoComplete === 'cc-exp' && part === 'day')

    return (
      <div className="ams-known-date-input__field">
        <Label htmlFor={inputId} inFieldSet>
          {label}
        </Label>
        <TextInput
          {...restProps}
          autoComplete={hasAutoComplete ? `${autoComplete}-${part}` : undefined}
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
