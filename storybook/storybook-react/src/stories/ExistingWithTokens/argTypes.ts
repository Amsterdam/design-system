export const argTypes = {
  variant: {
    type: 'select',
    defaultValue: 'primary',
    options: ['primary', 'secondary', 'tertiary'],
  },
  type: {
    type: 'select',
    options: [undefined, 'button', 'submit', 'reset'],
  },
  small: {
    type: 'boolean',
    defaultValue: false,
  },
  disabled: {
    type: 'boolean',
    defaultValue: false,
  },
};
