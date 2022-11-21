import { Button as CommunityButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import '../../../components/button/button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  small?: boolean;
}

export const Button = ({ variant, small, className, ...restProps }: PropsWithChildren<ButtonProps>) => {
  switch (variant) {
    case 'secondary':
      return (
        <CommunityButton
          appearance="secondary-action-button"
          className={clsx(small && 'utrecht-button--small', className)}
          {...restProps}
        />
      );
    case 'tertiary':
      return (
        <CommunityButton
          appearance="subtle-button"
          className={clsx(small && 'utrecht-button--small', className)}
          {...restProps}
        />
      );
    default:
      return (
        <CommunityButton
          appearance="primary-action-button"
          className={clsx(small && 'utrecht-button--small', className)}
          {...restProps}
        />
      );
  }
};
