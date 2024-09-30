import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createRef } from 'react'
import { PageMenuButton } from './PageMenuButton'

describe('Page Menu Button', () => {
  it('renders an element with role button', () => {
    render(<PageMenuButton>Click me!</PageMenuButton>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<PageMenuButton>Click me!</PageMenuButton>)

    const component = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(component).toHaveClass('ams-page-menu__button')
  })

  it('renders an additional class name', () => {
    render(<PageMenuButton className="extra">Click me!</PageMenuButton>)

    const button = screen.getByRole('button', {
      name: 'Click me!',
    })

    expect(button).toHaveClass('ams-page-menu__button extra')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLButtonElement>()

    const { container } = render(<PageMenuButton ref={ref} />)

    const button = container.querySelector(':only-child')

    expect(ref.current).toBe(button)
  })
})
