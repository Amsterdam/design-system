/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button as CommunityButton } from '@utrecht/component-library-react'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // TODO: candidate for being its own type
  variant?: 'primary' | 'secondary' | 'tertiary'
}

type CommunityButtonAppearance = 'primary-action-button' | 'secondary-action-button' | 'subtle-button'

function getAppearance(variant: ButtonProps['variant']): CommunityButtonAppearance {
  switch (variant) {
    case 'secondary':
      return 'secondary-action-button'
    case 'tertiary':
      return 'subtle-button'
    default:
      return 'primary-action-button'
  }
}

export const Button = forwardRef(
  ({ children, disabled, variant, ...rest }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <CommunityButton
        {...rest}
        appearance={getAppearance(variant)}
        ref={ref}
        aria-disabled={disabled ?? false}
        disabled={disabled}
      >
        {children}
      </CommunityButton>
    )
  },
)

Button.displayName = 'Button'
