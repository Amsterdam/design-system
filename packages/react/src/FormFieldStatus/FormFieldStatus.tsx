/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { FormFieldStatusCharacterCount } from './FormFieldStatusCharacterCount'

// The root announces every part composed inside it, so `role` is not a consumer option.
export type FormFieldStatusProps = Readonly<PropsWithChildren<Omit<HTMLAttributes<HTMLDivElement>, 'role'>>>

const FormFieldStatusRoot = forwardRef(
  ({ children, className, ...restProps }: FormFieldStatusProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-form-field-status', className)} ref={ref} role="status">
      {children}
    </div>
  ),
)

FormFieldStatusRoot.displayName = 'FormFieldStatus'

/**
 * Reports on the value of a form field while the user works on it, such as how many of the characters allowed are used.
 * Announces what it reports without moving focus, so the user hears it between words rather than after every keystroke.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-form-field-status--docs Form Field Status docs at Amsterdam Design System}
 */
export const FormFieldStatus = Object.assign(FormFieldStatusRoot, {
  CharacterCount: FormFieldStatusCharacterCount,
})
