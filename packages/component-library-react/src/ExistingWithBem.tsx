// example of restyled existing component: https://github.com/nl-design-system/rvo/blob/master/components/button/css/template.tsx

import { Button as CommunityButton } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ExistingWithBemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  small?: boolean;
}

export const ExistingWithBem = ({
  variant,
  small,
  className,
  ...restProps
}: PropsWithChildren<ExistingWithBemProps>) => {
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
