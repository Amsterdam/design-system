/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { act, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { AlertDialogBody } from './AlertDialogBody'

describe('AlertDialogBody', () => {
  it('renders', () => {
    const { container } = render(<AlertDialogBody>Body content</AlertDialogBody>)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Body content')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<AlertDialogBody />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert-dialog__body')
  })

  it('renders an extra class name', () => {
    const { container } = render(<AlertDialogBody className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-alert-dialog__body extra')
  })

  it('renders children', () => {
    render(
      <AlertDialogBody>
        <p>Inside body</p>
      </AlertDialogBody>,
    )

    expect(screen.getByText('Inside body')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<AlertDialogBody ref={ref} />)

    expect(ref.current).toBe(container.querySelector(':only-child'))
  })

  it('passes additional props', () => {
    const { container } = render(<AlertDialogBody data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  describe('keyboard focusability', () => {
    let resizeCallback: () => void = () => {}

    const defineSizes = (
      element: Element,
      sizes: Partial<Record<'clientHeight' | 'clientWidth' | 'scrollHeight' | 'scrollWidth', number>>,
    ) => {
      for (const [property, value] of Object.entries(sizes)) {
        Object.defineProperty(element, property, { configurable: true, value })
      }
    }

    beforeEach(() => {
      vi.stubGlobal(
        'ResizeObserver',
        class {
          constructor(callback: () => void) {
            resizeCallback = callback
          }
          disconnect() {}
          observe() {}
          unobserve() {}
        },
      )
    })

    afterEach(() => {
      vi.unstubAllGlobals()
    })

    it('is not focusable by default', () => {
      const { container } = render(<AlertDialogBody />)

      expect(container.querySelector(':only-child')).not.toHaveAttribute('tabindex')
    })

    it('becomes focusable when its content overflows vertically', () => {
      const { container } = render(<AlertDialogBody />)

      const component = container.querySelector(':only-child') as HTMLDivElement
      defineSizes(component, { clientHeight: 48, scrollHeight: 200 })

      act(() => resizeCallback())

      expect(component).toHaveAttribute('tabindex', '0')
    })

    it('becomes focusable when its content overflows horizontally', () => {
      const { container } = render(<AlertDialogBody />)

      const component = container.querySelector(':only-child') as HTMLDivElement
      defineSizes(component, { clientWidth: 320, scrollWidth: 640 })

      act(() => resizeCallback())

      expect(component).toHaveAttribute('tabindex', '0')
    })

    it('keeps a provided tabIndex', () => {
      const { container } = render(<AlertDialogBody tabIndex={-1} />)

      const component = container.querySelector(':only-child') as HTMLDivElement
      defineSizes(component, { clientHeight: 48, scrollHeight: 200 })

      act(() => resizeCallback())

      expect(component).toHaveAttribute('tabindex', '-1')
    })
  })
})
