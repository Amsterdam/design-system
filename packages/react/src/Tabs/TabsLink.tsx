/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type TabsLinkProps = {
  label: string
  selected?: boolean
  isDisabled?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const TabsLink = forwardRef(
  ({ label, className, selected, isDisabled, ...restProps }: TabsLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a
        {...restProps}
        ref={ref}
        className={clsx(
          'amsterdam-tabs__link',
          selected && 'amsterdam-tabs__link--selected',
          isDisabled && 'amsterdam-tabs__link--disabled',
          className,
        )}
      >
        {label}
      </a>
    )
  },
)

TabsLink.displayName = 'Tabs.Link'
