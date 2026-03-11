/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Figure } from './Figure'

describe('Figure', () => {
  it('renders', () => {
    render(<Figure />)

    const component = screen.getByRole('figure')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Figure />)

    const component = screen.getByRole('figure')

    expect(component).toHaveClass('ams-figure')
  })

  it('renders an extra class name', () => {
    render(<Figure className="extra" />)

    const component = screen.getByRole('figure')

    expect(component).toHaveClass('ams-figure extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Figure ref={ref} />)

    const component = screen.getByRole('figure')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<Figure aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
