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

/**
 * The submit button within a Search Field.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-search-field--docs Search Field docs at Amsterdam Design System}
 */
export const SearchFieldButton = forwardRef(
  ({ children = 'Zoeken', ...restProps }: SearchFieldButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button {...restProps} icon={SearchIcon} iconOnly ref={ref} type="submit">
      {children}
    </Button>
  ),
)

SearchFieldButton.displayName = 'SearchField.Button'
