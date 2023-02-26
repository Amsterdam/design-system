/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Amsterdam
 */

// import React from 'react';
import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Simple click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;

  /**
   * Size of the component
   */
  size?: 'medium' | 'large';

  /**
   * Button variant
   */
  variant?: 'primary-action' | 'secondary-action';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  type = 'button',
  ...props
}: ButtonProps) => {
  const buttonClassNames = clsx(
    'amsterdam-button',
    {
      'amsterdam-button--secondary-action': props.variant === 'secondary-action',
      'amsterdam-button--large': props.size === 'large',
    },
    className,
  );

  return (
    <button {...props} type={type} className={buttonClassNames}>
      <span className={'amsterdam-button__label'}>{props.children}</span>
    </button>
  );
};