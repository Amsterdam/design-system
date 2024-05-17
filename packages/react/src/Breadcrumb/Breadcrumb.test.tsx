import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Breadcrumb } from './Breadcrumb'
import '@testing-library/jest-dom'

describe('Breadcrumb', () => {
  it('renders', () => {
    render(<Breadcrumb />)
    const component = screen.getByRole('navigation')
    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(<Breadcrumb />)
    const component = screen.getByRole('navigation')
    expect(component).toHaveClass('ams-breadcrumb')
  })

  it('renders an additional class name', () => {
    render(<Breadcrumb className="extra" />)
    const component = screen.getByRole('navigation')
    expect(component).toHaveClass('ams-breadcrumb extra')
  })

  it('renders Breadcrumb component with children', () => {
    const breadcrumbLinks = [
      { label: 'Link 1', href: '/link-1' },
      { label: 'Link 2', href: '/link-2' },
      { label: 'Link 3', href: '/link-3' },
    ]

    const { container } = render(
      <Breadcrumb>
        {breadcrumbLinks.map((link, index) => (
          <Breadcrumb.Link key={index} href={link.href}>
            {link.label}
          </Breadcrumb.Link>
        ))}
      </Breadcrumb>,
    )

    const breadcrumb = screen.getByRole('navigation')
    const breadcrumbs = container.querySelectorAll('.ams-breadcrumb__item')

    expect(breadcrumb).toBeInTheDocument()
    expect(breadcrumbs.length).toBe(3)
  })

  it('is able to pass a React ref', () => {
    const ref = createRef<HTMLElement>()

    const { container } = render(
      <Breadcrumb ref={ref}>
        <Breadcrumb.Link href="/link-1">Valid Link</Breadcrumb.Link>
      </Breadcrumb>,
    )

    const breadcrumb = container.querySelector(':only-child')

    expect(ref.current).toBe(breadcrumb)
  })
})
