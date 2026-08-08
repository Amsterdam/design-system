/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

export type AlertDialogBodyProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * The main content of an Alert Dialog. It scrolls if it is taller than the available space.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-alert-dialog--docs Alert Dialog docs at Amsterdam Design System}
 */
export const AlertDialogBody = forwardRef(
  ({ children, className, tabIndex, ...restProps }: AlertDialogBodyProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)
    const [isScrollable, setIsScrollable] = useState(false)

    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    /* Chromium and Firefox make a scroll container without focusable content focusable,
    so that it can always be scrolled with the keyboard. Safari does not yet –
    add a tabindex when the body scrolls to guarantee keyboard access to its content. */
    useEffect(() => {
      const element = innerRef.current

      if (!element || typeof ResizeObserver === 'undefined') {
        return undefined
      }

      const observer = new ResizeObserver(() =>
        setIsScrollable(element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth),
      )

      observer.observe(element)

      return () => observer.disconnect()
    }, [])

    return (
      <div
        {...restProps}
        className={clsx('ams-alert-dialog__body', className)}
        ref={innerRef}
        tabIndex={tabIndex ?? (isScrollable ? 0 : undefined)}
      >
        {children}
      </div>
    )
  },
)

AlertDialogBody.displayName = 'AlertDialog.Body'
