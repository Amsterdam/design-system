/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { KeyboardEvent, RefObject } from 'react'

export const KeyboardKeys = {
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ArrowUp: 'ArrowUp',
  End: 'End',
  Home: 'Home',
}

const FOCUSABLE_ELEMENTS = [
  'a[href]:not([disabled])',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input[type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input[type="checkbox"]:not([disabled])',
  'select:not([disabled])',
]

type Options = {
  directChildrenOnly?: boolean
  focusableElements?: string[]
  horizontally?: boolean
  rotating?: boolean
}

export const useKeyboardFocus = (ref: RefObject<HTMLElement>, options: Options) => {
  const {
    directChildrenOnly = false,
    focusableElements = FOCUSABLE_ELEMENTS,
    horizontally = false,
    rotating = false,
  } = options

  const nextKey = horizontally ? KeyboardKeys.ArrowRight : KeyboardKeys.ArrowDown
  const prevKey = horizontally ? KeyboardKeys.ArrowLeft : KeyboardKeys.ArrowUp

  const keyDown = (e: KeyboardEvent) => {
    if (!ref.current) return

    const element = ref.current
    const { activeElement } = document
    const directChildSelector = directChildrenOnly ? ':scope > ' : ''
    const focusableEls: Array<Element> = Array.from(
      element.querySelectorAll(`${directChildSelector}${focusableElements.join(`, ${directChildSelector}`)}`),
    )

    const getIndex = (el: Element | null) => (el && focusableEls.includes(el) ? focusableEls.indexOf(el) : -1)

    let targetElement: Element | undefined

    switch (e.key) {
      case nextKey:
        targetElement = focusableEls[getIndex(activeElement) + 1] || (rotating ? focusableEls[0] : undefined)
        break
      case prevKey:
        targetElement =
          focusableEls[getIndex(activeElement) - 1] || (rotating ? focusableEls[focusableEls.length - 1] : undefined)
        break
      case KeyboardKeys.Home:
        targetElement = focusableEls[0]
        break
      case KeyboardKeys.End:
        targetElement = focusableEls[focusableEls.length - 1]
        break
    }

    if (targetElement instanceof HTMLElement) {
      targetElement.focus()
      e.preventDefault()
    }
  }

  return { keyDown }
}
