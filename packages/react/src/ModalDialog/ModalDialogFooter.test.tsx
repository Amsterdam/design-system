/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { ModalDialogFooter } from './ModalDialogFooter'

describe('ModalDialogFooter', () => {
  it('renders', () => {
    render(<ModalDialogFooter>Footer content</ModalDialogFooter>)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Footer content')
  })

  it('renders a design system BEM class name', () => {
    render(<ModalDialogFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-modal-dialog__footer')
  })

  it('renders an extra class name', () => {
    render(<ModalDialogFooter className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-modal-dialog__footer extra')
  })

  it('renders children', () => {
    render(
      <ModalDialogFooter>
        <button>Click Me</button>
      </ModalDialogFooter>,
    )

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<ModalDialogFooter ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('contentinfo'))
  })

  it('passes additional props', () => {
    render(<ModalDialogFooter data-test="data-test" id="id" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
