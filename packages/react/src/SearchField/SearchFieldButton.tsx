/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { Button } from '../Button'
import type { ButtonProps } from '../Button'

type SearchFieldButtonProps = Omit<ButtonProps, 'icon' | 'iconPosition' | 'variant'>

export const SearchFieldButton = forwardRef(
  ({ children = 'Zoeken', ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button {...restProps} icon={SearchIcon} iconOnly ref={ref}>
      {children}
    </Button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
