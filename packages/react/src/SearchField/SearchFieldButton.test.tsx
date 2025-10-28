/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRef } from 'react'

import { SearchField } from './SearchField'

describe('Search Field Button', () => {
  it('renders a submit button', () => {
    render(<SearchField.Button>Click me!</SearchField.Button>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
    expect(button).toHaveAttribute('type', 'submit')
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

  it('renders the button with a label', () => {
    render(<SearchField.Button>Zoeken</SearchField.Button>)

    const component = screen.getByRole('button', { name: 'Zoeken' })

    expect(component).toBeInTheDocument()
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLButtonElement>()

    const { container } = render(<SearchField.Button ref={ref}>Click me!</SearchField.Button>)

    const button = container.querySelector(':only-child')

    expect(ref.current).toBe(button)
  })
})
