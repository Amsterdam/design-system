/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, useEffect, useImperativeHandle, useRef } from 'react'
import type { FormError } from './FormErrorList'
import { Alert } from '../Alert'
import type { HeadingLevel } from '../Heading'
import { LinkList } from '../LinkList'

type FormErrorListRootProps = {
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

type FormErrorListWithErrorsProps = {
  /** Whether the component has set focus once. */
  hasFocusedOnce: boolean
  /** Callback to let parent component know whether focus has been set once. */
  setHasFocusedOnce: any
}

export const FormErrorListWithErrors = forwardRef(
  (
    {
      className,
      errors,
      focusOnRender = true,
      hasFocusedOnce,
      heading = 'Verbeter de fouten voor u verder gaat',
      headingLevel = 2,
      setHasFocusedOnce,
      ...restProps
    }: FormErrorListRootProps & FormErrorListWithErrorsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    useEffect(() => {
      if (innerRef.current && focusOnRender && !hasFocusedOnce) {
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
