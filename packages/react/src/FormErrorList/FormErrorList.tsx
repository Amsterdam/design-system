/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { useAddErrorCountToDocumentTitle } from './useAddErrorCountToDocumentTitle'
import { Alert } from '../Alert'
import type { HeadingLevel } from '../Heading'
import { LinkList } from '../LinkList'

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
  /** The text for the Heading. */
  heading?: string
  /**
   * The hierarchical level of the Heading within the document.
   * Note: this intentionally does not change the font size.
   */
  headingLevel?: HeadingLevel
} & HTMLAttributes<HTMLDivElement>

export const FormErrorList = forwardRef(
  (
    {
      className,
      errorCountLabel,
      errors,
      heading = 'Verbeter de fouten voor u verder gaat',
      headingLevel = 2,
      ...restProps
    }: FormErrorListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    useAddErrorCountToDocumentTitle(errors, errorCountLabel)

    if (errors.length === 0) return undefined

    return (
      <Alert
        {...restProps}
        className={clsx('ams-form-error-list', className)}
        heading={heading}
        headingLevel={headingLevel}
        ref={ref}
        role="alert"
        severity="error"
      >
        <LinkList>
          {errors.map(({ id, label }) => (
            <LinkList.Link href={id} key={`${id}-${label}`}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Alert>
    )
  },
)

FormErrorList.displayName = 'FormErrorList'
