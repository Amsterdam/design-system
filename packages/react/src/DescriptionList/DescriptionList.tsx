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

export const descriptionListTermsWidths = ['sm', 'md', 'lg'] as const
type DescriptionListTermsWidth = (typeof descriptionListTermsWidths)[number]

export type DescriptionListProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /* The width of the column containing the terms. */
  termsWidth?: DescriptionListTermsWidth
} & PropsWithChildren<HTMLAttributes<HTMLDListElement>>

const DescriptionListRoot = forwardRef(
  (
    { children, className, color, termsWidth, ...restProps }: DescriptionListProps,
    ref: ForwardedRef<HTMLDListElement>,
  ) => (
    <dl
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-description-list',
        color && `ams-description-list--${color}-color`,
        termsWidth && `ams-description-list--terms-width-${termsWidth}`,
        className,
      )}
    >
      {children}
    </dl>
  ),
)

DescriptionListRoot.displayName = 'DescriptionList'

export const DescriptionList = Object.assign(DescriptionListRoot, {
  Description: DescriptionListDescription,
  Section: DescriptionListSection,
  Term: DescriptionListTerm,
})
