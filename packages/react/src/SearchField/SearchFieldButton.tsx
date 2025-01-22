/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { Button } from '../Button'
import type { ButtonProps } from '../Button'

type SearchFieldButtonProps = Omit<ButtonProps, 'icon' | 'iconBefore' | 'iconOnly' | 'variant'>

export const SearchFieldButton = forwardRef(
  ({ children = 'Zoeken', ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button {...restProps} ref={ref} icon={SearchIcon} iconOnly>
      {children}
    </Button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
