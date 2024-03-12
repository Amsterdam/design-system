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
    const breadcrumbItems = [
      { label: 'Item 1', href: '/item-1' },
      { label: 'Item 2', href: '/item-2' },
      { label: 'Item 3', href: '/item-3' },
    ]

    const { container } = render(
      <Breadcrumb>
        {breadcrumbItems.map((item, index) => (
          <Breadcrumb.Item key={index} href={item.href}>
            {item.label}
          </Breadcrumb.Item>
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
        <Breadcrumb.Item href="/item-1">Valid Item</Breadcrumb.Item>
      </Breadcrumb>,
    )

    const breadcrumb = container.querySelector(':only-child')

    expect(ref.current).toBe(breadcrumb)
  })
})
