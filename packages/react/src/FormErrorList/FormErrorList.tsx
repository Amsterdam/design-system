/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
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

export type FormErrorListWithErrorsProps = {
  /** Whether the component has set focus once. */
  hasFocusedOnce: boolean
  /** Callback to let parent component know whether focus has been set once. */
  setHasFocusedOnce: any
}

const FormErrorListWithErrors = forwardRef(
  (
    {
      autoFocus = true,
      className,
      errors,
      hasFocusedOnce,
      heading = 'Verbeter de fouten voor u verder gaat',
      headingLevel = 2,
      setHasFocusedOnce,
      ...restProps
    }: FormErrorListProps & FormErrorListWithErrorsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    useEffect(() => {
      if (innerRef.current && autoFocus && !hasFocusedOnce) {
        innerRef.current.focus()
        setHasFocusedOnce(true)
      }
    }, [innerRef])

    return (
      <Alert
        {...restProps}
        className={clsx('ams-form-error-list', className)}
        heading={heading}
        headingLevel={headingLevel}
        ref={innerRef}
        severity="error"
        tabIndex={-1}
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

FormErrorListWithErrors.displayName = 'FormErrorListWithErrors'

export type ErrorCountLabelProps = {
  /**
   * The text following the error count.
   * This is used to show the error count in the document title.
   */
  errorCountLabel?: { plural: string; singular: string }
}

export const FormErrorList = forwardRef(
  (
    { errors, errorCountLabel, ...restProps }: FormErrorListProps & ErrorCountLabelProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
        ref={ref}
        hasFocusedOnce={hasFocusedOnce}
        setHasFocusedOnce={setHasFocusedOnce}
      />
    )
  },
)

FormErrorList.displayName = 'FormErrorList'
