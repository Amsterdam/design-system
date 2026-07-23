/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export const themeNames = ['Spacious', 'Spacious sketch', 'Compact', 'Compact sketch']

export const defaultTheme = 'Spacious'

/**
 * The theme to render for a story: the selected theme if the story supports it, otherwise the
 * supported theme that matches the fidelity of the selection.
 */
export const matchTheme = (options: string[], selected: string) => {
  if (options.includes(selected)) {
    return selected
  }

  const sameFidelity = options.find((name) => name.includes('sketch') === selected.includes('sketch'))

  return sameFidelity ?? options[0] ?? selected
}

// The channel event the toolbar sends to the preview when the selection changes. The theme is not a
// Storybook global on purpose: a global change re-renders every story on the page, which is janky on
// docs pages with many canvases, whereas a class toggle is a single style recalc.
export const THEME_EVENT = 'amsterdam/set-theme'

export const THEME_KEY = 'amsterdam-storybook-theme'

/** Reads the persisted theme selection, falling back to the default. */
export const readStoredTheme = (): string => {
  try {
    const stored = localStorage.getItem(THEME_KEY)

    return stored && themeNames.includes(stored) ? stored : defaultTheme
  } catch {
    return defaultTheme
  }
}

/** Persists the theme selection so it survives a reload. */
export const storeTheme = (theme: string): void => {
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    // Ignore environments without localStorage.
  }
}
