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
    render(<SearchField aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('search')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })

  it('disables the input and the button', () => {
    render(
      <SearchField disabled>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>,
    )

    expect(screen.getByRole('searchbox')).toBeDisabled()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('leaves the input and the button enabled by default', () => {
    render(
      <SearchField>
        <SearchField.Input />
        <SearchField.Button />
      </SearchField>,
    )

    expect(screen.getByRole('searchbox')).toBeEnabled()
    expect(screen.getByRole('button')).toBeEnabled()
  })

  it('does not render the disabled attribute on the form', () => {
    render(<SearchField disabled />)

    expect(screen.getByRole('search')).not.toHaveAttribute('disabled')
  })

  it('lets the input and the button override the disabled state', () => {
    render(
      <SearchField disabled>
        <SearchField.Input disabled={false} />
        <SearchField.Button disabled={false} />
      </SearchField>,
    )

    expect(screen.getByRole('searchbox')).toBeEnabled()
    expect(screen.getByRole('button')).toBeEnabled()
  })

  it('lets the input and the button disable themselves', () => {
    render(
      <SearchField>
        <SearchField.Input disabled />
        <SearchField.Button disabled />
      </SearchField>,
    )

    expect(screen.getByRole('searchbox')).toBeDisabled()
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
