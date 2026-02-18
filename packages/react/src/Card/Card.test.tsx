/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { Card } from './Card'

describe('Card', () => {
  it('renders', () => {
    const { container } = render(<Card />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Card />)

    const component = screen.getByRole('article')

    expect(component).toHaveClass('ams-card')
  })

  it('renders an extra class name', () => {
    render(<Card className="extra" />)

    const component = screen.getByRole('article')

    expect(component).toHaveClass('ams-card extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>()

    render(<Card ref={ref} />)

    const component = screen.getByRole('article')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<Card aria-hidden={false} data-test="data-test" id="id" />)

    const component = screen.getByRole('article')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
