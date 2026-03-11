/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { PageFooter } from './PageFooter'

describe('PageFooter', () => {
  it('renders an HTML footer element', () => {
    render(<PageFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageFooter />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-page-footer')
  })

  it('renders an extra class name', () => {
    render(<PageFooter className="extra" />)

    const component = screen.getByRole('contentinfo')

    expect(component).toHaveClass('ams-page-footer extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<PageFooter ref={ref} />)

    const component = screen.getByRole('contentinfo')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<PageFooter aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
