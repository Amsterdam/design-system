import { fireEvent, render } from '@testing-library/react'
import { useRef } from 'react'
import { KeyboardKeys, useKeyboardFocus } from './useKeyboardFocus'

describe('use focus with arrows', () => {
  const onFocusOneMock = jest.fn()
  const onFocusTwoMock = jest.fn()
  const onFocusThreeMock = jest.fn()

  const getComponent = (rotate: boolean | undefined = undefined) =>
    function () {
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
    const Component = getComponent()
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement
    const buttons = container.querySelectorAll('button')

    expect(onFocusOneMock).not.toHaveBeenCalled()

    // Manually set focus to the first button
    buttons[0].focus()

    // 4 times, so we can check if there are no other elements focused after reaching the last one
    Array.from(Array(4).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowDown,
      })
      // buttons[(index + 1) % buttons.length].focus()
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
    const Component = getComponent(true)
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement
    const buttons = container.querySelectorAll('button')

    // Manually set focus to the first button
    buttons[0].focus()

    Array.from(Array(9).keys()).forEach((_, index) => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowDown,
      })
      buttons[(index + 1) % buttons.length].focus()
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(4)

    Array.from(Array(9).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: KeyboardKeys.ArrowUp,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(7)
  })

  it('sets focus to first element when using "Home" key', () => {
    const Component = getComponent()
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement
    const buttons = container.querySelectorAll('button')

    fireEvent.keyDown(firstChild, {
      key: KeyboardKeys.Home,
    })
    buttons[0].focus()

    expect(onFocusOneMock).toHaveBeenCalledTimes(1)
  })

  it('sets focus to last element when using "End" key', () => {
    const Component = getComponent()
    const { container } = render(<Component />)

    const firstChild = container.firstChild as HTMLElement
    const buttons = container.querySelectorAll('button')

    fireEvent.keyDown(firstChild, {
      key: KeyboardKeys.End,
    })
    buttons[buttons.length - 1].focus()

    expect(onFocusThreeMock).toHaveBeenCalledTimes(1)
  })
})
