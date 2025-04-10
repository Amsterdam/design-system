import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { BreadcrumbLink } from './BreadcrumbLink'
import '@testing-library/jest-dom'

describe('Breadcrumb link', () => {
  it('renders', () => {
    render(<BreadcrumbLink href="/" />)

    const component = screen.getByRole('listitem')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<BreadcrumbLink href="/" />)

    const item = screen.getByRole('listitem')

    expect(item).toHaveClass('ams-breadcrumb__item')

    const link = screen.getByRole('link')

    expect(link).toHaveClass('ams-breadcrumb__link')
  })

  it('renders an extra class name', () => {
    render(<BreadcrumbLink className="extra" href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveClass('ams-breadcrumb__link extra')
  })

  it('renders the href attribute', () => {
    render(<BreadcrumbLink href="/" />)

    const component = screen.getByRole('link')

    expect(component).toHaveAttribute('href', '/')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>()

    render(<BreadcrumbLink href="/" ref={ref} />)

    const component = screen.getByRole('link')

    expect(ref.current).toBe(component)
  })
})
