/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { DialogFooter } from './DialogFooter'

describe('DialogFooter', () => {
  it('renders', () => {
    render(<DialogFooter>Footer content</DialogFooter>)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Footer content')
  })

  it('renders a design system BEM class name', () => {
    render(<DialogFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-dialog__footer')
  })

  it('renders an extra class name', () => {
    render(<DialogFooter className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-dialog__footer extra')
  })

  it('renders children', () => {
    render(
      <DialogFooter>
        <button>Click Me</button>
      </DialogFooter>,
    )

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<DialogFooter ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('contentinfo'))
  })

  it('passes additional props', () => {
    render(<DialogFooter aria-label="Footer" data-test="data-test" id="id" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveAttribute('aria-label', 'Footer')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
