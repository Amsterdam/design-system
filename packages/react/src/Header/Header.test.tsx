import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import '@testing-library/jest-dom'
import { Header } from './Header'

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header />)

    const component = container.querySelector(':only-child')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    const { container } = render(<Header className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header')
  })

  it('renders an additional class name', () => {
    const { container } = render(<Header className="extra" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveClass('ams-header extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>()

    const { container } = render(<Header ref={ref} />)

    const component = container.querySelector(':only-child')

    expect(ref.current).toBe(component)
  })

  it('renders with a logo link', () => {
    render(<Header logoLink="/home" />)

    const logoLink = screen.getByRole('link')

    expect(logoLink).toHaveAttribute('href', '/home')
  })

  it('renders with a logo link title', () => {
    render(<Header logoLinkTitle="Go to homepage" />)

    const logoLinkTitle = screen.getByRole('link', { name: 'Go to homepage' })

    expect(logoLinkTitle).toBeInTheDocument()
  })

  it('renders an application name', () => {
    render(<Header appName="Application name" />)

    const heading = screen.getByRole('heading', {
      name: 'Application name',
      level: 1,
    })

    expect(heading).toBeInTheDocument()
  })
})
