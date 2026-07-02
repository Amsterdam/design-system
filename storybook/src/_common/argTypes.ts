/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// Note: the icon arg types live in iconArgTypes.ts – they pull in the entire icon package.

/**
 * An `as` prop offering the component’s allowed tags, which default to `div`.
 * Picks a radio or select control based on the number of options.
 */
export const asArgType = (tags: readonly string[]) => {
  const options = [undefined, ...tags.filter((tag) => tag !== 'div')]

  return {
    control: {
      labels: { undefined: 'div (default)' },
      type: options.length > 5 ? ('select' as const) : ('radio' as const),
    },
    options,
  }
}

/**
 * A `children` prop whose content is a simple string.
 * Unhides the globally hidden arg and offers a text control.
 */
export const childrenArgType = (description: string) =>
  ({
    control: 'text',
    description,
    table: { disable: false },
  }) as const

/** The native `checked` attribute of checkable inputs. */
export const checkedArgType = {
  description: 'Whether the control is checked.',
} as const

/**
 * A colour prop offering the component’s palette. Labels `undefined` with the default colour.
 * Picks a radio or select control based on the number of options.
 */
export const colorArgType = (colors: readonly string[], defaultColor: string) => {
  const options = [undefined, ...colors.filter((color) => color !== defaultColor)]

  return {
    control: {
      labels: { undefined: `${defaultColor} (default)` },
      type: options.length > 5 ? ('select' as const) : ('radio' as const),
    },
    options,
  }
}

/** A colour prop offering `contrast` and `inverse` for readability on a light or dark background. */
export const contrastInverseColorArgType = {
  control: {
    labels: { undefined: 'default' },
    type: 'radio',
  },
  options: [undefined, 'contrast', 'inverse'],
} as const

/** An arg that updates automatically, e.g. through a decorator. Describe what drives its value. */
export const derivedArgType = (description: string) =>
  ({
    control: false,
    description,
    table: { category: 'Derived', readonly: true },
  }) as const

/** The native `disabled` attribute of interactive elements. */
export const disabledArgType = {
  description: 'Prevents interaction. Avoid if possible.',
} as const

/**
 * A heading level prop. Pass the levels the component accepts.
 * For an optional prop, pass its default level as well; `undefined` then gets offered and labelled with it.
 */
export const headingLevelArgType = (options: readonly number[] = [1, 2, 3, 4], defaultLevel?: number) => ({
  control: {
    ...(defaultLevel !== undefined && { labels: { undefined: `${defaultLevel} (default)` } }),
    type: 'radio' as const,
  },
  options:
    defaultLevel === undefined ? [...options] : [undefined, ...options.filter((level) => level !== defaultLevel)],
})

/** The native `href` attribute of links. */
export const hrefArgType = {
  description: 'The url for the link.',
} as const

/** The native `id` attribute of form controls that generate one when it isn’t provided. */
export const idArgType = {
  description: 'The id of the input element. If not provided, a unique id will be generated.',
} as const

/** A colour prop offering `inverse` for readability on a dark background. */
export const inverseColorArgType = {
  control: {
    labels: { undefined: 'default' },
    type: 'radio',
  },
  options: [undefined, 'inverse'],
} as const

/** A `linkComponent` prop: a component type has no useful control, but the row is worth showing. */
export const linkComponentArgType = {
  control: false,
} as const

/** A text size prop, whose default is medium. Pass the options in ascending order, `undefined` for medium. */
export const textSizeArgType = (options: readonly (string | undefined)[]) =>
  ({
    control: {
      labels: { undefined: 'medium (default)' },
      type: 'radio',
    },
    options: [...options],
  }) as const
