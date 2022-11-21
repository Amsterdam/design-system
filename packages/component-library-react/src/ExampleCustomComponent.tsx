import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '../../../components/example-custom-component/example-custom-component.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: string;
  busy?: boolean;
  hint?: string;
  pressed?: boolean;
}

export const ExampleCustomComponent = forwardRef(
  (
    {
      appearance,
      busy,
      disabled,
      children,
      className,
      hint,
      pressed,
      type,
      ...restProps
    }: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          'amsterdam-button',
          busy && 'amsterdam-button--busy',
          disabled && 'amsterdam-button--disabled',
          type === 'submit' && 'amsterdam-button--submit',
          appearance === 'primary-action-button' && 'amsterdam-button--primary-action',
          appearance === 'secondary-action-button' && 'amsterdam-button--secondary-action',
          appearance === 'subtle-button' && 'amsterdam-button--subtle',
          hint === 'danger' && 'amsterdam-button--danger',
          hint === 'warning' && 'amsterdam-button--warning',
          hint === 'ready' && 'amsterdam-button--ready',
          pressed === true && 'amsterdam-button--pressed',
          className,
        )}
        aria-busy={busy || undefined}
        aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
        disabled={disabled}
        type={type || 'button'}
      >
        {children}
      </button>
    );
  },
);

ExampleCustomComponent.displayName = 'Button';

export const PrimaryActionButton = ({ ...args }) => {
  return <ExampleCustomComponent {...args} appearance="primary-action-button" />;
};

PrimaryActionButton.displayName = 'PrimaryActionButton';

export const SecondaryActionButton = ({ ...args }) => {
  return <ExampleCustomComponent {...args} appearance="secondary-action-button" />;
};

SecondaryActionButton.displayName = 'SecondaryActionButton';

export const SubtleButton = ({ ...args }) => {
  return <ExampleCustomComponent {...args} appearance="subtle-button" />;
};

SubtleButton.displayName = 'SubtleButton';
