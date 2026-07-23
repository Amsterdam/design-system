/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useSyncExternalStore } from 'react'

const compactClass = 'ams-theme--compact'

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)

  observer.observe(document.documentElement, { attributeFilter: ['class'], attributes: true })

  return () => observer.disconnect()
}

const getSnapshot = () => document.documentElement.classList.contains(compactClass)

/**
 * Whether the story renders in one of the Compact themes, kept in sync with the toolbar.
 *
 * The theme is applied as a mode class on the document rather than kept in a Storybook global, and a
 * theme switch toggles that class without re-rendering the story. Subscribing to the class with a
 * MutationObserver re-renders the caller when the mode changes, so theme-dependent markup stays correct
 * on a live switch. Use it to adapt markup that only makes sense in Compact Mode, such as making a Grid
 * Cell transparent so it does not cover a coloured Spotlight background with its own white background.
 */
export const useIsCompactTheme = (): boolean => useSyncExternalStore(subscribe, getSnapshot)
