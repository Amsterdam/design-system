/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

type SearchFieldButtonProps = {
  /** Describes the field for screen readers. */
  label?: string
} & HTMLAttributes<HTMLButtonElement>

// TODO: replace this with IconButton when that's done
// TODO: discuss if IconButton is the right component to replace this
export const SearchFieldButton = forwardRef(
  ({ label = 'Zoeken', className, ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('ams-search-field__button', className)}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon svg={SearchIcon} size="level-5" square />
    </button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
