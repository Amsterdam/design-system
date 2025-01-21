/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { forwardRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { FormErrorListWithErrors } from './FormErrorListWithErrors'
import { useAddErrorCountToDocumentTitle } from './useAddErrorCountToDocumentTitle'
import type { HeadingProps } from '../Heading'

export type FormError = {
  id: string
  label: string
}

export type FormErrorListProps = {
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
   * The hierarchical level of the Form Error List’s Heading within the document.
   * There is no default value; determine the correct level for each instance.
   * Note: the font size is intentionally the same for every level.
   **/
  headingLevel: HeadingProps['level']
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
