/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Alert } from '../Alert'
import type { HeadingLevel } from '../Heading'
import { LinkList } from '../LinkList'

export type FormError = {
  id: string
  label: string
}

export type FormErrorListProps = {
  /** The list of error messages to display. */
  errors: FormError[]
  /** The text for the Heading. */
  heading?: string
  /** The hierarchical level of the Heading within the document. */
  headingLevel?: HeadingLevel
} & HTMLAttributes<HTMLDivElement>

export const FormErrorList = forwardRef(
  (
    {
      className,
      errors,
      heading = 'Verbeter de fouten voor u verder gaat',
      headingLevel = 2,
      ...restProps
    }: FormErrorListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (errors.length === 0) return undefined

    return (
      <Alert
        {...restProps}
        className={clsx('ams-form-error-list', className)}
        headingLevel={headingLevel}
        ref={ref}
        role="alert"
        severity="error"
        title={heading}
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
