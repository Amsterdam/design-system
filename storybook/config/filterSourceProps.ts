/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// The Code Panel prints every prop a story passes, so args that exist only to shape the controls table
// end up in the source people copy. Two kinds do. Boolean flags carry `false` so the table shows a switch
// instead of a ‘Set boolean’ button. Event handlers arrive from an `action` or from a story keeping a
// controlled input in step, and print as an empty `() => {}` because the generator never shows a function
// body. Neither says anything the reader has to write, so `parameters.jsx.filterProps` leaves them out.

/**
 * Boolean props that are off unless a story turns them on, so `false` is what they do anyway.
 * A prop that is on by default – Ordered List’s `markers`, Invalid Form Alert’s `focusOnRender` – does not
 * belong here: its `false` switches the default off, which the code view has to show.
 */
const offByDefaultFlags = [
  'checked',
  'closeable',
  'disabled',
  'iconBefore',
  'iconOnly',
  'indeterminate',
  'invalid',
  'multiple',
  'optional',
  'wrap',
]

/**
 * Decides which props the Code Panel prints.
 * This replaces the generator’s own filter, which drops the props that are `undefined` – hence the first clause.
 */
export const filterSourceProps = (value: unknown, key: string): boolean =>
  value !== undefined &&
  !(value === false && offByDefaultFlags.includes(key)) &&
  !(typeof value === 'function' && /^on[A-Z]/.test(key))
