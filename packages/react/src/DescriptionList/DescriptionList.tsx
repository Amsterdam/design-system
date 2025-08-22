/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { DescriptionListDescription } from './DescriptionListDescription'
import { DescriptionListSection } from './DescriptionListSection'
import { DescriptionListTerm } from './DescriptionListTerm'

export const descriptionListTermsWidths = ['narrow', 'medium', 'wide'] as const
type DescriptionListTermsWidth = (typeof descriptionListTermsWidths)[number]

export type DescriptionListProps = PropsWithChildren<HTMLAttributes<HTMLDListElement>> & {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /* The width of the column containing the terms. */
  termsWidth?: DescriptionListTermsWidth
}

const DescriptionListRoot = forwardRef(
  (
    { children, className, color, termsWidth, ...restProps }: DescriptionListProps,
    ref: ForwardedRef<HTMLDListElement>,
  ) => (
    <dl
      {...restProps}
      className={clsx(
        'ams-description-list',
        color && `ams-description-list--${color}`,
        termsWidth && `ams-description-list--${termsWidth}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </dl>
  ),
)

DescriptionListRoot.displayName = 'DescriptionList'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-description-list--docs Description List docs at Amsterdam Design System}
 */
export const DescriptionList = Object.assign(DescriptionListRoot, {
  Description: DescriptionListDescription,
  Section: DescriptionListSection,
  Term: DescriptionListTerm,
})
