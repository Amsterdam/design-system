/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button as CommunityButton } from '@utrecht/component-library-react'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
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
  ({ children, disabled, variant = 'primary', ...restProps }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <CommunityButton
        {...restProps}
        appearance={getAppearance(variant)}
        ref={ref}
        disabled={disabled}
        className={clsx(
          'amsterdam-button',
          variant === 'secondary' && 'amsterdam-button--secondary',
          variant === 'tertiary' && 'amsterdam-button--tertiary',
        )}
      >
        {children}
      </CommunityButton>
    )
  },
)

Button.displayName = 'Button'
