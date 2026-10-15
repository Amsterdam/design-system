/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { DataListActions } from './DataListActions'
import { DataListItem } from './DataListItem'
import { DataListLabel } from './DataListLabel'
import { DataListValue } from './DataListValue'

export const dataListOrientations = ['horizontal', 'vertical'] as const
type DataListOrientation = (typeof dataListOrientations)[number]
export const dataListTermsWidths = ['narrow', 'medium', 'wide'] as const
type DataListTermsWidth = (typeof dataListTermsWidths)[number]

export type DataListProps = {
  /**
   * Whether a label and its value sit side by side in a wide enough container, or always below each other.
   * @default horizontal
   */
  readonly orientation?: DataListOrientation
  /** The width of the column containing the labels. */
  readonly termsWidth?: DataListTermsWidth
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDListElement>>>

const DataListRoot = forwardRef(
  (
    { children, className, orientation = 'horizontal', termsWidth, ...restProps }: DataListProps,
    ref: ForwardedRef<HTMLDListElement>,
  ) => (
    <dl
      {...restProps}
      className={clsx(
        'ams-data-list',
        `ams-data-list--${orientation}`,
        termsWidth && `ams-data-list--${termsWidth}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </dl>
  ),
)

DataListRoot.displayName = 'DataList'

/**
 * An overview of data, presenting each label with its value on a line of its own.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-data-list--docs Data List docs at Amsterdam Design System}
 */
export const DataList = Object.assign(DataListRoot, {
  Actions: DataListActions,
  Item: DataListItem,
  Label: DataListLabel,
  Value: DataListValue,
})
