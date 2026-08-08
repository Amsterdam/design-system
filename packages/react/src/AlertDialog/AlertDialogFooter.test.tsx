/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { AlertDialogFooter } from './AlertDialogFooter'

describe('AlertDialogFooter', () => {
  it('renders', () => {
    render(<AlertDialogFooter>Footer content</AlertDialogFooter>)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toHaveTextContent('Footer content')
  })

  it('renders a design system BEM class name', () => {
    render(<AlertDialogFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-alert-dialog__footer')
  })

  it('renders an extra class name', () => {
    render(<AlertDialogFooter className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-alert-dialog__footer extra')
  })

  it('renders children', () => {
    render(
      <AlertDialogFooter>
        <button>Click Me</button>
      </AlertDialogFooter>,
    )

    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<AlertDialogFooter ref={ref} />)

    expect(ref.current).toBe(screen.getByRole('contentinfo'))
  })

  it('passes additional props', () => {
    render(<AlertDialogFooter data-test="data-test" id="id" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
