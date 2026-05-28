/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { useRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { KeyboardKeys, useKeyboardFocus } from './useKeyboardFocus'

describe('useKeyboardFocus', () => {
  const onFocusOneMock = vi.fn()
  const onFocusTwoMock = vi.fn()
  const onFocusThreeMock = vi.fn()

  const Component = ({ rotate = undefined }: { readonly rotate?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { keyDown } = useKeyboardFocus(ref, {
      rotating: rotate,
    })

    return (
      <div onKeyDown={keyDown} ref={ref} role="menu" tabIndex={0}>
        <button onFocus={onFocusOneMock} type="button">
          One
        </button>
        <button onFocus={onFocusTwoMock} type="button">
          Two
        </button>
        <button onFocus={onFocusThreeMock} type="button">
          Three
        </button>
      </div>
    )
  }

  afterEach(() => {
    onFocusOneMock.mockReset()
    onFocusTwoMock.mockReset()
    onFocusThreeMock.mockReset()
  })

  it('sets focus when using arrow keys', () => {
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement

    expect(onFocusOneMock).not.toHaveBeenCalled()

    // 4 times, so we can check if there are no other elements focused after reaching the last one
    Array.from(Array(4).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowDown,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(1)
    expect(onFocusTwoMock).toHaveBeenCalledTimes(1)
    expect(onFocusThreeMock).toHaveBeenCalledTimes(1)

    // Same here
    Array.from(Array(4).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowUp,
      })
    })

    expect(onFocusTwoMock).toHaveBeenCalledTimes(2)
    expect(onFocusOneMock).toHaveBeenCalledTimes(2)
  })

  it('rotates focused elements', () => {
    const { container } = render(<Component rotate />)

    const firstChild = container.firstChild as HTMLElement

    Array.from(Array(9).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowDown,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(3)

    Array.from(Array(9).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowUp,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(6)
  })

  it('only navigates direct children when directChildrenOnly is true', () => {
    const onFocusNestedMock = vi.fn()

    const DirectChildComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      const { keyDown } = useKeyboardFocus(ref, { directChildrenOnly: true })

      return (
        <div onKeyDown={keyDown} ref={ref} role="menu" tabIndex={0}>
          <button onFocus={onFocusOneMock} type="button">
            One
          </button>
          <div>
            <button onFocus={onFocusNestedMock} type="button">
              Nested
            </button>
          </div>
          <button onFocus={onFocusTwoMock} type="button">
            Two
          </button>
        </div>
      )
    }

    render(<DirectChildComponent />)

    const component = screen.getByRole('menu')

    fireEvent.keyDown(component, { key: KeyboardKeys.ArrowDown })
    expect(onFocusOneMock).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(component, { key: KeyboardKeys.ArrowDown })
    expect(onFocusTwoMock).toHaveBeenCalledTimes(1)
    expect(onFocusNestedMock).not.toHaveBeenCalled()
  })

  it('sets focus to first element when using "Home" key', () => {
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement

    fireEvent.keyDown(firstChild, {
      key: KeyboardKeys.Home,
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(1)
  })

  it('does nothing when ref.current is null', () => {
    const NullRefComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      const { keyDown } = useKeyboardFocus(ref, {})
      // ref is intentionally not attached to any element so ref.current stays null
      return <div onKeyDown={keyDown} role="menu" tabIndex={0} />
    }

    render(<NullRefComponent />)

    const component = screen.getByRole('menu')

    fireEvent.keyDown(component, { key: KeyboardKeys.ArrowDown })
    // Should return early without focusing anything
    expect(onFocusOneMock).not.toHaveBeenCalled()
  })

  it('sets focus to last element when using "End" key', () => {
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement

    fireEvent.keyDown(firstChild, {
      key: KeyboardKeys.End,
    })

    expect(onFocusThreeMock).toHaveBeenCalledTimes(1)
  })
})
