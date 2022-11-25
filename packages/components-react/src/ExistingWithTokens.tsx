// I haven't used an existing button component here, because storybook imports component css in the head.
// The imported css from ExistingWithBem would also style this component if I used the same community component.
// I only used tokens to style this component, which illustrates that tokens won't get you very far...
// You could complete the styling with css, but that's a little confusing imo.

import { ButtonLink as CommunityButtonLink } from '@utrecht/component-library-react';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

// Somehow `placeholder` incorrectly is a global HTML attribute in React, ignore that
export interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  variant?: string;
  small?: boolean;
}

export const ExistingWithTokens = ({ variant, ...restProps }: PropsWithChildren<ButtonLinkProps>) => {
  switch (variant) {
    case 'secondary':
      return <CommunityButtonLink appearance="secondary-action-button" {...restProps} />;
    case 'tertiary':
      return <CommunityButtonLink appearance="subtle-button" {...restProps} />;
    default:
      return <CommunityButtonLink appearance="primary-action-button" {...restProps} />;
  }
};
