/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export const themeNames = ['Spacious', 'Spacious wireframe', 'Compact', 'Compact wireframe']

export const defaultTheme = 'Spacious'

/**
 * The theme to render for a story: the selected theme if the story supports it, otherwise the
 * supported theme that matches the fidelity of the selection.
 */
export const matchTheme = (options: string[], selected: string) => {
  if (options.includes(selected)) {
    return selected
  }

  const sameFidelity = options.find((name) => name.includes('wireframe') === selected.includes('wireframe'))

  return sameFidelity ?? options[0] ?? selected
}
