/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SearchField } from './SearchField'

describe('SearchField', () => {
  it('renders the form', () => {
    render(<SearchField />)

    const component = screen.getByRole('search')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders the design system BEM class name', () => {
    render(<SearchField />)

    const component = screen.getByRole('search')

    expect(component).toHaveClass('ams-search-field')
  })

  it('renders an extra class name', () => {
    render(<SearchField className="extra" />)

    const component = screen.getByRole('search')

    expect(component).toHaveClass('ams-search-field extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFormElement>()

    render(<SearchField ref={ref} />)

    const component = screen.getByRole('search')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<SearchField aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
