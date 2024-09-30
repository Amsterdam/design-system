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

  it('renders a class name for a secondary item', () => {
    render(<PageMenuButton rank="secondary">Button</PageMenuButton>)

    const component = screen.getByRole('listitem')

    expect(component).toHaveClass('ams-page-menu__item--secondary')
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLButtonElement>()

    render(<PageMenuButton ref={ref} />)

    const component = screen.getByRole('button')

    expect(ref.current).toBe(component)
  })
})
