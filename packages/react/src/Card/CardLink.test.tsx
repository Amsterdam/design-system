/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { CardLink } from './CardLink'

describe('CardLink', () => {
  it('renders', () => {
    render(<CardLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<CardLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-card__link')
  })

  it('renders an extra class name', () => {
    render(<CardLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-card__link extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<CardLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<CardLink aria-hidden={false} data-test="data-test" href="/" id="id" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
