/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import type { Dispatch, ForwardedRef, SetStateAction } from 'react'
import type { FormErrorListProps } from './FormErrorList'
import { Alert } from '../Alert'
import { LinkList } from '../LinkList'

type FormErrorListWithErrorsProps = Omit<FormErrorListProps, 'errorCountLabel'> & {
  /** Whether the component has set focus once. */
  hasFocusedOnce: boolean
  /** Callback to let parent component know whether focus has been set once. */
  setHasFocusedOnce: Dispatch<SetStateAction<boolean>>
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
    }: FormErrorListWithErrorsProps,
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
