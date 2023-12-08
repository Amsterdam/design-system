/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

interface SearchFieldButtonProps extends HTMLAttributes<HTMLButtonElement> {}

// TODO: replace this with IconButton when that's done
export const SearchFieldButton = forwardRef(
  ({ className, ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('amsterdam-search-field__button', className)}>
      <VisuallyHidden>Zoeken</VisuallyHidden>
      <Icon svg={SearchIcon} size="level-6" />
    </button>
  ),
)

SearchFieldButton.displayName = 'SearchFieldButton'
