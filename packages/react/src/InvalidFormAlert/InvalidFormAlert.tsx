/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { forwardRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { InvalidFormAlertWithErrors } from './InvalidFormAlertWithErrors'
import { useAddErrorCountToDocumentTitle } from './useAddErrorCountToDocumentTitle'
import type { HeadingProps } from '../Heading'

export type FormError = {
  id: string
  label: string
}

export type InvalidFormAlertProps = {
  /**
   * The text following the error count.
   * This is used to show the error count in the document title.
   * @default { plural: 'invoerfouten', singular: 'invoerfout' }
   */
  errorCountLabel?: { plural: string; singular: string }
  /** The list of error messages to display. */
  errors: FormError[]
  /**
   * Whether the component receives focus on first render
   * @default true
   */
  focusOnRender?: boolean
  /**
   * The text for the Heading.
   * @default Verbeter de fouten voor u verder gaat
   */
  heading?: string
  /**
   * The hierarchical level of the Invalid Form Alert’s Heading within the document.
   * There is no default value; determine the correct level for each instance.
   * Note: this intentionally does not change the font size.
   **/
  headingLevel: HeadingProps['level']
} & HTMLAttributes<HTMLDivElement>

export const InvalidFormAlert = forwardRef(
  ({ errorCountLabel, errors, ...restProps }: InvalidFormAlertProps, ref: ForwardedRef<HTMLDivElement>) => {
    // An Invalid Form Alert without errors only resets the document title.
    // With errors, it renders the InvalidFormAlertWithErrors component.
    useAddErrorCountToDocumentTitle(errors, errorCountLabel)

    // Focus should only be set on first render of InvalidFormAlertWithErrors.
    // Subsequent renders should not set focus.
    const [hasFocusedOnce, setHasFocusedOnce] = useState(false)

    if (errors.length === 0) return undefined

    return (
      <InvalidFormAlertWithErrors
        {...restProps}
        errors={errors}
        hasFocusedOnce={hasFocusedOnce}
        ref={ref}
        setHasFocusedOnce={setHasFocusedOnce}
      />
    )
  },
)

InvalidFormAlert.displayName = 'InvalidFormAlert'
