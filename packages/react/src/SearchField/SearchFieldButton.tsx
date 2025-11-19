/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'

import type { ButtonProps } from '../Button'

import { Button } from '../Button'

type SearchFieldButtonProps = Omit<ButtonProps, 'iconBefore' | 'iconOnly' | 'variant'>

export const SearchFieldButton = forwardRef(
  (
    { children = 'Zoeken', icon = SearchIcon, ...restProps }: SearchFieldButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <Button {...restProps} icon={icon} iconOnly ref={ref} type="submit">
      {children}
    </Button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
