/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders', () => {
    const { container } = render(<Spinner />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Spinner />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spinner')
  })

  it('renders the medium size by default', () => {
    const { container } = render(<Spinner />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spinner--medium')
  })

  it('renders the small size', () => {
    const { container } = render(<Spinner size="small" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spinner--small')
  })

  it('renders the large size', () => {
    const { container } = render(<Spinner size="large" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spinner--large')
  })

  it('renders an extra class name', () => {
    const { container } = render(<Spinner className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-spinner extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Spinner ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('is hidden from assistive technologies', () => {
    const { container } = render(<Spinner />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'true')
  })
})
