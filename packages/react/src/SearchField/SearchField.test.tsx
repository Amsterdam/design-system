/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { SearchField } from './SearchField'
import '@testing-library/jest-dom'

describe('Search field', () => {
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
})
