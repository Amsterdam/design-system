export const argTypes = {
  variant: {
    type: 'select',
    options: ['primary', 'secondary', 'tertiary'],
  },
  type: {
    type: 'select',
    options: [undefined, 'button', 'submit', 'reset'],
  },
  small: {
    type: 'boolean',
  },
  disabled: {
    type: 'boolean',
  },
}
