/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { KeyboardEvent, RefObject } from 'react'

export const KeyboardKeys = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  Home: 'Home',
  End: 'End',
}

/**
 * Focus on children with arrow keys and home / end buttons.
 *
 * @param ref Component ref
 * @param rotating Jump to first item from last or vice versa
 * @param horizontally In case you need to navigate horizontally, using left / right arrow buttons
 */
const useFocusWithArrows = (ref: RefObject<HTMLDivElement>, rotating = false, horizontally = false) => {
  const next = horizontally ? KeyboardKeys.ArrowRight : KeyboardKeys.ArrowDown
  const previous = horizontally ? KeyboardKeys.ArrowLeft : KeyboardKeys.ArrowUp
  const keyDown = (e: KeyboardEvent) => {
    if (ref.current) {
      const element = ref.current

      const { activeElement } = window.document
      const focusableEls: Array<Element> = Array.from(element.querySelectorAll('.amsterdam-accordion__button'))

      const getIndex = (el: Element | null) => {
        return el && focusableEls.includes(el) ? focusableEls.indexOf(el) : 0
      }

      let el

      switch (e.key) {
        case next: {
          if (getIndex(activeElement) !== focusableEls.length - 1) {
            el = focusableEls[getIndex(activeElement) + 1]
            // If there is nothing focused yet, set the focus on the first element
            if (activeElement && !focusableEls.includes(activeElement)) {
              el = focusableEls[0]
            }
          } else if (rotating) {
            el = focusableEls[0]
          }

          break
        }

        case previous: {
          if (getIndex(activeElement) !== 0) {
            el = focusableEls[getIndex(activeElement) - 1]
          } else if (rotating) {
            el = focusableEls[focusableEls.length - 1]
          }
          break
        }

        case KeyboardKeys.Home: {
          el = focusableEls[0]
          break
        }

        case KeyboardKeys.End: {
          el = focusableEls[focusableEls.length - 1]
          break
        }

        default:
      }

      if (
        (e.key === KeyboardKeys.ArrowDown ||
          e.key === KeyboardKeys.ArrowUp ||
          e.key === KeyboardKeys.ArrowLeft ||
          e.key === KeyboardKeys.ArrowRight ||
          e.key === KeyboardKeys.Home ||
          e.key === KeyboardKeys.End) &&
        el instanceof HTMLElement
      ) {
        el.focus()
        e.preventDefault()
      }
    }
  }

  return {
    keyDown,
  }
}

export default useFocusWithArrows
