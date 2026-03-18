/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { AmsterdamLogo } from '.'

describe('AmsterdamLogo', () => {
  it('renders', () => {
    render(<AmsterdamLogo />)

    const component = screen.getByRole('img')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<AmsterdamLogo />)

    const component = screen.getByRole('img')

    expect(component).toHaveClass('ams-logo')
  })

  it('renders with at least ‘emblem’ and ‘primary text’ paths', () => {
    render(<AmsterdamLogo />)

    const component = screen.getByRole('img')

    expect(component.querySelector('.ams-logo__emblem')).toBeInTheDocument()
    expect(component.querySelector('.ams-logo__text-primary')).toBeInTheDocument()
  })

  it('renders with height="2.5rem"', () => {
    render(<AmsterdamLogo />)

    const component = screen.getByRole('img')

    expect(component).toHaveAttribute('height', '2.5rem')
  })

  it('does not render aria-hidden by default', () => {
    render(<AmsterdamLogo />)

    const component = screen.getByRole('img')

    expect(component).not.toHaveAttribute('aria-hidden')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<SVGSVGElement>()

    render(<AmsterdamLogo ref={ref} />)

    const component = screen.getByRole('img')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<AmsterdamLogo aria-label="Gemeente Amsterdam" data-test="data-test" id="id" />)

    const component = screen.getByRole('img')

    expect(component).toHaveAttribute('aria-label', 'Gemeente Amsterdam')
    expect(component).toHaveAttribute('data-test', 'data-test')
    expect(component).toHaveAttribute('id', 'id')
  })
})
