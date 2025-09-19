/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'

import type { ButtonProps } from '../Button'

import { Button } from '../Button'

type SearchFieldButtonProps = Omit<ButtonProps, 'icon' | 'iconBefore' | 'iconOnly' | 'variant'>

export const SearchFieldButton = forwardRef(
  ({ children = 'Zoeken', ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button {...restProps} icon={SearchIcon} iconOnly ref={ref}>
      {children}
    </Button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
