/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { forwardRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { FormErrorListWithErrors } from './FormErrorListWithErrors'
import { useAddErrorCountToDocumentTitle } from './useAddErrorCountToDocumentTitle'
import type { HeadingLevel } from '../Heading'

export type FormError = {
  id: string
  label: string
}

export type FormErrorListProps = {
  /**
   * The text following the error count.
   * This is used to show the error count in the document title.
   */
  errorCountLabel?: { plural: string; singular: string }
  /** The list of error messages to display. */
  errors: FormError[]
  /** Whether the component receives focus on first render */
  focusOnRender?: boolean
  /** The text for the Heading. */
  heading?: string
  /**
   * The hierarchical level of the Heading within the document.
   * Note: this intentionally does not change the font size.
   */
  headingLevel?: HeadingLevel
} & HTMLAttributes<HTMLDivElement>

export const FormErrorList = forwardRef(
  ({ errors, errorCountLabel, ...restProps }: FormErrorListProps, ref: ForwardedRef<HTMLDivElement>) => {
    // A Form Error List without errors only resets the document title.
    // With errors, it renders the FormErrorListWithErrors component.
    useAddErrorCountToDocumentTitle(errors, errorCountLabel)

    // Focus should only be set on first render of FormErrorListWithErrors.
    // Subsequent renders should not set focus.
    const [hasFocusedOnce, setHasFocusedOnce] = useState(false)

    if (errors.length === 0) return undefined

    return (
      <FormErrorListWithErrors
        {...restProps}
        errors={errors}
        hasFocusedOnce={hasFocusedOnce}
        ref={ref}
        setHasFocusedOnce={setHasFocusedOnce}
      />
    )
  },
)

FormErrorList.displayName = 'FormErrorList'
