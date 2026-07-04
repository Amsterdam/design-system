/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { act, render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ModalDialogBody } from './ModalDialogBody'

describe('ModalDialogBody', () => {
  it('renders', () => {
    const { container } = render(<ModalDialogBody>Body content</ModalDialogBody>)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Body content')
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<ModalDialogBody />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-modal-dialog__body')
  })

  it('renders an extra class name', () => {
    const { container } = render(<ModalDialogBody className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-modal-dialog__body extra')
  })

  it('renders children', () => {
    render(
      <ModalDialogBody>
        <p>Inside body</p>
      </ModalDialogBody>,
    )

    expect(screen.getByText('Inside body')).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<ModalDialogBody ref={ref} />)

    expect(ref.current).toBe(container.querySelector(':only-child'))
  })

  it('passes additional props', () => {
    const { container } = render(<ModalDialogBody data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  describe('keyboard focusability', () => {
    let resizeCallback: () => void = () => {}

    const defineSizes = (element: Element, clientHeight: number, scrollHeight: number) => {
      Object.defineProperty(element, 'clientHeight', { configurable: true, value: clientHeight })
      Object.defineProperty(element, 'scrollHeight', { configurable: true, value: scrollHeight })
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
      const { container } = render(<ModalDialogBody />)

      expect(container.querySelector(':only-child')).not.toHaveAttribute('tabindex')
    })

    it('becomes focusable when its content overflows', () => {
      const { container } = render(<ModalDialogBody />)

      const component = container.querySelector(':only-child') as HTMLDivElement
      defineSizes(component, 48, 200)

      act(() => resizeCallback())

      expect(component).toHaveAttribute('tabindex', '0')
    })

    it('keeps a provided tabIndex', () => {
      const { container } = render(<ModalDialogBody tabIndex={-1} />)

      const component = container.querySelector(':only-child') as HTMLDivElement
      defineSizes(component, 48, 200)

      act(() => resizeCallback())

      expect(component).toHaveAttribute('tabindex', '-1')
    })
  })
})
