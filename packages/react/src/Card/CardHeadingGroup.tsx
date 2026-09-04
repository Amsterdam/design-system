/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Children, forwardRef, isValidElement, useEffect, useRef } from 'react'

import { Metadata } from '../Metadata/Metadata'

const hasMetadataChild = (children: ReactNode) =>
  Children.toArray(children).some((child) => isValidElement(child) && child.type === Metadata)

export type CardHeadingGroupProps = {
  /**
   * A short phrase of text, e.g. to categorise the card. Displayed above the card heading.
   * @deprecated Add a Metadata as a child instead. Will be removed on or after 2027-02-08.
   */
  readonly tagline?: string
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * Groups a Card's heading with its metadata, ensuring screen readers encounter the heading first.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardHeadingGroup = forwardRef(
  ({ children, className, tagline, ...restProps }: CardHeadingGroupProps, ref: ForwardedRef<HTMLElement>) => {
    // The deprecation warning fires once with the values passed on mount, so we read them through refs to keep the effect dependency-free.
    const initialTaglineRef = useRef(tagline)
    const initialMetadataChildRef = useRef(hasMetadataChild(children))

    useEffect(() => {
      if (initialTaglineRef.current === undefined) {
        return
      }

      console.warn(
        initialMetadataChildRef.current
          ? '@deprecated The `tagline` prop of Card Heading Group renders a second Metadata beside the one you passed as a child. Remove the prop.'
          : '@deprecated The `tagline` prop of Card Heading Group has been replaced. Add a Metadata as a child instead.',
      )
    }, [])

    return (
      <hgroup {...restProps} className={clsx('ams-card__heading-group', className)} ref={ref}>
        {children}
        {tagline !== undefined && <Metadata size="small">{tagline}</Metadata>}
      </hgroup>
    )
  },
)

CardHeadingGroup.displayName = 'Card.HeadingGroup'
