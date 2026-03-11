/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { SearchField } from './SearchField'

describe('SearchFieldButton', () => {
  it('renders a submit button', () => {
    render(<SearchField.Button>Click me!</SearchField.Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders a default label', () => {
    render(<SearchField.Button />)

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('Zoeken')
  })

  it('renders the primary variant of the Button component', () => {
    render(<SearchField.Button>Click me!</SearchField.Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toHaveClass('ams-button ams-button--primary')
  })

  it('renders an extra class name', () => {
    render(<SearchField.Button className="extra">Click me!</SearchField.Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toHaveClass('ams-button extra')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<SearchField.Button ref={ref}>Click me!</SearchField.Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(ref.current).toBe(button)
  })

  it('passes additional props', () => {
    const { container } = render(<SearchField.Button aria-hidden="false" data-test="data-test" id="id" />)
    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
